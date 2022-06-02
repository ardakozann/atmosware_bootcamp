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
// console.log("\""); // " kullanmak için başına \ koyarak kullanabiliriz.
// console.log("'");

/////////////////////////////////////////////////////////
//Math: static yapıda

// //sabitler
// document.write(Math.PI+"<br/>")
// document.write(Math.E+"<br/>")

// //console.log(Math.random())
// document.write(Math.random()+"<br/>")
// document.write(Math.min(5,2,5,21,-525)+"<br/>")
// document.write(Math.max(5,2,2151,-525)+"<br/>")
// document.write(Math.sqrt(16)+"<br/>")
// document.write(Math.pow(2,5)+"<br/>")
// // mutlak değerini alma
// document.write(Math.abs(-4)+"<br/>")

// //yuvarlama
// //floor her zaman aşağı yuvarlar
// document.write(Math.floor(3.9)+"<br/>")
// //ceil her zaman yukarı yuvarlar
// document.write(Math.ceil(5.1)+"<br/>")
// //round 5 ve yukarısını yukarı yuvarlar, 5 altıysa aşağı yuvarlar
// document.write(Math.round(2.5)+"<br/>")

//SORU---------------

// var sayi1=Number(prompt("1. sayı"));
// var sayi2=Number(prompt("2. sayı"));

// soru1=Math.min(sayi1,sayi2);
// soru2=Math.max(sayi1,sayi2);

// soru3=Math.sqrt(Math.max(sayi1,sayi2));
// //soru3=Math.sqrt(soru2);

// soru4=Math.ceil(Math.sqrt(Math.abs(Math.max(sayi1,sayi2))));
// //soru4=Math.ceil(soru3);

// soru5=Math.abs(Math.min(sayi1,sayi2));
// //soru5=Math.abs(soru1);

// soru6=Math.pow(Math.min(sayi1,sayi2),Math.max(sayi1,sayi2));
// //soru6=Math.pow(soru1,soru2);

// document.write("En Küçüğü: "+soru1+"<br/>");
// document.write("En Büyüğü: "+soru2+"<br/>");
// document.write("En Büyüğü Karekökü: "+soru3+"<br/>");
// document.write("En Büyüğü Karekökü Yukarı yuvarlanması: "+soru4+"<br/>");
// document.write("En Küçüğü Mutlak'ı: "+soru5+"<br/>");
// document.write("En Küçüğü Alt Taban, En Büyüğü Üst Tabanı: "+soru6+"<br/>");

// //ÖDEV EN BÜYÜKLER EN KÜÇÜK OLARAK, EN KÜÇÜKLER EN BÜYÜK OLARAK YER DEĞİŞTİR ÇÖZ


////////////////////////////////////////////////////////
//Number
// var number=44;
// number=44.33;
// document.write(number+"<br/>");
// //14 tane 0
// var bilimsel=14E+5;
// bilimsel=14E-5;
// document.write(bilimsel+"<br/>");

// //sayı sistemleri: 2,8,16 'lık sayıları 10'luk tabanda gösterim.
// //16'lık tabanı 10'luk tabanda gösterme (16lık taban için 0x yazılıyor başa)
// var hex=0x11;
// document.write(hex+"<br/>");

// //2'lik tabanı 10'luk tabanda gösterme (2lik taban için 0b yazılıyor başa)
// var binary=0b00111;
// document.write(binary)+"<br/>";

// //8'lik tabancı 10'luk tabanda gösterme(8lik taban için 07 yazılıyor başa)
// var octal=070111;
// document.write(octal+"<br/>");

// //10luk tabandan diğer tabanlara çevirme
// var decimal=10;
// document.write(decimal.toString(2)+"<br/>"); //2'lik tabanda
// document.write(decimal.toString(8)+"<br/>"); //8'lik tabanda
// document.write(decimal.toString(16)+"<br/>"); //16lık tabanda

// //CAST sistemi nedir ? araştır
// var castNumber="14";
// document.write("14"+"14"+"<br/>");
// document.write(castNumber+castNumber+"<br/>");
// document.write(Number(castNumber)+Number(castNumber)+"<br/>");

// //NaN: Not a Number
// document.write("result: "+(16/"16jk")+"<br/>");

// //isNaN = bir sayı değilmidir ? eğer false gelirse sayıdır.

// var numberx=200/"asd";
// document.write("result: "+isNaN(numberx)+"<br/>");

//////////////////////////////////////////////////////
//String
// var kelime="html5 css3 responsive Bootstrap JAVASCRIPT ";
// document.write(kelime+"<br/>");
// document.write("Harf sayısı: "+kelime.length+"<br/>");
// //başında ve sonunda varsa boşlukları alır.
// document.write("Trimlenmiş harf sayısı: "+kelime.trim().length+"<br/>");
// document.write("Hepsi küçük harf: "+kelime.toLowerCase()+"<br/>");
// document.write("Hepsi büyük harf: "+kelime.toUpperCase()+"<br/>");
// document.write("startsWith: "+kelime.startsWith('h')+"<br/>");
// document.write("endsWith: "+kelime.endsWith(" ")+"<br/>");
// document.write("concat: "+kelime.concat(" -sona eklendi")+"<br/>");
// document.write("charAt: "+kelime.charAt("0")+"<br/>");
// document.write("indexOf: "+kelime.indexOf("css3")+"<br/>");
// document.write("lastIndexOf: "+kelime.lastIndexOf("css3")+"<br/>");

// var degistirilmis="Merhabalar";
// document.write("replace: "+kelime.replace(kelime,degistirilmis)+"<br/>");
// document.write("substring-1: "+kelime.substring(6)+"<br/>");
// document.write("substring-2: "+kelime.substring(0,4)+"<br/>");

//CAST 
//String () ile yapılır

//JSON nedir ?

// var obje={
//     "adi":"Arda",
//     "soyadi":"Kozan"
// }

// document.write(JSON.stringify(obje)+"<br/>");

// var objeToString=JSON.stringify(obje);

// document.write(objeToString+"<br/>");

// var objeName=objeToString.substring(objeToString.indexOf(":")+2,objeToString.indexOf(",")-1);
// //var searchResult=objeToString.search('Arda'); //başladığı indexi söyler
// //var objeName=objeToString.substring(objeToString.indexOf(":")+2,objeToString.indexOf(",")-1);
// var objeSurname=objeToString.substring(objeToString.lastIndexOf(":")+2,objeToString.length-2);

// document.write(objeName + " " + objeSurname);
// document.write("<br><br>")
// //JSON.parse ne demek bak
// var dinamic = JSON.stringify(obje);
// var parse=JSON.parse(dinamic);

// var name=parse.adi;
// var surname=parse.soyadi;

// document.write("<br><br>")
// document.write(name + " " + surname);

//////////////////////////////////////////////////////////////
// //Fonskiyon:
// //1-) returnsuz, parametresiz function
// function functionName1(){
//     document.write("<br>" + "returnsuz parametresiz function")
// }

// functionName1();

// //2-) returnsuz, parametreli function
// function functionName2(ekmekTuru) {
//     document.writeln("<br>" + "returnsuz, parametreli function " + ekmekTuru);
// }

// functionName2("Trabzon Ekmeği");

// //3-) returnlu, parametresiz function
// function functionName3() {
//     return "returnlu, parametresiz function";
// }
// var temp3 = functionName3();
// document.writeln("<br>" + temp3);

// //4-) returnlu, parametreli function
// function functionName4(money) {
//     var count=money-6;
//     return "returnlu, parametreli function Kalan Para: " + count;
// }
// var temp4 = functionName4(200);
// document.writeln("<br>" + temp4);

///////////////////////////////////////////////////////////////////////////////////////
// //setTimeOut()
// function merhaba(){
//     document.writeln("<br>" + "1. function");
// }

// //setTimeout(merhaba,3000); //setTimeOut u araştır.
// merhaba();

// function merhaba2(){
//     document.writeln("<br>" + "2. function");
// }

// merhaba2();
 
/////////////////////////////////////////////////////////////////////////////////////
//try catch: exception handling
//  try {
//    alert44('Merhabalar')
//  } catch (err) {
//    document.writeln('<br>' + err.message);
//    document.writeln('<br>' + err.name);
//  } finally {
//    document.write('<br>' + 'db.close()')
//  }
//  document.writeln('<br>' + 'diğer satır')

////////////////////////////////////////////////////////////////////////////////
//conditional:
//if-else
// var number="4";
// if(number===4){
//     document.write("<br>"+"eşittir");
// }else{
//     document.write("<br>"+"değildir");
// }
// //if-else
// if(number===4)
//     document.write("<br>"+"eşittir");
// else
//     document.write("<br>"+"değildir");

// //ternary
// var ternary = (number==4) ? "eşittir":"değildir";
// document.write("<br>"+ternary);

// //if-elseif-else
// var day="perşembe";
// if(day==="pazartesi"){
//     document.write("<br>"+"1-pazartesi");
// }else if(day==="sali"){
//     document.write("<br>"+"2-sali");
// }else if(day==="çarşamba"){
//     document.write("<br>"+"3-çarşamba");
// }else if(day==="perşembe"){
//     document.write("<br>"+"4-perşembe");
// }else if(day==="cuma"){
//     document.write("<br>"+"5-cuma");
// }else if(day==="cumartesi"){
//     document.write("<br>"+"6-cumartesi");
// }else if(day==="pazar"){
//     document.write("<br>"+"7-pazar");
// }else{
//     document.write("<br>"+"gün yanlış çalışıldı");
// }

//     //switch-case
// switch (day) {
//     case "pazartesi":
//         document.write("<br>"+"1-pazartesi");
//         break;
//     case "pazartesi":
//         document.write("<br>"+"1-pazartesi");
//         break;
//     case "pazartesi":
//         document.write("<br>"+"1-pazartesi");
//         break;
//     case "pazartesi":
//         document.write("<br>"+"1-pazartesi");
//         break;
//     case "pazartesi":
//         document.write("<br>"+"1-pazartesi");
//         break;
//     case "pazartesi":
//         document.write("<br>"+"1-pazartesi");
//         break;
//     case "pazartesi":
//         document.write("<br>"+"1-pazartesi");
//         break;

//     default:
//         document.write("<br>"+"gün yanlış çalışıldı");
//         break;
// }
//return   : bir şey döndürmek
//break    : döngüyü kırmak
//continue : sadece o şart için çalışma, diğer şartlar için çalış.

//////////////////////
//Loop(döngüler)
//iterative for
//1 artırmak => i++, i=i+1, i+=1

// var sum=0;
// for (var i = 0; i <= 10; i++) {
// //    document.writeln("<br>"+i);
//     sum=sum+i;
// }
// document.write("<br>"+sum);

// //while
// var sum2=0;
// var x=1;
// while( x <= 10){
//     sum2=sum2+x;
//     x++;
// }
// document.write("<br>"+sum2);

//ÖDEV
//Örnek: 1 ile kullanıcının vereceği (prompt) bitiş sayısına göre
//kullancı: 5 verdi diyelim 1<=X<=5
// var number;
// number=prompt("Sayı giriniz");
// document.write("Verilen sayı : "+number+'<br>');
// console.log(1)
// if(isNumberSecretKey(number) && checkIfNumberUnder1(number)){
//     console.log(1)
//     howManyNumbers(number);
//     console.log(2)
//     plusAllNumber(number);
//     console.log(3)
//     oddNumber(number);
//     console.log(4)
//     plusOddNumber(number);
//     console.log(5)
//     showOddNumber(number);
//     console.log(6)
//     evenNumber(number);
//     console.log(7)
//     plusEvenNumber(number);
//     console.log(8)
//     showEvenNumber(number);
// }

// //1.adım: kaç tane sayı var ?
// function howManyNumbers(number){
//     var numberOfNumber=0;
//     while ( numberOfNumber <= number) {
//         if(checkIfExist7){
//             continue;
//         }
//         if(checkIfMore100){
//             break;
//         }
//         numberOfNumber++;
//     }
//     document.write("Sayı adeti : "+numberOfNumber+'<br>');
// }
// //2.adım: sayı toplamları var ?
// function plusAllNumber(number) {
//     var plus=0;
//     for(var i=1 ; i<=number ; i++){
//         if(checkIfExist7){
//             continue;
//         }
//         if(checkIfMore100){
//             break;
//         }
//         plus+=i;
//     }
//     document.write("Sayıların toplamı : "+plus+'<br>');
// }
// //3.adım: kaç tane tek  sayı var ?
// function oddNumber(number){
//     var oddNumberOfNumber=0;
//     while( oddNumberOfNumber <= number){
//         if(number%2==0 || checkIfExist7){
//             continue;
//         }
//         if(checkIfMore100){
//             break;
//         }
//         oddNumberOfNumber++;
//     }
//     document.write("Tek sayı adeti : "+oddNumberOfNumber+'<br>');
// }
// //4.adım: tek sayılar toplamı ?
// function plusOddNumber(number){
//     var plusOdd=0;
//     for(var i=1 ; i<=number ; i++){
//         if(number%2==0 || checkIfExist7){
//             continue;
//         }
//         if(checkIfMore100){
//             break;
//         }
//         plusOdd+=i;
//     }
//     document.write("Tek sayıların toplamı : "+plusOdd+'<br>');
// }
// //5.adım: tek sayılar gösterelim ?
// function showOddNumber(number){
//     document.write("Tek sayılar : 0");
//     for(var i=1; i<=number; i++){
//         if(number%2==0 || checkIfExist7){
//             continue;
//         }
//         if(checkIfMore100){
//             break;
//         }
//         document.write("-"+i);
//     }
//     document.write('<br>');  
// }
// //6.adım: kaç tane çift  sayı var ?
// function evenNumber(number){
//     var evenNumberOfNumber=0;
//     while( evenNumberOfNumber <= number){
//         if(number%2==1){
//             continue;
//         }
//         if(checkIfMore100){
//             break;
//         }
//         evenNumberOfNumber++;
//     }
//     document.write("Çift sayı adeti : "+evenNumberOfNumber+'<br>');
// }
// //7.adım: çift sayılar toplamı ?
// function plusEvenNumber(number){
//     var plusEven=0;
//     for(var i=1 ; i<=number ; i++){
//         if(number%2==1){
//             continue;
//         }
//         if(checkIfMore100){
//             break;
//         }
//         plusEven+=i;
//     }
//     document.write("Çift sayıların toplamı : "+plusEven+'<br>');
// }
// //8.adım: çift sayılar gösterelim ?
// function showEvenNumber(number){
//     document.write("Çift sayılar : 0");
//     for(var i=1; i<=number; i++){
//         if(number%2==1 ){
//             continue;
//         }
//         if(checkIfMore100){
//             break;
//         }
//         document.write("-"+i);
//     }
//     document.write('<br>');  
// }
// //Eğer verilen sayılarda 7 sayısı varsa bunu eklemesin (continue)
// function checkIfExist7(number){
//     if(number >= 7){
//         return true;
//     }
//     return false;
// }
// //Eğer bitiş sayısı 100 fazla ise 100'e kadar olanlar toplansın (break)
// function checkIfMore100(number){
//     if(number > 100){
//         return true;
//     }
//     return false;
// }
// //Eğer kullanıcı başlangıç sayıdan küçük girerse uyaralım başlangıçtan büyük girmesini isteyelim
// function checkIfNumberUnder1(number) {
//     if(number<1){
//         alert("Başlangıç sayısından büyük bir değer giriniz.");
//         return false;
//     }
//     return true;
// }
// //Eğer kullanıcı secret-key girerse yani 44 sayısını girerse program çalışmadan dursun 
// function isNumberSecretKey(number) {
//     if(number==44){
//         return false;
//     }
//     return true;
// }