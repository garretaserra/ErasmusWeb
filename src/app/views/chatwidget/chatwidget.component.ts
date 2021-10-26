import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-chatwidget',
  templateUrl: './chatwidget.component.html',
  styleUrls: ['./chatwidget.component.css']
})
export class ChatwidgetComponent implements OnInit {

  message: string;
  user: User;
  userList: [];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.user.email);
    this.chatService.connectSocket(this.user.email);
  }

  onKey(event: any) {
    this.message = event.target.value;
  }

  sendMessage() {
    console.log(this.message);
    this.chatService.sendMessage(this.message, 'Sheila');
  }

}
