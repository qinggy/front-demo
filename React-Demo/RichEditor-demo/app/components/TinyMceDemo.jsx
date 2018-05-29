import React from 'react';
import TinyMCE from 'react-tinymce';
import style from './draft.css';

class TinyMceDemo extends React.Component {
  constructor(props) {
    super(props);
    this.editorConfig = {
      height: 500,
      width: '60%',
      plugins: [
        'lists  link  image code paste textcolor',
      ],
      //toolbar: false, //不显示toolbar
      toolbar: 'fontsizeselect | undo redo bold italic underline forecolor backcolor | bullist numlist | alignleft aligncenter alignright | link unlink image | removeformat code ',
      menubar: false,
      theme: 'modern',
      branding: false,
      convert_urls: false,
      relative_urls: false,
      invalid_elements: 'form,iframe,noscript,object',
      // setup: (editor) => {
      //   editor.addButton('fullScreen', {
      //     title: 'FullScreen',
      //     icon: 'image',
      //     onclick: () => {
      //       editor.execCommand('mceFullScreen');
      //     },
      //   });
      //   this.editor = editor;
      // },
      statusbar: false,
    };
    this.onTinyMCEContentChanged = this.onTinyMCEContentChanged.bind(this);
  }

  onTinyMCEContentChanged(content) {
    this.props.setTinyMsg(content);
  }

  render() {
    return (<div className="tinymce">
      <TinyMCE
        content={''}
        config={this.editorConfig}
        onChange={e => this.onTinyMCEContentChanged(e.target.getContent())}
      />
    </div>);
  }
}

export default TinyMceDemo;