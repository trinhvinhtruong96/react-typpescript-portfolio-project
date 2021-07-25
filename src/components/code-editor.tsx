import './code-editor.css';
import './syntax.css';
import MonacoEditor, { OnMount } from '@monaco-editor/react';
import { useRef } from 'react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import codeShift from 'jscodeshift';
import Highlighter from 'monaco-jsx-highlighter';

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

        const highlighter = new Highlighter(
            // @ts-ignore
            monaco,
            codeShift,
            editor
        );

        highlighter.highLightOnDidChangeModelContent(
            () => { },
            () => { },
            undefined,
            () => { }
        );

    }

    const onFormatClick = () => {
        const unformatted = editorRef.current.getValue();
        const formatted = prettier.format(unformatted, {
            parser: 'babel',
            plugins: [parser],
            useTabs: false,
            semi: true,
            singleQuote: true,
        }).replace(/\n$/, "");
        editorRef.current.setValue(formatted);
    }

    return (
        <div className="editor-wrapper">
            <button
                className="button button-format is-primary is-small"
                onClick={onFormatClick}
            >Format
            </button>
            <MonacoEditor
                value={initialValue}
                onMount={handleOnMount}
                theme="vs-dark"
                language="javascript"
                height="100%"
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