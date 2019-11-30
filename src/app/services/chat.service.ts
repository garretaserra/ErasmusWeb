import * as io from 'socket.io-client';

export class ChatService {
  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    this.socket = io(this.url, {query: 'name=izanpc'});
    // TODO: Get username logged session
  }

  public sendMessage(message) {
    this.socket.emit('message', message);
  }
}
