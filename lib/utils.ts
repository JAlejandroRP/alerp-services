import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleError(error: any): string {
  if (typeof error === 'string') {
    return error
  }

  if (error instanceof Object) {
    const code = (error as Object).hasOwnProperty('code') ? error.code : null
    const name = (error as Object).hasOwnProperty('name') ? error.name : null

    if (code) return error.code
    if (name) return error.name

    return JSON.stringify(error)
  }

  console.trace('Not handled error, check console', error);

  return 'Not handled error, check console'
}
