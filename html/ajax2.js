var asyncSend2 = function() {
    $.ajax({
        url: "ajax.php?name=" + encodeURIComponent(document.fm2.name.value)
    }).then(function (r) { $("#result2").html(r); })
      .fail(function (e) { console.log(e); });
}
