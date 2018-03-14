import React from 'react';
import Editor from 'draft-js-plugins-editor';
import {
  EditorState,
} from 'draft-js';
import createImagePlugin from 'draft-js-image-plugin';
import createUndoPlugin from 'draft-js-undo-plugin';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';

const imagePlugin = createImagePlugin();
const undoPlugin = createUndoPlugin();
const inlineToolbarPlugin = createInlineToolbarPlugin();
const { UndoButton, RedoButton } = undoPlugin;

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

  onChange(editorState) {
    this.setState({ editorState });
  }

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState}
          onChange={this.onChange}
          plugins={[imagePlugin, undoPlugin, inlineToolbarPlugin]}
        />
        <UndoButton />
        <RedoButton />
      </div>
    );
  }
};

export default MyDraftEditor;