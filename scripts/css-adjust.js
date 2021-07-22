var HEADER_PADDING = 10;
var HEADER_MARGIN = 15;

var topBar = document.getElementById('top-bar')
document.getElementById('content').style['margin-top'] = topBar.clientHeight + "px";
topBar.style.width = (document.body.clientWidth - 2*(HEADER_PADDING + HEADER_MARGIN)) + "px";
