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

function scrollToBottom(callback) {
    let height = Math.round(_getScrollTop() + _getWindowHeight());
    if (height === _getScrollHeight() - 150 || height >= _getScrollHeight() - 150) {
      callback();
    }
}

export {
    setMinHeight,
    to2Bit,
    openUrl,
    scrollToBottom
}

function _getScrollTop() {
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if (document.body) {
      bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
      documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}
  
function _getScrollHeight() {
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if (document.body) {
      bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
      documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}
  
function _getWindowHeight() {
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
      windowHeight = document.documentElement.clientHeight;
    } else {
      windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}