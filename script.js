function Fn_randomString() {
    debugger;
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = 8;
    var randomstring = '';
    for (var i = 0; i < string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars[rnum];
    }

    console.log(randomstring)
    $('#demo').html(randomstring)
    debugger;
    return randomstring;
}

//document.getElementById("demo").innerHTML = randomString()
setInterval(Fn_randomString(), 1000);
