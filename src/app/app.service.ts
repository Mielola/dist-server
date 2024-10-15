import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiUrl = environment.apiUrl
  private teleToken = environment.telegramToken
  private teleChatId = environment.telegramChatId

  constructor() { }

  async getData(query: string) {
    return await axios.get(`${this.apiUrl}query?query=${query}`).then(
      async response => {
        return response.data
      }).catch(
        async error => {
          console.error(error);
        }
      )
  }

  async sendMessage(message: string) {
    const data = {
      chat_id: this.teleChatId,
      text: message,
    };

    return await axios.post(`https://api.telegram.org/bot${this.teleToken}/sendMessage`, data).then(
      async response => {
        return response.data
      }).catch(
        async error => {
          console.error(error);
        }
      )
  }
}
