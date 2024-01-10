// var btns= document.querySelectorAll('#book-list .delete');
// console.log(btns);

// (btns).forEach((btn)=>{
//     btn.addEventListener('click', (e)=>{
//        const li=e.target.parentNode;
//        li.parentNode.removeChild(li);

//     });
// });

const list =document.querySelector('#book-list ul');

list.addEventListener('click', (e)=>{
    if(e.target.className='delete'){
        const li=e.target.parentNode;
        list.removeChild(li);
    }
});

const addForm=document.forms['add-book'];
addForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const val= addForm.querySelector('input[type="text"]').value;
    console.log(val);

    const element=document.createElement('li');
    const el=document.createElement('span');  
    const del=document.createElement('span');

   del.textContent='delete';
   el.textContent=val;

   el.classList.add("name");
   del.classList.add('delete');

    element.appendChild(el);
    element.appendChild(del);
    list.appendChild(element);
});

//hide books

const hide=document.querySelector('#hide');
hide.addEventListener('change', (e)=>{
    if(hide.checked){
        list.style.display="none";
    }
    else
    {
        list.style.display="initial";
    }

});
