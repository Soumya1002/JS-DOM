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