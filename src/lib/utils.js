import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
<<<<<<< HEAD
=======


export function smoothScroll(section) {
  document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
}
>>>>>>> aca94037c54df7147555afb4a24b4547ab0d8b4d
