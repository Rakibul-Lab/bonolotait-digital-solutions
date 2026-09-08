import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Scroll to the true document top so the full hero sits below the fixed header. */
export function scrollToPageTop(event: { preventDefault: () => void }) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (window.location.hash) {
    history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }
}
