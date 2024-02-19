import type { CustomerInterface } from './CustomerInterface'
import type { UserInterface } from './UserInterface'

export interface RentalsInterface {
  id: number
  customer: string;
  movies: string[]
  dateStartRent: string
  dateEndRent: string
  user: UserInterface
  status: 'rent' | 'delivered'
}
