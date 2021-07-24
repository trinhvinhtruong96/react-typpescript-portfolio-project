import MonacoEditor, { OnMount } from '@monaco-editor/react';
import { useRef } from 'react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';

interface CodeEditorProps {
    initialValue: string,
    onChange(value: string): void,
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {

    const editorRef = useRef<any>()

    const handleOnMount: OnMount = (editor, monaco) => {
        editorRef.current = editor;
        editor.onDidChangeModelContent(() => {
            onChange(editor.getValue());
        });

        editor.getModel()?.updateOptions({ tabSize: 2 });

    }

    const onFormatClick = () => {
        const unformatted = editorRef.current.getValue();
        const formatted = prettier.format(unformatted, {
            parser: 'babel',
            plugins: [parser],
            useTabs: false,
            semi: true,
            singleQuote: true,
        });
        editorRef.current.setValue(formatted);
    }

    return (
        <div>
            <button onClick={onFormatClick}>Format</button>
            <MonacoEditor
                value={initialValue}
                onMount={handleOnMount}
                theme="vs-dark"
                language="javascript"
                height="500px"
                options={{
                    wordWrap: "on",
                    minimap: { enabled: false },
                    showUnused: false,
                    folding: false,
                    lineNumbersMinChars: 3,
                    fontSize: 16,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    tabSize: 2
                }}
            />
        </div>
    )
}

export default CodeEditor;