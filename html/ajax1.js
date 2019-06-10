var asyncSend1 = function() {
    var req = new XMLHttpRequest();
    req.open('GET', 'ajax.php?name=' + encodeURIComponent(document.fm1.name.value), true);
    req.send(null);

    req.onload = function(e) {
        var result = document.getElementById('result1');
        result.innerHTML = req.responseText;
    }
}
