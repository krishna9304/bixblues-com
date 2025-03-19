import { GraduationCap, Code, Users, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              About Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Your Path to Placement Success
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              BixAcademy provides training to Computer Science undergraduates to
              excel in their campus placement journey. We cover everything
              required to help our candidates gain the confidence they need.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Comprehensive Training</h3>
                  <p className="text-muted-foreground">
                    Our program covers both soft and hard skills, with
                    theoretical knowledge and practical hands-on experience.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Code className="h-5 w-5" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">
                    Engineering Core Concepts
                  </h3>
                  <p className="text-muted-foreground">
                    We focus on strengthening fundamental engineering concepts
                    that are crucial for technical interviews.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Users className="h-5 w-5" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Expert Educators</h3>
                  <p className="text-muted-foreground">
                    Learn from top-notch educators from major MNCs who are
                    experts in their fields with proven experience.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Regular Doubt Sessions</h3>
                  <p className="text-muted-foreground">
                    We organize weekly doubt classes to ensure there's no gap
                    between educator expectations and student performance.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
