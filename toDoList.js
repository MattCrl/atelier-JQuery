$(document).ready(function(){
    let list = $("#todolist");
    $("#add").on('click', addTask);
    list.on('change', '.selectComplete', completedTask);
    list.on('click', '.deleteTask', deleteTask);


    function addTask()
    {
        let input = $("#todo");
        let newListItem = input.val();
        list.append("<li> " + newListItem + " - <input class='selectComplete taskDone' type='checkbox'> <span class='glyphicon glyphicon-trash deleteTask'></span> </li>");
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
