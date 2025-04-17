// This is a mock authentication service
// In a real application, this would connect to a backend API

import type { User } from "@/lib/types";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock user database
const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    password: "password123", // In a real app, this would be hashed
    createdAt: "2023-03-15",
  },
];

// Mock current user state
let currentUser: User | null = null;

export async function loginUser(
  email: string,
  password: string
): Promise<User> {
  // Simulate network delay
  await delay(1000);

  // Find user by email
  const user = users.find((u) => u.email === email);

  // Check if user exists and password matches
  if (!user || user.password !== password) {
    throw new Error("Invalid email or password");
  }

  // Set current user
  currentUser = { ...user };

  // Store auth token in localStorage (in a real app, this would be a JWT)
  if (typeof window !== "undefined") {
    localStorage.setItem("auth_token", `mock_token_${user.id}`);
  }

  return { ...user, password: undefined } as User;
}

export async function registerUser(
  name: string,
  email: string,
  password: string
): Promise<User> {
  // Simulate network delay
  await delay(1500);

  // Check if email already exists
  if (users.some((u) => u.email === email)) {
    throw new Error("Email already in use");
  }

  // Create new user
  const newUser: User = {
    id: `${users.length + 1}`,
    name,
    email,
    password, // In a real app, this would be hashed
    createdAt: new Date().toISOString().split("T")[0],
  };

  // Add to mock database
  users.push(newUser);

  return { ...newUser, password: undefined } as User;
}

export async function logoutUser(): Promise<void> {
  // Simulate network delay
  await delay(500);

  // Clear current user
  currentUser = null;

  // Remove auth token from localStorage
  if (typeof window !== "undefined") {
    localStorage.removeItem("auth_token");
  }
}

export async function getCurrentUser(): Promise<User | null> {
  // Simulate network delay
  await delay(500);

  // In a real app, this would verify the token with the backend
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("auth_token");
    if (!token) return null;
  }

  return currentUser;
}

export async function isAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser();
  return !!user;
}
