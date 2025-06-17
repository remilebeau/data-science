const DATA_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api/optimizations/staffing"
    : "https://simulation-api-rsaw.onrender.com/api/optimizations/staffing";

export default async function optimizeStaff(
  formData: OptimizationInput,
): Promise<OptimizationOutput | null> {
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
