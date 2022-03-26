const body = document.querySelector("body");
body.innerHTML = `
    <button class = "add-btn">add</button>
    <h3>todo list</h3>
    <div class = 'todo-container'></div>
`;
const addbtn = document.querySelector(".add-btn");
const todocontainer = document.querySelector(".todo-container");
addbtn.addEventListener("click", () =>{
    const todo = prompt("enter");
    const h4 = document.createElement("h4");
    h4.innerHTML = `
        <span>${todo}</span>
        <button class = 'delete'>delete<button>
    `;
    todocontainer.appendChild(h4);
    const deletebtn = document.querySelectorAll(".delete");
    deletebtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            const parent = btn.parentElement;
            parent.remove();
        })
    })
} );

