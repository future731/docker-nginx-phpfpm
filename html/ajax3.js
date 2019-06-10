var asyncSend3 = function() {
    var req = new XMLHttpRequest();
    req.open('GET', 'ajax.php?name=' + encodeURIComponent(document.fm3.name.value), true);
    req.send(null);

    req.onload = function(e) {
        var result = document.getElementById('result3');
        result.innerHTML = req.responseText;
    }
}
