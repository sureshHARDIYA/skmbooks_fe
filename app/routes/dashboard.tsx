import Dashboard from "~/views/Dashboard/dashboard";
import type { Route } from "../+types/root";
import API from "~/lib/axios";

export async function clientLoader() {
  const books = await API.get("/books/");
  return books;
}

export default function DashboardPage({ loaderData }: Route.ComponentProps) {
  console.log("boooks", loaderData);

  return <Dashboard />;
}
