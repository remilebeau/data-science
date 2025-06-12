import ProductionExplanation from "@/components/ProductionExplanation";
import ProductionForm from "@/components/ProductionForm";

export default function Home() {
  return (
    <main className="mx-auto mt-12 flex max-w-4xl flex-col gap-8 p-4">
      <ProductionExplanation />
      <ProductionForm />
    </main>
  );
}
