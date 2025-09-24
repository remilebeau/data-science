import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {
  results: OptimizationOutput;
};

export default function OptimizationResults({ results }: Props) {
  return (
    <section className="mx-auto max-w-4xl space-y-8">
      {/* OPTIMIZATION RESULTS TABLE */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Work Week</TableHead>
            <TableHead>Number of Staff</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Monday to Friday</TableCell>
            <TableCell>{results.x1}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tuesday to Saturday</TableCell>
            <TableCell>{results.x2}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wednesday to Sunday</TableCell>
            <TableCell>{results.x3}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Thursday to Monday</TableCell>
            <TableCell>{results.x4}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Friday to Tuesday</TableCell>
            <TableCell>{results.x5}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Saturday to Wednesday</TableCell>
            <TableCell>{results.x6}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Sunday to Thursday</TableCell>
            <TableCell>{results.x7}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold">Minimum Staff</TableCell>
            <TableCell className="font-bold">
              {Math.round(results.minStaff)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {/* COLLAPSIBLE SLACK TABLE */}
      <details className="rounded-lg border p-4">
        <summary className="text-muted-foreground hover:text-foreground cursor-pointer text-sm select-none">
          Show detailed availability and slack
        </summary>
        <div className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Day</TableHead>
                <TableHead>Available</TableHead>
                <TableHead>Required</TableHead>
                <TableHead>Slack</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Monday</TableCell>
                <TableCell>{results.monAva}</TableCell>
                <TableCell>{results.monReq}</TableCell>
                <TableCell>{results.monSlack}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tuesday</TableCell>
                <TableCell>{results.tueAva}</TableCell>
                <TableCell>{results.tueReq}</TableCell>
                <TableCell>{results.tueSlack}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Wednesday</TableCell>
                <TableCell>{results.wedAva}</TableCell>
                <TableCell>{results.wedReq}</TableCell>
                <TableCell>{results.wedSlack}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Thursday</TableCell>
                <TableCell>{results.thuAva}</TableCell>
                <TableCell>{results.thuReq}</TableCell>
                <TableCell>{results.thuSlack}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Friday</TableCell>
                <TableCell>{results.friAva}</TableCell>
                <TableCell>{results.friReq}</TableCell>
                <TableCell>{results.friSlack}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Saturday</TableCell>
                <TableCell>{results.satAva}</TableCell>
                <TableCell>{results.satReq}</TableCell>
                <TableCell>{results.satSlack}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sunday</TableCell>
                <TableCell>{results.sunAva}</TableCell>
                <TableCell>{results.sunReq}</TableCell>
                <TableCell>{results.sunSlack}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Total Slack</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell className="font-bold">
                  {results.totalSlack}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </details>
    </section>
  );
}
