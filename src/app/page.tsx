'use client'

import Link, { useLinkStatus } from "next/link";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function Home() {
    const { pending } = useLinkStatus();

    useEffect(() => {
        if (pending) {
            toast.loading('منتظر بمانید...', { id: 'nav-load' });
        } else {
            toast.dismiss('nav-load');
        }
    }, [pending]);

    return (
        <div className="flex flex-col items-center justify-center h-dvh w-full">
            <h1 className="text-5xl">به این صفحه خوش آمدید.</h1>
            <br />
            <div className="flex justify-center items-center gap-4">
                <Link href="/login" prefetch={false} className="border p-3 bg-black text-white rounded-xl active:scale-95">
                    رفتن به صفحه ورود
                </Link>
                <Link href="/dashboard" prefetch={false} className="border p-3 bg-black text-white rounded-xl active:scale-95">
                    رفتن به صفحه داشبورد
                </Link>
            </div>
        </div>
    );
}
