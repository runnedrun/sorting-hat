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
  var name = nameInput.val()

  addListItem("enrolledStudents", {
    name: name,
    house: chooseRandomHouse()
  })
})

onNewListItem("enrolledStudents", function(item) {
  var house = item.house
  var name = item.name

  var newStudentElement = $("<div></div>")
  newStudentElement.html("name: " + name + ", house: " + house)	

  enrolledStudentList.append(newStudentElement)
})