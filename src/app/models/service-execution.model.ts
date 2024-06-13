import { Camera } from "./camera.model"
import { Message } from "./message.model"
import { Review } from "./review.model"
import { Room } from "./room.model"
import { Service } from "./service.model"
import { User } from "./user.model"

export class ServiceExecution {
  id: number
  cost: number
  note: string
  // TODO - Dates
  startedAt: string
  // TODO - Dates
  endedAt: string
  deceased: User
  service: Service
  reviews: Review[]
}
