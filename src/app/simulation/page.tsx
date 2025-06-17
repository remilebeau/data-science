import SimulationInstructions from "@/components/SimulationInstructions";
import SimulationForm from "@/components/SimulationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simulation | remilebeau",
  description: "Simulation model developed by remilebeau",
};

export default function SimulationPage() {
  return (
    <main className="mx-auto mt-12 flex max-w-4xl flex-col gap-8 p-4">
      <SimulationInstructions />
      <SimulationForm />
    </main>
  );
}
