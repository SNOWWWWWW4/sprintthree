//fetching our data
const getData = async () => {
    const promise = await fetch('./data/data.json');
    const data = await promise.json();
    console.log(data.People)
    return data.People;
}


//Default settings
let tableDiv = document.getElementById("tableDiv");
const createTable = async () => {
    
    let people = await getData();
    tableDiv.textContent = "";
    
    let table = document.createElement("table");
    table.classList.add('created-table');

    let tableHeaders = document.createElement("tr");

    tableDiv.append(table);
    table.append(tableHeaders);
    

    people.map(person => {

        let row = document.createElement("tr");
        row.classList.add('my-row');

        let personId = document.createElement("td");
        personId.textContent = person.Id;

        let personFirst = document.createElement("td");
        personFirst.textContent = person.FirstName;

        let personLast = document.createElement("td");
        personLast.textContent = person.LastName;

        let personEmail = document.createElement("td");
        personEmail.textContent = person.Email;

        let personHeight = document.createElement("td");
        personHeight.textContent = person.Height;

        let personAge = document.createElement("td");
        personAge.textContent = person.Age;

        table.append(row);
        row.append(personFirst);
        row.append(personLast);
        row.append(personEmail);
        row.append(personHeight);
        row.append(personAge);
        row.append(personId);

    })

}

//Calling our  default settings on Load
createTable();


// adding feature to table element
// tableDiv.addEventListener('scroll', () => {
//     if
// })

let refresh = document.getElementById("refresh");
refresh.addEventListener('click', async () => {
    createTable();
})


//sorting table by First Name
let sortedByFirst = true;

let sortByFirstBtn = document.getElementById("sortByFirstBtn")
sortByFirstBtn.addEventListener('click', async() => {
    console.log("firstname button works")

    const people = await getData();

    
    if(sortedByFirst){
        // sorting data by first name ascending
        people.sort((a,b) =>{
            if(a.FirstName < b.FirstName){
                return -1;
            }else if(a.FirstName > b.FirstName){
                return 1;
            }else{
                return 0;
            }
        })
        sortedByFirst = false;

    }else{
        //sorting data by first name descending 
        people.sort((a,b) =>{
            if(a.FirstName < b.FirstName){
                return 1;
            }else if(a.FirstName > b.FirstName){
                return -1;
            }else{
                return 0;
            }
        })
        sortedByFirst = true;

    }

   

    tableDiv.textContent = "";
    
    let table = document.createElement("table");
    table.classList.add('created-table');

    let tableHeaders = document.createElement("tr");

    tableDiv.append(table);
    table.append(tableHeaders);
    

    people.map(person => {

        let row = document.createElement("tr");
        row.classList.add('my-row');

        let personId = document.createElement("td");
        personId.textContent = person.Id;

        let personFirst = document.createElement("td");
        personFirst.textContent = person.FirstName;

        let personLast = document.createElement("td");
        personLast.textContent = person.LastName;

        let personEmail = document.createElement("td");
        personEmail.textContent = person.Email;

        let personHeight = document.createElement("td");
        personHeight.textContent = person.Height;

        let personAge = document.createElement("td");
        personAge.textContent = person.Age;

        table.append(row);
        row.append(personFirst);
        row.append(personLast);
        row.append(personEmail);
        row.append(personHeight);
        row.append(personAge);
        row.append(personId);

    })
    

})


//Kept getting a "Cannot read properties of null" on all my other buttons
//I'm assuming it's the data is coming in too fast or hasn't porperly loaded
// document.addEventListener('DOMContentLoaded', function() {
    
// });
//Nevermind I had one typo...


//sort by Last Name
let sortedByLast = true;

let sortByLastBtn = document.getElementById("sortByLastBtn");
sortByLastBtn.addEventListener('click', async () => {

    console.log("last name button works");

    const people = await getData();

    if(sortedByLast){
        people.sort((a,b) => {
            if(a.LastName < b.LastName){
                return -1;
            }else if(a.LastName > b.LastName){
                return 1;
            }else{
                return 0;
            }
        });
        sortedByLast = false;

    }else{
        people.sort((a,b) => {
            if(a.LastName < b.LastName){
                return 1;
            }else if(a.LastName > b.LastName){
                return -1;
            }else{
                return 0;
            }
        });
        sortedByLast = true;

    }


    tableDiv.textContent = "";
    
    let table = document.createElement("table");
    table.classList.add('created-table');

    let tableHeaders = document.createElement("tr");

    tableDiv.append(table);
    table.append(tableHeaders);
    

    people.map(person => {

        let row = document.createElement("tr");
        row.classList.add('my-row');

        let personId = document.createElement("td");
        personId.textContent = person.Id;

        let personFirst = document.createElement("td");
        personFirst.textContent = person.FirstName;

        let personLast = document.createElement("td");
        personLast.textContent = person.LastName;

        let personEmail = document.createElement("td");
        personEmail.textContent = person.Email;

        let personHeight = document.createElement("td");
        personHeight.textContent = person.Height;

        let personAge = document.createElement("td");
        personAge.textContent = person.Age;

        table.append(row);
        row.append(personFirst);
        row.append(personLast);
        row.append(personEmail);
        row.append(personHeight);
        row.append(personAge);
        row.append(personId);

    })
})


//sort by first letter of email



//sort by height
let sortedByHeight = true;

let sortByHeightBtn = document.getElementById("sortByHeightBtn");
sortByHeightBtn.addEventListener('click', async() => {

    console.log("height button works")

    const people = await getData();

    if(sortedByHeight){
        people.sort((a,b) =>{
            if(a.Height < b.Height){
                return -1;
            }else if(a.Height > b.Height){
                return 1;
            }else{
                return 0;
            }
        })
        sortedByHeight = false;

    }else{
        people.sort((a,b) =>{
            if(a.Height < b.Height){
                return 1;
            }else if(a.Height > b.Height){
                return -1;
            }else{
                return 0;
            }
        })
        sortedByHeight = true;

    }

   

    tableDiv.textContent = "";
    
    let table = document.createElement("table");
    table.classList.add('created-table');

    let tableHeaders = document.createElement("tr");

    tableDiv.append(table);
    table.append(tableHeaders);
    

    people.map(person => {

        let row = document.createElement("tr");
        row.classList.add('my-row');

        let personId = document.createElement("td");
        personId.textContent = person.Id;

        let personFirst = document.createElement("td");
        personFirst.textContent = person.FirstName;

        let personLast = document.createElement("td");
        personLast.textContent = person.LastName;

        let personEmail = document.createElement("td");
        personEmail.textContent = person.Email;

        let personHeight = document.createElement("td");
        personHeight.textContent = person.Height;

        let personAge = document.createElement("td");
        personAge.textContent = person.Age;

        table.append(row);
        row.append(personFirst);
        row.append(personLast);
        row.append(personEmail);
        row.append(personHeight);
        row.append(personAge);
        row.append(personId);

    })
})
           

//sort by age
let sortedByAge = true;

let sortByAgeBtn = document.getElementById("sortByAgeBtn");
sortByAgeBtn.addEventListener('click', async() => {

    console.log("Age button works");

    const people = await getData();

    if(sortedByAge){
        people.sort((a,b) =>{
            if(a.Age < b.Age){
                return -1;
            }else if(a.Age > b.Age){
                return 1;
            }else{
                return 0;
            }
        })
        sortedByAge = false;

    }else{
        people.sort((a,b) =>{
            if(a.Age < b.Age){
                return 1;
            }else if(a.Age > b.Age){
                return -1;
            }else{
                return 0;
            }
        })
        sortedByAge = true;

    }

   

    tableDiv.textContent = "";
    
    let table = document.createElement("table");
    table.classList.add('created-table');

    let tableHeaders = document.createElement("tr");

    tableDiv.append(table);
    table.append(tableHeaders);
    

    people.map(person => {

        let row = document.createElement("tr");
        row.classList.add('my-row');

        let personId = document.createElement("td");
        personId.textContent = person.Id;

        let personFirst = document.createElement("td");
        personFirst.textContent = person.FirstName;

        let personLast = document.createElement("td");
        personLast.textContent = person.LastName;

        let personEmail = document.createElement("td");
        personEmail.textContent = person.Email;

        let personHeight = document.createElement("td");
        personHeight.textContent = person.Height;

        let personAge = document.createElement("td");
        personAge.textContent = person.Age;

        table.append(row);
        row.append(personFirst);
        row.append(personLast);
        row.append(personEmail);
        row.append(personHeight);
        row.append(personAge);
        row.append(personId);

    })
})

//sort by id
let sortedById = true;

let sortByIdBtn = document.getElementById("sortByIdBtn");
sortByIdBtn.addEventListener('click', async() => {

    console.log("Id button works");

    const people = await getData();

    if(sortedById){
        people.sort((a,b) =>{
            if(a.Id < b.Id){
                return -1;
            }else if(a.Id > b.Id){
                return 1;
            }else{
                return 0;
            }
        })
        sortedById = false;

    }else{
        people.sort((a,b) =>{
            if(a.Id < b.Id){
                return 1;
            }else if(a.Id > b.Id){
                return -1;
            }else{
                return 0;
            }
        })
        sortedById = true;

    }

   

    tableDiv.textContent = "";
    
    let table = document.createElement("table");
    table.classList.add('created-table');

    let tableHeaders = document.createElement("tr");

    tableDiv.append(table);
    table.append(tableHeaders);
    

    people.map(person => {

        let row = document.createElement("tr");
        row.classList.add('my-row');

        let personId = document.createElement("td");
        personId.textContent = person.Id;

        let personFirst = document.createElement("td");
        personFirst.textContent = person.FirstName;

        let personLast = document.createElement("td");
        personLast.textContent = person.LastName;

        let personEmail = document.createElement("td");
        personEmail.textContent = person.Email;

        let personHeight = document.createElement("td");
        personHeight.textContent = person.Height;

        let personAge = document.createElement("td");
        personAge.textContent = person.Age;

        table.append(row);
        row.append(personFirst);
        row.append(personLast);
        row.append(personEmail);
        row.append(personHeight);
        row.append(personAge);
        row.append(personId);

    })
})

