import API from "~/lib/axios";
import type { Route } from "../+types/root";
import Dashboard from "~/views/Dashboard/dashboard";
import GlobalLoader from "~/components/shared/GlobalLoader";

export async function clientLoader() {
  const books = await API.get("/books/");
  return books;
}

export function HydrateFallback() {
  return <GlobalLoader />;
}

export default function DashboardPage({ loaderData }: Route.ComponentProps) {
  console.log("boooks", loaderData);

  return <Dashboard />;
}
