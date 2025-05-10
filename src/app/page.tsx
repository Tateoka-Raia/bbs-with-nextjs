import BBSCardList from "./components/layouts/BBSCardList";
import prisma from "@/lib/prismaClient";

export default async function Home() {
  const response = await fetch("http:localhost:3000/api/post", {
    next: { revalidate: 3600 },
  });

  return (
    <main>
      <BBSCardList />
    </main>
  );
}
