type ClassValue = string | false | null | undefined

export const cn = (...values: ClassValue[]) => values.filter(Boolean).join(" ")
