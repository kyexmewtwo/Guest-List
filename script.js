var stuff=[];
var money = [];
var count=[];
var comp = [];
$('.showitems').click(function() {
    var input = $(".items").val();
    var price = $(".wow").val();    
    var numb = $(".number").val();    
    var tele = price*numb;
    stuff.push(input);
    money.push(price);
    count.push(numb);
    $(".finish").append("<li>" + count + " " + stuff + "s</li>");
    $(".finish").append("<li>$" + money*count + "</li>");
    console.log(stuff);
    console.log(money);
    console.log(count);
    console.log(tele);
});
$('.money').click(function(){
    alert("You will buy ");
});