"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SignUp() {
    const router = useRouter();

    const handleRegister = (e: any) => {
        e.preventDefault();
        router.push("/dashboard");
    };

    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold text-start">Create Account</h1>
            <p className="text-start text-gray-500 text-sm">
                Join SwarNika & unlock exclusive jewellery privileges
            </p>

            <form onSubmit={handleRegister} className="space-y-4">

                <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input type="text" placeholder="Asmita Patil" required className="h-11" />
                </div>

                <div className="space-y-2">
                    <Label>Email</Label>
                    <Input type="email" placeholder="you@example.com" required className="h-11" />
                </div>

                <div className="space-y-2">
                    <Label>Password</Label>
                    <Input type="password" placeholder="••••••••" required className="h-11" />
                </div>

                <Button type="submit" className="w-full h-11 rounded-md">Sign Up</Button>
            </form>

            <p className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-primary underline">Login</Link>
            </p>
        </div>
    );
}
