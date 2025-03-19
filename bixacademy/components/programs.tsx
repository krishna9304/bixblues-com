import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Programs() {
  return (
    <section id="programs" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Our Programs
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tailored for Your Success</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the program that fits your academic year and learning pace.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">Fast Track Program</CardTitle>
              <CardDescription>For 4th Year Students</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <p>3-month intensive program</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <p>Accelerated learning path</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <p>Focus on immediate placement preparation</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <p>Mock interviews with industry experts</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <p>Resume building workshops</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <p>Twice weekly doubt clearing sessions</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="#contact" className="w-full">
                <Button className="w-full">Enroll Now</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">Complete Program</CardTitle>
              <CardDescription>For 3rd Year Students</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <p>6-month comprehensive program</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <p>Slower paced for deeper understanding</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <p>Strong foundation building</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <p>Project-based learning approach</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <p>Industry mentorship opportunities</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <p>Weekly doubt clearing sessions</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="#contact" className="w-full">
                <Button className="w-full">Enroll Now</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

