import { Component, OnInit } from '@angular/core';
import { ChatWSService } from './../services/chat-ws.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  title = 'Websocket Angular client ';
  userName: string;
  message: string;
  output: any[] = [];
  feedback: string;

  constructor(private chatService: ChatWSService) { }
  ngOnInit(): void {
    this.chatService.listen('typing').subscribe(data => {
      this.updateFeedback(data);
    });
    this.chatService.listen('chat').subscribe(data => {
      this.updateMessage(data);
    });
  }
  updateMessage(data: any) {
    this.feedback = '';
    if (!!!data) {
      return;
    }
    console.log(`${data.handle} : ${data.message}`);
    this.output.push(data);
  }

  updateFeedback(data: any){
    this.feedback = `${data} is typing a message`;
  }

  messageTyping(): void {
    this.chatService.emit('typing', this.userName);
  }

  sendMessage(): void {
    this.chatService.emit('chat', {
      message: this.message,
      handle: this.userName
    });
    this.message = '';
  }

}

