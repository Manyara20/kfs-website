// src/app/dashboard/page.jsx
import { auth } from "../lib/auth";

export default async function DashboardHome() {
  const session = await auth();
  if (!session) return null;

  return (
    <div class="text-black">
      <h1 className="text-3xl font-bold">Welcome to the Admin Dashboard</h1>
      <p>Select an option from the sidebar to manage content.</p>
    </div>
  );
}