/*$(document).ready(function(){

 $('#btn-add').click(function() {
        var item = $('#input-items')
        $('ul').prepend("<li>"+item.val()+"</li>");
    });
    $('ul').on('click', 'li', function() {
        $(this).remove();
        });
});
--------------------------------------------
 $('ul').on('click', 'li', function(event){
  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
});

//cross off list items
    $('#list').on('click', 'li', function(){$(this).toggleClass('strike'); $(this).children('.box').toggleClass('Checked');});

//sortable list items
    $('#list').sortable({ axis: "y" });
    
//show delete button on mouse hover
    $('#list').on('mouseenter', 'li', function(){$(this).children('.delete').toggleClass('show');});
    $('#list').on('mouseleave', 'li', function(){$(this).children('.delete').toggleClass('show');});

});

$("#header ul").append('<li><a href="/user/messages"><span class="tab">Message Center</span></a></li>');

*/

$(document).ready(function(){  
    // 1st get text from input box and display it on page
    $("#btn-add").on("click", function(){
        event.preventDefault(); //with this when you can also hit "enter" instead of clicking on the button all the time
        var item = $("#input-items").val();
    // If any the length of any item types is less or equal to zero you will get an alert message
    if (item <= 0) {
        alert ("You didn't add anything")
    // Otherwise, if you type in your list - it will appear!
    } else {
        $(".ul-theList").append("<li>" +"<input type='checkbox' id='myCheck'>" + "" + item + "<img class='delete' src='img/trsh.png'/>" + "" + "</li>");
        $("#input-items").val("");
    }
    })  
    // delete item
    $("ul").on('click', '.delete', function() {$(this).closest("li").remove();});
    // check off an item and put a strikethrough
    $("ul").on('click', '#myCheck', function() {$(this).closest("li").appendTo(".completed-list");});
}); 