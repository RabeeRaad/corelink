// Import React components and UI elements
import { ServiceCard } from "@/components/service-card"
import { HowItWorksCard } from "@/components/how-it-works-card"
import { CalendarDays, Wrench, Users } from "lucide-react"

export default function Home() {
  return (
    // Main wrapper for the entire page
    <main className="space-y-20">

      {/* ============================
          HERO SECTION
          This is the top section of the homepage.
          It introduces the platform with a title + description.
      ============================ */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold">
          Welcome to CoreLink
        </h1>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          A modern platform that connects clients with professionals through a seamless booking experience.
        </p>
      </section>

      {/* ============================
          SERVICES SECTION
          Shows 3 service cards explaining what CoreLink offers.
      ============================ */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>

        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          CoreLink provides a seamless experience for clients and service providers.
        </p>

        {/* Grid layout for the 3 service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Service 1 */}
          <ServiceCard
            title="Booking Management"
            description="Easily schedule, manage, and track appointments with a modern interface."
            icon={<CalendarDays />}
          />

          {/* Service 2 */}
          <ServiceCard
            title="Professional Services"
            description="Connect with skilled professionals offering a wide range of services."
            icon={<Wrench />}
          />

          {/* Service 3 */}
          <ServiceCard
            title="Client Dashboard"
            description="A clean dashboard to manage bookings, payments, and communication."
            icon={<Users />}
          />
        </div>
      </section>

      {/* ============================
          HOW CORELINK WORKS SECTION
          Explains the workflow in 3 simple steps.
      ============================ */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold text-center">How CoreLink Works</h2>

        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          A simple and intuitive workflow designed for both clients and professionals.
        </p>

        {/* Grid layout for the 3 steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Step 1 */}
          <HowItWorksCard
            step="1"
            title="Choose a Service"
            description="Browse available services and select the one that fits your needs."
          />

          {/* Step 2 */}
          <HowItWorksCard
            step="2"
            title="Book an Appointment"
            description="Pick a date and time that works best for you."
          />

          {/* Step 3 */}
          <HowItWorksCard
            step="3"
            title="Get Connected"
            description="Meet your service provider and manage everything from your dashboard."
          />
        </div>
      </section>

    </main>
  )
}
