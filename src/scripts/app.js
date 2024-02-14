
const getData = async () => {
    const promise = await fetch('./data/data.json');
    const data = await promise.json();
    console.log(data.People)
    return data.People;
}


//Default setting

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
        // personId.className ="";

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

createTable();


// sort by ID

//sort by First Name

//sort by Lasr Name

//sort by height

//sort by Age


              