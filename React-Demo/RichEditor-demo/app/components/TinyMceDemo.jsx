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
      ],
      toolbar: 'fontsizeselect | undo redo bold italic underline forecolor | bullist numlist | alignleft aligncenter alignright | link image table | removeformat code',
      menubar: false,
      theme: 'modern',
      branding: false,
      convert_urls: false,
      relative_urls: false,
      table_toolbar: '',
      invalid_elements: 'form,iframe,noscript,object',
      setup: (editor) => {
        editor.addButton('imageselector', {
          title: 'Insert Image',
          icon: 'image',
          //onclick: this.popupImageSelector,
        });
        this.editor = editor;
      },
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