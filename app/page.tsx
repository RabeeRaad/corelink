import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"
import { CalendarDays, Wrench, Users } from "lucide-react"

export default function HomePage() {
  return (
    <Container className="py-20 space-y-24">

      {/* HERO SECTION */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">
          Welcome to <span className="text-primary">CoreLink</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A modern platform for booking services, managing appointments, and connecting clients with professionals.
        </p>

        <Button size="lg" className="mt-4">
          Get Started
        </Button>
      </div>

      {/* SERVICES SECTION */}
      <div className="space-y-10">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          CoreLink provides a seamless experience for clients and service providers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Booking Management"
            description="Easily schedule, manage, and track appointments with a modern interface."
            icon={<CalendarDays />}
          />

          <ServiceCard
            title="Professional Services"
            description="Connect with skilled professionals offering a wide range of services."
            icon={<Wrench />}
          />

          <ServiceCard
            title="Client Dashboard"
            description="A clean dashboard to manage bookings, payments, and communication."
            icon={<Users />}
          />
        </div>
      </div>

    </Container>
  )
}
