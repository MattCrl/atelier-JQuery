$(document).ready(function(){

    $("#add").on('click', addTask);
    $("#todolist").on('change', '.selectComplete', completedTask);
    $("#todolist").on('click', '.deleteTask', deleteTask);


    function addTask()
    {
        let input = $("#todo");
        let newListItem = input.val();
        $("#todolist").append("<li><input class='selectComplete taskDone' type='checkbox'> - " + newListItem + " - <span class='glyphicon glyphicon-trash deleteTask'></span> </li>");
        input.val("");
    }

    function deleteTask()
    {
        $(this).parent().remove();
    }

    function completedTask()
    {
        $(this).parent().toggleClass('taskDone');
    }


});
