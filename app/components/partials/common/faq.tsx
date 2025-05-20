'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface FaqItem {
  title: string;
  text: string;
}

export type FaqItems = Array<FaqItem>;

export function Faq() {
  const items: FaqItems = [
    {
      title: 'How is pricing determined for each plan ?',
      text: "BatteryBoost embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision. BatteryBoost embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision. BatteryBoost embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision",
    },
    {
      title: 'What payment methods are accepted for subscriptions ?',
      text: "BatteryBoost embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision",
    },
    {
      title: 'Are there any hidden fees in the pricing ?',
      text: "BatteryBoost embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision",
    },
    {
      title: 'Is there a discount for annual subscriptions ?',
      text: "BatteryBoost embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision",
    },
    {
      title: 'Do you offer refunds on subscription cancellations ?',
      text: "BatteryBoost embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision",
    },
    {
      title: 'Can I add extra features to my current plan ?',
      text: "BatteryBoost embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision",
    },
  ];

  const generateItems = () => {
    return (
      <Accordion type="single" collapsible>
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.text}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>FAQ</CardTitle>
      </CardHeader>
      <CardContent className="py-3">{generateItems()}</CardContent>
    </Card>
  );
}
