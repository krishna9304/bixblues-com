import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Excel in Your Campus Placements
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                BixAcademy provides comprehensive training to help computer
                science undergraduates secure their dream jobs during campus
                placements.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#programs">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  Explore Programs
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full min-[400px]:w-auto"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full md:h-[420px] lg:h-[450px] xl:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold mb-4">Placement Success</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg">
                      <p className="text-3xl font-bold text-primary">3</p>
                      <p className="text-sm">Month Fast Track</p>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg">
                      <p className="text-3xl font-bold text-primary">6</p>
                      <p className="text-sm">Month Complete</p>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg">
                      <p className="text-3xl font-bold text-primary">100%</p>
                      <p className="text-sm">Dedicated Support</p>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg">
                      <p className="text-3xl font-bold text-primary">MNC</p>
                      <p className="text-sm">Expert Educators</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
