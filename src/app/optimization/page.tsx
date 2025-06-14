import OptimizationIntroduction from "@/components/OptimizationIntroduction";
import OptimizationForm from "@/components/OptimizationForm";
export default function OptimizationPage() {
  return (
    <main className="mx-auto mt-12 flex max-w-4xl flex-col gap-8 p-4">
      <OptimizationIntroduction />
      <OptimizationForm />
    </main>
  );
}
