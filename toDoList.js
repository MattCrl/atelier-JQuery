$(document).ready(function(){

    $("#add").on('click', addTask);
    $("#todolist").on('change', '.selectComplete', completedTask);


    function addTask()
    {
        let input = $("#todo");
        let newListItem = input.val();
        $("#todolist").append("<li><input class='selectComplete taskDone' type='checkbox'> - " + newListItem + " - <span class='glyphicon glyphicon-trash'></span> </li>");
        input.val("");
    }

    function deleteTask()
    {

    }

    function completedTask()
    {
        $(this).parent().toggleClass('taskDone');
    }


})
