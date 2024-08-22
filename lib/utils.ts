import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleError(error: any): string {
  if (error instanceof Object) {
    if ((error as Object).hasOwnProperty('code')) {
      return error.code
    }

    return JSON.stringify(error)
  }

  if (typeof error === 'string') {
    return error
  }

  console.trace('Not handled error, check console', error);

  return 'Not handled error, check console'
}
