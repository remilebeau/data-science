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
      <h2 className="text-2xl font-semibold">Production Planning Simulation</h2>
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
            ["worstLikelyDemand", "The minimum likely demand"],
            ["expectedDemand", "Average or expected demand"],
            ["bestLikelyDemand", "The maximum likely demand"],
            [
              "demandStandardDeviation",
              "Standard deviation of demand, often a % of expected demand",
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
            [
              "sharpeRatio",
              "The ratio of expected return to risk. Higher is better.",
            ],
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
    </section>
  );
}
