import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { getSession } from "./auth0"
import { useEffect } from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function downloadResume() {
  const link = document.createElement("a")
  link.href = "my-resume/Von_Bryan_S_Resume_2026.docx"
  link.download = "Von_Bryan_S_Resume_2026.docx"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
