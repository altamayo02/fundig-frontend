import { Location } from "./location.model"
import { Room } from "./room.model"
import { User } from "./user.model"

export class House {
  id: number
  location: Location
  address: string
  phoneNumber: string
  rooms: Room[]
  administrators: User[]
  handlers: User[]
}
