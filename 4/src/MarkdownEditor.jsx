import React, { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
  // BEGIN (write your solution here)
    const editorElementRef = useRef(null);
    const editorInstanceRef = useRef(null);
    useEffect(() => {
        const editorInstance = new Editor({
            el: editorElementRef.current,
            hideModeSwitch: true,
        });
        editorInstanceRef.current = editorInstance;
        const handleChange = () => {
            const markdownContent = editorInstance.getMarkdown();
            onContentChange(markdownContent);
        };
        editorInstance.addHook('change', handleChange);

        return () => {
            if (editorInstanceRef.current) {
                editorInstanceRef.current.destroy();
            }
        };
    }, [onContentChange]);

    return <div ref={editorElementRef} />;
  // END
};

export default MarkdownEditor;
