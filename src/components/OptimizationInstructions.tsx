export default function OptimizationInstructions() {
  return (
    <section className="mx-auto max-w-3xl space-y-8 px-4 py-6">
      <h2 className="text-2xl font-semibold">Staffing Optimization</h2>
      <div className="space-y-4">
        <p>
          This tool calculates the fewest employees needed to meet weekly
          staffing needs using fixed 5-day rotations.
        </p>
        <p>
          Enter daily staffing requirements, and the optimizer returns the
          minimum number of workers required.
        </p>
      </div>
    </section>
  );
}
