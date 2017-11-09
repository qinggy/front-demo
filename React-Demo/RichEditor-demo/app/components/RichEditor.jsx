import React from 'react';
import classNames from 'classnames';
import DraftDemo from './DraftDemo.jsx';
import TinyMceDemo from './TinyMceDemo.jsx';
import SendEmailService from '../servicePack/sendEmail';

class RichEditor extends React.Component {
  constructor(props) {
    super(props);
    this.tinymceContent = "";
    this.state = {
      ifShowTiny: false,
      ifShowDraft: false,
      subject: 'Test',
      receivers: 'angus@comm100.com;frank@comm100.com;fengchufu@163.com',
    };
    this.showTinyMCE = this.showTinyMCE.bind(this);
    this.showDraft = this.showDraft.bind(this);
    this.onSendEmail = this.onSendEmail.bind(this);
    this.setTinyMsg = this.setTinyMsg.bind(this);
    this.subjectChanged = this.subjectChanged.bind(this);
    this.receiversChanged = this.receiversChanged.bind(this);
    this.sendEmailService = new SendEmailService();
  }

  showTinyMCE() {
    this.setState({
      ifShowTiny: true,
      ifShowDraft: false,
    });
  }

  showDraft() {
    this.setState({
      ifShowTiny: false,
      ifShowDraft: true,
    });
  }

  setTinyMsg(value) {
    this.tinymceContent = value;
    console.log(this.tinymceContent);
  }

  subjectChanged(value) {
    this.setState({
      subject: value,
    });
  }

  receiversChanged(value) {
    this.setState({
      receivers: value,
    });
  }

  onSendEmail() {
    const { subject, receivers } = this.state;
    const sendContent = { 'content': this.tinymceContent, 'receivers': receivers, 'subject': subject };
    this.sendEmailService.sendEmail(sendContent);
  }

  render() {
    const { ifShowTiny, ifShowDraft, tinymceContent, subject, receivers } = this.state;
    return (
      <div>
        <p className="demolink" onClick={this.showTinyMCE}>TinyMCE RichEditor Demo</p>
        <p className="demolink" onClick={this.showDraft}>Draft RichEditor Demo</p>
        <div className="divInput"><span>Subject</span>
          <input type="text" className="input margin-right"
            value={subject}
            onChange={(e) => this.subjectChanged(e.target.value)} /></div>
        <div className="divInput margin-bottom"><span>Receivers</span>
          <input type="text" className="input"
            value={receivers}
            onChange={(e) => this.receiversChanged(e.target.value)} /></div>
        <div>
          <div className={classNames("hidden ", ifShowTiny ? 'visiable' : '')}>
            <TinyMceDemo
              setTinyMsg={this.setTinyMsg} /></div>
          <div className={classNames("hidden ", ifShowDraft ? 'visiable' : '')}>
            <DraftDemo /></div>
        </div>
        <input type="button" value="Send Email" className="btn btnblue"
          onClick={() => {
            this.onSendEmail();
          }} />
      </div >
    );
  }
}

export default RichEditor;