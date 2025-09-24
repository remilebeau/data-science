import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-center text-3xl font-bold">Select a Model</h1>
      <Button asChild className="mx-auto w-1/4">
        <Link href="/optimization">Optimization</Link>
      </Button>
      <Button asChild className="mx-auto w-1/4">
        <Link href="/simulation">Simulation</Link>
      </Button>
    </section>
  );
}
