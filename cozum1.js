//Task 5
var p1 = $("h1"); 
p1.css("color", "red");

$("h2:even").css("color","orange");
$("h2:odd").css("color","blue");

// Task 4
$("p").each(function(index, element) {
    var metin = $(this).text();
    this.append(": " +  metin.length );

});
//Task 1 
var tag = $("h2");
var adlar = tag.eq(4).prevAll().map(function() {
    return this.innerText;
}).get().join(', ');
yazdir("7. sonrası: " + adlar);