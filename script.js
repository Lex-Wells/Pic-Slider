let menuImgEl = document.getElementById('menuImg')
let menuLinkEL = document.querySelector('.menuLink')
let menuCreatorEl = document.querySelector('.menuCreator')
let optionsEl = document.querySelectorAll('.options')
const slidingWrapper = document.querySelector('.slidingMenu')
const navOptionEl = document.querySelectorAll('.navOption')
const arrowLeft = document.getElementById("material-icons-left")
const arrowRight = document.getElementById("material-icons-right")
const menuContainer = document.getElementById("menuContainer")


const navLink = document.querySelectorAll('.navLink').forEach(link=>{
link.addEventListener('focus',function(){
console.log(link.classList);
})
})


const testEr = optionsEl[0].children[1].firstElementChild

console.log(testEr);

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
        console.log("mm");
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
  console.log(hatedSave);
  localStorage.setItem("hatedIt", hatedSave)
 const hatedString = localStorage.getItem("hatedIt")
 console.log(hatedString);
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
    
   
   console.log(hatedParsed);
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
 
//  arrowLeft.addEventListener('click',function picFilter(picInfo){
//   for (let i = 0; i < picInfo.length; i++){
//         document.getElementById('hatedItem').innerHTML += `
//         <div class="hatedContainer">
//         <img src="${picInfo[i]}" alt=""i id="hatedImg" class="hatedImg">
//         <a class="menuLink" href="${menuLinkEL}">Link</a>
//         <h2 class="${menuCreatorEl}>Creator</h2>
//         </div> `
//   }
//         newImg() 
    
//       })
    
     
//    picFilter(menuImgEl)
   