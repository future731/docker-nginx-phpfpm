var asyncSendWithRawAjax = function() {
    var req = new XMLHttpRequest();
    req.open('GET', 'ajax.php?name=' + encodeURIComponent(document.fm1.name.value), true);
    req.send(null);

    req.onload = function(e) {
        var result = document.getElementById('result1');
        result.innerHTML = req.responseText;
    }
}
var asyncSendWithPromise = function() {
    $.when($.ajax({
        url: "ajax.php?name=" + encodeURIComponent(document.fm2.name.value)}))
    .then($.ajax({
              url: "ajax.php?name=" + encodeURIComponent(document.fm2.name.value)})
          .then(function (r) { $("#result2").html(r); }))
    .fail(function (e) { console.log(e); });
}
async function asyncSendWithAsyncAwait () {
    var first = await $.when($.ajax({url: "ajax.php?name=" + encodeURIComponent(document.fm2.name.value)}));
    var second = await $.when($.ajax({url: "ajax.php?name=" + encodeURIComponent(document.fm2.name.value)}));
    $("#result3").html(first + second)
}
