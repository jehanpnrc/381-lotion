import {useQuill} from 'react-quill';
import 'quill/dist/quill.snow.css';

function Editor() {
    const { quill, quillRef } = useQuill;
    return (
        <div>
            <div style ={{width: 500, height: 300}}>
                <div ref={quillRef} />
            </div>
        </div>
    );
}

export default Editor;