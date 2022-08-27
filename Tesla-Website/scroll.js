document.lastScrollPostion = 0;
document.lastCentered = 0


document.addEventListener("#scroll",() =>{
    const direction = window.pageYOffset - document.lastScrollPostion > 0  ? "down" : "up";
    const sections = [...document.querySelectorAll(selectors, 'section')];


    const destIndex =  direction === "up" ? document.lastCentered - 1 : document.lastCentered +1;

    if(destIndex>= 0 && destIndex < sections.length){
        console.log({destIndex,direction});
        window.scroll(sections[destIndex].offsetTop)
    }


    
    sections.forEach((section,index: number ) => 
    {
        if(window.pageYOffset === section.offsetTop){
            document.lastCentered = index;
        }
    })


    document.lastScrollPostion = window.pageYOffset;
})