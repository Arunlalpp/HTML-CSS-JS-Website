document.lastScrollPostion = 0;
document.lastCentered = 0


console.log("sreeeeeeeee")

document.addEventListener("#scroll", listener,() =>{
    const direction = window.pageYOffset - document.lastScrollPostion > 0  ? "down" : "up";
    const sections = [...document.querySelectorAll(selectors, 'section')];


    const destIndex =  direction === "up" ? document.lastCentered - 1 : document.lastCentered +1;

    if(destIndex>= 0 && destIndex < sections.length){
        console.log({destIndex,direction});
        document.onWayTo = destIndex;

        window.scroll(sections[destIndex].offsetTop)
    }

    sections.forEach((section,index ) => 
    {
        if(window.pageYOffset === section.offsetTop){
            document.lastCentered = index;
        }
    })


    document.lastScrollPostion = window.pageYOffset;
})