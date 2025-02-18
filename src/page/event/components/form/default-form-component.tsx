"use client"
import { FormComponent } from "@/components/shadcn/form-component"
import type { z } from "zod"
import { defaultSchema } from "../../../../lib/form-schema"
import { useOrderProvider } from "@/provider/order-provider"

type FormValues = z.infer<typeof defaultSchema>

export default function DefaultFormComponent() {
  const { bookingCreation } = useOrderProvider()
  const startDate = bookingCreation?.event?.start_date!
  const pickupPointOptions = bookingCreation?.event?.pickup_points?.map((point) => ({
      label: point.address + " " + point.city, 
      value: point.address + " " + point.city, 
    })) || []

  const returnPointOptions = pickupPointOptions 
  const fields: Array<{
    name: keyof FormValues
    label: string
    type: "input" | "checkbox" | "date" | "dropdown"
    items?: { label: string; value: string }[]
    placeholder?: string
  }> = [
    { name: "name", label: "Navn", type: "input" },
    { name: "email", label: "Email", type: "input" },
    { name: "phoneNumber", label: "Telefonnummer", type: "input" },
    { name: "duration", label: "Varighed", type: "dropdown",
      items: [
        { label: "24 timer", value: "24" },
        { label: "48 timer", value: "48" },
        { label: "72 timer", value: "72" },
      ],
    },
    { name: "startDate", label: "Start dato", type: "date"},
    { name: "pickupPoint",label: "Afhentningssted",type: "dropdown", items: pickupPointOptions, },
    { name: "returnPoint", label: "Afleveringssted", type: "dropdown", items: returnPointOptions, },
    { name: "acceptance", label: "Accepter handelsbetingsler", type: "checkbox",},
  ]

  const onSubmit = (values: FormValues) => {
    console.log(values)
    console.log(bookingCreation?.event!)
    // Handle form submission
  }

  return <FormComponent<FormValues> fields={fields} schema={defaultSchema} onSubmit={onSubmit} />
}
