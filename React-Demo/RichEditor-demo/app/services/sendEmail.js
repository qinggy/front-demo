import Client from './restClient';

export default class SendEmailService {
  constructor(server) {
    this.client = new Client(`${server}/SendEmail`);
  }

  sendEmail(data) {
    return this.client.addItem(data, '');
  }
}