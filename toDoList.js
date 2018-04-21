$(document).ready(function(){
    $("#add").on('click', addTask);
});

function addTask()
{
    let input = $("#todo");
    let newListItem = input.val();
    $("#todolist").append("<li><input class='selectComplete' type='checkbox'> - " + newListItem + " - <span class='glyphicon glyphicon-trash'></span> </li>");
    input.val("");
}
