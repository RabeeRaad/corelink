import { cn } from "@/lib/utils"

export function ServiceCard({
  title,
  description,
  icon,
  className,
}: {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "rounded-lg border p-6 shadow-sm hover:shadow-md transition bg-white dark:bg-black",
        className
      )}
    >
      <div className="text-primary mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
