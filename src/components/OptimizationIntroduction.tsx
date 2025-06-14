export default function OptimizationIntroduction() {
  return (
    <section className="mx-auto max-w-3xl space-y-8 px-4 py-6">
      <h2 className="text-primary-foreground text-2xl font-semibold">
        How to Use the Staffing Optimizer
      </h2>

      <div className="space-y-4">
        <p>
          This tool helps you figure out the fewest number of employees needed
          to cover all required shifts for the week. It assigns workers to fixed
          5-day rotations and ensures your daily staffing needs are met.
        </p>
        <p>
          Just enter how many workers you need for each day of the week, and the
          optimizer will calculate the minimum number of employees required.
        </p>
      </div>

      <h2 className="text-primary-foreground text-2xl font-semibold">
        What You Need to Enter
      </h2>

      <p>For each day of the week, enter the number of workers you need:</p>

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
        The form sends these values to the API, which returns the optimal
        staffing plan.
      </p>

      <h2 className="text-primary-foreground text-2xl font-semibold">
        Understanding the Shift Variables (x1 to x7)
      </h2>

      <p>
        The optimizer assigns workers to fixed 5-day shifts that rotate through
        the week. Each shift is represented by a variable <code>x1</code>{" "}
        through <code>x7</code>:
      </p>

      <ul className="text-muted-foreground ml-5 list-inside list-disc space-y-1">
        <li>
          <code>x1</code>: Works Monday through Friday
        </li>
        <li>
          <code>x2</code>: Works Tuesday through Saturday
        </li>
        <li>
          <code>x3</code>: Works Wednesday through Sunday
        </li>
        <li>
          <code>x4</code>: Works Thursday through Monday
        </li>
        <li>
          <code>x5</code>: Works Friday through Tuesday
        </li>
        <li>
          <code>x6</code>: Works Saturday through Wednesday
        </li>
        <li>
          <code>x7</code>: Works Sunday through Thursday
        </li>
      </ul>

      <p>
        The API will tell you how many workers should be assigned to each of
        these rotations to meet your demand with the fewest total people.
      </p>

      <h2 className="text-primary-foreground text-2xl font-semibold">
        What You'll Get Back
      </h2>

      <p>The response will include:</p>

      <ul className="text-muted-foreground ml-5 list-inside list-disc space-y-1">
        <li>
          <code>minStaff</code>: The smallest number of total workers needed
        </li>
        <li>
          <code>x1</code> to <code>x7</code>: How many workers to assign to each
          5-day shift
        </li>
        <li>
          <code>monAva</code> to <code>sunAva</code>: How many workers are
          available each day
        </li>
        <li>
          <code>monSlack</code> to <code>sunSlack</code>: Extra workers per day
          (if any)
        </li>
        <li>
          <code>totalSlack</code>: Total number of unused workers across the
          week
        </li>
      </ul>

      <p className="italic">
        If your input makes it impossible to meet the demand, the API will
        return an error letting you know that no feasible solution was found.
      </p>
    </section>
  );
}
