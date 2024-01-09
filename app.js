// var titles=document.getElementsByClassName('title');


// Array.from(titles).forEach(item => {
//     item.style.color='violet';
//    console.log( item.childNodes);

    
// });

const wrap= document.querySelector('#book-list ul li:nth-child(3) .name');
//console.log(wrap.firstChild);

var books= document.querySelectorAll('#book-list li .name');
console.log(books);
Array.from(books).forEach((item)=>{
    console.log(item);
})

