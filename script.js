var cursor1 = document.getElementById('cursor1');
var cursor2 = document.getElementById('cursor2');

document.addEventListener('mousemove', function(m){
    var x = m.clientX;
    cursor1.style.left = x + "px";
    cursor1.style.top = 0;
});

document.addEventListener('mousemove', function(m){
    var y = m.clientY;
    cursor2.style.left = 0;
    cursor2.style.top = y + "px";
});