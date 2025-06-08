import type { Route } from "./+types/home";
import { Login } from "../login/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login – SKM Books" },
    {
      name: "description",
      content:
        "Sign in to SKM Books to access your dashboard, track quiz progress, and continue reading your favorite books. Enjoy a personalized learning experience.",
    },
  ];
}

export default function Home() {
  return <Login />;
}
