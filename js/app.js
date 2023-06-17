const nav = document.querySelector('.nav-bar');
const navWrapper = document.querySelector('.nav-bar .wrapper');
const barsParent = document.createElement('li')
const barOne = document.createElement('div')
const barTwo = document.createElement('div')
const barThree = document.createElement('div')
const navUl = document.querySelector('.nav-bar .wrapper ul')


barOne.classList.add('bar1')
barTwo.classList.add('bar2')
barThree.classList.add('bar3')
barsParent.classList.add('bars')


for (let i = 1; i <= 6; i++) {
    let sectionLi = document.createElement('li');
    sectionLi.setAttribute(`data-link-num`, i)
    sectionLi.innerHTML = `Section ${i}`
    if(i == 6) {
        sectionLi.innerHTML = `Comments`
    }
    navUl.append(sectionLi)
}

barsParent.append(barOne)
barsParent.append(barTwo)
barsParent.append(barThree)
navWrapper.append(barsParent)


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
for (let i = 0; i < sections.length; i++) {
    links[i].addEventListener('click', (e) => {
        document.querySelector('.bars').classList.remove('open');
        document.querySelector('nav ul').classList.remove('active')
        sections.forEach(section => {
            overlay.forEach(lay => {
                lay.style.opacity = '0'
            });
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
// This Function Build Comment Box, it uses these parameters to set them as our value from localstorage and create them if there is value in the localstorage
function cmntBuilder(user,email,pic,cmnt,date) {
    const box = document.createElement('div')
    box.classList.add('box')
    const img = document.createElement('img');
    if(picture.value != '') {
        img.alt = 'error'
        img.src = `${picture.value}`;
    }else {
        img.src = pic;
    }
    const column = document.createElement('div')
    column.classList.add('column')
    cmntVal = document.createElement('p');
    cmntVal.innerHTML =  cmnt;
    cmntVal.id = `comment_${cmnt}`
    cmntVal.classList.add('comment_val')
    const emailVal = document.createElement('p');
    emailVal.innerHTML =  email;
    emailVal.classList.add('email_val')
    const nameVal = document.createElement('p');
    nameVal.innerHTML =  user;
    nameVal.classList.add('name_val')
    column.appendChild(nameVal)
    column.appendChild(emailVal)
    column.appendChild(cmntVal)
    box.appendChild(img)
    box.appendChild(column)
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const dateData = document.createElement('p')
    dateData.classList.add('date')
    dateData.innerText = date;
    column.appendChild(dateData)
    cmntSec.append(box)            

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
// This Function Generate Comment & Saving It To LocalStorage
function generateComment() {
    const box = document.createElement('div')
    box.classList.add('box')
    const img = document.createElement('img');
    if(picture.value != '') {
        img.src = `${picture.value}`;
        img.alt = 'error'
    }else {
        img.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    }
    const column = document.createElement('div')
    column.classList.add('column')
    cmntVal = document.createElement('p');
    cmntVal.innerHTML =  `${comment.value}`;
    cmntVal.id = `comment_${comment.value}`;
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
    // Save the comment to local storage
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push({
    user: nameVal.innerHTML,
    email: emailVal.innerHTML,
    pic: img.src,
    comment: cmntVal.innerHTML,
    date: dateData.innerHTML,
    id: cmntVal.id
    });
    localStorage.setItem('comments', JSON.stringify(comments));
}
// This Function To Edit The Comment as well as edits it value in localstorage
function editFunc(editPrm) {
    editPrm.parentElement.parentElement.classList.remove('active')
    let cmnt = editPrm.parentElement.parentElement.parentElement.parentElement.children[1].children[2];
    let column = editPrm.parentElement.parentElement.parentElement.parentElement.children[1];
    let date = editPrm.parentElement.parentElement.parentElement.parentElement.children[1].children[3];
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
        cmnt.classList.remove('none')
        txt.remove();
        save.remove();
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        date.innerHTML = `${date.innerHTML} (Edited At ${realDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}. ${month[realDate.getMonth()]} ${realDate.getUTCDate()}, ${realDate.getFullYear()})`
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        const commentObj = comments.find(c => c.comment === cmnt.innerHTML);
        const index = comments.indexOf(commentObj);
        commentObj.comment = txt.value;
        commentObj.date = date.innerHTML;
        localStorage.setItem('comments', JSON.stringify(comments));
        cmnt.innerHTML = `${txt.value}`
    }
}
// This Function For Deleting Comment As Well As Deleting It From Localstorage
function deleteComment(comment) {
    // Find the comment element that contains the comment value
    const commentElement = document.getElementById(`comment_${comment}`)
    commentElement.parentElement.parentElement.remove();
    // Remove the comment from local storage
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentObj = comments.find(c => c.comment === comment);
    const index = comments.indexOf(commentObj);
    comments.splice(index, 1);
    localStorage.setItem('comments', JSON.stringify(comments));
} 
// This Function For Activate The Option For The Comment And Adds Edit And Delete Function To It
function commentFunc() {
    const optToggle = document.querySelectorAll('.options .toggle')
    const options = document.querySelectorAll('.options .opt')
    optToggle.forEach(optToggle => {
        optToggle.onclick = () => {
            optToggle.nextElementSibling.classList.toggle('active')
        }
    });
    const clear = document.querySelectorAll('.delete')
    const edit = document.querySelectorAll('.edit')
    clear.forEach(clear => {
        clear.addEventListener('click', (e) => {
            const clickedCommentBox = clear.parentElement.parentElement.parentElement.parentElement.querySelector('.comment_val').innerHTML;
            // Delete the comment
            deleteComment(clickedCommentBox);
        })
    });

    edit.forEach(edit => {
        edit.onclick = () => {
            editFunc(edit);
        }
    });
}
window.onload = () => {
    // This Statement Check If there is comments column in localstorage then get the values from it  then loop on it to set values in varibles to pass them to cmntBuilder() func parameters
    if(localStorage.getItem("comments")) {
        const localCmnt = JSON.parse(localStorage.getItem("comments"));
        if(localCmnt.length > 0 ) {
        localCmnt.forEach(cmnt => {
            let user = cmnt.user;
            let email = cmnt.email;
            let pic = cmnt.pic;
            let comment = cmnt.comment;
            let date = cmnt.date;
            cmntBuilder(user,email,pic,comment,date);
        });
    }
}
}
const submit = document.getElementById('submit')
const form = document.querySelector('form')
const user = document.getElementById('name')
const email = document.getElementById('email')
const comment = document.getElementById('comment')
const picture = document.getElementById('pic')
const cmntSec = document.querySelector('.comments')
const error = document.querySelector('.error')
let comment_val;
// This Event Check If add comments box inputs empty or not if it's not empty it will generate the comment if it's empty it won't add the comment 
submit.addEventListener('click', (e) => {
        
    e.preventDefault();
    if(user.value == '' || email.value == '' || comment.value == ''){
        error.innerHTML = `Eneter The Values First`
    }else if(!email.value.match(/@/)) {
        error.innerHTML = `Email Must Contain @ Character`
    }else {
        error.innerHTML = ``
        generateComment();
    }
})
// This Event For When Clicks On Humburger Toggle Activatr the Menu For Mobiles
document.querySelector('.bars').addEventListener('click', (e) => {
    document.querySelector('.bars').classList.toggle('open');
    document.querySelector('nav ul').classList.toggle('active')
})
// This Function To Remove Fixed Position From Navbar When Not Scrolling
function stoppedScrolling() {
    let last_y = window.scrollY;
    setTimeout(() => {
        let new_y = window.scrollY;
        if(last_y == new_y) {
            document.querySelector('.nav-bar .wrapper').style.position = 'relative';
        }else {
            document.querySelector('.nav-bar .wrapper').style.position = 'fixed';
        }
    }, 1000);
}
window.onscroll = () => {
    // stoppedScrolling();
    // This Statement Check Of Window Y Axis Is Bigger Than Y = 300 Then Add Active Class On toTop Icon
    if(window.scrollY > 300) {
        toTop.classList.add('active')
    }else {
        toTop.classList.remove('active')
    }
}
const toTop = document.querySelector('.top');
// This Event For When Clicking On To Top Icon To Return Us All The Way Back To The Top
toTop.addEventListener('click', () => {
    document.querySelector('.nav-bar').scrollIntoView({
        behavior: 'smooth'
    });
})