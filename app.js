const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
let listUl = listDiv.querySelector('ul');
let lis = listUl.children;

function attachListItemButtons(li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);
  
  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);  
  
  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
}

for (let i = 0; i < lis.length; i += 1) {
  attachListItemButtons(lis[i]);
}

function initializer(ul) {
    let firstItem = ul.firstElementChild;
    let lastItem = ul.lastElementChild;
    lis = ul.children
    for (let i = 0; i < lis.length; i += 1) {
        if (lis[i] == firstItem) {
           let upButton = firstItem.querySelector('.up');
           upButton.style.backgroundColor = 'grey';
           upButton.disabled = true;
        } else {
           let upButton = lis[i].querySelector('.up');
           upButton.style.backgroundColor = '#52bab3';
           upButton.disabled = false;
          }
        if (lis[i] == lastItem) {
           let downButton = lastItem.querySelector('.down');
           downButton.style.backgroundColor = 'grey';
           downButton.disabled = true;
        } else {
           let downButton = lis[i].querySelector('.down');
           downButton.style.backgroundColor = '#508abc';
           downButton.disabled = false; 
          }
    }
}

initializer(listUl);

listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
      initializer(ul);
    }
    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
            ul.insertBefore(li, prevLi);
            initializer(ul);
      }
    }  
    if (event.target.className == 'down') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
            ul.insertBefore(nextLi, li); 
            initializer(ul);
      }
    }
  }
});

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  initializer(ul);
  addItemInput.value = '';
});




  

  
