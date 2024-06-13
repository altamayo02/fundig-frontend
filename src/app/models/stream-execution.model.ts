import { Camera } from "./camera.model";
import { Room } from "./room.model";
import { ServiceExecution } from "./service-execution.model";

export class StreamExecution extends ServiceExecution {
  cameras: Camera[]
  room?: Room
}
