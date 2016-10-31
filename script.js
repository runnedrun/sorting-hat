var nameInput = $("#name-input")
var sortButton = $("#sort-button")
var enrolledStudentList = $(".enrolled-students")

var houses = [
  "Ravenclaw",
  "Hufflepuff",
  "Gryfindor",
  "Slytherin"
]

function chooseRandomHouse() {
  var index = Math.floor(Math.random() * houses.length)

  return houses[index]
}

sortButton.click(function() {
  var name = nameInput.howDoIGetTheValueAgain()

  addListItem("enrolledStudents", {
    name: name,
    house: chooseRandomHouse()
  })
})

onNewListItem("enrolledStudents", function(student) {
  console.log("got a new student!", student)

  var newStudentElement = $("<div></div>")
  newStudentElement.html("hey, there's a n")	

  enrolledStudentList.append(newStudentElement)
})