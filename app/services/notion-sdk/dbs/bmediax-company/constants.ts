export const BMEDIAX_COMPANY_PROP_VALUES = {
"industry": [
  "Sports"
] as const,
}

export const BMEDIAX_COMPANY_PROPS_TO_IDS = {
  "name": "T%5CAh",
  "industry": "iwCt",
  "shortName": "jR%3Ao",
  "location": "~N%5Cs",
  "companyId": "title"
} as const
export const BMEDIAX_COMPANY_IDS_TO_PROPS = {
  "T%5CAh": "name",
  "iwCt": "industry",
  "jR%3Ao": "shortName",
  "~N%5Cs": "location",
  "title": "companyId"
} as const
export const BMEDIAX_COMPANY_PROPS_TO_TYPES = {
  "name": "rich_text",
  "industry": "select",
  "shortName": "rich_text",
  "location": "rich_text",
  "companyId": "title"
} as const

  export type BmediaxCompanyDTOProperties = keyof typeof BMEDIAX_COMPANY_PROPS_TO_IDS
  