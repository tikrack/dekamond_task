import React, { type FormEvent } from "react";
import { z, type ZodRawShape } from "zod";

interface FormProps {
    children: React.ReactNode;
    onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
    className?: string;
    validate: object;
    setError: React.Dispatch<React.SetStateAction<any>>;
}

const Form: React.FC<FormProps> = ({
                                       children,
                                       onSubmit,
                                       className = "w-full",
                                       validate,
                                       setError,
                                   }) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const formValues = Object.fromEntries(formData.entries());
        const dataSchema = z.object(validate as ZodRawShape);
        const validateStatus = dataSchema.safeParse(formValues);

        if (validateStatus.success) {
            setError([]);
            if (onSubmit) {
                onSubmit?.(formValues);
            }
        } else {
            const newErrors = validateStatus.error.issues.map((item) => ({
                name: item.path[0],
                error: item.message,
            }));

            setError(newErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={className}>
            {children}
        </form>
    );
};

export default Form;