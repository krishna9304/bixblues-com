import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about our programs.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Who can join BixAcademy programs?</AccordionTrigger>
              <AccordionContent>
                Our programs are designed for Computer Science undergraduates in their 3rd year (penultimate) and 4th
                year (ultimate). We offer different programs tailored to each group's specific needs and timelines.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What is the difference between the 3-month and 6-month programs?</AccordionTrigger>
              <AccordionContent>
                The 3-month program is a fast-paced intensive course designed for 4th year students who need immediate
                preparation for upcoming campus placements. The 6-month program is more comprehensive and paced slower
                for 3rd year students, providing a deeper understanding of concepts with more time for practice.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How are the classes conducted?</AccordionTrigger>
              <AccordionContent>
                We offer a blend of live online sessions, recorded lectures, hands-on coding exercises, and regular
                doubt-clearing sessions. Our approach combines theoretical knowledge with practical application to
                ensure comprehensive learning.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What topics are covered in the curriculum?</AccordionTrigger>
              <AccordionContent>
                Our curriculum covers data structures, algorithms, system design, programming languages, soft skills,
                interview preparation, resume building, and mock interviews. We also focus on problem-solving techniques
                and industry-specific knowledge.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Do you provide placement assistance?</AccordionTrigger>
              <AccordionContent>
                While we don't directly place students, our comprehensive training significantly improves your chances
                of success in campus placements. We provide mock interviews, resume reviews, and guidance on approaching
                different types of technical and HR interviews.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>How can I enroll in a program?</AccordionTrigger>
              <AccordionContent>
                You can enroll by filling out the contact form at the bottom of this page. Our team will reach out to
                you with program details, schedule, and payment information. We have limited seats for each batch to
                ensure quality education.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

