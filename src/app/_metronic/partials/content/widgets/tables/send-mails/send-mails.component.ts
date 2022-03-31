import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { init } from '@emailjs/browser';
init("Ye6Wv42wPH1xZNKwp");

@Component({
  selector: 'app-send-mails',
  templateUrl: './send-mails.component.html',
  styleUrls: ['./send-mails.component.scss']
})
export class SendMailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_k9b194s', 'template_4opqtyf', e.target as HTMLFormElement, 'Ye6Wv42wPH1xZNKwp')
      .then((result: EmailJSResponseStatus) => {
        console.log("email send", result.text);
      }, (error) => {
        console.log("email not send", error.text);
      });
  }
}