import OptimizationInstructions from "@/components/OptimizationInstructions";
import OptimizationForm from "@/components/OptimizationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Optimization | remilebeau",
  description: "Optimization model developed by remilebeau",
};
export default function OptimizationPage() {
  return (
    <main className="mx-auto mt-12 flex max-w-4xl flex-col gap-8 p-4">
      <OptimizationInstructions />
      <OptimizationForm />
    </main>
  );
}
