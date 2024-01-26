import { python } from '@codemirror/lang-python';
import { EditorState, basicSetup } from '@codemirror/basic-setup';
import { EditorView } from '@codemirror/view';

const startEditor = () => {
    const view = new EditorView({
        state: EditorState.create({
            doc: 'print("Hello, world!")',
            extensions: [basicSetup, python()],
        }),
        parent: document.body,
    });
};

startEditor();
