setInterval(function() {
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY LTS"));
}, 1000);

var tasks = {};

var loadTasks = function() {
  tasks = JSON.parse(localStorage.getItem("tasks"));

  if (!tasks) {
    tasks = {};
  }

    var index = $(".row").index();
    Object.entries(tasks).forEach();
    console.log(taskArr)
};

var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};



$(".saveBtn").click(function() {
  var taskEdit = $(this).closest(".row").find(".taskText").val();
  var index = $(this).closest(".row").index();
  tasks[index] = taskEdit;
  saveTasks();
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