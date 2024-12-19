import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";
import { hashPassword } from "@/utils/helper";

export const { auth, handlers, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },

            authorize: async (credentials) => {
                if (!credentials || !credentials.email || !credentials.password) {
                    return null;
                }

                const email = credentials.email as string;
                const hash = hashPassword(credentials.password);

                let user = await prisma.user.findUnique({
                    where: {
                        email,
                    },
                });

                if (!user) {
                    user = await prisma.user.create({
                        data: {
                            email,
                            hashedPassword: hash,
                        },
                    });
                } else {
                    const isMatch = bcrypt.compareSync(
                        credentials.password as string,
                        user.hashedPassword
                    );
                    if (!isMatch) {
                        throw new Error("Incorrect password.");
                    }
                }

                return user;
            },
        }),
        Google({
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
    ],
    callbacks: {},
});
