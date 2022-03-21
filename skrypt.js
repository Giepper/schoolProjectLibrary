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
var mainPageElement=document.querySelectorAll('.testEl');
var borroweElement=document.querySelectorAll('.borrowElement');
var mainPageAdd=document.querySelector('.mainPageAdd');
var yourName=document.querySelector('.yourName');
var booksNumber=document.querySelector('.booksNumber');
var penalty=document.querySelector('.penalty');
var login=document.querySelector('#login');
var password=document.querySelector('#password');
var logBtn=document.querySelector('.logBtn');
var regBtn=document.querySelector('.regBtn');
var modalLogin=document.querySelector('.modalLogin');
var modalRegister=document.querySelector('.modalRegister');
var registerButton=document.querySelector('.registerBtn');
var register=document.querySelector('#register');
var newPassword=document.querySelector('#newPassword');
var modal4=document.querySelector('#modal4');
var penaltyPay=document.querySelector('.penaltyPay');
var time;
var time2;
var time3;
var clone;
var clone2;
var clone3;
var testAdd;
var num=0;
var penaltyValue=0;
var booksNumberValue=0;

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
    if(!e.currentTarget.classList.contains('testEl')){
    if(e.currentTarget.classList.contains('borrowElement')){
        e.currentTarget.remove();
        booksNumberValue-=1;
        booksNumber.innerHTML="Wypożyczone książki: "+booksNumberValue;
        clearTimeout(time);
        //for(let x=0;x<borroweElement.length;x++){
            if(e.currentTarget.id==mainPageElement[0].id){
                mainPageElement[0].remove();
                num-=1;
            }
            if(e.currentTarget.id==mainPageElement[1].id){
                mainPageElement[1].remove();
                num-=1;
            }
        //}
    }else{
        modal2.style.setProperty('display','block');
        if(e.currentTarget.classList.contains('outOfStock')){
            pozycz.setAttribute('disabled','');
            pozycz.style.setProperty('background-color','red');
            modalNone.style.setProperty('display','block');
        }else{
            pozycz.removeAttribute('disabled','');
            pozycz.style.removeProperty('background-color','red');
            modalNone.style.setProperty('display','none');
        }
        clone=e.currentTarget.cloneNode(true);
        clone.classList.add('edit');  
        bookTitleInfo.after(clone);
    }
}
}
function give(){
    var today=new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + today.getMilliseconds();

    time2=setTimeout(hideAccept,4980);
    bookAccepted.style.setProperty('display','block');
    clone2=document.querySelector('.edit').cloneNode(true);
    clone2.classList.add('borrowElement');
    clone2.setAttribute('id',date);
    clone2.addEventListener('click',bookId);

    if(num<2){
        num+=1;
        clone3=document.querySelector('.edit').cloneNode(true);
        //clone3.classList.add('borrowElement');
        clone3.classList.add('testEl');
        clone3.setAttribute('id',date);
        clone3.addEventListener('click',bookId);
    }
    addNewBorrowBook.after(clone2);
    mainPageAdd.after(clone3);
    mainPageElement=document.querySelectorAll('.testEl');

    booksNumberValue+=1;
    booksNumber.innerHTML="Wypożyczone książki: "+booksNumberValue;
    
    time=setTimeout(timeUp,10000);
    //console.log(mainPageElement.length);
}
function hideAccept(){
    bookAccepted.style.setProperty('display','none');
}
function openBorrow(){
    borrowModal.style.setProperty('display','block')
}
function timeUp(){
    penaltyValue+=100;
    timeEnd.style.setProperty('display','block');
    time3=setTimeout(timeUp2,7980);
    penalty.innerHTML="Kara: "+penaltyValue+" zł";
    penaltyPay.style.setProperty('display','block');
}
function timeUp2(){
    timeEnd.style.setProperty('display','none');
}
var logTab=['Albert'];
var passTab=['1234'];
function loginFunction(){
    for(let x=0;x<logTab.length;x++){
        if((login.value==logTab[x])&&(password.value==passTab[x])){
            modal4.style.setProperty('display','none');
            yourName.innerHTML="Witaj "+login.value;
            break;
        }else{
            login.style.setProperty('outline','1px solid red');
            password.style.setProperty('outline','1px solid red');
        }
    }
}
function registerOpen(){
    modalLogin.style.setProperty('display','none');
    modalRegister.style.setProperty('display','block');
}
function registerFunction(){
    if((register.value)&&(password.value)!=null){
        if(register.value.length<=15){
            for(let x=0;x<logTab.length;x++){
                if(register.value==logTab[x]){
                    alert("Podany użytkownik już istnieje");
                    break;
                }else{
                    logTab.push(register.value);
                    passTab.push(newPassword.value);
                    modalLogin.style.setProperty('display','block');
                    modalRegister.style.setProperty('display','none');
                    break;
                }
            }
        }else{
            alert('Nazwa może mieć maksymalnie 15 znaków');
        }
    }else{
        alert('Pola nie mogą być puste');
    }
    console.log(register.value.length);
}
function pay(){
    penaltyValue=0;
    penalty.innerHTML="Kara: "+penaltyValue+" zł";
    penaltyPay.style.setProperty('display','none');
}

allBooks.addEventListener('click',all);
newBook.addEventListener('click',all);
pozycz.addEventListener('click',give);
//pozycz.addEventListener('click',lastBorrow);
myBooks.addEventListener('click',openBorrow);

logBtn.addEventListener('click',loginFunction);
regBtn.addEventListener('click',registerOpen);
registerButton.addEventListener('click',registerFunction);

penaltyPay.addEventListener('click',pay);
        
closeBtnList[0].addEventListener('click',closeBookList);
closeBorrowInfo.addEventListener('click',closeBorrowBooks);
closeBookInfo.addEventListener('click',closePanel);

for(let x=0;x<openBook.length;x++){
    openBook[x].addEventListener('click',bookId);
}