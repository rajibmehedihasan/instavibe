import Link from "next/link";
import Profile from "./Profile";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Header() {
    const session = await auth();

    if (!session?.user) {
        redirect("/login");
    }

    return (
        <header className="w-full flex justify-between items-center bg-white px-6 py-4 shadow-md">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-gray-800">
                Instavibe
            </Link>

            {/* Profile */}
            <Profile session={session} />
        </header>
    );
}
