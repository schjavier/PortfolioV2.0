import {inject, Injectable} from '@angular/core';
import {ContactRequest} from '../interfaces/contact-request';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SendMail {

  httpClient : HttpClient = inject(HttpClient)
  private url = "http://localhost:8080/send/MS65-74-8-55-35-1038";

  public sendMail(contactRequest:ContactRequest){
      return this.httpClient.post(this.url, contactRequest)
  }

}
