type Props = {
  simulationResults: SimulationResults;
};

export default function ProductionResults({ simulationResults }: Props) {
  return (
    <section className="mt-8">
      <h2 className="mb-4 text-2xl font-bold">Simulation Results</h2>
      <p>
        Expected Profit:{" "}
        {simulationResults.expectedProfit.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
      </p>
      <p>
        Volatility:{" "}
        {simulationResults.volatility.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
      </p>
      <p>Sharpe Ratio: {simulationResults.sharpeRatio.toFixed(2)}</p>
      <p>
        Worst Likely Case:{" "}
        {simulationResults.worstLikelyCase.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
      </p>
      <p>
        Best Likely Case:{" "}
        {simulationResults.bestLikelyCase.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
      </p>
    </section>
  );
}
