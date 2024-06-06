import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { EventEmitter } from 'stream';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService extends Socket {
  callback: EventEmitter
  eventName: string

  constructor(
    private theSecurityService: SecurityService
  ) {
    super({
      url: environment.url_ms_business,
      options: {
        query: {
          token: theSecurityService.getSessionData()
        }
      }
    })
    this.callback = new EventEmitter()
    this.eventName = ''
  }

  setEventName(eventName: string) {
    this.eventName = eventName
  }

  listen() {
    this.ioSocket.on(this.eventName, (response: any) => {
      this.callback.emit(response)
    })
  }
}
