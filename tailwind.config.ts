import type { Config } from "tailwindcss"

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "#005BAC",
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#005BAC",
                    600: "#004a91",
                    700: "#003d76",
                    800: "#00315c",
                    900: "#002642",
                    foreground: "#ffffff",
                },
                secondary: {
                    DEFAULT: "#F28C28",
                    50: "#fef7ed",
                    100: "#feebc8",
                    200: "#fbd38d",
                    300: "#f6ad55",
                    400: "#ed8936",
                    500: "#F28C28",
                    600: "#dd6b20",
                    700: "#c05621",
                    800: "#9c4221",
                    900: "#7b341e",
                    foreground: "#ffffff",
                },
                neutral: {
                    50: "#FFFFFF",
                    100: "#F5F5F5",
                    200: "#e5e7eb",
                    300: "#d1d5db",
                    400: "#9ca3af",
                    500: "#6B7280",
                    600: "#4b5563",
                    700: "#374151",
                    800: "#1f2937",
                    900: "#1E1E1E",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [],
}

export default config
