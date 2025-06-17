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
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import optimizeStaff from "@/lib/optimizeStaff";
import OptimizationResults from "@/components/OptimizationResults";

const formSchema = z.object({
  monReq: z.coerce.number().min(0),
  tueReq: z.coerce.number().min(0),
  wedReq: z.coerce.number().min(0),
  thuReq: z.coerce.number().min(0),
  friReq: z.coerce.number().min(0),
  satReq: z.coerce.number().min(0),
  sunReq: z.coerce.number().min(0),
});

export default function OptimizationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      monReq: 0,
      tueReq: 0,
      wedReq: 0,
      thuReq: 0,
      friReq: 0,
      satReq: 0,
      sunReq: 0,
    },
  });

  const [results, setResults] = useState<OptimizationOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setError(null);
    setIsLoading(true);
    setResults(null);
    // add 5 second delay
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const results = await optimizeStaff(data);
    if (!results) {
      setError("Something went wrong, please try again");
      setIsLoading(false);
      return;
    }
    setResults(results);
    setIsLoading(false);
  };

  const fields = [
    "monReq",
    "tueReq",
    "wedReq",
    "thuReq",
    "friReq",
    "satReq",
    "sunReq",
  ] as const;

  return (
    <>
      {error && (
        <p className="text-destructive mx-auto mt-8 text-center">{error}</p>
      )}
      {isLoading && (
        <section className="flex flex-col items-center gap-4">
          <LoaderCircle className="mx-auto mt-8 animate-spin" />
          <p>Loading...</p>
          <p>The first request may take up to 60 seconds.</p>
        </section>
      )}
      {results && <OptimizationResults results={results} />}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4"
        >
          {fields.map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">
                    {field.name.replace("Req", "").slice(0, 3)} Requirement
                  </FormLabel>
                  <FormControl>
                    <Input type="number" step="1" min="0" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type="submit" className="col-span-full mt-8 w-full">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
