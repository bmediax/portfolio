import { BmediaxCompanyResponse } from "./types"

export class BmediaxCompanyResponseDTO {
  __data: BmediaxCompanyResponse
  id: BmediaxCompanyResponse['id']
  title: BmediaxCompanyResponse['title']
  description: BmediaxCompanyResponse['description']
  parent: BmediaxCompanyResponse['parent']
  createdBy: BmediaxCompanyResponse['created_by']
  lastEditedBy: BmediaxCompanyResponse['last_edited_by']
  createdTime: BmediaxCompanyResponse['created_time']
  lastEditedTime: BmediaxCompanyResponse['last_edited_time']
  isInline: BmediaxCompanyResponse['is_inline']
  archived: BmediaxCompanyResponse['archived']
  url: BmediaxCompanyResponse['url']
  publicUrl: BmediaxCompanyResponse['public_url']
  properties: BmediaxCompanyPropertiesResponseDTO

  constructor(res: BmediaxCompanyResponse) {
    this.__data = res
    this.id = res.id
    this.title = res.title
    this.description = res.description
    this.parent = res.parent
    this.createdBy = res.created_by
    this.lastEditedBy = res.last_edited_by
    this.createdTime = res.created_time
    this.lastEditedTime = res.last_edited_time
    this.isInline = res.is_inline
    this.archived = res.archived
    this.url = res.url
    this.publicUrl = res.public_url
    this.properties = new BmediaxCompanyPropertiesResponseDTO(res.properties)
  }

  get cover() {
    return {
      type: this.__data.cover?.type,
      url: this.__data.cover?.type === 'external' ? this.__data.cover?.external?.url : this.__data.cover?.file?.url,
    }
  }

  get icon() {
    return {
      type: this.__data.icon?.type,
      url:
        this.__data.icon?.type === 'external'
          ? this.__data.icon?.external?.url
          : this.__data.icon?.type === 'file'
            ? this.__data.icon?.file?.url
            : undefined,
      emoji: this.__data.icon?.type === 'emoji' ? this.__data.icon?.emoji : undefined,
    }
  }
}
  
export class BmediaxCompanyPropertiesResponseDTO {
  __props: BmediaxCompanyResponse['properties']
  __data

  constructor(props: BmediaxCompanyResponse['properties']) {
    this.__props = props
    this.__data = {
      name: this.__props['Name'],
      industry: this.__props['Industry'],
      shortName: this.__props['Short Name'],
      location: this.__props['Location'],
      companyId: this.__props['Company Id'],
    }
  }


  get name() {
    return {
      text: this.__props['Name']?.rich_text ? this.__props['Name'].rich_text.reduce((acc, item) => acc + item.plain_text, '') : undefined,
      links: this.__props['Name']?.rich_text ? this.__props['Name'].rich_text.filter((item) => item.href?.length).map((item) => item.href) : [],
      rich_text: this.__props['Name']?.rich_text,
    }
  }

  get industry() {
    return this.__props['Industry']?.select
  }

  get shortName() {
    return {
      text: this.__props['Short Name']?.rich_text ? this.__props['Short Name'].rich_text.reduce((acc, item) => acc + item.plain_text, '') : undefined,
      links: this.__props['Short Name']?.rich_text ? this.__props['Short Name'].rich_text.filter((item) => item.href?.length).map((item) => item.href) : [],
      rich_text: this.__props['Short Name']?.rich_text,
    }
  }

  get location() {
    return {
      text: this.__props['Location']?.rich_text ? this.__props['Location'].rich_text.reduce((acc, item) => acc + item.plain_text, '') : undefined,
      links: this.__props['Location']?.rich_text ? this.__props['Location'].rich_text.filter((item) => item.href?.length).map((item) => item.href) : [],
      rich_text: this.__props['Location']?.rich_text,
    }
  }

  get companyId() {
    return {
      text: this.__props['Company Id']?.title ? this.__props['Company Id'].title.reduce((acc, item) => acc + item.plain_text, '') : undefined,
      links: this.__props['Company Id']?.title ? this.__props['Company Id'].title.filter((item) => item.href?.length).map((item) => item.href) : [],
      title: this.__props['Company Id']?.title,
    }
  }
}
