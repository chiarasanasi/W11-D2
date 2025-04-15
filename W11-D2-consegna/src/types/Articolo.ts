export interface Articolo {
  id: number
  title: string
  authors: any[]
  url: string
  image_url: string
  news_site: string
  summary: string
  published_at: Date
  updated_at: Date
  featured: boolean
  launches: any[]
  events: any[]
}
