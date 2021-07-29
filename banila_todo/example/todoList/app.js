
const todoList = document.getElementById('todoList');
const addBtn = document.getElementById('add');
const input = document.getElementById('input');

function todoItem(title) {
  this.title = title;
  this.date = "03:11";
  this.content = "content";
  this.star = "★★☆";
}

function UI() {
  UI.prototype.add = function(item) {
    let el = document.createElement('li');
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
    //
    todoList.appendChild(el);
    alert("추가되었습니다.");
  }
}

const ui = new UI();

addBtn.addEventListener('click',function(){
  const title =  input.value;
  if(title === "search") {
    alert("내용을 기재해주세요");
    return false;
  }
  const item = new todoItem(title);
  ui.add(item);
});

todoList.addEventListener('click',function(e) {
  const className = e.target.className;
  if(className === "finished") {
    e.target.parentElement.remove();
    return false;
  }
  if(className === "xi-check-thin") {
    e.target.parentElement.parentElement.remove();
    return false;
  }
});
