var myImgs = Array.from(document.querySelectorAll(".item img"))
var lightBoxContainer = document.querySelector(`#lightBoxContainer`)
var lightBox = document.querySelector(`#lightBox`)
var close = document.querySelector(`#close`)
var nextElement = document.querySelector(`#nextElement`)
var previosElement = document.querySelector(`#previosElement`)
var index 
var selectedImgSource 




for (let i = 0; i < myImgs.length; i++) {
    myImgs[i].addEventListener(`click`,function(event){


        selectedImgSource = event.target.getAttribute(`src`)
        lightBox.style.backgroundImage=`url(${selectedImgSource})`
        lightBoxContainer.classList.replace(`d-none`,`d-flex`)
        index=myImgs.indexOf( event.target)
    })
    
}


close.addEventListener(`click`,function(){
    lightBoxContainer.classList.replace(`d-flex`,`d-none`)
})


nextElement.addEventListener(`click`,function(){
index+=1
if (index>=myImgs.length) index=0
selectedImgSource =myImgs[index] .getAttribute(`src`)
lightBox.style.backgroundImage=`url(${selectedImgSource})`
})


previosElement.addEventListener(`click`,function(){
    index-=1
    if (index<0) index=5
selectedImgSource =myImgs[index] .getAttribute(`src`)
lightBox.style.backgroundImage=`url(${selectedImgSource})`
})


document.addEventListener(`keyup`, function(event){
if(lightBoxContainer.classList.contains(`d-flex`)){
    switch (event.key) {
        case`Escape`:
        lightBoxContainer.classList.replace(`d-flex`,`d-none`)
            break;
            case`ArrowRight`:
            showNextElement()
                break;
                case`ArrowLeft`:
                showPriveosElement()
                    break;
                
        default:
            break;
    }
}
})



function  showNextElement(){
    index+=1
    if (index>=myImgs.length) index=0
    selectedImgSource =myImgs[index] .getAttribute(`src`)
    lightBox.style.backgroundImage=`url(${selectedImgSource})`
    }

    function  showPriveosElement() {
        index-=1
        if (index<0) index=5
    selectedImgSource =myImgs[index] .getAttribute(`src`)
    lightBox.style.backgroundImage=`url(${selectedImgSource})`    
    }


    lightBoxContainer.addEventListener(`click`,function(event){
       if (event.target != lightBox && event.target != previosElement && event.target != nextElement ) {
        lightBoxContainer.classList.replace(`d-flex`,`d-none`)
       }
    })