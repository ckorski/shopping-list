$(document).ready(function(){

function addText(){
    var input = document.getElementById('items').value;
    var node=document.createElement("li").append;
    var textnode=document.createTextNode(input);
    node.appendChild(textnode);
    document.getElementById('addTask').appendChild(node);
    
    var removeTask = document.createElement('input');
    removeTask.setAttribute('type', 'button');
    removeTask.setAttribute("value", "Remove");
    removeTask.setAttribute("id", "removeButton");
    removeTask.addEventListener('click', function(e) {
        node.parentNode.removeChild(node);
    }, false);
    node.appendChild(removeTask);
    
    
}


//cross off list items
    $('#list').on('click', 'li', function(){$(this).toggleClass('strike'); $(this).children('.box').toggleClass('Checked');});

//sortable list items
    $('#list').sortable({ axis: "y" });
    
//show delete button on mouse hover
    $('#list').on('mouseenter', 'li', function(){$(this).children('.delete').toggleClass('show');});
    $('#list').on('mouseleave', 'li', function(){$(this).children('.delete').toggleClass('show');});

});

