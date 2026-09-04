import { useRouter } from "next/navigation";

export const useLogout = () => {
  const router = useRouter();

  const logout = () => {
    // Clear cookies
    document.cookie =
      "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "userRole=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "userEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    console.log("User logged out successfully");

    // Redirect to the public landing page
    router.push("/");
  };

  return { logout };
};
