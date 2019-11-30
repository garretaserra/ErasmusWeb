import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat.service';

@Component({
  selector: 'app-chatwidget',
  templateUrl: './chatwidget.component.html',
  styleUrls: ['./chatwidget.component.css']
})
export class ChatwidgetComponent implements OnInit {

  message: string;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

}
