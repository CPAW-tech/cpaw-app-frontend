import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "cpaw.tech" },
    { name: "description", content: "Make a difference!" },
  ];
}

export default function Home() {
  return <></>;
}
