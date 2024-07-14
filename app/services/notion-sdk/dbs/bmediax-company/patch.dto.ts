import { BmediaxCompanyResponse } from "./types"
import { UpdatePageBodyParameters,
RichTextItemRequest
} from '../../core/types/notion-api.types'

type TypeFromRecord<Obj, Type> = Obj extends Record<string, infer T> ? Extract<T, Type> : never

export type BmediaxCompanyPropertiesPatch = {
  name?: string | { text: string; url?: string; annotations?: RichTextItemRequest['annotations'] } | RichTextItemRequest[]
  industry?: BmediaxCompanyResponse['properties']['Industry']['select']['name']
  shortName?: string | { text: string; url?: string; annotations?: RichTextItemRequest['annotations'] } | RichTextItemRequest[]
  location?: string | { text: string; url?: string; annotations?: RichTextItemRequest['annotations'] } | RichTextItemRequest[]
  companyId?: string | { text: string; url?: string; annotations?: RichTextItemRequest['annotations'] } | RichTextItemRequest[]
}

  
export class BmediaxCompanyPatchDTO {
  __data: UpdatePageBodyParameters

  constructor(opts: {
    properties?: BmediaxCompanyPropertiesPatch
    coverUrl?: string
    icon?: UpdatePageBodyParameters['icon']
    archived?: UpdatePageBodyParameters['archived']
  }) {
    const { properties: props, coverUrl, icon, archived } = opts

    this.__data = {}
    this.__data.properties = {}
    this.__data.cover = coverUrl ? { type: 'external', external: { url: coverUrl } } : undefined
    this.__data.icon = icon
    this.__data.archived = archived
    
    if (props?.name !== undefined) {
      this.__data.properties['T%5CAh'] = {
        type: 'rich_text',
        rich_text: typeof props.name === 'string' ? [{ type: 'text', text: { content: props.name } }] : !Array.isArray(props.name) ? [{ type: 'text', text: { content: props.name.text, link: props.name.url ? { url: props.name.url } : undefined }, annotations: props.name.annotations }] : props.name,
      }
    }

    if (props?.industry !== undefined) {
      this.__data.properties['iwCt'] = {
        type: 'select',
        select: { name: props.industry },
      }
    }

    if (props?.shortName !== undefined) {
      this.__data.properties['jR%3Ao'] = {
        type: 'rich_text',
        rich_text: typeof props.shortName === 'string' ? [{ type: 'text', text: { content: props.shortName } }] : !Array.isArray(props.shortName) ? [{ type: 'text', text: { content: props.shortName.text, link: props.shortName.url ? { url: props.shortName.url } : undefined }, annotations: props.shortName.annotations }] : props.shortName,
      }
    }

    if (props?.location !== undefined) {
      this.__data.properties['~N%5Cs'] = {
        type: 'rich_text',
        rich_text: typeof props.location === 'string' ? [{ type: 'text', text: { content: props.location } }] : !Array.isArray(props.location) ? [{ type: 'text', text: { content: props.location.text, link: props.location.url ? { url: props.location.url } : undefined }, annotations: props.location.annotations }] : props.location,
      }
    }

    if (props?.companyId !== undefined) {
      this.__data.properties['title'] = {
        type: 'title',
        title: typeof props.companyId === 'string' ? [{ type: 'text', text: { content: props.companyId } }] : !Array.isArray(props.companyId) ? [{ type: 'text', text: { content: props.companyId.text, link: props.companyId.url ? { url: props.companyId.url } : undefined }, annotations: props.companyId.annotations }] : props.companyId,
      }
    }
  }
}
