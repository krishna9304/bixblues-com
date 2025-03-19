import { Brain, BookOpen, Users, Target, Clock, Award } from "lucide-react";

export default function Benefits() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Why Choose Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Benefits of BixAcademy
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our unique approach ensures you get the best preparation for your
              campus placements.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Brain className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Comprehensive Learning</h3>
            <p className="text-center text-muted-foreground">
              Our curriculum covers both technical and soft skills required for
              successful placements.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Industry-Relevant Content</h3>
            <p className="text-center text-muted-foreground">
              Our material is constantly updated to match current industry
              requirements and trends.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Expert Mentorship</h3>
            <p className="text-center text-muted-foreground">
              Learn directly from professionals working at top multinational
              companies.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Personalized Approach</h3>
            <p className="text-center text-muted-foreground">
              Our programs are tailored to address individual strengths and
              areas for improvement.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Flexible Learning Pace</h3>
            <p className="text-center text-muted-foreground">
              Choose between fast-track or comprehensive programs based on your
              academic year.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Proven Methodology</h3>
            <p className="text-center text-muted-foreground">
              Our teaching methods combine theory with practical application for
              maximum retention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
