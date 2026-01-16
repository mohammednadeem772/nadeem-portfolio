"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface MNSLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function MNSLogo({ className = "", size = "md" }: MNSLogoProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className={`${size === "sm" ? "w-8 h-8" : size === "md" ? "w-10 h-10" : "w-14 h-14"} ${className}`} />
  }

  // Colors based on theme
  const primaryColor = resolvedTheme === "dark" ? "#f5f9fb" : "#05080b"
  const secondaryColor = resolvedTheme === "dark" ? "rgba(245, 249, 251, 0.5)" : "rgba(5, 8, 11, 0.5)"

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  }

  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClasses[size]} ${className}`}
      aria-label="MNS Logo"
    >
      {/* Left bracket [ */}
      <path d="M8 12 L18 12 L18 16 L12 16 L12 64 L18 64 L18 68 L8 68 L8 12Z" fill={primaryColor} />

      {/* M */}
      <path
        d="M28 24 L28 56 L32 56 L32 32 L40 44 L48 32 L48 56 L52 56 L52 24 L48 24 L40 38 L32 24 L28 24Z"
        fill={primaryColor}
      />

      {/* N */}
      <path d="M58 24 L58 56 L62 56 L62 34 L74 56 L78 56 L78 24 L74 24 L74 46 L62 24 L58 24Z" fill={primaryColor} />

      {/* S */}
      <path
        d="M84 24 L84 28 L96 28 L96 36 L84 36 L84 56 L100 56 L100 52 L88 52 L88 40 L100 40 L100 24 L84 24Z"
        fill={primaryColor}
      />

      {/* Right bracket ] */}
      <path d="M112 12 L102 12 L102 16 L108 16 L108 64 L102 64 L102 68 L112 68 L112 12Z" fill={primaryColor} />

      {/* Code tag </> below left bracket */}
      <text x="15" y="78" fontSize="10" fontFamily="monospace" fill={secondaryColor} textAnchor="middle">
        {"</>"}
      </text>

      {/* Semicolon and cursor below right bracket */}
      <text x="105" y="78" fontSize="10" fontFamily="monospace" fill={secondaryColor} textAnchor="middle">
        ;
      </text>

      {/* Cursor arrow */}
      <path d="M108 66 L108 76 L112 73 L114 78 L116 77 L114 72 L118 72 L108 66Z" fill={primaryColor} />
    </svg>
  )
}
