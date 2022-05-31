// JS ==> tek satırlık yorumlama
/* 
çok satırlı yorumlama
*/
//console.log("Merhabalar") // (yazılımcı görmesi için mesaj yazılır) konsola mesaj bırakma

//pop-up alert
//alert("Deneme") Bunlar script olarak html içerisinden de kullanılabilir.
//window.alert("deneme window")
//////////////////////////////////////////////////////////////////////////////

//window   = her şey demek
//document = bulunduğumuz sayfanin HTML yapısını gösterir.
//document.write("Deneme") = sayfaya yazı yazma

//var name=prompt("Adınız"); //kullanıcıdan veri almak istersek
//console.log(name); 

//Variable = degiskenler
// var isim="Hamit";
// isim="Hamit M"; //string
// isim=true; //boolean
// isim=44; //number
// console.log(isim);

// var soyisim="Mızrak";
// $soyisim="Mızrak";
// _soyisim="Mızrak";
// soyisim44="Mızrak";
// console.log("soyisim44");
//44soyisim="Mızrak"; => değişken isimleri sayı ve özel karakterler ile başlayamaz
//~soyisim44="Mızrak";
//üğşçöÜĞŞÇÖ değişkenler kullanma
//var ı olabildiğince kullanma

////////////////////////////////////////////////////////////////////////////

//variable initialization
// var deneme; //undefined = tanımsız yani içeriğini doldurmamız lazım
// console.log(deneme);

//operator
//logic operators       : && = ve || = veya 
//mathematics operators : + - / * %
//comparion operators   : > >= < <= ! == === (=== -> türüne bak karşılaştır, == -> türüne bakmadan karşılaştır.)   
//postfix ==> x++ , ++x  , y-- , --y

//Binary code (2)  => (0 ve 1)
//Octal (8)        => (01234567)
//Decimal (10)     => (0123456789)
//Hexadevimal (16) => (0123456789abcdef)
// 1 byte = 8 bit
// 1 bit = 0
//bit < btye < GB < TB

// = atama
// == eşit mi (ancak türüne bakma) "5" 5 True
// === eşit mi (ancak türüne bak) "5" 5 False

// var result1="Malatya";
// console.log(typeof result1); //typeof türü bulmak

// var result2=54.2;
// console.log(typeof result2);

// var result2=true;
// console.log(typeof result2);

////////////////////////////////////////////////////////
//örnek-1
// var x1=9,x2=2,x3;
// x3=x1+x2;
// console.log(x3);

// x3=x1*x2;
// console.log(x3);

// x3=x1/x2;
// console.log(x3);

// x3=x1%x2;
// console.log(x3);

/////////////////////////////////////////////////////////
//CAST: dönüştürmek, değiştirmek

//Number() , String() içerisine ne yazılırsa solundaki tipe çevrilir.

// mesela   string <=> number
//database - api - socket

// var x1=Number(prompt("Lütfen bir sayı giriniz"));
// console.log(x1*x1);

/////////////////////////////////////////////////////////
//undefined: tanımlı değil yani değer vermezsek bu sorunu yaşarız
// var x1;
// console.log(x1); // tanımlı değil

//NaN: Not a Number : sayı değil
// var x2=9/"asd";
// console.log(x2);

//isNaN

//Infinity
// var x3=8/0;
// console.log(x3);

//new : ram hafzasında yer açmak (Doğar)

//null: ram hafızayı boşaltmak için (Ölür)
//var x4=null;

//sıfır: bir değeri vardır ama sıfırdır. Çarpmada yutan, toplama da etkisiz eleman

/////////////////////////////////////////////////////////
//escape character
console.log("\"");
console.log("'");