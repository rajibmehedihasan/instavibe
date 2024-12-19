"use server";

import { revalidatePath } from "next/cache";
import { AuthError } from "next-auth";
import { signIn, signOut } from "@/auth";

export const login = async (provider: string) => {
    await signIn(provider, { callbackUrl: "/" });
    revalidatePath("/");
};

export const logout = async () => {
    await signOut({ redirectTo: "/" });
    revalidatePath("/");
};

export const loginWithCredentials = async (email: string, password: string) => {
    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: "/",
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials!" };
                default:
                    return { error: "An error occurred!" };
            }
        }

        throw error;
    }

    // Handle login with email and password
    revalidatePath("/");
};
