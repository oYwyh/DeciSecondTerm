const section = document.querySelectorAll('.section');
const overlay = document.querySelectorAll('.overlay')
const circle = document.querySelectorAll('.circle')

overlay.forEach(lay => {
    if(lay.dataset.dir == 'rtl') {
        lay.style.right = '10rem';
        lay.style.transform =  'translate(0px, 40rem)';
    }else {
        lay.style.left = '10rem';
        lay.style.transform =  'translate(0px, -3rem)';
    }
});

const links = document.querySelectorAll('ul li')
const sections = document.querySelectorAll('[data-lin="true"]')
console.log(sections);
console.log(sections.length);

for (let i = 0; i < sections.length; i++) {
    links[i].addEventListener('click', (e) => {
        document.querySelector('.bars').classList.remove('open');
        document.querySelector('nav ul').classList.remove('active')
        sections.forEach(section => {
            section.classList.remove('active')
        });
        sections[i].classList.add('active')
        window.scrollBy({
            top: sections[i].getBoundingClientRect()['top'],
            left: 0,
            behavior: "smooth",
        });
    })
}

function generateComment() {
    const box = document.createElement('div')
    box.classList.add('box')
    const img = document.createElement('img');
    if(picture.value != '') {
        img.src = `${picture.value}`;
    }else {
        img.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    }
    const column = document.createElement('div')
    column.classList.add('column')
    cmntVal = document.createElement('p');
    cmntVal.innerHTML =  `${comment.value}`;
    cmntVal.classList.add('comment_val')
    const emailVal = document.createElement('p');
    emailVal.innerHTML =  `${email.value}`;
    emailVal.classList.add('email_val')
    const nameVal = document.createElement('p');
    nameVal.innerHTML =  `${user.value}`;
    nameVal.classList.add('name_val')
    column.appendChild(nameVal)
    column.appendChild(emailVal)
    column.appendChild(cmntVal)
    box.appendChild(img)
    box.appendChild(column)
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const date = new Date();
    const dateData = document.createElement('p')
    dateData.classList.add('date')
    dateData.innerText = `${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}. ${month[date.getMonth()]} ${date.getUTCDate()}, ${date.getFullYear()}`
    column.appendChild(dateData)
    cmntSec.append(box)            
    user.value = '';
    email.value = '';
    comment.value = '';
    picture.value = '';

    const optionsDiv = document.createElement('div')
    optionsDiv.classList.add('options')
    const toggle = document.createElement('div')
    toggle.classList.add('toggle')
    toggle.innerHTML = '...'
    const opt = document.createElement('div')
    opt.classList.add('opt')
    const optColumn = document.createElement('div')
    optColumn.classList.add('column')
    const delBtn = document.createElement('div')
    delBtn.classList.add('delete')
    delBtn.innerHTML = 'Delete'
    const editBtn = document.createElement('div')
    editBtn.classList.add('edit')
    editBtn.innerHTML = 'Edit'
    optColumn.appendChild(delBtn)
    optColumn.appendChild(editBtn)
    opt.appendChild(optColumn)
    optionsDiv.appendChild(toggle)
    optionsDiv.appendChild(opt)
    box.appendChild(optionsDiv)
    commentFunc()
}

function editFunc(editPrm) {
    editPrm.parentElement.parentElement.classList.remove('active')
    let cmnt = editPrm.parentElement.parentElement.parentElement.parentElement.children[1].children[2];
    let column = editPrm.parentElement.parentElement.parentElement.parentElement.children[1];
    let date = editPrm.parentElement.parentElement.parentElement.parentElement.children[1].children[3];
    console.log(column);
    const realDate = new Date();
    cmnt.classList.add('none')
    let txt = document.createElement('textarea');
    txt.classList.add('textarea')
    txt.value = cmnt.innerHTML;
    column.appendChild(txt);
    let save = document.createElement('button')
    save.classList.add('save')
    save.innerHTML = 'save'
    column.appendChild(save)
    save.onclick = () => {
        cmnt.innerHTML = `${txt.value}`
        cmnt.classList.remove('none')
        txt.remove();
        save.remove();
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        date.innerHTML = `${date.innerHTML} (Edited At ${realDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}. ${month[realDate.getMonth()]} ${realDate.getUTCDate()}, ${realDate.getFullYear()})`
    }
}

function commentFunc() {
    const optToggle = document.querySelectorAll('.options .toggle')
    const options = document.querySelectorAll('.options .opt')
    console.log(optToggle);
    optToggle.forEach(optToggle => {
        optToggle.onclick = () => {
            optToggle.nextElementSibling.classList.toggle('active')
        }
    });
    const clear = document.querySelectorAll('.delete')
    const edit = document.querySelectorAll('.edit')
    clear.forEach(clear => {
        clear.addEventListener('click', (e) => {
            const parent = clear.parentElement.parentElement.parentElement.parentElement;
            parent.remove();
        })
    });

    edit.forEach(edit => {
        edit.onclick = () => {
            editFunc(edit);
        }
    });
}


const submit = document.getElementById('submit')
const form = document.querySelector('form')
const user = document.getElementById('name')
const email = document.getElementById('email')
const comment = document.getElementById('comment')
const picture = document.getElementById('pic')
const cmntSec = document.querySelector('.comments')
let comment_val;
submit.addEventListener('click', (e) => {
    console.log(picture.value);
    e.preventDefault();
    if(user.value == '' || email.value == '' || comment.value == ''){
        alert(`Eneter The Values First`)
    }else {
        generateComment();
    }
})

document.querySelector('.bars').addEventListener('click', (e) => {
    document.querySelector('.bars').classList.toggle('open');
    document.querySelector('nav ul').classList.toggle('active')
})