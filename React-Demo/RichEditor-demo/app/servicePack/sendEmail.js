import SendEmailService from '../services/sendEmail';
import { apiServer } from '../config';

export default class SendEmialSP {
  constructor() {
    const path = apiServer;
    this.sendEmailService = new SendEmailService(path);
  }

  sendEmail(data) {
    this.sendEmailService.sendEmail(data)
      .then(data =>
        console.log(data)
      ).catch(console.log('Error sending data'));
  }
}