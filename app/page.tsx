import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function HomePage() {
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Left Side: Info */}
            <div className="flex flex-col justify-center items-start px-8 md:px-16 w-full md:w-1/2">
                <header className="text-3xl font-bold mb-8">Instavibe</header>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    Share Your Moments with the World
                </h1>
                <p className="text-lg text-gray-500 mb-6">
                    Connect, share, and explore content from people you care about. Start your
                    journey today.
                </p>
                <div className="flex gap-4">
                    <Link
                        className={buttonVariants({
                            variant: "outline",
                            size: "lg",
                        })}
                        href="/login"
                    >
                        Login
                    </Link>
                    <Link
                        className={buttonVariants({
                            variant: "default",
                            size: "lg",
                        })}
                        href="/register"
                    >
                        Register
                    </Link>
                </div>
            </div>

            {/* Right Side: Image */}
            <div className="hidden md:block w-1/2">
                <img
                    src="./images/pexels-pixabay-147411.jpg"
                    alt="Share moments"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}
