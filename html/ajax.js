var asyncSendWithRawAjax = function() {
    var req = new XMLHttpRequest();
    req.open('GET', 'name.php?name=' + encodeURIComponent(document.fm1.name.value), true);
    req.send(null);
    req.onload = function(e) {
        var name = req.responseText;
        var req2 = new XMLHttpRequest();
        req2.open('GET', 'age.php?age=' + encodeURIComponent(document.fm1.age.value), true);
        req2.send(null);
        req2.onload = function(e) {
            var result = document.getElementById('result1');
            result.innerHTML = name + '<br/>' + req2.responseText;
        }
    }
}

var asyncSendWithPromise = function() {
    $.when($.ajax({
               url: 'name.php?name=' + encodeURIComponent(document.fm2.name.value)}))
    .then(function (name) { return $.when($.ajax({
                              url: 'age.php?age=' + encodeURIComponent(document.fm2.age.value)}))
                               .then(function (age) { return name + '<br/>' + age; })})
    .then(function (name_and_age) {$('#result2').html(name_and_age)})
    .fail(function (e) { console.log(e); });
}


async function asyncSendWithAsyncAwait () {
    var name = await $.when($.ajax({url: 'name.php?name=' + encodeURIComponent(document.fm3.name.value)}));
    var age = await $.when($.ajax({url: 'age.php?age=' + encodeURIComponent(document.fm3.age.value)}));
    $('#result3').html(name + '<br/>' + age)
}
