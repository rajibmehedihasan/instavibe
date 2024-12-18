"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Profile({ session }: any) {
    const handleLogout = () => {
        console.log("Logging out...");
        // Add actual logout logic here
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                        <AvatarImage
                            src={session?.user?.image || "/default-avatar.png"}
                            alt="Profile"
                        />
                        <AvatarFallback>
                            {session?.user?.name?.charAt(0).toUpperCase() || "U"}
                        </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{session?.user?.name || "User"}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem>
                    <Link href="/profile" className="w-full">
                        View Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
