//console.log(window);
setInterval(printTime, 1000);

function printTime() {
    const d = new Date();

    let h = d.getHours();
    h < 10 ? h = '0'+ d.getHours() : d.getHours();

    let m = d.getMinutes();
    m < 10 ? m = '0'+ d.getMinutes() : d.getHours();

    let s = d.getSeconds();
    s < 10 ? s = '0'+ d.getSeconds() : d.getHours();

    let h1 = document.createElement('h1');
    const time = document.createTextNode(`${h} : ${m} : ${s}`);
    h1.appendChild(time);
    if (root.firstElementChild) {
        root.replaceChild(h1, root.firstElementChild);
    } else {
        root.appendChild(h1);
    }

}