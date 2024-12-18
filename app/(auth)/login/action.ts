"use server";

import { signIn } from "@/auth";

export const signInAction = async (provider: string) => {
    console.log(provider);
    await signIn(provider);
};
