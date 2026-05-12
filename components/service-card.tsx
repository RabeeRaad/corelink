// A reusable card component for displaying a service
import { ReactNode } from "react"

export function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: ReactNode
}) {
  return (
    <div className="rounded-lg border p-6 shadow-sm bg-white dark:bg-black">
      {/* Icon of the service */}
      <div className="text-primary mb-4">{icon}</div>

      {/* Title of the service */}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      {/* Description of the service */}
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
