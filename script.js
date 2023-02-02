let body = document.querySelector('body');
const btn = document.querySelectorAll('button');
const h1 = document.querySelectorAll('h1');

const random = () => {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r},${g},${b})`;
}

function clicker() {
    for (let i of btn) {
        i.addEventListener('mouseenter', () => {
            i.style.backgroundColor = random();
            body.style.backgroundColor = random();
            let col = random();
            for (let k of h1)
                k.style.color = col;
        })
    }
}
body.onclick = () => {
    clicker();
}
setInterval(() => {
    clicker();
}, 1000)

// window.addEventListener(''