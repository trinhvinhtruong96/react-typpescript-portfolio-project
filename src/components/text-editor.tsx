import 'bulmaswatch/superhero/bulmaswatch.min.css';
import MDEditor from '@uiw/react-md-editor';
import { useEffect, useRef, useState } from 'react';
import './text-editor.css';
import { Cell } from '../state';
import { useActions } from '../hooks/use-actions';

interface TextEditorProps {
    cell: Cell
}

const TextEditor: React.FC<TextEditorProps> = ({ cell }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [editing, setEditing] = useState(false);
    const { updateCell } = useActions();

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
                        <MDEditor.Markdown source={cell.content || 'Click to edit'} />
                    </div>
                </div>
                :
                <div className="text-editor" ref={ref}>
                    <MDEditor
                        value={cell.content}
                        onChange={(value) => updateCell(cell.id, value || '')}
                    />
                </div>
            }
        </>
    )
}

export default TextEditor;