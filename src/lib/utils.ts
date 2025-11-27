import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirst(str: string) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const CODE_REGEX = /^[A-Z0-9]{9}$/;

function normalizeCode(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const normalized = raw.trim().toUpperCase();
  return normalized.length ? normalized : null;
}

export function parseCreatorCode(
  raw: string | null | undefined,
): string | null {
  const normalized = normalizeCode(raw);
  if (!normalized) return null;
  return CODE_REGEX.test(normalized) ? normalized : null;
}
