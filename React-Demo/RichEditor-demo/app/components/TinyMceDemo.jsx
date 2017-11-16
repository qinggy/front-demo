import React from 'react';
import TinyMCE from 'react-tinymce';

class TinyMceDemo extends React.Component {
  constructor(props) {
    super(props);
    this.editorConfig = {
      height: 500,
      width: '60%',
      plugins: [
        'lists link image',
        'code',
        'table paste textcolor',
        'fullscreen',
      ],
      //toolbar: false, //不显示toolbar
      toolbar: 'fontsizeselect | undo redo bold italic underline forecolor backcolor | bullist numlist | alignleft aligncenter alignright | link unlink image table | removeformat code fullscreen ',
      menubar: false,
      theme: 'modern',
      branding: false,
      convert_urls: false,
      relative_urls: false,
      table_toolbar: '',
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
    return (<div>
      <div>
        <div className="tinymce">
          <TinyMCE
            content={''}
            config={this.editorConfig}
            onChange={e => this.onTinyMCEContentChanged(e.target.getContent())}
          />
        </div>
      </div>
    </div>);
  }
}

export default TinyMceDemo;