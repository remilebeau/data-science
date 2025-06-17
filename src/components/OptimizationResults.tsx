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
    <>
      {/* OPTIMIZATION RESULTS TABLE */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Work Week</TableHead>
            <TableHead>Number of Staff</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* X1: Monday to Friday */}
          <TableRow>
            <TableCell>Monday to Friday</TableCell>
            <TableCell>{results.x1}</TableCell>
          </TableRow>
          {/* X2: Tuesday to Saturday */}
          <TableRow>
            <TableCell>Tuesday to Saturday</TableCell>
            <TableCell>{results.x2}</TableCell>
          </TableRow>
          {/* X3: Wednesday to Sunday */}
          <TableRow>
            <TableCell>Wednesday to Sunday</TableCell>
            <TableCell>{results.x3}</TableCell>
          </TableRow>
          {/* X4: Thursday to Monday */}
          <TableRow>
            <TableCell>Thursday to Monday</TableCell>
            <TableCell>{results.x4}</TableCell>
          </TableRow>
          {/* X5: Friday to Tuesday */}
          <TableRow>
            <TableCell>Friday to Tuesday</TableCell>
            <TableCell>{results.x5}</TableCell>
          </TableRow>
          {/* X6: Saturday to Wednesday */}
          <TableRow>
            <TableCell>Saturday to Wednesday</TableCell>
            <TableCell>{results.x6}</TableCell>
          </TableRow>
          {/* X7: Sunday to Thursday */}
          <TableRow>
            <TableCell>Sunday to Thursday</TableCell>
            <TableCell>{results.x7}</TableCell>
          </TableRow>
          {/* Minimum Staff */}
          <TableRow>
            <TableCell className="font-bold">Minimum Staff</TableCell>
            <TableCell className="font-bold">
              {Math.round(results.minStaff)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/* AVAILABLE, REQUIRED, and SLACK TABLE */}
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
          {/* Monday */}
          <TableRow>
            <TableCell>Monday</TableCell>
            <TableCell>{results.monAva}</TableCell>
            <TableCell>{results.monReq}</TableCell>
            <TableCell>{results.monSlack}</TableCell>
          </TableRow>
          {/* Tuesday */}
          <TableRow>
            <TableCell>Tuesday</TableCell>
            <TableCell>{results.tueAva}</TableCell>
            <TableCell>{results.tueReq}</TableCell>
            <TableCell>{results.tueSlack}</TableCell>
          </TableRow>
          {/* Wednesday */}
          <TableRow>
            <TableCell>Wednesday</TableCell>
            <TableCell>{results.wedAva}</TableCell>
            <TableCell>{results.wedReq}</TableCell>
            <TableCell>{results.wedSlack}</TableCell>
          </TableRow>
          {/* Thursday */}
          <TableRow>
            <TableCell>Thursday</TableCell>
            <TableCell>{results.thuAva}</TableCell>
            <TableCell>{results.thuReq}</TableCell>
            <TableCell>{results.thuSlack}</TableCell>
          </TableRow>
          {/* Friday */}
          <TableRow>
            <TableCell>Friday</TableCell>
            <TableCell>{results.friAva}</TableCell>
            <TableCell>{results.friReq}</TableCell>
            <TableCell>{results.friSlack}</TableCell>
          </TableRow>
          {/* Saturday */}
          <TableRow>
            <TableCell>Saturday</TableCell>
            <TableCell>{results.satAva}</TableCell>
            <TableCell>{results.satReq}</TableCell>
            <TableCell>{results.satSlack}</TableCell>
          </TableRow>
          {/* Sunday */}
          <TableRow>
            <TableCell>Sunday</TableCell>
            <TableCell>{results.sunAva}</TableCell>
            <TableCell>{results.sunReq}</TableCell>
            <TableCell>{results.sunSlack}</TableCell>
          </TableRow>
          {/* Total Slack */}
          <TableRow>
            <TableCell className="font-bold">Total Slack</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell className="font-bold">{results.totalSlack}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
