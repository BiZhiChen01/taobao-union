function setMinHeight(el) {
    let oBox = document.querySelector(el);
    oBox.style.minHeight = (document.documentElement.clientHeight - 70) + 'px';
}

export {
    setMinHeight
}