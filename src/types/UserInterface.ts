export interface UserInterface {
  id: number
  name: string
  document: string
  password: string
  status: 'active' | 'inactive'
}
