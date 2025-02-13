const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const clo=document.getElementById('close');

if(bar){
    bar.addEventListener('click',()=>{
        nav.style.right=0;
    })
}

if(clo){
    clo.addEventListener('click',()=>{
        nav.style.right='-300px';
    })
}


const mainimg=document.getElementsByClassName('productpic-main-image')[0];
const smallimg=document.getElementsByClassName('small-img');


smallimg[0].onclick=function(){
    mainimg.src=smallimg[0].src;
}

smallimg[1].onclick=function(){
    mainimg.src=smallimg[1].src;
}
smallimg[2].onclick=function(){
    mainimg.src=smallimg[2].src;
}
smallimg[3].onclick=function(){
    mainimg.src=smallimg[3].src;
}


// below code also correct instead above the code

// const mainimg = document.querySelector('.productpic-main-image'); // Use querySelector for single class
// const smallimg = document.querySelectorAll('.small-img'); // Use querySelectorAll for all small images

// // Loop through each small image to add event listeners
// smallimg.forEach(function(img, index) {
//     img.onclick = function() {
//         mainimg.src = img.src; // Change the main image source to the clicked small image's source
//     }
// });

