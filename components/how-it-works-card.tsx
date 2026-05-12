// A reusable card component for showing a step in the workflow
export function HowItWorksCard({
  step,
  title,
  description,
}: {
  step: string
  title: string
  description: string
}) {
  return (
    <div className="rounded-lg border p-6 shadow-sm bg-white dark:bg-black">

      {/* Step number */}
      <div className="text-primary font-bold text-xl mb-2">{step}</div>

      {/* Step title */}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      {/* Step description */}
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
