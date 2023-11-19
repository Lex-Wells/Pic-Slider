let menuImgEl = document.getElementById('menuImg')
let menuLinkEL = document.querySelector('.menuLink')
let menuCreatorEl = document.querySelector('.menuCreator')
let optionsEl = document.querySelectorAll('.options')
const slidingWrapper = document.querySelector('.slidingMenu')
const navOptionEl = document.querySelectorAll('.navOption')
const arrowLeft = document.getElementById("material-icons-left")
const arrowRight = document.getElementById("material-icons-right")
const menuContainer = document.getElementById("menuContainer")



navOptionEl.forEach(function(option,index){
    option.addEventListener('click', function(){
        slidingWrapper.style.transform = `translateX(${index * -100}vw)`
     
    })
})


newImg()
let imgData = []
const imgDataNames = ["menuImgName","dataLinkName","menuCreatorName"]
let dataResult = {}

function newImg(){
let clientID = "UQVJ8_OzOBvR5IXTdLyNCfhf9dteVoKC6s6hj2gYNdY"
let endPoint = `https://api.unsplash.com//photos/random/?client_id=${clientID}`
fetch(endPoint)
    .then(function(response){
      return response.json()
    })
    .then(function(jsonData){
      if(jsonData === null){
      }else{
      menuImgEl.src = jsonData.urls.regular;
      menuLinkEL.setAttribute("href", jsonData.links.html);
      menuCreatorEl.innerText = jsonData.user.name
      const dataLink = menuLinkEL
      imgData.push(menuImgEl.src, dataLink.href,  menuCreatorEl.innerText)}
  })   
 }   
function swipe(){
for(let i= 0;i<imgData.length;i++){
  dataResult[imgDataNames[i]]= imgData[i]
}
}


arrowLeft.addEventListener('click',function(){
  swipe()
  const hatedSave = JSON.stringify(dataResult)
  localStorage.setItem("hatedIt", hatedSave)
 const hatedString = localStorage.getItem("hatedIt")
  const hatedParsed = JSON.parse(hatedString) 
  document.getElementById('hatedItem').innerHTML += `
    <div class="hatedContainer">
         <a class="menuLink" href="${hatedParsed.dataLinkName}">
                  <img src="${hatedParsed.menuImgName}" alt=""i id="hatedImg" class="hatedImg" >
          </a>
          <a class="menuLink" href="${hatedParsed.dataLinkName}">
                <h2 class="menu-name-hate">${hatedParsed.menuCreatorName}</h2>
          </a>
    </div> `
       
        newImgSwipe()
    
})




arrowRight.addEventListener('click',function(){
  swipe()
  document.getElementById('lovedItem').innerHTML += `
    <div class="lovedContainer">
         <a class="menuLink" href="${dataResult.dataLinkName}">
                  <img src="${dataResult.menuImgName}" alt=""i id="lovedImg" class="lovedImg" >
          </a>
          <a class="menuLink" href="${dataResult.dataLinkName}">
                <h2 class="menu-name-love">${dataResult.menuCreatorName}</h2>
          </a>
    </div> `
        newImgSwipe()
        setTimeout(() => {
          navOptionEl[1].classList = 'menuFadeIn'
        }, "2000")
        setTimeout(() => {
          navOptionEl[1].classList= ("navOption")
        }, "2000")
        optionsEl[0].children[1].firstElementChild.classList.toggle(navLinkactive)
        testEr.classList.toggle()
})




  


function fadeInOut(){
  menuContainer.classList.toggle("menu-container-hide")
}
function newImgSwipe(){
  imgData= []     
  dataResult= {}
  newImg()
}
 