const todoList = document.getElementById("todoList"); // todoList Id를 가지고 있는 아이를 가르킴
const addBtn = document.getElementById("add");
const input = document.getElementById("input");

function todoItem(title) {
  this.title = title;
  this.date = "03:11";
  this.content = "content";
  this.star = "★★☆";
}

function UI() {
  UI.prototype.add = function (item) {
    let el = document.createElement("li"); // el 변수에 li 태그 요소를 갖게 함.
    el.className = "todo";
    el.innerHTML = `
        <div class="cover">
          <strong>${item.title}</strong>
          <p>${item.content}</p>
          <span class="time">${item.date}</span>wa
          <span class="star">${item.star}</span>
        </div>
        <button class="finished"><xi class="xi-check-thin"></xi></button>
    `;
    // li 태그 요소를 가진 아이에 html을 삽입

    todoList.appendChild(el); // el: li태그이며 html를 가지고 있는 아이를 todoList변수가 가르키는 아이에게 붙여줌
    alert("추가되었습니다.");
  };
}

const ui = new UI(); // ui변수에 UI객체를 담아줌

addBtn.addEventListener("click", function () {
  const title = input.value;
  if (title === "todos") {
    alert("내용을 기재해주세요");
    return false;
  }
  const item = new todoItem(title);
  ui.add(item);
  console.log("item : " + item.title);
});

todoList.addEventListener("click", function (e) {
  const className = e.target.className;
  if (className === "finished") {
    e.target.parentElement.remove();
    console.log(e.target.parentElement)
    return false;
  }
  if (className === "xi-check-thin") {
    e.target.parentElement.parentElement.remove();
    console.log(e.target.parentElement)
    return false;
  }
});
