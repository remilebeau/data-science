type Props = {
  simulationOutput: SimulationOutput;
};

export default function SimulationResults({ simulationOutput }: Props) {
  return (
    <section className="mx-auto my-8 max-w-3xl">
      <h2 className="mb-4 text-2xl font-bold">Simulation Results</h2>
      <p>
        Expected Profit:{" "}
        {simulationOutput.expectedProfit.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
      </p>
      <p>
        Volatility:{" "}
        {simulationOutput.volatility.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
      </p>
      <p>Sharpe Ratio: {simulationOutput.sharpeRatio.toFixed(2)}</p>
      <p>
        Worst Likely Case:{" "}
        {simulationOutput.worstLikelyCase.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
      </p>
      <p>
        Best Likely Case:{" "}
        {simulationOutput.bestLikelyCase.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
      </p>
    </section>
  );
}
