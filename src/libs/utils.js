function setMinHeight(el) {
    let oBox = document.querySelector(el);
    oBox.style.minHeight = (document.documentElement.clientHeight - 70) + 'px';
}

function to2Bit(num) {
    return num.toFixed(2);
}

function openUrl(url) {
    window.open(url);
}

export {
    setMinHeight,
    to2Bit,
    openUrl
}