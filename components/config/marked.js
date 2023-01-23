import hljs from '~/static/js/hightlight';
import marked from '~/static/js/marked';


const renderer = new marked.Renderer();

export default marked.setOptions({
    renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
    }
})
