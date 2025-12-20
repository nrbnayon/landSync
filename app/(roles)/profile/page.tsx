import ProfileClient from "@/components/Dashboard/Profile/ProfileClient";
import DashboardHeader from "@/components/Dashboard/Shared/DashboardHeader";

export default function ProfilePage() {
    return (
        <div className="p-4 md:p-8">
            <DashboardHeader
                title="Profile"
                description="View and manage your profile information"
            />
            <ProfileClient />
        </div>
    );
}
