import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from "@/data/faqs"

export const metadata: Metadata = {
  title: "Perguntas Frequentes | Astro Glossário",
  description: "Encontre respostas para as perguntas mais comuns sobre astrologia, signos, mapas astrais e mais.",
}

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-center text-4xl font-bold">Perguntas Frequentes</h1>

      <div className="mx-auto mb-8 max-w-3xl text-center">
        <p className="text-lg text-muted-foreground">
          Encontre respostas para as perguntas mais comuns sobre astrologia, signos, mapas astrais e mais.
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  {faq.answer.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
