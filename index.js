let previewBody=document.getElementById('previewBody')
let userName=document.getElementById('userName')
let lastName=document.getElementById('lastname')
let jobrole=document.getElementById('jobrole')
let email=document.getElementById('email')
let mobileNum=document.getElementById('number')
let address=document.getElementById('address')
let det=document.getElementById('det')
console.log(det);



let previewBodyh1=document.createElement('h3')
let lastname=document.createElement('h3')
let jobRole=document.createElement('h2')
let emailEle=document.createElement('h5')
let number=document.createElement('h5')
let userAddress=document.createElement('h5')
//firstname attribute define
previewBodyh1.classList.add('forUserName')
previewBodyh1.setAttribute('align','center')
//lastname attribute define
lastname.classList.add('forLastName')
previewBodyh1.insertAdjacentElement('beforeEnd',lastname)
//jobrole attribute define
jobRole.setAttribute('align','center')
jobRole.classList.add('jobRole')

//section create for firstname and lastname 
let divs=document.createElement('section')
divs.classList.add('forUsernameDiv')
divs.append(previewBodyh1,lastname)

//email attribute define
emailEle.setAttribute('align','center')
emailEle.classList.add('extraTextInfo')
number.classList.add('extraTextInfo')
userAddress.classList.add('extraTextInfo')
//create section for email,number,address
let extraInfo=document.createElement('section')
extraInfo.classList.add('forExtraInfo')
extraInfo.append(emailEle,number,userAddress)


previewBody.append(divs,jobRole,extraInfo)


userName.addEventListener('input',(e)=>{
  if(e.target.value.length>10){
    previewBodyh1.textContent=e.target.value;
    e.target.style.border="1px solid red"
    e.target.style.focus="none"
  }
  
})
lastName.addEventListener('input',(e)=>{
  lastname.textContent=e.target.value 
})
email.addEventListener('input',(e)=>{
  emailEle.textContent=e.target.value 
})
mobileNum.addEventListener('input',(e)=>{
  number.textContent="|"+e.target.value 
})

jobrole.addEventListener('input',(e)=>{
  jobRole.textContent=e.target.value 
})
address.addEventListener('input',(e)=>{
  userAddress.textContent="|"+e.target.value 
})