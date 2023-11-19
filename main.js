let arr = [];
loadFromLocalStorage()

function addNote() {
    event.preventDefault()
    const textForm = document.getElementById("textForm")
    const dateInput = document.getElementById("dateInput")
    const timeInput = document.getElementById("timeInput")

    const note = {
        text: textForm.value,
        date: dateInput.value,
        time: timeInput.value,
    }

    arr.push(note)
    saveToLocalStorage()
    display()
};

// document.getElementById('dateInput').addEventListener('input', function () {
//     var currentDate = new Date();
//     var selectedDate = new Date(this.value);

//     if (isNaN(selectedDate) || selectedDate <= currentDate) {
//         alert("תאריך שעבר או זהה לתאריך הנוכחי. יש לבחור תאריך עתידי.");
//         this.value = ''; // אתה יכול גם לטפל באופן אחר
//     }
// });


function saveToLocalStorage() {
    const str = JSON.stringify(arr)
    localStorage.setItem("key", str)
};

function loadFromLocalStorage() {
    const getItem = localStorage.getItem("key");
    if (getItem) {
        arr = JSON.parse(getItem)
        display()
    }
};

function deleteItem(elemnt) {
    const index = elemnt.id;
    arr.splice(index, 1)
    saveToLocalStorage()
    loadFromLocalStorage()
    display()
};

function display() {
    const containerNotes = document.getElementById("containerNotes")
    let html = ""
    for (let i = 0; i < arr.length; i++) {
        html += `
            <div class = "note">
            <button id = "${i}" onclick = "deleteItem(this)" class = "buttonNote"> ❌ </button>
            <span class = "textNote"> ${arr[i].text} </span>
            <div class = "timeAndDate">
            <span> ${arr[i].date}</span>
<br>
            <span> ${arr[i].time}</span>
</div>
        </div>`
    }
    containerNotes.innerHTML = html
};