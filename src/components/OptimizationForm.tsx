"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

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

import optimizeStaff from "@/lib/optimizeStaff";
import OptimizationResults from "@/components/OptimizationResults";

// -------------------------
// Schema & Types
// -------------------------
const formSchema = z.object({
  monReq: z.coerce.number().min(0),
  tueReq: z.coerce.number().min(0),
  wedReq: z.coerce.number().min(0),
  thuReq: z.coerce.number().min(0),
  friReq: z.coerce.number().min(0),
  satReq: z.coerce.number().min(0),
  sunReq: z.coerce.number().min(0),
});

type FormValues = z.infer<typeof formSchema>;

// -------------------------
// UI Helpers
// -------------------------
function LoadingState() {
  return (
    <div className="flex flex-col items-center gap-4">
      <LoaderCircle className="mx-auto mt-8 animate-spin" />
      <p>Loading...</p>
      <p>The first request may take up to 60 seconds.</p>
    </div>
  );
}

function ErrorMessage({ message }: { message: string }) {
  return <p className="text-destructive mx-auto mt-8 text-center">{message}</p>;
}

function RequirementField({
  control,
  name,
  label,
}: {
  control: any;
  name: keyof FormValues;
  label: string;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type="number" step="1" min="0" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

// -------------------------
// Main Component
// -------------------------
export default function OptimizationForm() {
  const form = useForm<FormValues>({
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

  const onSubmit = async (data: FormValues) => {
    setError(null);
    setIsLoading(true);
    setResults(null);

    const response = await optimizeStaff(data);

    if (!response) {
      setError("Something went wrong, please try again");
    } else {
      setResults(response);
    }

    setIsLoading(false);
  };

  return (
    <section className="mx-auto max-w-4xl space-y-8">
      {error && <ErrorMessage message={error} />}
      {isLoading && <LoadingState />}
      {results && <OptimizationResults results={results} />}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4"
        >
          <RequirementField
            control={form.control}
            name="monReq"
            label="Mon Requirement"
          />
          <RequirementField
            control={form.control}
            name="tueReq"
            label="Tue Requirement"
          />
          <RequirementField
            control={form.control}
            name="wedReq"
            label="Wed Requirement"
          />
          <RequirementField
            control={form.control}
            name="thuReq"
            label="Thu Requirement"
          />
          <RequirementField
            control={form.control}
            name="friReq"
            label="Fri Requirement"
          />
          <RequirementField
            control={form.control}
            name="satReq"
            label="Sat Requirement"
          />
          <RequirementField
            control={form.control}
            name="sunReq"
            label="Sun Requirement"
          />

          <Button type="submit" className="col-span-full mt-8 w-full">
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
}
