"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { signInAction } from "./action";

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginPage() {
    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: z.infer<typeof loginSchema>) => {
        console.log("Login data", data);
        // Handle login logic
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md">
                {/* Header */}
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Instavibe</h1>

                {/* Form */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        {/* Email Field */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Password Field */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="Enter your password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit Button */}
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </form>
                </Form>

                {/* OAuth Buttons */}
                <div className="flex gap-5 mt-5">
                    <Button
                        className="w-1/2"
                        variant="outline"
                        onClick={() => signInAction("google")}
                    >
                        <FcGoogle /> {/* Google icon */}
                        <span>Login with Google</span>
                    </Button>

                    <Button variant="outline" onClick={() => signInAction("facebook")}>
                        <FaFacebook /> {/* Facebook icon */}
                        <span>Login with Facebook</span>
                    </Button>
                </div>

                {/* Extra Options */}
                <div className="mt-4 text-center text-sm text-gray-600">
                    <p>
                        Don't have an account?{" "}
                        <Link
                            href="/register"
                            className="font-semibold text-blue-500 hover:underline"
                        >
                            Register
                        </Link>
                    </p>
                    <p className="mt-1">
                        <Link
                            href="/forgot-password"
                            className="font-semibold text-blue-500 hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
