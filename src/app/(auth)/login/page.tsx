"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const handleLogin = (e: any) => {
        e.preventDefault();
        router.push("/dashboard");
    };

    return (
        <form onSubmit={handleLogin} className="space-y-4">
            <h1 className="text-3xl font-bold text-start">Welcome to SwarNika!</h1>
            <p className="text-start text-gray-500 text-sm">
                Login/Signup to unlock exclusive jewellery privileges & rewards
            </p>

            <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" required placeholder="you@example.com" className="h-11" />
            </div>

            <div className="space-y-2">
                <Label>Password</Label>
                <Input type="password" required placeholder="••••••••" className="h-11" />
            </div>

            <Button type="submit" className="w-full h-11">Log In</Button>

            <p className="text-center text-sm mt-3">
                New user? <Link href="/sign-up" className="text-primary underline">Create account</Link>
            </p>
        </form>
    );
}
