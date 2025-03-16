import { cn } from "@/lib/utils";

export function Heading({
  title,
  description,
  className,
  children,
  ...props
}) {
  return (
    <div className={cn("space-y-1.5", className)} {...props}>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {children}
    </div>
  );
}