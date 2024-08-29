let previewBody=document.getElementById('previewBody')
let userName=document.getElementById('userName')
console.log(previewBody);



let previewBodyh1=document.createElement('h3')
  
  previewBodyh1.classList.add('forUserName')
  previewBodyh1.setAttribute('align','center')
  previewBody.appendChild(previewBodyh1)

userName.addEventListener('input',(e)=>{
  
  previewBodyh1.textContent=e.target.value
  
  
})
