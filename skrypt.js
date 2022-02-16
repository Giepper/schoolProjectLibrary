var allBooks=document.querySelector('#allBooks');
var myBooks=document.querySelector('#myBooks');
var modal=document.querySelector('#modal1');
var closeBtnList=document.querySelectorAll('.close-btn');
var openBook=document.querySelectorAll('.bookContainer');
var modal2=document.querySelector('#modal2');
var bookTitleInfo=document.querySelector('.bookTitleInfo');
// var bookAuthorInfo=document.querySelector('.bookAuthorInfo');
// var bookLanguageInfo=document.querySelector('.bookLanguageInfo');
// var bookISBNInfo=document.querySelector('bookISBNInfo');
// var bookTitle=document.querySelectorAll('.bookTitle');
var modalBookContent=document.querySelector('.modalBookContent');
var pozycz=document.querySelector('.accept');
var borrowModal=document.querySelector('#modal3');
var closeBookInfo=document.querySelector('#closeBookList');
var closeBorrowInfo=document.querySelector('#closeBorrowList');
var addNewBorrowBook=document.querySelector('.addNewBorrowBook');
var modalNone=document.querySelector('.modalNone');
var edit=document.querySelector('.edit');
var newBook=document.querySelector('.newBook');
var bookAccepted=document.querySelector('.bookAccepted');
var timeEnd=document.querySelector('#timeEnd');
var time;
var time2;
var time3;
var clone;
var clone2;

function all(){
    modal.style.setProperty('display','block');
}
function closeBookList(){
    modal.style.setProperty('display','none');
}
function closePanel(){
    clone.remove();
    modal2.style.setProperty('display','none');
}
function closeBorrowBooks(){
    borrowModal.style.setProperty('display','none');
}
function bookId(e){
    if(!(e.target.classList.contains('borrowElement'))){
        modal2.style.setProperty('display','block');
        if(e.target.classList.contains('outOfStock')){
            pozycz.setAttribute('disabled','');
            pozycz.style.setProperty('background-color','red');
            modalNone.style.setProperty('display','block');
        }else{
            pozycz.removeAttribute('disabled','');
            pozycz.style.removeProperty('background-color','red');
            modalNone.style.setProperty('display','none');
        }
        clone=e.target.cloneNode(true);
        clone.classList.add('edit');  
        bookTitleInfo.after(clone);
    }
}
function give(){
    time2=setTimeout(hideAccept,4980);
    bookAccepted.style.setProperty('display','block');
    clone2=document.querySelector('.edit').cloneNode(true);
    clone2.classList.add('borrowElement');
    addNewBorrowBook.after(clone2);
    time=setTimeout(timeUp,8000);
}
function hideAccept(){
    bookAccepted.style.setProperty('display','none');
}
function openBorrow(){
    borrowModal.style.setProperty('display','block')
}
function timeUp(){
    timeEnd.style.setProperty('display','block');
    time3=setTimeout(timeUp2,7980);
}
function timeUp2(){
    timeEnd.style.setProperty('display','none');
}

allBooks.addEventListener('click',all);
newBook.addEventListener('click',all);
pozycz.addEventListener('click',give);
myBooks.addEventListener('click',openBorrow);
        
closeBtnList[0].addEventListener('click',closeBookList);
closeBorrowInfo.addEventListener('click',closeBorrowBooks);
closeBookInfo.addEventListener('click',closePanel);

for(let x=0;x<openBook.length;x++){
    openBook[x].addEventListener('click',bookId);
}