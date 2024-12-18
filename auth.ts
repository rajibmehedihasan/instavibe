import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";

export const { auth, handlers, signIn, signOut } = NextAuth({
    providers: [
        Google({
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
        Facebook,
    ],
    callbacks: {
        // async signIn({ account, profile }) {
        //     // if (account.provider === "google") {
        //     //     return profile.email_verified && profile.email.endsWith("@example.com");
        //     // }
        //     // return true; // Do different verification for other providers that don't have `email_verified`
        // },
    },
});
