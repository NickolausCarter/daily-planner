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

// identify past, present, and future hours
var checkStatus = function() {
  var currentHour = moment().hours();
  $(".row").find("textarea").removeClass("present past future")
  $(".row").each(function() {
    var taskHour = this.id;
      if (taskHour == currentHour) {
        $(this).find("textarea").addClass("present");
      } else if (taskHour < currentHour) {
        $(this).find("textarea").addClass("past");
      } else {
        $(this).find("textarea").addClass("future");
      }
  })
};

// update task coloring every 10 minutes
setInterval(function() {
  checkStatus();
}, (1000 * 60) * 10);

// set page on first load
setTimeout(function() {
  loadTasks();
  checkStatus();
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY LTS"))
}, 0);