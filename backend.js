const html_code = document.getElementById('html_section');
const css_code = document.getElementById('css_section');
const js_code = document.getElementById('js_section');

const run_btn = document.getElementById('run_btn');
const clear_btn = document.getElementById('clear_btn');
const download_btn = document.getElementById('download_btn');

const previewFrame = document.getElementById('preview');
const output = document.getElementById('output');

const Update = () => {
    const html = html_code.value;
    const css = `<style>${css_code.value}</style>`
    const js = `<script>${js_code.value}</script>`

    const code = `${html}\n${css}\n${js}`
    output.innerHTML = code;
};

run_btn.addEventListener('click', () => {
    Update();
});

const Clear = () => {
    html_code.value = '';
    css_code.value = '';
    js_code.value = '';
}

clear_btn.addEventListener('click', () => {
    Clear();
    Update();
});

const download = () => {
    const html = html_code.value;
    const css = css_code.value;
    const js = js_code.value;

    const code = `HTML CODE:\n${html}\n\nCSS CODE:\n${css}\n\nJS CODE:\n${js}`;

    const blob = new Blob([code], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = "code.txt";
    a.click();

}