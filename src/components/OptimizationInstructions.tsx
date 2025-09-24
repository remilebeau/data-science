export default function OptimizationInstructions() {
  return (
    <section className="mx-auto flex flex-col gap-8">
      <h2 className="text-center text-2xl font-semibold">
        Staffing Optimization
      </h2>
      <div className="flex flex-col gap-4">
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
