$(document).ready(function () {

    $("#addBtn").click(function () {

        let task = $("#task").val();

        if (task.trim() !== "") {

            $("#list").append(`
                <div class="task-item">
                    <span>${task}</span>
                    <button class="deleteBtn">Delete</button>
                </div>
            `);

            $("#task").val("");
        }
    });

    $("#list").on("click", ".deleteBtn", function () {
        $(this).parent().remove();
    });

    $("#task").keypress(function (e) {
        if (e.which === 13) {
            $("#addBtn").click();
        }
    });

});