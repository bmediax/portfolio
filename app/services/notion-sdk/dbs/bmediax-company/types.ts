import { WithOptional, Join, PathsToStringProps } from '../../core/types/helper.types'
import {
DatabaseObjectResponse,
StringRequest,
RichTextPropertyItemObjectResponse,
SelectPropertyItemObjectResponse,
TitlePropertyItemObjectResponse,
ExistencePropertyFilter,
QueryDatabaseBodyParameters,
TimestampCreatedTimeFilter,
TimestampLastEditedTimeFilter,
TextPropertyFilter
} from '../../core/types/notion-api.types'
import { BMEDIAX_COMPANY_PROPS_TO_IDS } from './constants'

export interface BmediaxCompanyResponse extends WithOptional<Omit<DatabaseObjectResponse, 'properties'>, 'title'| 'description'| 'is_inline'| 'url'| 'public_url'> {
  properties: {
    "Name": RichTextPropertyItemObjectResponse,
    "Industry": Omit<SelectPropertyItemObjectResponse, 'select'> & { select: { id: StringRequest, name: 'Sports', color: 'yellow' }},
    "Short Name": RichTextPropertyItemObjectResponse,
    "Location": RichTextPropertyItemObjectResponse,
    "Company Id": TitlePropertyItemObjectResponse
  }
}

export type BmediaxCompanyResponseProperties = keyof BmediaxCompanyResponse['properties']
export type BmediaxCompanyPath = Join<PathsToStringProps<BmediaxCompanyResponse>>

type BmediaxCompanyNamePropertyFilter = TextPropertyFilter

export type BmediaxCompanyIndustryPropertyType = BmediaxCompanyResponse['properties']['Industry']['select']['name']

type BmediaxCompanyIndustryPropertyFilter =
  | {
      equals: BmediaxCompanyIndustryPropertyType
    }
  | {
      does_not_equal: BmediaxCompanyIndustryPropertyType
    }
  | ExistencePropertyFilter      

type BmediaxCompanyShortNamePropertyFilter = TextPropertyFilter
type BmediaxCompanyLocationPropertyFilter = TextPropertyFilter
type BmediaxCompanyCompanyIdPropertyFilter = TextPropertyFilter

export type BmediaxCompanyPropertyFilter = { name: BmediaxCompanyNamePropertyFilter } | { industry: BmediaxCompanyIndustryPropertyFilter } | { shortName: BmediaxCompanyShortNamePropertyFilter } | { location: BmediaxCompanyLocationPropertyFilter } | { companyId: BmediaxCompanyCompanyIdPropertyFilter }

export type BmediaxCompanyQuery = Omit<QueryDatabaseBodyParameters, 'filter' | 'sorts'> & {
  sorts?: Array<
  | {
      property: keyof typeof BMEDIAX_COMPANY_PROPS_TO_IDS
      direction: 'ascending' | 'descending'
    }
  | {
      timestamp: 'created_time' | 'last_edited_time'
      direction: 'ascending' | 'descending'
    }
  >
  filter?:
    | {
        or: Array<
          | BmediaxCompanyPropertyFilter
          | TimestampCreatedTimeFilter
          | TimestampLastEditedTimeFilter
          | {
              // or: BmediaxCompanyQuery['filter']
              or: Array<BmediaxCompanyPropertyFilter>
            }
          | {
              // and: BmediaxCompanyQuery['filter']
              and: Array<BmediaxCompanyPropertyFilter>
            }
        >
      }
    | {
        and: Array<
          | BmediaxCompanyPropertyFilter
          | TimestampCreatedTimeFilter
          | TimestampLastEditedTimeFilter
          | {
              // or: BmediaxCompanyQuery['filter']
              or: Array<BmediaxCompanyPropertyFilter>
            }
          | {
              // and: BmediaxCompanyQuery['filter']
              and: Array<BmediaxCompanyPropertyFilter>
            }
        >
      }
    | BmediaxCompanyPropertyFilter
    | TimestampCreatedTimeFilter
    | TimestampLastEditedTimeFilter
}

export type BmediaxCompanyQueryFilter = BmediaxCompanyQuery['filter']

export type BmediaxCompanyQueryResponse = {
  results: BmediaxCompanyResponse[]
  next_cursor: string | null
  has_more: boolean
}

