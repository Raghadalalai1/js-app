// let students = [
//     "raghad0",
//     "raghad1",
//     "raghad2",
//     "raghad3",
//     "raghad4",
//     "raghad5",
//     "raghad6",
//     "raghad7",
//     "raghad8",
//     "raghad9",
//     "raghad10"

// ]
// //foreach loop
// students.forEach(function (item) {

//     console.log(item);
// })
// //while loop
// let index=0

// while(index<students.length){
//     console.log(students[index]);
//     index++;
// }
// function printHello() {
//     students.forEach(function (item) {

//         document.write(item);
//     })
// }
// function printSum(x, y) {
//     console.log(x + y);

// }
// printHello();
// printSum(10, 20)

// //function1 
// function creatAnewElementHTML() {

//     let createdElement = document.createElement('p')

//     createdElement.innerText = "hello from the other side";
//     let body = document.querySelector('body');
//     body.appendChild(createdElement)

// }
// //function2
// function creatElementHTML(text) {

//     let createdElement = document.createElement('div')

//     createdElement.innerText = text;
//     let body = document.querySelector('body');
//     body.appendChild(createdElement)

// }
// //new array
// let programmingLanguages = [
//     "java",
//     "c#",
//     "javascript",
//     "python",
//     "c++"
// ]
// //calling f1
// creatAnewElementHTML();
// //calling f2
// creatElementHTML("helllloooo javascript ")
// //calling f2
// creatElementHTML("helllloooo HTML ")
// //calling f2
// creatElementHTML("helllloooo CSS ")
// //calling f2
// creatElementHTML("helllloooo REACT ")
// //calling f2
// creatElementHTML("helllloooo WEBSITE ")
// function printLanguges(langeage){
//     let createdElement = document.createElement('div')

//     createdElement.innerText = `this is : ${langeage}`;
//     let body = document.querySelector('body');
//     body.appendChild(createdElement)



// } 
// programmingLanguages.forEach(function(item){

//     printLanguges(item);

// })


// console.log(students.length);
// console.log(typeof students);
// <button onclick="deleteRow(event)" class="btn btn-danger delete-button-${elementIndex}">Delete row</button>



const addRowToTable = (elementIndex, name, age, AcademicSpec, academiYear) => {
   
    const tableBody = document.querySelector(".table tbody");
    tableBody.insertAdjacentHTML(
        "beforeend",
        `
            <tr>
                <th scope="row">${elementIndex}</th>
                <td>${name}</td>
                <td>${age}</td>
                <td>${AcademicSpec}</td>
                <td>${academiYear}</td>
                <td>      
                <button onclick="deleteRow(event)" class="btn btn-danger delete-button-${elementIndex}">Delete row</button>
                </td>
            </tr>
    `
    );
}

let elementIndex = 0;

const newRowInTable = document.querySelector(".add-new-Row");
newRowInTable.addEventListener("click", () => {

    const nameInput = document.querySelector(".name");
    const ageInput = document.querySelector(".age");
    const AcademicSpecInput = document.querySelector(".AcademicSpec");
    const academiYearInput = document.querySelector(".academiYear");

    addRowToTable( elementIndex,nameInput.value, ageInput.value, AcademicSpecInput.value, academiYearInput.value );



const deleteRowFromTable = document.querySelector( `.delete-button-${elementIndex}`);

console.log(deleteRowFromTable);
    deleteRowFromTable.addEventListener("click", (event) => {
        event.target.parentElement.parentElement.remove();
    });

    elementIndex++;
    nameInput.value = ' ';
    ageInput.value = ' ';
    AcademicSpecInput.value = ' ';
    academiYearInput.value = ' ';

});

const deleteRow = (event) => {
    event.target.parentElement.parentElement.remove();
};
