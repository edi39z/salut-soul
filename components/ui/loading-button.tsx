"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean
    children: React.ReactNode
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    size?: "default" | "sm" | "lg" | "icon"
}

export function LoadingButton({ isLoading, children, className, disabled, ...props }: LoadingButtonProps) {
    return (
        <Button
            {...props}
            disabled={disabled || isLoading}
            className={cn("relative transition-all duration-300", isLoading && "cursor-not-allowed", className)}
        >
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="loading-spinner" />
                </div>
            )}
            <span className={cn("flex items-center gap-2", isLoading && "opacity-0")}>{children}</span>
        </Button>
    )
}
