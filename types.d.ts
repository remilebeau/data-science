type SimulationFormValues = {
  productionQuantity: number;
  unitCost: number;
  unitPrice: number;
  salvagePrice: number;
  fixedCost: number;
  worstLikelyDemand: number;
  expectedDemand: number;
  bestLikelyDemand: number;
  demandStandardDeviation: number;
};

type SimulationResults = {
  expectedProfit: number;
  volatility: number;
  sharpeRatio: number;
  worstLikelyCase: number;
  bestLikelyCase: number;
};
