
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { useState } from "react";
import bundler from '../bundler';
import CodeEditor from '../components/code-editor';
import Preview from '../components/preview';

const CodeCell = () => {
    const [input, setInput] = useState('');
    const [code, setCode] = useState('');

    const onClick = async () => {
        const output = await bundler(input);
        setCode(output);
    }

    return (
        <div>
            <CodeEditor
                initialValue={input}
                onChange={(value) => setInput(value)}
            />
            <div>
                <button
                    onClick={onClick}
                >
                    Submit
                </button>
            </div>
            <Preview code={code} />
        </div>
    )
}

export default CodeCell;
