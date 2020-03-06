function randomString(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

var params = new URLSearchParams(location.search);
var agent = null;
if (params.has('agent')) {
    agent = params.get('agent').replace(/[^0-9]/ig, '');
}
else if (location.search.indexOf('?') > -1) {
    var object = location.search.match(/(\?)([\d]*)/);
    agent = object[2] == '' ? null : object[2];
}

var href = location.hostname + '/th-' + randomString(6) + '/';
if (agent != null) {
    href = href + '?agent=' + agent;
}

(function () {
    var btn = document.getElementById('btn');
    btn.style.display = 'block';
    btn.href = '//' + href;
})();