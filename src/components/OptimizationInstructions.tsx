import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function OptimizationInstructions() {
  return (
    <section className="mx-auto max-w-3xl space-y-8 px-4 py-6">
      <h2 className="text-2xl font-semibold">
        How to Use the Staffing Optimizer
      </h2>
      <div className="space-y-4">
        <p>
          This tool calculates the fewest employees needed to meet weekly
          staffing needs using fixed 5-day rotations.
        </p>
        <p>
          Enter daily staffing requirements, and the optimizer returns the
          minimum number of workers required.
        </p>
      </div>

      <h2 className="text-2xl font-semibold">What You Need to Enter</h2>
      <p>Input the required number of workers for each day:</p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Day</TableHead>
            <TableHead>Field</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            ["Monday", "monReq"],
            ["Tuesday", "tueReq"],
            ["Wednesday", "wedReq"],
            ["Thursday", "thuReq"],
            ["Friday", "friReq"],
            ["Saturday", "satReq"],
            ["Sunday", "sunReq"],
          ].map(([day, field]) => (
            <TableRow key={field}>
              <TableCell className="font-medium">{day}</TableCell>
              <TableCell>
                <code>{field}</code>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p>
        These values are sent to the API, which returns the optimal staffing
        plan.
      </p>

      <h2 className="text-2xl font-semibold">Shift Variables (x1 to x7)</h2>
      <p>Each variable represents a 5-day shift rotation:</p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Variable</TableHead>
            <TableHead>Shift Days</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            ["x1", "Mon–Fri"],
            ["x2", "Tue–Sat"],
            ["x3", "Wed–Sun"],
            ["x4", "Thu–Mon"],
            ["x5", "Fri–Tue"],
            ["x6", "Sat–Wed"],
            ["x7", "Sun–Thu"],
          ].map(([varName, shift]) => (
            <TableRow key={varName}>
              <TableCell>
                <code>{varName}</code>
              </TableCell>
              <TableCell>{shift}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p>
        The API tells you how many workers to assign to each shift to meet
        demand with the fewest total employees.
      </p>

      <h2 className="text-2xl font-semibold">What You’ll Get Back</h2>
      <p>The API response includes:</p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Field</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            ["minStaff", "Minimum total workers"],
            ["x1–x7", "Workers per shift"],
            ["monAva–sunAva", "Daily worker availability"],
            ["monSlack–sunSlack", "Daily excess workers"],
            ["totalSlack", "Total weekly excess"],
          ].map(([field, desc]) => (
            <TableRow key={field}>
              <TableCell>
                <code>{field}</code>
              </TableCell>
              <TableCell>{desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="italic">
        If a solution can&apos;t meet your input demands, the API returns an
        error.
      </p>
    </section>
  );
}
