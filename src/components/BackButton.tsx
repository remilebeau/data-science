import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BackButton() {
  return (
    <Button variant="secondary" asChild className="mx-auto w-1/4">
      <Link href="/">Go Back</Link>
    </Button>
  );
}
