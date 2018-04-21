$(document).ready(function(){
    $("#add").click(function () {
        let input = $("#todo");
        let newListItem = input.val();
        $("#todolist").append("<li>" + newListItem + "</li>");
        input.val("");
    });
});
