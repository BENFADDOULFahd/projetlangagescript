var coursesContainer = document.getElementById("coursesContainer")

var courses = [

    {
        title: "Learn HTML",
        price: 0.99,
        image: "../images/html5.jpg",
        category: "HTML"
    },

    {
        title: "Learn CSS",
        price: 9.99,
        image: "../images/css3.jpg",
        category: "CSS"
    },

    {
        title: "Learn JavaScript",
        price: 49.99,
        image: "../images/javascript.png",
        category: "Javascript"
    },

    {
        title: "Learn Java",
        price: 79.99,
        image: "../images/java.jpg",
        category: "Java"
        

    },

    {
        title: "Learn PHP",
        price: 89.99,
        image: "../images/php.jpg",
        category: "PHP"
    },

    {
        title: "Learn Python",
        price: 29.99,
        image: "../images/imagespython.jpeg",
        category: "python"
    },
    {
        title: "Learn SQL",
        price: 19.99,
        image: "../images/imagesqll.png",
        category: "sql"
    },
    {
        title: "Learn typescript",
        price: 99.99,
        image: "../images/typescript.png",
        category: "typescript"
    },


]

// Helper function to get n random courses
function getRandomCourses(n) {

    var randomCourses = []
    rand = Math.floor(Math.random() * courses.length)
    for (i = 0; i < n; i++) {

        while ( randomCourses.find(course => {
            console.log("happening2")
            if ( course.title === courses[rand].title){
                return true
            }
            return false
        })){
            rand = Math.floor(Math.random() * courses.length)
        }

        randomCourses.push(courses[rand])
    }
    return randomCourses

}

// Helper function to display a single course
function displayCourse(coursesDiv, course) {

    var courseOuterContainer = document.createElement("div")
    courseOuterContainer.setAttribute("class", "courseOuterContainer");

    var courseContainer = document.createElement("div")
    courseContainer.setAttribute("class", "courseContainer");

    var courseImage = document.createElement("img")
    courseImage.src = course.image

    var courseTitle = document.createElement("h3")
    courseTitle.textContent = course.title

    var coursePrice = document.createElement("span")
    coursePrice.textContent = "Only " + course.price + " $"

    courseContainer.appendChild(courseImage)
    courseContainer.appendChild(courseTitle)
    courseContainer.appendChild(coursePrice)
    courseOuterContainer.appendChild(courseContainer)

    coursesDiv.appendChild(courseOuterContainer)

}

// Function that displays a random number of courses
function displayRandomCourses(n) {

    var randomCourses = getRandomCourses(n)

    for (i = 0; i < randomCourses.length; i++) {
        displayCourse(coursesContainer, randomCourses[i])
    }

}

// Function to display all courses at once
function displayAllCourses() {

    // Remove all children
    while (coursesContainer.firstChild) {
        coursesContainer.removeChild(coursesContainer.firstChild);
    }

    for (i = 0; i < courses.length; i++) {
        displayCourse(coursesContainer, courses[i])
    }

}

function isBetween(n, min, max) {
    if (n < max && n > min) {
        return true
    }
    return false
}

// Function to display a category's courses
function displayCategoryCourses(category) {

    var priceRange = document.getElementById("priceRange")

    // Remove all children
    while (coursesContainer.firstChild) {
        coursesContainer.removeChild(coursesContainer.firstChild);
    }

    courses.find(function (course) {
        if (course.category === category && isBetween(course.price, 0, priceRange.value)) {
            displayCourse(coursesContainer, course)
        }
    })

}

// Function to display the price range

function displayPriceRangeCourses() {

    var priceRange = document.getElementById("priceRange")
    var priceRangeSpan = document.getElementById("priceRangeSpan")
    priceRangeSpan.textContent = priceRange.value

    // Remove all children
    while (coursesContainer.firstChild) {
        coursesContainer.removeChild(coursesContainer.firstChild);
    }

    courses.find(function (course) {
        if (isBetween(course.price, 0, priceRange.value)) {
            displayCourse(coursesContainer, course)
        }
    })

}



// Function to set an event listener for enter key

function setEventLister() {

    var searchInput = document.getElementById("searchInput")
    searchInput.addEventListener("keyup", (event) => {
        // Remove all children
        if (event.key === "Enter") {
            console.log("I get there")
            while (coursesContainer.firstChild) {
                coursesContainer.removeChild(coursesContainer.firstChild);
            }
            displaySearchedCourses(searchInput.value)
        }
    });

}


// Function to display searched courses
function displaySearchedCourses(value) {

    courses.find(function (course) {
        if (course.title.indexOf(value) != -1) {
            displayCourse(coursesContainer, course)
        }
    })

}