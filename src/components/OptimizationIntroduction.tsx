export default function OptimizationIntroduction() {
  return (
    <section className="mx-auto max-w-3xl space-y-8 px-4 py-6">
      <h2 className="text-2xl font-semibold">
        How to Use the Staffing Optimizer
      </h2>
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

      <h2 className="text-2xl font-semibold">What You Need to Enter</h2>
      <p>Input the required number of workers for each day:</p>
      <ul className="text-muted-foreground ml-5 list-inside list-disc space-y-1">
        <li>
          <strong>Monday</strong> (<code>monReq</code>)
        </li>
        <li>
          <strong>Tuesday</strong> (<code>tueReq</code>)
        </li>
        <li>
          <strong>Wednesday</strong> (<code>wedReq</code>)
        </li>
        <li>
          <strong>Thursday</strong> (<code>thuReq</code>)
        </li>
        <li>
          <strong>Friday</strong> (<code>friReq</code>)
        </li>
        <li>
          <strong>Saturday</strong> (<code>satReq</code>)
        </li>
        <li>
          <strong>Sunday</strong> (<code>sunReq</code>)
        </li>
      </ul>
      <p>
        These values are sent to the API, which returns the optimal staffing
        plan.
      </p>

      <h2 className="text-2xl font-semibold">Shift Variables (x1 to x7)</h2>
      <p>Each variable represents a 5-day shift rotation:</p>
      <ul className="text-muted-foreground ml-5 list-inside list-disc space-y-1">
        <li>
          <code>x1</code>: Mon&ndash;Fri
        </li>
        <li>
          <code>x2</code>: Tue&ndash;Sat
        </li>
        <li>
          <code>x3</code>: Wed&ndash;Sun
        </li>
        <li>
          <code>x4</code>: Thu&ndash;Mon
        </li>
        <li>
          <code>x5</code>: Fri&ndash;Tue
        </li>
        <li>
          <code>x6</code>: Sat&ndash;Wed
        </li>
        <li>
          <code>x7</code>: Sun&ndash;Thu
        </li>
      </ul>
      <p>
        The API tells you how many workers to assign to each shift to meet
        demand with the fewest total employees.
      </p>

      <h2 className="text-2xl font-semibold">What You’ll Get Back</h2>
      <p>The API response includes:</p>
      <ul className="text-muted-foreground ml-5 list-inside list-disc space-y-1">
        <li>
          <code>minStaff</code>: Minimum total workers
        </li>
        <li>
          <code>x1</code>&ndash;<code>x7</code>: Workers per shift
        </li>
        <li>
          <code>monAva</code>&ndash;<code>sunAva</code>: Daily worker
          availability
        </li>
        <li>
          <code>monSlack</code>&ndash;<code>sunSlack</code>: Daily excess
          workers
        </li>
        <li>
          <code>totalSlack</code>: Total weekly excess
        </li>
      </ul>
      <p className="italic">
        If a solution can&apos;t meet your input demands, the API returns an
        error.
      </p>
    </section>
  );
}
