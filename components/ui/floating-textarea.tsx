"use client"

import type React from "react"
import { useState, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface FloatingTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string
    error?: string
}

export const FloatingTextarea = forwardRef<HTMLTextAreaElement, FloatingTextareaProps>(
    ({ label, error, className, ...props }, ref) => {
        const [isFocused, setIsFocused] = useState(false)
        const [hasValue, setHasValue] = useState(false)

        const handleFocus = () => setIsFocused(true)
        const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
            setIsFocused(false)
            setHasValue(e.target.value !== "")
        }

        return (
            <div className="relative">
                <textarea
                    ref={ref}
                    {...props}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={(e) => {
                        setHasValue(e.target.value !== "")
                        props.onChange?.(e)
                    }}
                    placeholder=" "
                    className={cn(
                        "peer w-full px-4 pt-6 pb-2 border-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-0 resize-none",
                        error
                            ? "border-red-300 focus:border-red-500"
                            : "border-neutral-200 focus:border-primary hover:border-neutral-300",
                        "bg-white text-neutral-900",
                        className,
                    )}
                />
                <label
                    className={cn(
                        "absolute left-4 transition-all duration-300 pointer-events-none",
                        isFocused || hasValue || props.value
                            ? "top-2 text-xs text-primary font-medium"
                            : "top-4 text-base text-neutral-500",
                    )}
                >
                    {label}
                </label>
                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
            </div>
        )
    },
)

FloatingTextarea.displayName = "FloatingTextarea"
