// app/components/ProductionForm.tsx
"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"; // Adjust import path if needed

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import simulateProduction from "@/lib/simulateProduction";
import { useState } from "react";

const formSchema = z
  .object({
    productionQuantity: z.coerce.number(),
    unitCost: z.coerce.number(),
    unitPrice: z.coerce.number(),
    salvagePrice: z.coerce.number(),
    fixedCost: z.coerce.number(),
    worstLikelyDemand: z.coerce.number(),
    expectedDemand: z.coerce.number(),
    bestLikelyDemand: z.coerce.number(),
    demandStandardDeviation: z.coerce.number().gt(0, {
      message: "Demand standard deviation must be greater than 0",
    }),
  })
  .refine(
    (data) =>
      data.worstLikelyDemand < data.expectedDemand &&
      data.expectedDemand < data.bestLikelyDemand,
    {
      message: "worstLikelyDemand < expectedDemand < bestLikelyDemand",
      path: ["expectedDemand"],
    }
  );

export default function ProductionForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productionQuantity: 0,
      unitCost: 0,
      unitPrice: 0,
      salvagePrice: 0,
      fixedCost: 0,
      worstLikelyDemand: 0,
      expectedDemand: 0,
      bestLikelyDemand: 0,
      demandStandardDeviation: 1,
    },
  });
  const [simulationResults, setSimulationResults] =
    useState<SimulationResults | null>();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const results = await simulateProduction(data);
    setSimulationResults(results);
  };

  const fields = [
    "productionQuantity",
    "unitCost",
    "unitPrice",
    "salvagePrice",
    "fixedCost",
    "worstLikelyDemand",
    "expectedDemand",
    "bestLikelyDemand",
    "demandStandardDeviation",
  ] as const;

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 max-w-xl mx-auto"
        >
          {fields.map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">
                    {field.name.replace(/([A-Z])/g, " $1")}
                  </FormLabel>
                  <FormControl>
                    <Input type="number" step="any" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
      {simulationResults && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Simulation Results</h2>
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
        </div>
      )}
    </>
  );
}
