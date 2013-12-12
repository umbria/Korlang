//$( document ).ready(function() {
//  // Handler for .ready() called.
//
//	$( "#typeof" ).click(function() {
////		  var htmlString = $( this ).html();
////		  $( this ).text( htmlString );
//		var strType = typeof window;
//		$(this).text( strType );
//		});
//});

function myFunction()
{
    var str = "The best things in life are free";
    var patt = new RegExp("e");
    var res = patt.test(str);
    document.getElementById("demo").innerHTML=res;
}


! function (array9, undefinedvalue) {
              console.log("hello");
} (window);

console.info("document.ready");

var jQuery = function( selector, context)
{

}
console.log ( typeof jQuery.prototype );


var name="James";
var age = "32";
var address="Altkoenigstrasse 5";
var temperature="cold and humid";
document.write("?�름 : "  + name + "<BR>+?�이: "  + age + "<BR>주소: "  + address+ "<BR>춥나? "  + temperature );

function merge (abc, i) {
    var n = i.length,
        s = abc.length,
        r = 0;
    if ("number" == typeof n)
        for (; n > r; r++) abc[s++] = i[r];
    else
        for (; i[r] !== undefinedvalue;) abc[s++] = i[r++];
    return abc.length = s, abc
};


var a = [ "a","b"];
var b = [ "c","d"];


var result = merge( a , b );
alert(result       );
