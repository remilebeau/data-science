export default function SimulationResultsExplanation() {
  return (
    <>
      <h2 className="text-primary-foreground text-2xl font-semibold">
        Explanation of Results
      </h2>

      <div className="flex flex-col gap-4">
        <p>
          After running the Monte Carlo production simulation, the API returns
          key metrics that help you understand the profitability and risk of
          your production decision under uncertain demand:
        </p>
        <ul>
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
    </>
  );
}
