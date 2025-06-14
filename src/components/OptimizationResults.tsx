type Props = {
  results: OptimizationOutput;
};

export default function OptimizationResults({ results }: Props) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold">Optimization Results</h2>
      <p>X1: {results.x1}</p>
      <p>X2: {results.x2}</p>
      <p>X3: {results.x3}</p>
      <p>X4: {results.x4}</p>
      <p>X5: {results.x5}</p>
      <p>X6: {results.x6}</p>
      <p>X7: {results.x7}</p>
    </section>
  );
}
