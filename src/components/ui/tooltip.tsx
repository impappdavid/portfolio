"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      // Use Radix's computed transform origin and data attributes
      className={cn(
        // Base style
        "z-50 rounded-md border border-zinc-300 bg-zinc-100 px-2 py-1 text-sm text-zinc-600 shadow-sm",
        // Better rendering during animation
        "will-change-[transform,opacity] [transform-origin:var(--radix-tooltip-content-transform-origin)]",
        // Open/close state animations
        "data-[state=open]:animate-tooltip-in data-[state=closed]:animate-tooltip-out",
        // Per-side directionality for the 'coming up' feel
        "data-[state=open]:data-[side=top]:animate-tooltip-in-top",
        "data-[state=open]:data-[side=bottom]:animate-tooltip-in-bottom",
        "data-[state=open]:data-[side=left]:animate-tooltip-in-left",
        "data-[state=open]:data-[side=right]:animate-tooltip-in-right",
        // Small offset slide from Radix collisions still respected
        "origin-[--radix-tooltip-content-transform-origin]",
        className
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
