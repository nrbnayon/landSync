import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
// import { useLogout } from "@/hooks/useLogout";
// import { useState } from "react";

export default function DashboardHeader({
    title,
    description,
}: {
    title: string;
    description?: string;
}) {
    // const { logout } = useLogout();
    // const [showLogoutModal, setShowLogoutModal] = useState(false);
    return (
        <div className="border-b border-border flex justify-between items-center">
            <div className="flex flex-col items-start justify-between p-4 md:px-8">
                <h1 className="text-2xl font-bold text-foreground">{title}</h1>
                {description && <p className="text-secondary">{description}</p>}
            </div>
            <div>
                <div className="flex items-center gap-3 px-3">
                  <Link
                    href="/profile" 
                    className="flex items-center gap-3 flex-1 min-w-0 hover:opacity-80 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                     <Image src="/images/avatar.png" alt="User" width={40} height={40} />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-medium truncate text-foreground">
                        Nayon
                      </p>
                      <p className="text-sm text-secondary truncate">
                        Super Admin
                      </p>
                    </div>
                  </Link>
                </div>
            </div>
            <div className="flex items-center gap-4 px-4 h-full">
                {/* Language Switcher */}
                <div className="hidden md:flex items-center justify-between px-3 py-2 border rounded-md min-w-[120px] cursor-pointer hover:bg-gray-50 bg-white">
                    <div className="flex items-center gap-2">
                         <span className="text-sm">English</span>
                    </div>
                     <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>

                {/* Logout Button */}
                {/* <button
                    onClick={() => setShowLogoutModal(true)}
                    className="hidden md:flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors"
                >
                    <LogOut className="h-4 w-4" />
                    <span className="text-sm font-medium">Log Out</span>
                </button> */}


            </div>

            {/* <LogoutModal
                isOpen={showLogoutModal}
                onClose={() => setShowLogoutModal(false)}
                onConfirm={logout}
            /> */}
        </div>
    )
}
