import React from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

export default function MockTest() {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data='<p>이곳에 입력하세요!</p>'
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(data);
        }}
      />
    </div>
  );
}
