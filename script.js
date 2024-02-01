const sanitizeInput = (input) => {
    return DOMPurify.sanitize(input);
};

const html_code = document.getElementById('html_section');
const css_code = document.getElementById('css_section');
const js_code = document.getElementById('js_section');

const run_btn = document.getElementById('run_btn');
const clear_btn = document.getElementById('clear_btn');
const download_btn = document.getElementById('download_btn');

const previewFrame = document.getElementById('preview');
const output = document.getElementById('output');

try {
    // Load code from localStorage
    html_code.value = sanitizeInput(localStorage.getItem('html')) || '';
    css_code.value = sanitizeInput(localStorage.getItem('css')).replace('<style>', '').replace('</style>', '').replace('</>', '');
    js_code.value = sanitizeInput(localStorage.getItem('js')).replace('<script>', '').replace('</script>', '');
} catch (error) {
    console.error('Error loading code from localStorage:', error);
}

const update = () => {
    try {
        const html = sanitizeInput(html_code.value);
        const css = `<style>${sanitizeInput(css_code.value)}</style>`;
        const js = `<script>${sanitizeInput(js_code.value)}</script>`;

        localStorage.setItem('html', html);
        localStorage.setItem('css', css);
        localStorage.setItem('js', js);

        const code = `${html}\n${css}\n${js}`;
        output.innerHTML = code;
    } catch (error) {
        console.error('Error updating code and localStorage:', error);
    }
};

const clear = () => {
    html_code.value = '';
    css_code.value = '';
    js_code.value = '';
    update();
};

run_btn.addEventListener('click', () => {
    update();
});

clear_btn.addEventListener('click', () => {
    clear();
});

const download = () => {
    try {
        const html = sanitizeInput(html_code.value);
        const css = sanitizeInput(css_code.value);
        const js = sanitizeInput(js_code.value);

        const code = `HTML CODE:\n${html}\n\nCSS CODE:\n${css}\n\nJS CODE:\n${js}`;

        const blob = new Blob([code], { type: 'text/javascript' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'code.txt';
        a.click();
    } catch (error) {
        console.error('Error generating download:', error);
    }
};
