setInterval(function() {
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY LTS"));
}, 1000);

var tasks = {};

var loadTasks = function() {
  tasks = JSON.parse(localStorage.getItem("tasks"));

  if (!tasks) {
    tasks = {};
  } else {
    // need to work on iterating through objects
    $("#task9").val(tasks[0])
    $("#task10").val(tasks[1])
    $("#task11").val(tasks[2])
    $("#task12").val(tasks[3])
    $("#task1").val(tasks[4])
    $("#task2").val(tasks[5])
    $("#task3").val(tasks[6])
    $("#task4").val(tasks[7])
    $("#task5").val(tasks[8])
  }
};

// provide warning to user that changes are not saved to localStorage
$(".row").on("keyup", "textarea", function() {
  $(this).closest(".row").find(".fa-save").addClass("fa-spin");
})

// simple save function
var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// save edits to tasks object at index to make iteration easier (I think)
$(".saveBtn").click(function() {
  var taskEdit = $(this).closest(".row").find(".taskText").val();
  var index = $(this).closest(".row").index();
  tasks[index] = taskEdit;
  saveTasks();
  // stop save icon spin to indicate localStorage is up-to-date
  $(this).find(".fa-save").removeClass("fa-spin");
});

//     $(tasks).forEach(function(task) {

//     })
//     var text = $(".taskText").val().trim();
//     console.log(text)
//     saveTasks(text);
//   });
// }

// $("#save9").click(function() {
//   var taskCall = $("#task9").val();
//   localStorage.setItem('task9', taskCall);
// })
loadTasks();