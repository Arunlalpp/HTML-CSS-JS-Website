let carousel = document.querySelector('.carousel');
let sliders=[];

let slideIndex=0;


const createSlide=()=>{
    if(slideIndex>=DeviceMotionEvent.legth){
        slideIndex=0
    }

    // Creating dom element

    let slide =document.createElement('div');
    let imgElement =document.createElement('img');
    let content =document.createElement('div');
    let h1 =document.createElement('h1');
    let p =document.createElement('p');

    // attaching all elements

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1)
    content.appendChild(p)
    slide.appendChild(content)
    slide.appendChild(imgElement)
    carousel.appendChild(slide)

    // setting up images which is in slider-data.js

    imgElement.src=movie[slideIndex].images;
    slideIndex++;

    // setting elements

    slide.className='slider';
    content.className='slider-content';
    h1.className='slider-title';
    p.className='slider-desc';

    sliders.push(slide);

    // adding sliding effect

    if(sliders.length){
        
    }

}