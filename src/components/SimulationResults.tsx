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

const locale = "en-US";

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
      {/* SIMULATION RESULTS TABLE */}
      <Table className="mx-auto w-1/2">
        <TableHeader>
          <TableRow>
            <TableHead>Results</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Expected Profit */}
          <TableRow>
            <TableCell>Expected Profit</TableCell>
            <TableCell>
              {results.expectedProfit.toLocaleString(locale, currencyFormat)}
            </TableCell>
          </TableRow>
          {/* Volatility */}
          <TableRow>
            <TableCell>Volatility</TableCell>
            <TableCell>
              {results.volatility.toLocaleString(locale, currencyFormat)}
            </TableCell>
          </TableRow>
          {/* Sharpe Ratio */}
          <TableRow>
            <TableCell>Sharpe Ratio</TableCell>
            <TableCell>
              {results.sharpeRatio.toLocaleString(locale, numberFormat)}
            </TableCell>
          </TableRow>
          {/* Worst Likely Case */}
          <TableRow>
            <TableCell>Worst Likely Case</TableCell>
            <TableCell>
              {results.worstLikelyCase.toLocaleString(locale, currencyFormat)}
            </TableCell>
          </TableRow>
          {/* Best Likely Case */}
          <TableRow>
            <TableCell>Best Likely Case</TableCell>
            <TableCell>
              {results.bestLikelyCase.toLocaleString(locale, currencyFormat)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
