export default function SimulationIntroduction() {
  return (
    <section className="mx-auto max-w-3xl space-y-8 px-4 py-6">
      {/* What is this simulation about? */}
      <h2 className="text-2xl font-semibold">What is this simulation about?</h2>

      <div className="space-y-4">
        <p>
          Imagine you run a business that makes and sells a product. You want to
          figure out how many units to produce to make the most profit. But the
          problem is, you don&apos;t know exactly how many customers will want
          your product — demand can go up and down.
        </p>
        <p>
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

      {/* How does it work? */}
      <h2 className="text-2xl font-semibold">How does it work?</h2>

      <ol className="list-inside list-decimal space-y-4">
        <li>
          <strong className="font-semibold">You enter some numbers:</strong>
          <ul className="text-muted-foreground ml-5 list-inside list-disc space-y-1">
            <li>How many products you plan to make.</li>
            <li>How much it costs to make each product.</li>
            <li>How much you can sell each product for.</li>
            <li>
              How much you can sell leftover products for (salvage price).
            </li>
            <li>
              Fixed costs that don&apos;t change no matter how much you produce.
            </li>
            <li>Estimates of demand (worst case, expected, and best case).</li>
            <li>How much demand can vary (called “standard deviation”).</li>
          </ul>
        </li>
        <li>
          <strong className="font-semibold">
            The simulation runs many “what if” scenarios:
          </strong>{" "}
          Instead of guessing one fixed demand, it randomly picks demand numbers
          around your expected demand, sometimes lower and sometimes higher, but
          mostly near your expected value.
        </li>
        <li>
          <strong className="font-semibold">
            It calculates profits for each scenario:
          </strong>{" "}
          For each guess about demand, it works out how many products you sell,
          what&apos;s left over, and how much money you make or lose.
        </li>
        <li>
          <strong className="font-semibold">It shows you the results:</strong>{" "}
          After running many scenarios, it tells you what kind of profits you
          might expect — including best case, worst case, and average outcomes.
        </li>
      </ol>

      {/* Why is this useful? */}
      <h2 className="text-2xl font-semibold">Why is this useful?</h2>

      <p>
        Because demand is unpredictable, this simulation helps you make smarter
        decisions by showing the range of possible outcomes instead of just one
        guess. It helps you see the risks and rewards of your production plan
        before you spend money.
      </p>

      {/* Explanation of Inputs */}
      <h2 className="text-2xl font-semibold">Explanation of Inputs</h2>

      <p>
        This Monte Carlo production simulation expects the following inputs:
      </p>
      <ul className="text-muted-foreground ml-5 list-inside list-disc space-y-1">
        <li>
          <strong className="text-primary font-semibold">
            productionQuantity
          </strong>{" "}
          (float): The number of units you plan to produce before knowing actual
          demand.
        </li>
        <li>
          <strong className="text-primary font-semibold">unitCost</strong>{" "}
          (float): Cost to manufacture one unit.
        </li>
        <li>
          <strong className="text-primary font-semibold">unitPrice</strong>{" "}
          (float): Sale price for each unit sold.
        </li>
        <li>
          <strong className="text-primary font-semibold">salvagePrice</strong>{" "}
          (float): Value recovered per unsold unit, e.g., through discounting or
          recycling.
        </li>
        <li>
          <strong className="text-primary font-semibold">fixedCost</strong>{" "}
          (float): Total fixed costs incurred regardless of production quantity
          (e.g., rent, salaries).
        </li>
        <li>
          <strong className="text-primary font-semibold">
            worstLikelyDemand
          </strong>{" "}
          (float): Estimated 5th percentile demand — the lower bound for
          realistic demand scenarios.
        </li>
        <li>
          <strong className="text-primary font-semibold">expectedDemand</strong>{" "}
          (float): The mean or expected average demand.
        </li>
        <li>
          <strong className="text-primary font-semibold">
            bestLikelyDemand
          </strong>{" "}
          (float): Estimated 95th percentile demand — the upper bound for
          realistic demand scenarios.
        </li>
        <li>
          <strong className="text-primary font-semibold">
            demandStandardDeviation
          </strong>{" "}
          (float): The standard deviation of demand, representing demand
          uncertainty and variability.
        </li>
      </ul>

      <p className="italic">
        Note: The input values must satisfy{" "}
        <code>worstLikelyDemand &lt; expectedDemand &lt; bestLikelyDemand</code>
        , and <code>demandStandardDeviation</code> must be positive.
      </p>

      {/* Explanation of Outputs */}
      <h2 className="text-2xl font-semibold">Explanation of Outputs</h2>

      <div className="flex flex-col gap-4">
        <p>
          After running the Monte Carlo production simulation, the API returns
          key metrics that help you understand the profitability and risk of
          your production decision under uncertain demand:
        </p>
        <ul className="flex flex-col gap-4">
          <li>
            <strong>expectedProfit</strong>: The average profit across 1,000
            simulated demand scenarios. This represents the expected return of
            your production plan.
          </li>
          <li>
            <strong>volatility</strong>: The standard deviation of the simulated
            profits, measuring the risk or variability in profit outcomes.
          </li>
          <li>
            <strong>sharpeRatio</strong>: The ratio of expected profit to
            volatility, indicating the risk-adjusted profitability of the
            production decision. A higher Sharpe ratio means better return per
            unit of risk.
          </li>
          <li>
            <strong>worstLikelyCase</strong>: The 5th percentile profit, showing
            a pessimistic scenario where only 5% of outcomes are worse. Useful
            for risk assessment.
          </li>
          <li>
            <strong>bestLikelyCase</strong>: The 95th percentile profit, showing
            an optimistic scenario where 95% of outcomes are worse. Helps gauge
            potential upside.
          </li>
        </ul>
        <p>
          These outputs allow you to make informed production planning decisions
          by balancing expected profit against the uncertainty of demand.
        </p>
      </div>
    </section>
  );
}
