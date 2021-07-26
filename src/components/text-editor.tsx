import MDEditor from '@uiw/react-md-editor';
import { useEffect, useRef, useState } from 'react';
import './text-editor.css';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

const TextEditor: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [value, setValue] = useState('# Header');
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (ref.current && event.target && ref.current.contains(event.target as Node)) {
                return;
            }
            setEditing(false);
        }

        document.addEventListener('click', listener, { capture: true });

        return () => {
            document.removeEventListener('click', listener, { capture: true })
        }
    });

    return (
        <>
            {!editing
                ?
                <div className="text-editor" onClick={() => setEditing(true)}>
                    <div className="card-content card">
                        <MDEditor.Markdown source={value} />
                    </div>
                </div>
                :
                <div className="text-editor" ref={ref}>
                    <MDEditor
                        value={value}
                        onChange={(value) => { setValue(value || '') }}
                    />
                </div>
            }


        </>
    )
}

export default TextEditor;