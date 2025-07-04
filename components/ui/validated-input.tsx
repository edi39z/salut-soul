"use client"

import React from "react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"

interface ValidatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    error?: string
    validationField?: "nik" | "nisn" | "email"
    onValidationChange?: (isValid: boolean, message: string) => void
}

export const ValidatedInput = React.forwardRef<HTMLInputElement, ValidatedInputProps>(
    ({ label, error, validationField, onValidationChange, className, ...props }, ref) => {
        const [isFocused, setIsFocused] = useState(false)
        const [hasValue, setHasValue] = useState(false)
        const [isValidating, setIsValidating] = useState(false)
        const [validationMessage, setValidationMessage] = useState("")
        const [isValid, setIsValid] = useState<boolean | null>(null)

        const validateField = async (value: string) => {
            if (!validationField || !value) {
                setIsValid(null)
                setValidationMessage("")
                onValidationChange?.(true, "")
                return
            }

            // Skip validation for incomplete values
            if (validationField === "nik" && value.length < 16) return
            if (validationField === "nisn" && value.length < 10) return
            if (validationField === "email" && !value.includes("@")) return

            setIsValidating(true)

            try {
                const response = await fetch("/api/validate", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ field: validationField, value }),
                })

                const result = await response.json()

                if (result.success) {
                    setIsValid(result.isAvailable)
                    setValidationMessage(result.message)
                    onValidationChange?.(result.isAvailable, result.message)
                }
            } catch (error) {
                console.error("Validation error:", error)
                setIsValid(null)
                setValidationMessage("")
                onValidationChange?.(true, "")
            } finally {
                setIsValidating(false)
            }
        }

        useEffect(() => {
            if (props.value) {
                const timeoutId = setTimeout(() => {
                    validateField(props.value as string)
                }, 500) // Debounce validation

                return () => clearTimeout(timeoutId)
            }
        }, [props.value, validationField])

        const handleFocus = () => setIsFocused(true)
        const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
            setIsFocused(false)
            setHasValue(e.target.value !== "")
        }

        const getValidationIcon = () => {
            if (isValidating) {
                return <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />
            }
            if (isValid === true) {
                return <CheckCircle className="w-4 h-4 text-green-500" />
            }
            if (isValid === false) {
                return <XCircle className="w-4 h-4 text-red-500" />
            }
            return null
        }

        const getValidationColor = () => {
            if (error) return "border-red-300 focus:border-red-500"
            if (isValid === false) return "border-red-300 focus:border-red-500"
            if (isValid === true) return "border-green-300 focus:border-green-500"
            return "border-neutral-200 focus:border-primary hover:border-neutral-300"
        }

        return (
            <div className="relative">
                <div className="relative">
                    <input
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
                            "peer w-full px-4 pt-6 pb-2 pr-10 border-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-0",
                            getValidationColor(),
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

                    {/* Validation Icon */}
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">{getValidationIcon()}</div>
                </div>

                {/* Error Message */}
                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}

                {/* Validation Message */}
                {validationMessage && !error && (
                    <p className={cn("mt-1 text-sm", isValid ? "text-green-600" : "text-red-600")}>{validationMessage}</p>
                )}
            </div>
        )
    },
)

ValidatedInput.displayName = "ValidatedInput"
