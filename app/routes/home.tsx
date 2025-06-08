import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SKM Learn – Free Books, Quizzes & Practice Tests for All Ages" },
    {
      name: "description",
      content:
        "Explore free educational books, fun quizzes, and practice tests on SKM Learn. Start learning now with engaging and interactive content for all levels.",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
