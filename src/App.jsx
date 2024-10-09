import "./App.css";

function App() {
  function addtask() {
    let list = document.querySelector("ul");
    const inp = document.getElementById("task");
    console.log(inp.value);
    if (inp.value !== "") {
      let task = document.createElement("li");
      task.innerText = inp.value;

      let bton = document.createElement("button");
      bton.innerText = "delete";
      bton.classList.add("delete");

      task.appendChild(bton);

      list.appendChild(task);

      inp.value = "";
      bton.addEventListener("click", function () {
        list.removeChild(task);
        console.log("Element deleted");
      });
    }
  }
  return (
    <div>
      <h1>TODO</h1>
      <input type="text" id="task" placeholder="Enter yourtask" />
      <button className="btn" onClick={addtask}>
        Add task
      </button>
      <ul className="tasklist"></ul>
    </div>
  );
}

export default App;
