export default function(param) {
    var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)")
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2]); return null
}