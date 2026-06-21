$(document).ready(function () {

    // Load saved tasks
    loadTasks();

    function saveTasks() {
        localStorage.setItem("tasks", $("#list").html());
    }

    function loadTasks() {
        const savedTasks = localStorage.getItem("tasks");

        if (savedTasks) {
            $("#list").html(savedTasks);
        }
    }

    // Add task
    $("#addBtn").click(function () {

        let task = $("#task").val().trim();

        if (task !== "") {

            const timeCreated = new Date().toLocaleString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit"
            });

            $("#list").append(`
                <div class="task-item">
                    <div class="task-info">
                        <span class="task-text">${task}</span>
                        <small class="timestamp">
                            Created: ${timeCreated}
                        </small>
                    </div>

                    <div class="buttons">
                        <button class="completeBtn">✓</button>
                        <button class="deleteBtn">✕</button>
                    </div>
                </div>
            `);

            $("#task").val("");
            saveTasks();
        }
    });

    // Press Enter to add task
    $("#task").keypress(function (e) {
        if (e.which === 13) {
            $("#addBtn").click();
        }
    });

    // Delete task
    $("#list").on("click", ".deleteBtn", function () {
        $(this).closest(".task-item").remove();
        saveTasks();
    });

    // Complete task
    $("#list").on("click", ".completeBtn", function () {
        $(this).closest(".task-item").toggleClass("completed");
        saveTasks();
    });

});