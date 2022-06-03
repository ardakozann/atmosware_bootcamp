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
// //1.adım: kaç tane sayı var ?
// //2.adım: sayı toplamları var ?
// //3.adım: kaç tane tek  sayı var ?
// //4.adım: tek sayılar toplamı ?
// //5.adım: tek sayılar gösterelim ?
// //6.adım: kaç tane çift  sayı var ?
// //7.adım: çift sayılar toplamı ?
// //8.adım: çift sayılar gösterelim ?
// //Eğer verilen sayılarda 7 sayısı varsa bunu eklemesin (continue)
// //Eğer bitiş sayısı 100 fazla ise 100'e kadar olanlar toplansın (break)
// //Eğer kullanıcı başlangıç sayıdan küçük girerse uyaralım başlangıçtan büyük girmesini isteyelim
// //Eğer kullanıcı secret-key girerse yani 44 sayısını girerse program çalışmadan dursun 
// main();

// function main(){
//     var number;
//     number= Number(prompt("Sayı giriniz"));
//     if(isNumberSecretKey(number) && checkIfNumberUnder1(number)){
//         document.write("Verilen sayı : "+number+'<br>');
//         oddNumber(number);
//     }
// }
// function oddNumber(number){ //tek sayılar için
//     var oddNumbers="0";
//     var oddNumberOfNumber=0;
//     var plusOdd=0;

//     var evenNumberOfNumber=0;
//     var plusEven=0;
//     var evenNumbers="0";

//     var numberOfNumber=0;
//     var plus=0;
    
//     for(var i=1; i <= number; i++){
//         if(checkIfExist7(i)){
//             continue;
//         }
//         if(checkIfMore100(i)){
//             break;
//         }
//         if(i%2==0){
//             oddNumberOfNumber++;
//             plusOdd+=i;
//             oddNumbers=String(oddNumbers).concat('-' + i);
//         }
//         if(i%2==1){
//             evenNumbers=String(evenNumbers).concat('-' + i);
//             evenNumberOfNumber++;
//             plusEven+=i;
//         }
//         numberOfNumber++;
//         plus+=i;
//     }
//     document.write("Sayı adeti : "+numberOfNumber+'<br>');
//     document.write("Sayıların toplamı : "+plus+'<br>');

//     document.write('<br>'+"Tek sayılar : "+oddNumbers+'<br>');
//     document.write('<br>'+"Tek sayı adeti : "+oddNumberOfNumber+'<br>');
//     document.write('<br>'+"Tek sayıların toplamı : "+plusOdd+'<br>');

//     document.write('<br>'+"Çift sayılar : "+evenNumbers+'<br>');
//     document.write('<br>'+"Çift sayı adeti : "+evenNumberOfNumber+'<br>');
//     document.write('<br>'+"Çift sayıların toplamı : "+plusEven+'<br>');
// }
// function checkIfExist7(number){ //sayıda 7 var mı kontrolü
//     if(number == 7){
//         return true;
//     }
//     return false;
// }
// function checkIfMore100(number){ //sayı 100'den büyük mü kontrolü
//     if(number >= 100){
//         return true;
//     }
//     return false;
// }
// function checkIfNumberUnder1(number) { //sayı 1'den küçük mü kontrolü
//     if(number<=1){
//         alert("Başlangıç sayısından büyük bir değer giriniz.");
//         return false;
//     }
//     return true;
// }
// function isNumberSecretKey(number) { //sayı 44 mü kontrolü
//     if(number==44){
//         alert("Secret Key girildi, program durduruldu");
//         return false;
//     }
//     return true;
// }
////////////////////////////////////////////////////////////////////////////
//Date
//Date get()
// var tarih=new Date();
// document.write('<br>'  +"Gün: "+ tarih.getDate());
// document.write('<br>'  +"Yıl: "+ tarih.getFullYear());
// document.write('<br>'  +"Dakika: "+ tarih.getMinutes());
// document.write('<br>'  +"AY (0): "+ tarih.getMonth());
// document.write('<br>'  +"<br>");

// function getDateHoursControl(){
//     //Zaman Uygulaması
//   var hour=new Date().getHours();
//   if(hour>=13){
//     document.write('<br>'  +"Öğlededen Sonra " + hour);
//   }else{
//     document.write('<br>'  +"Öğlededen Önce " + hour);
//   }
// }
// getDateHoursControl()

////////////////////////////////////////////////////////////////////
//Javascript single thread

// function bodyFunction() {
//     document.writeln('<br>'+"3 saniye sonra geldi");
// }
// setTimeout(merhaba1,3000);

// //1-) callback function
// function ikinci(value) {
//     document.writeln('<br>'+"ikinci fonksiyon çalıştı" + value);
// }
// //2-) ana fonksiyon
// function birinci(number1,number2,callback){
//     var result = number1*number2;
//     callback(result);
// }
// birinci(4,6,ikinci);
//++++++++++++++++++++++++
// //2-) Immedia function: fonskiyonu çağırmadan gelsin
// (function deneme() {
//     document.writeln('<br>'+"deneme");
// })();

//////////////////////////////////////////////////////////////////////
//Dizi
// var array=[1,5,true,"merhabalar",55];
// console.log(array);
// //iterative for
// for(let i = 0; i < array.length; i++){
//     document.write('<br>'+array[i]);
// }
// document.write('<br>');
// //for-in (for over index) for over kullanırsak indis yapılarını verir
// for (temp in array){
//     document.write('<br>'+temp+"==>"+array[temp]);

// }
// document.write('<br>');
//for-of (for over members) for in kullanırsak sırayla dizi içerisini verir
// for (temp of array){
//     document.write('<br>'+temp);
// }
// document.write('<br>');
// //++++++++++++++++++++++++++++++++++
// //Dizi fonksiyonları
// //push() var olan dizinin son elemanına dizi eklemek
// array.push("son");

// for (temp of array){
//     document.write('<br>'+temp);
// }

// document.write('<br>');

// //unshift() var olan dizinin ilk elemanına dizi eklemek
// array.unshift("önce");

// for (temp of array){
//     document.write('<br>'+temp);
// }

// document.write('<br>');

// //ÇIKARMA pop() sondaki elemanı çıkarır.
// array.pop();

// for (temp of array){
//     document.write('<br>'+temp);
// }

// document.write('<br>');

// //ÇIKARMA shift() ilk elemanı çıkarır.
// array.shift();

// for (temp of array){
//     document.write('<br>'+temp);
// }

//++++++++++++++++4444444
//sort(): küçükten büyüğe sıralama yapar
var array=["malatya","istanbul","ankara","izmir","muş","bitlis","sivas"];

array.sort();
for(var temp of array){
    document.write('<br>'+temp);
}

document.write('<br>');

//reverse(): sıralama yapmaz, tersine çevirir
array.reverse();
for(var temp of array){
    document.write('<br>'+temp);
}