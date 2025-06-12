const DATA_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api/simulations/production"
    : "https://simulation-api-rsaw.onrender.com/api/simulations/production";

export default async function simulateProduction(
  formData: SimulationFormValues,
): Promise<SimulationResults> {
  const res = await fetch(DATA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}
