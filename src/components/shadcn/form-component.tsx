"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn, FieldValues, Path } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShadcnDateTimePicker } from "@/components/shadcn/date-picker";
import { ShadcnDropdown, DropdownItem } from "@/components/shadcn/dropdown";
import { Checkbox } from "@/components/ui/checkbox";

interface FieldConfig<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type: "input" | "checkbox" | "date" | "dropdown";
  items?: DropdownItem[];
  placeholder?: string;
  description?: string;
}

interface FormComponentProps<T extends FieldValues> {
  fields: FieldConfig<T>[];
  schema: z.ZodType<T>;
  onSubmit: (values: T) => void;
}

export function FormComponent<T extends FieldValues>({
  fields,
  schema,
  onSubmit
}: FormComponentProps<T>) {
  const form = useForm<T>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const renderField = (field: FieldConfig<T>) => {
    return (
      <FormField
        key={field.name}
        control={form.control}
        name={field.name}
        render={({ field: formField }) => (
          <FormItem>
            {field.type !== "checkbox" &&   <FormLabel>{field.label}</FormLabel>}
            {field.type === "input" && (
              <FormControl>
              <Input 
                placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}`} 
                {...formField} 
                value={formField.value ?? ""}
              />
            </FormControl>
            )}
            {field.type === "date" && (
              <FormControl>
                <ShadcnDateTimePicker
                  form={form}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              </FormControl>
            )}
            {field.type === "dropdown" && field.items && (
              <FormControl>
                <ShadcnDropdown
                  items={field.items}
                  placeholder={field.placeholder}
                  onSelect={(value) => formField.onChange(value)}
                />
              </FormControl>
            )}
            {field.type === "checkbox" && (
              <FormControl>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={field.name}
                    checked={formField.value as boolean}
                    onCheckedChange={formField.onChange}
                  />
                  <label
                    htmlFor={field.name}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {field.label}
                  </label>
                </div>
              </FormControl>
            )}
            {field.description && <FormDescription>{field.description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )}
      />
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        {fields.map(renderField)}
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
  );
}