import { Message } from "./message.model";
import { ServiceExecution } from "./service-execution.model";

export class ChatExecution extends ServiceExecution {
  access_code: string
  messages?: Message[]
}
