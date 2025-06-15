import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {
  results: SimulationOutput;
};

const currencyFormat: Intl.NumberFormatOptions = {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
};

const numberFormat: Intl.NumberFormatOptions = {
  style: "decimal",
  maximumFractionDigits: 2,
};

export default function SimulationResults({ results }: Props) {
  return (
    <>
      {/* INPUTS TABLE */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/2">Inputs</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Production Quantity */}
          <TableRow>
            <TableCell>Production Quantity</TableCell>
            <TableCell>
              {results.productionQuantity.toLocaleString("en-US", numberFormat)}
            </TableCell>
          </TableRow>
          {/* Unit Cost */}
          <TableRow>
            <TableCell>Unit Cost</TableCell>
            <TableCell>
              {results.unitCost.toLocaleString("en-US", currencyFormat)}
            </TableCell>
          </TableRow>
          {/* Unit Price */}
          <TableRow>
            <TableCell>Unit Price</TableCell>
            <TableCell>
              {results.unitPrice.toLocaleString("en-US", currencyFormat)}
            </TableCell>
          </TableRow>
          {/* Salvage Price */}
          <TableRow>
            <TableCell>Salvage Price</TableCell>
            <TableCell>
              {results.salvagePrice.toLocaleString("en-US", currencyFormat)}
            </TableCell>
          </TableRow>
          {/* Fixed Cost */}
          <TableRow>
            <TableCell>Fixed Cost</TableCell>
            <TableCell>
              {results.fixedCost.toLocaleString("en-US", currencyFormat)}
            </TableCell>
          </TableRow>
          {/* Worst Likely Demand */}
          <TableRow>
            <TableCell>Worst Likely Demand</TableCell>
            <TableCell>
              {results.worstLikelyDemand.toLocaleString("en-US", numberFormat)}
            </TableCell>
          </TableRow>
          {/* Expected Demand */}
          <TableRow>
            <TableCell>Expected Demand</TableCell>
            <TableCell>
              {results.expectedDemand.toLocaleString("en-US", numberFormat)}
            </TableCell>
          </TableRow>
          {/* Best Likely Demand */}
          <TableRow>
            <TableCell>Best Likely Demand</TableCell>
            <TableCell>
              {results.bestLikelyDemand.toLocaleString("en-US", numberFormat)}
            </TableCell>
          </TableRow>
          {/* Demand Standard Deviation */}
          <TableRow>
            <TableCell>Demand Standard Deviation</TableCell>
            <TableCell>
              {results.demandStandardDeviation.toLocaleString(
                "en-US",
                numberFormat,
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/* SIMULATION RESULTS TABLE */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/2">Results</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Expected Profit */}
          <TableRow>
            <TableCell>Expected Profit</TableCell>
            <TableCell>
              {results.expectedProfit.toLocaleString("en-US", currencyFormat)}
            </TableCell>
          </TableRow>
          {/* Volatility */}
          <TableRow>
            <TableCell>Volatility</TableCell>
            <TableCell>
              {results.volatility.toLocaleString("en-US", currencyFormat)}
            </TableCell>
          </TableRow>
          {/* Sharpe Ratio */}
          <TableRow>
            <TableCell>Sharpe Ratio</TableCell>
            <TableCell>
              {results.sharpeRatio.toLocaleString("en-US", numberFormat)}
            </TableCell>
          </TableRow>
          {/* Worst Likely Case */}
          <TableRow>
            <TableCell>Worst Likely Case</TableCell>
            <TableCell>
              {results.worstLikelyCase.toLocaleString("en-US", currencyFormat)}
            </TableCell>
          </TableRow>
          {/* Best Likely Case */}
          <TableRow>
            <TableCell>Best Likely Case</TableCell>
            <TableCell>
              {results.bestLikelyCase.toLocaleString("en-US", currencyFormat)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
