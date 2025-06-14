import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto mt-12 flex max-w-4xl flex-col gap-8 p-4 text-center">
      <h1>Select a model</h1>
      <Button asChild>
        <Link href="/optimization">Optimization</Link>
      </Button>
      <Button asChild>
        <Link href="/simulation">Simulation</Link>
      </Button>
    </main>
  );
}
