import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin } from "lucide-react"
import Link from "next/link"

export default function Educators() {
  return (
    <section id="educators" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Our Educators
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Learn from Industry Experts</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our educators are professionals from top MNCs with years of experience in their fields.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Educator" />
                  <AvatarFallback>RK</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Rahul Kumar</CardTitle>
                  <CardDescription>Senior Software Engineer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                10+ years of experience at Google. Specializes in algorithms and data structures.
              </p>
              <div className="mt-4 flex items-center">
                <Link href="#" className="text-primary hover:text-primary/80">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Educator" />
                  <AvatarFallback>PS</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Priya Singh</CardTitle>
                  <CardDescription>Tech Lead</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                8+ years at Microsoft. Expert in system design and architecture.
              </p>
              <div className="mt-4 flex items-center">
                <Link href="#" className="text-primary hover:text-primary/80">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Educator" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Amit Joshi</CardTitle>
                  <CardDescription>Product Manager</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                7+ years at Amazon. Focuses on product development and soft skills.
              </p>
              <div className="mt-4 flex items-center">
                <Link href="#" className="text-primary hover:text-primary/80">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Educator" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Sneha Mehta</CardTitle>
                  <CardDescription>Full Stack Developer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                6+ years at Netflix. Expert in web technologies and modern frameworks.
              </p>
              <div className="mt-4 flex items-center">
                <Link href="#" className="text-primary hover:text-primary/80">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Educator" />
                  <AvatarFallback>VR</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Vikram Reddy</CardTitle>
                  <CardDescription>ML Engineer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                9+ years at Meta. Specializes in machine learning and AI concepts.
              </p>
              <div className="mt-4 flex items-center">
                <Link href="#" className="text-primary hover:text-primary/80">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Educator" />
                  <AvatarFallback>NG</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Neha Gupta</CardTitle>
                  <CardDescription>HR Specialist</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                12+ years in tech recruitment. Expert in interview preparation and resume building.
              </p>
              <div className="mt-4 flex items-center">
                <Link href="#" className="text-primary hover:text-primary/80">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

