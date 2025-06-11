export default function MonteCarloExplanation() {
  return (
    <section className="mx-auto max-w-3xl space-y-8 px-4 py-6">
      <header>
        <h2 className="text-primary-foreground text-2xl font-semibold">
          What is this simulation about?
        </h2>
      </header>

      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Imagine you run a business that makes and sells a product. You want to
          figure out how many units to produce to make the most profit. But the
          problem is, you don&apos;t know exactly how many customers will want
          your product — demand can go up and down.
        </p>
        <p className="text-base leading-relaxed">
          This simulation helps you explore what might happen when demand is
          uncertain. It uses a method called{" "}
          <strong className="text-primary font-semibold">
            Monte Carlo simulation
          </strong>
          , which is like running the business over and over again in a
          computer, each time with a slightly different guess about how many
          customers will buy your product.
        </p>
      </div>

      <header>
        <h2 className="text-primary-foreground text-2xl font-semibold">
          How does it work?
        </h2>
      </header>

      <div>
        <ol className="list-inside list-decimal space-y-4 text-base leading-relaxed">
          <li>
            <strong className="font-semibold">You enter some numbers:</strong>
            <ul className="text-muted-foreground mt-1 ml-5 list-inside list-disc space-y-1">
              <li>How many products you plan to make.</li>
              <li>How much it costs to make each product.</li>
              <li>How much you can sell each product for.</li>
              <li>
                How much you can sell leftover products for (salvage price).
              </li>
              <li>
                Fixed costs that don&apos;t change no matter how much you
                produce.
              </li>
              <li>
                Estimates of demand (worst case, expected, and best case).
              </li>
              <li>How much demand can vary (called “standard deviation”).</li>
            </ul>
          </li>
          <li>
            <strong className="font-semibold">
              The simulation runs many “what if” scenarios:
            </strong>{" "}
            Instead of guessing one fixed demand, it randomly picks demand
            numbers around your expected demand, sometimes lower and sometimes
            higher, but mostly near your expected value.
          </li>
          <li>
            <strong className="font-semibold">
              It calculates profits for each scenario:
            </strong>{" "}
            For each guess about demand, it works out how many products you
            sell, what&apos;s left over, and how much money you make or lose.
          </li>
          <li>
            <strong className="font-semibold">It shows you the results:</strong>{" "}
            After running many scenarios, it tells you what kind of profits you
            might expect — including best case, worst case, and average
            outcomes.
          </li>
        </ol>
      </div>

      <header>
        <h2 className="text-primary-foreground text-2xl font-semibold">
          Why is this useful?
        </h2>
      </header>

      <div>
        <p className="text-base leading-relaxed">
          Because demand is unpredictable, this simulation helps you make
          smarter decisions by showing the range of possible outcomes instead of
          just one guess. It helps you see the risks and rewards of your
          production plan before you spend money.
        </p>
      </div>
    </section>
  );
}
