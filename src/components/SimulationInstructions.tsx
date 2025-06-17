import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function SimulationInstructions() {
  return (
    <section className="mx-auto max-w-3xl space-y-8 px-4 py-6">
      {/* Intro */}
      <h2 className="text-2xl font-semibold">What is this simulation about?</h2>
      <div className="space-y-4">
        <p>
          Imagine you run a business that makes and sells a product. You want to
          figure out how many units to produce to maximize profit, but demand is
          uncertain. This simulation uses a method called{" "}
          <span className="text-primary font-semibold">
            Monte Carlo simulation
          </span>{" "}
          — a way to test different demand scenarios using random sampling.
        </p>
        <p>
          It runs your business virtually many times, each with a different
          demand guess, and helps you understand the range of possible outcomes.
        </p>
      </div>

      {/* How It Works */}
      <h2 className="text-2xl font-semibold">How does it work?</h2>
      <ol className="list-inside list-decimal space-y-4">
        <li>
          <strong>You enter some numbers:</strong>
          <ul className="text-muted-foreground ml-4 list-inside list-disc space-y-1">
            <li>How many products you plan to make</li>
            <li>Cost to make each product</li>
            <li>Selling price per unit</li>
            <li>Salvage value of leftovers</li>
            <li>Fixed costs</li>
            <li>Expected demand (worst, average, best)</li>
            <li>Demand uncertainty (standard deviation)</li>
          </ul>
        </li>
        <li>
          <strong>The simulation runs many “what if” scenarios:</strong> Each
          one randomly selects a demand value based on your inputs.
        </li>
        <li>
          <strong>It calculates profits:</strong> Based on how many units are
          sold, left over, and at what price.
        </li>
        <li>
          <strong>It shows you the results:</strong> Average profit, volatility,
          and risk-adjusted return across all simulations.
        </li>
      </ol>

      {/* Why Useful */}
      <h2 className="text-2xl font-semibold">Why is this useful?</h2>
      <p>
        This simulation helps you make smarter production decisions under
        uncertainty by showing the range of likely profit outcomes — not just
        one guess. It lets you weigh risk vs. reward before committing
        resources.
      </p>

      {/* Inputs Table */}
      <h2 className="text-2xl font-semibold">Explanation of Inputs</h2>
      <p>This simulation expects the following fields:</p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Field</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            ["productionQuantity", "Number of units you plan to produce"],
            ["unitCost", "Cost to manufacture one unit"],
            ["unitPrice", "Selling price per unit"],
            ["salvagePrice", "Recovered value per unsold unit"],
            ["fixedCost", "Fixed costs (e.g., rent, salaries)"],
            [
              "worstLikelyDemand",
              "Estimated 5th percentile demand (lower bound)",
            ],
            ["expectedDemand", "Mean or expected average demand"],
            [
              "bestLikelyDemand",
              "Estimated 95th percentile demand (upper bound)",
            ],
            [
              "demandStandardDeviation",
              "Standard deviation of demand uncertainty",
            ],
          ].map(([field, desc]) => (
            <TableRow key={field}>
              <TableCell>
                <code className="text-primary font-semibold">{field}</code>
              </TableCell>
              <TableCell>{desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="italic">
        Note:{" "}
        <code>worstLikelyDemand &lt; expectedDemand &lt; bestLikelyDemand</code>
        , and <code>demandStandardDeviation</code> must be positive.
      </p>

      {/* Outputs Table */}
      <h2 className="text-2xl font-semibold">Explanation of Outputs</h2>
      <p>The API returns the following fields after simulation:</p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Field</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            ["expectedProfit", "Average profit across 1,000 simulations"],
            ["volatility", "Standard deviation of profit (risk level)"],
            ["sharpeRatio", "Risk-adjusted profit (higher is better)"],
            ["worstLikelyCase", "5th percentile profit (pessimistic scenario)"],
            ["bestLikelyCase", "95th percentile profit (optimistic scenario)"],
          ].map(([field, desc]) => (
            <TableRow key={field}>
              <TableCell>
                <code className="font-semibold">{field}</code>
              </TableCell>
              <TableCell>{desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <p>
        These outputs help you evaluate trade-offs between expected return and
        risk, so you can make data-informed production decisions.
      </p>
    </section>
  );
}
