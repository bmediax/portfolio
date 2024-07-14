import { BmediaxCompanyResponse, BmediaxCompanyQuery, BmediaxCompanyQueryResponse } from './types'
import { BmediaxCompanyPatchDTO } from './patch.dto'
import { GenericDatabaseClass, DatabaseOptions } from '../../core/src/generic-db'
import { BMEDIAX_COMPANY_PROPS_TO_TYPES, BMEDIAX_COMPANY_PROPS_TO_IDS, BmediaxCompanyDTOProperties } from './constants'

export class BmediaxCompanyDatabase extends GenericDatabaseClass<
  BmediaxCompanyResponse,
  BmediaxCompanyPatchDTO,
  BmediaxCompanyQuery,
  BmediaxCompanyQueryResponse,
  BmediaxCompanyDTOProperties
> {
  protected notionDatabaseId: string
  
  constructor(options: DatabaseOptions) {
    super(options)

    this.notionDatabaseId = '93e2339c35f2489e9f2115cc85d978f6'
  }

  protected queryRemapFilter(filter?: Record<string, unknown>) {
    if (!filter) {
      return undefined
    }

    const notionFilter = {} as Record<string, unknown>

    Object.entries(filter).forEach(([key, value]) => {
      if (key === 'and' || key === 'or') {
        if (Array.isArray(value)) {
          notionFilter[key] = value.map((v) => this.queryRemapFilter(v))
        } else {
          throw new Error(`BmediaxCompany: Invalid filter value for ${key}: ${value}`)
        }
      } else {
        if (!(key in BMEDIAX_COMPANY_PROPS_TO_TYPES)) {
          throw new Error(`BmediaxCompany: Invalid filter key: ${key}`)
        }

        const propType = BMEDIAX_COMPANY_PROPS_TO_TYPES[key as keyof typeof BMEDIAX_COMPANY_PROPS_TO_TYPES];
        const propId = BMEDIAX_COMPANY_PROPS_TO_IDS[key as keyof typeof BMEDIAX_COMPANY_PROPS_TO_IDS];

        notionFilter['property'] = propId
        notionFilter[propType] = value
      }
    })
    
    return notionFilter
  }

  protected queryRemapSorts(sorts?: Record<string, string>[]) {
    return sorts?.map((sort) => {
      if ('property' in sort) {
        return {
          property: BMEDIAX_COMPANY_PROPS_TO_IDS[sort.property as keyof typeof BMEDIAX_COMPANY_PROPS_TO_IDS],
          direction: sort.direction,
        }
      }

      return sort
    })
  }

  protected queryRemapFilterProperties(filterProps?: string[]) {
    return filterProps?.map((p) => BMEDIAX_COMPANY_PROPS_TO_IDS[p as keyof typeof BMEDIAX_COMPANY_PROPS_TO_IDS])
  }
}
