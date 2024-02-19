export interface TableHeaderInterface {
  prop: string
  label: string
  actions?: string[] | undefined
  isObject?: boolean
  objectFields?: string[]
  isBadge?: boolean
}
