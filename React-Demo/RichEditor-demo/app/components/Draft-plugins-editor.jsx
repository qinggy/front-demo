import React from 'react';
import Editor from 'draft-js-plugins-editor';
import {
  EditorState,
} from 'draft-js';
import createImagePlugin from 'draft-js-image-plugin';


const imagePlugin = createImagePlugin();

// The Editor accepts an array of plugins. In this case, only the imagePlugin
// is passed in, although it is possible to pass in multiple plugins.
class MyDraftEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange() {

  }

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        editorState={editorState}
        onChange={this.onChange}
        plugins={[imagePlugin]}
      />
    );
  }
};

export default MyDraftEditor;