const DATA_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api/simulations/production"
    : "https://simulation-api-rsaw.onrender.com/api/simulations/production";

export default async function simulateProduction(
  formData: SimulationInput,
): Promise<SimulationOutput | null> {
  const res = await fetch(DATA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return data;
}
