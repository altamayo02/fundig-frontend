import { ServiceExecution } from "./service-execution.model";

export class TransportExecution extends ServiceExecution {
  from: Location
  to: Location
}
