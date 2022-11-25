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

}