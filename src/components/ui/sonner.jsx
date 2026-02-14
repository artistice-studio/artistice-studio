"use client"

<<<<<<< HEAD
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
=======
>>>>>>> aca94037c54df7147555afb4a24b4547ab0d8b4d
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme}
      className="toaster group"
<<<<<<< HEAD
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
=======
>>>>>>> aca94037c54df7147555afb4a24b4547ab0d8b4d
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
<<<<<<< HEAD
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)"
=======
          "--normal-border": "var(--border)"
>>>>>>> aca94037c54df7147555afb4a24b4547ab0d8b4d
        }
      }
      {...props} />
  );
}

export { Toaster }
