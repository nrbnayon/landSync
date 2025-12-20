export type UserType = "Admin" | "User" | "Guest";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  type: UserType;
  image?: string;
  location: string;
  date: string;
}
