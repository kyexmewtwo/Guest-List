var friends=[];

$('.addButton').click(function() {
    var input = $(".guestName").val();
    console.log(input);
    friends.push(input);
    console.log(friends);
    $(".guestList").append("<li>" + input + "</li>"); 
});