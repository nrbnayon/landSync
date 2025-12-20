import { User } from "@/types";

export const usersData: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    image: "/images/avatar.png",
    role: "Admin",
    status: "Active",
    type: "Admin",
    location: "New York, USA",
    date: "2024-01-15",
  },
  {
    id: "2",
    name: "Sarah Smith",
    email: "sarah@example.com",
    role: "User",
    status: "Active",
    type: "User",
    location: "London, UK",
    date: "2024-02-20",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "Guest",
    status: "Inactive",
    type: "Guest",
    location: "Tokyo, Japan",
    date: "2024-03-10",
  },
];

export const userDetailsData = {
  name: "John Doe",
  image: "/images/avatar.png",
  email: "john@example.com",
  location: "New York, USA",
  date: "Jan 15, 2024",
  joined: "Dec 2023",
  earnings: "$12,450",
  earningsTrend: 12.5,
  projectsCount: 15,
  projectsTrend: -2.4,
  projectList: [
    {
      image: "/images/project1.png",
      title: "Clean Water Initiative",
      location: "Kenya",
      families: 120,
      tags: ["Water", "Sustainability"],
    },
    {
      image: "/images/project2.png",
      title: "School Building Project",
      location: "Nepal",
      families: 85,
      tags: ["Education", "Construction"],
    },
  ],
};
