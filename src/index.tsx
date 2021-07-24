
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import * as esbuild from 'esbuild-wasm';
import { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import CodeEditor from './components/code-editor';
import { fetchPlugin } from './plugins/fetch-pluggin';
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';

const App = () => {
    const ref = useRef<any>();
    const iframe = useRef<any>();
    const [input, setInput] = useState('');

    const startService = async () => {
        ref.current = await esbuild.startService({
            worker: true,
            wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm'
        });
    }

    const onClick = async () => {
        if (!ref.current) {
            return;
        }

        // const result = await ref.current.transform(input, {
        //     loader: 'jsx',
        //     target: 'es2015'
        // });

        iframe.current.srcdoc = html;

        const result = await ref.current.build({
            entryPoints: ['index.js'],
            bundle: true,
            write: false,
            plugins: [
                unpkgPathPlugin(),
                fetchPlugin(input)
            ],
            define: {
                'process.env.NODE_ENV': '"production"',
                global: 'window',
            }
        })

        // setCode(result.outputFiles[0].text);
        iframe.current.contentWindow.postMessage(result.outputFiles[0].text, '*');
    }

    const html = `
      <html>
        <head>
            <body>
                <div id="root"></div>
                <script>
                    window.addEventListener('message', (event)=> {
                        try {
                            eval(event.data);
                        } catch (err) {
                            const root = document.querySelector('#root');
                            root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>'
                        }
                    }, false);
                </script>
            </body>
        </head>
      </html>
    `;

    useEffect(() => {
        startService()
    }, [])

    return (
        <div>
            <CodeEditor
                initialValue={input}
                onChange={(value) => setInput(value)}
            />
            {/* <textarea value={input} onChange={event => setInput(event.target.value)} ></textarea> */}
            <div>
                <button
                    onClick={onClick}
                >
                    Submit
                </button>
            </div>
            <iframe title="preview" ref={iframe} sandbox="allow-scripts" srcDoc={html} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
