
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { useEffect, useState } from "react";
import bundler from '../bundler';
import CodeEditor from '../components/code-editor';
import Preview from '../components/preview';
import Resizable from './resizable';

const CodeCell = () => {
    const [input, setInput] = useState('');
    const [code, setCode] = useState('');

    // const onClick = async () => {
    //     const output = await bundler(input);
    //     setCode(output);
    // }

    useEffect(() => {
        const timer = setTimeout(async () => {
            const output = await bundler(input);
            setCode(output);
        }, 1000);

        return () => {
            clearTimeout(timer);
        }
    }, [input])

    return (
        <Resizable direction="vertical">
            <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
                <Resizable direction="horizontal">
                    <CodeEditor
                        initialValue={input}
                        onChange={(value) => setInput(value)}
                    />
                </Resizable>
                {/* <div>
                    <button
                        onClick={onClick}
                    >
                        Submit
                    </button>
                </div> */}
                <Preview code={code} />
            </div>
        </Resizable>
    )
}

export default CodeCell;
