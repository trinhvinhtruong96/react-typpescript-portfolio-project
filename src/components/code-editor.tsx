import MonacoEditor, { OnChange } from '@monaco-editor/react';
import { useRef } from 'react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';

interface CodeEditorProps {
    initialValue: string,
    onChange(value: string): void,
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {

    const editorRef = useRef<any>()

    const handleEditorChange: OnChange = (value, event) => {
        editorRef.current = event;
        if (value) {
            onChange(value);
        }
    }

    const onFormatClick = () => {
        console.log(editorRef);
    }

    return (
        <div>
            <button onClick={onFormatClick}>Format</button>
            <MonacoEditor
                value={initialValue}
                onChange={handleEditorChange}
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