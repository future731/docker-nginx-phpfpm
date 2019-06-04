var req = new XMLHttpRequest();
req.onreadystatechange = function() {
  var result = document.getElementById('result');
  if (req.readyState == 4) { // 通信の完了時
    if (req.status == 200) { // 通信の成功時
      result.innerHTML = req.responseText;
    }
  }else{
    result.innerHTML = "communicating";
  }
}
var asyncSend = function() {
    req.open('GET', 'ajax.php?name=' + encodeURIComponent(document.fm.name.value), true);
req.send(null);
}
