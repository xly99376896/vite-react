import React from 'react'
import { useEffect, useRef } from 'react'
import tinymce from 'tinymce'

const PLUGIN = [
  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'noneditable', 'pagebreak',
  'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'directionality',
  'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount', 'quickbars', 'codesample'
]

const TOOLBAR = 'code undo redo | blocks fontfamily fontsize lineheight | removeformat bold italic underline forecolor backcolor | bullist numlist |' +
'indent alignleft aligncenter alignright alignjustify | hr pagebreak blockquote codesample link | insertdatetime | table | print'

export default function Editor(props) {

  const { getEditor, onChange = () => {}, onBlur = () => {}, height = 500, initialContent, editorProps = {} } = props

  const textNode = useRef(null)
  
  useEffect(() => {
    tinymce.init({
        target: textNode.current,
        suffix: '.min',
        language: 'zh-CN',
        base_url: `./js/tinymce`,
        height,
        menubar: false,
        branding: false,
        promotion: false,
        plugins: PLUGIN,
        toolbar: TOOLBAR,
        toolbar_mode: 'wrap',
        quickbars_insert_toolbar: false,
        readonly: false,
        line_height_formats: '1 1.25 1.5 1.75 2 2.5 3 4 5',
        font_size_formats: '10px 12px 14px 16px 20px 24px 28px 36px',
        content_style: 'body { font-size:14px }',
        font_family_formats: "微软雅黑=\'微软雅黑\';宋体=\'宋体\';黑体=\'黑体\';仿宋=\'仿宋\';楷体=\'楷体\';隶书=\'隶书\';幼圆=\'幼圆\';Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Courier New=courier new,courier;Georgia=georgia,palatino;Webdings=webdings;Wingdings=wingdings",
        pagebreak_split_block: true,
        codesample_languages: [
            { text: 'HTML/XML', value: 'markup' },
            { text: 'JavaScript', value: 'javascript' },
            { text: 'CSS', value: 'css' },
            { text: 'PHP', value: 'php' },
            { text: 'Ruby', value: 'ruby' },
            { text: 'Python', value: 'python' },
            { text: 'Java', value: 'java' },
            { text: 'C', value: 'c' },
            { text: 'C#', value: 'csharp' },
            { text: 'C++', value: 'cpp' }
        ],
        ...editorProps
    }).then(([editor]) => {
        getEditor(editor)
        editor.on('Change', function(e) {
            onChange(e)
        });
        editor.on('blur', function(e) {
            onBlur(e)
        });
    }).catch(err => {
        console.error(err)
    })
  }, [])

  return (
      <textarea ref={textNode}>{initialContent}</textarea>
  );
}