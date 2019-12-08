import * as io from 'socket.io-client';

export class ChatService {
  private url = 'http://localhost:3000';
  private socket;

  constructor() { }

  public connectSocket(email: string) {
    this.socket = io(this.url, {query: 'email=' + email});
  }

  public sendMessage(message, destination) {
    this.socket.emit('message', { message, destination});
  }
}
