let previewBody=document.getElementById('previewBody')
let userName=document.getElementById('userName')
let lastName=document.getElementById('lastname')
let jobrole=document.getElementById('jobrole')
let email=document.getElementById('email')
let mobileNum=document.getElementById('number')
let address=document.getElementById('address')
let edu_block=document.createElement('div')


///for links
let linkbody=document.querySelector('.linkbody')

let createLinkBut=document.querySelector(".Link_button")
let linksDisplay=document.createElement('div')

  
//for link display area
function createLink(){

  linkbody.classList.add('linkB')
  
  let anchor=document.createElement('a')
  anchor.classList.add('forAnchor')
  let in1=document.createElement('input')
  in1.classList.add('linkInput')
  
  let in2=document.createElement('input')
  in2.classList.add('linkInput')
  in1.setAttribute('placeholder','enter linkname')
  in2.setAttribute('placeholder','enter valid link')
  let delBut=document.createElement('button')
  
  // delBut.textContent='del'
  let image=document.createElement('img')
  image.setAttribute('src','download.png')
  image.classList.add('fori')
  delBut.classList.add('forDeletion')
  
  delBut.append(image)
  console.log(delBut);
  
  linkbody.append(in1,in2,delBut)
  
  
  in1.addEventListener('input',(e)=>{
    anchor.innerHTML=e.target.value+' ';
    in2.addEventListener('input',(e)=>{
      anchor.setAttribute('href',e.target.value)
      anchor.setAttribute('target','_blank')
      
      // console.log(res);
      
    })
    linksDisplay.setAttribute('align','center')
    linksDisplay.append(anchor)
  })
  deleteBtn(anchor,in1,in2,delBut)
}

function deleteBtn(anchor,in1,in2,delBut){
  delBut.addEventListener('click',()=>{
    anchor.remove()
  in1.remove()
  in2.remove()
  delBut.remove()
  storeLocal(anchor,in1,in2,delBut)
  })
}
// function loadSavedInputs() {
//   const savedValues = JSON.parse(localStorage.getItem('linkBox')) || [];
//   savedValues.forEach(value => createLink(value));
// }

function storeLocal(){
  let inBlock=linkbody.innerHTML
  let boxData=document.querySelectorAll('.linkbody input')
  let inBlockData=Array.from(boxData).map((i)=>i.value)
  // console.log(inBlockData);
  
  
  localStorage.setItem('blocks',inBlock)
  localStorage.setItem('blocksData',inBlockData)
  deleteBtn(anchor,in1,in2,delBut)
  createLink()
  // localStorage.setItem('anchor',anchor)
}

function loadInputs(){
  let storeIn=localStorage.getItem('blocks')
  // let storeInData=localStorage.getItem('blocksData')
  // console.log(storeInData);
  if(storeIn){
    linkbody.innerHTML=storeIn
  }
  createLink()
 
}
createLinkBut.addEventListener('click',()=>{
  createLink()
  storeLocal()
  loadInputs()
})

/////for right side preview body

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








userName.addEventListener('input',(e)=>{
  if(e.target.value.length>10){
    previewBodyh1.textContent=e.target.value;
    e.target.style.border="1px solid red";
    e.target.style.focus="none";
  }
  
})

lastName.addEventListener('input',(e)=>{
  setTimeout(()=>{
    lastname.textContent=e.target.value 
  },2000)
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


////////////for EDUCATIONnnnnnnn

let eduCreate=document.querySelector('#educreate')
let eduTab=document.querySelector('.edutab')
eduTab.classList.add('forEduBlock')

let mainBlockHeading=document.createElement('div')
mainBlockHeading.classList.add('mainblockheading')
let inPElement=document.createElement('p')
inPElement.textContent="Education"
inPElement.classList.add('inpelement')
let inpelehr=document.createElement('hr')
inpelehr.classList.add('inpeleHr')
mainBlockHeading.append(inPElement,inpelehr)
mainBlockHeading.style.display="none"
function education(){
let create_hl=document.createElement('div')
  let deleduBut=document.createElement('button')
  
  // delBut.textContent='del'
  let image=document.createElement('img')
  image.setAttribute('src','download.png')
  image.classList.add('fori')
  deleduBut.classList.add('foreduDeletion')
  
  deleduBut.append(image)
  deleduBut.classList.add('delEduBlock')
  deleduBut.style.display="block"

  let headingLabel=document.createElement('div')
  headingLabel.classList.add('heading_delBut')
  let inHeading=document.createElement('h3')
  inHeading.classList.add('headedu')
  inHeading.textContent="Institution name"
  headingLabel.append(inHeading,deleduBut)
  create_hl.append(headingLabel)
  let div1=document.createElement('div')
  div1.classList.add('forAlignEduContent')
  let instituion=document.createElement('input')
  instituion.setAttribute('placeholder','institution name')
  let location=document.createElement('input')
  location.setAttribute('placeholder','location')
  div1.append(instituion,location)
  let div2=document.createElement('div')
  div2.classList.add('forAlignEduContent')
  let degree=document.createElement('input')
  degree.setAttribute('placeholder','Ex.Btech,degree')
  let fos=document.createElement('input')
  fos.setAttribute('placeholder','field of study')
  div2.append(degree,fos)
  let div3=document.createElement('div')
  div3.classList.add('forAlignEduContent')
  let start=document.createElement('input')
  start.setAttribute('type','date')
  let end=document.createElement('input')
  end.setAttribute('type','date')
  div3.append(start,end)
  let div4=document.createElement('div')
  div4.classList.add('forAlignEduContent')
  let scoreType=document.createElement('select')
  
  scoreType.classList.add('forSelect')
  let option1=document.createElement('option')
  option1.textContent="GPA"
  let option2=document.createElement('option')
  option2.textContent="CGPA"
  let option3=document.createElement('option')
  option3.textContent="Percentage"

  scoreType.append(option1,option2,option3)
  let score=document.createElement('input')
  score.setAttribute('placeholder','enter your score')
  div4.append(scoreType,score)
  
  eduTab.append(create_hl,div1,div2,div3,div4)


//////education block right side code

edu_block.classList.add('education_block')


let com_edu=document.createElement('div')
com_edu.classList.add('mainEduBlockSpace')
let edu_div1=document.createElement('div')

let college_name=document.createElement('p')
college_name.classList.add('forCollegeName')

let degfos=document.createElement('div')
degfos.classList.add('degfosBlock')
let degree_name=document.createElement('h4')
degree_name.classList.add('forDegreeName')

let fos_name=document.createElement('h4')
fos_name.classList.add('forFosName')

degfos.append(degree_name,fos_name)
let scorecard=document.createElement('div')
scorecard.classList.add('scorecardBlock')
let scoretype_name=document.createElement('h4')
scoretype_name.classList.add('forScoreTypeName')

let scoreNum=document.createElement('h4')
scoreNum.classList.add('forScoreNum')

scorecard.append(scoretype_name,scoreNum)
edu_div1.append(college_name,degfos,scorecard)

let edu_div2=document.createElement('div')
edu_div2.classList.add('foredudiV2')


  
let location_name=document.createElement('h4')
location_name.classList.add('forLocationName')

let datablock=document.createElement('div')
datablock.classList.add('datablockBlock')
let start_name=document.createElement('h4')
start_name.classList.add('forStartName')


let end_name=document.createElement('h4')
end_name.classList.add('forEndName')
datablock.append(start_name,end_name)
edu_div2.append(location_name,datablock)


  instituion.addEventListener('input',(e)=>{
    if(e.target.value.length>0){
      inHeading.textContent=e.target.value.substr(0,25)
      
    }else{
      inHeading.textContent="Institution name"
    }
    // deleduBut.style.display="block";
    college_name.textContent=e.target.value
  })

  location.addEventListener('input',(e)=>{
    location_name.textContent=e.target.value
  })

  degree.addEventListener('input',(e)=>{
    degree_name.textContent=e.target.value
  })


  fos.addEventListener('input',(e)=>{
    fos_name.textContent=e.target.value
  })
  start.addEventListener('input',(e)=>{
    start_name.textContent=e.target.value+' To ';
  })
  end.addEventListener('input',(e)=>{
    end_name.textContent=e.target.value;
  })

  scoreType.addEventListener('change',(e)=>{
    scoretype_name.textContent=e.target.value;
  })

  score.addEventListener('input',(e)=>{
    scoreNum.textContent=e.target.value+'%';
  })



  com_edu.append(edu_div1,edu_div2)
  edu_block.append(com_edu)

  deleteEduBlock(edu_div1,edu_div2,deleduBut,headingLabel,instituion,degree,location,fos,scoreType,score,start,end)
  
}

function deleteEduBlock(edu_div1,edu_div2,deleduBut,headingLabel,instituion,degree,location,fos,scoreType,score,start,end){
  deleduBut.addEventListener('click',(e)=>{
    edu_div1.remove()
    edu_div2.remove()
    deleduBut.remove();
    headingLabel.remove();
    instituion.remove();
    degree.remove();
    location.remove();
    fos.remove();
    scoreType.remove();
    score.remove();
    start.remove()
    end.remove()
  })
}

eduCreate.addEventListener('click',(e)=>{
  mainBlockHeading.style.display="block"
  education()
  
})



////////***************EXPERIENCE TAB **********/




let expBut=document.querySelector('#addExp')
let exp=document.querySelector('.experience_tab')
exp.classList.add('forExTab')




///display content for cname,role,job,start,end dates

let expPreDiv=document.createElement('div')
expPreDiv.classList.add('previewFirstExp')


let mainBlockHeadingexp=document.createElement('div')
mainBlockHeadingexp.classList.add('mainblockheading')
let inPexpElement=document.createElement('p')
inPexpElement.textContent="Experience"
inPexpElement.classList.add('inpelement')
let inpeleexhr=document.createElement('hr')
inpeleexhr.classList.add('inpeleHr')
mainBlockHeadingexp.append(inPexpElement,inpeleexhr)
mainBlockHeadingexp.style.display="none"



function createExp(){
 

  let forText=document.createElement('div')
  forText.classList.add('forTextInfoExp')
  let forEditor=document.createElement('div')
  let exp_preview=document.createElement('div')
  let forLabelDiv=document.createElement('div')
  forLabelDiv.classList.add('forepLabel')

  let subdiv1=document.createElement('div')
  subdiv1.classList.add('subDiv1')
  let subdiv2=document.createElement('div')
  subdiv2.classList.add('subDiv2')
  expPreDiv.append(subdiv1,subdiv2)
  ///////////create previous experience fields
  let pcdiv=document.createElement('div')
  pcdiv.classList.add('forSubDiv')
  ///display company label in the experience tab
  
  
  let delexpBut=document.createElement('button')
  
  // delBut.textContent='del'
  let image=document.createElement('img')
  image.setAttribute('src','download.png')
  image.classList.add('fori')
  delexpBut.classList.add('forexpDeletion')
  
  delexpBut.append(image)
  delexpBut.classList.add('delEduBlock')
  delexpBut.style.display="block"
  let pc_title=document.createElement('label')
  pc_title.classList.add('pctitleCss')
  pc_title.textContent="Company name"
  forLabelDiv.append(pc_title,delexpBut)

  let pc_companyName=document.createElement('input')
  pc_companyName.setAttribute('placeholder','Ex.Amazon')
  let pc_jobTitle=document.createElement('input')
  pc_jobTitle.setAttribute('placeholder','Ex.Software Engineer')
  let pc_location=document.createElement('input')
  pc_location.setAttribute('placeholder','Ex.Hyd,Banglore')
  let pc_start=document.createElement('input')
  pc_start.setAttribute('type','date')
  let pc_end=document.createElement('input')
  pc_end.setAttribute('type','date')
  pcdiv.append(pc_companyName,pc_jobTitle,pc_location,pc_start,pc_end)




  /////////for first div results in experience preview RIGHTSIDEPAGE

  let pre_Cname=document.createElement('h4')
  pre_Cname.classList.add('prName')
  let pre_Role=document.createElement('h4')
  pre_Role.classList.add('preRole')
  subdiv1.append(pre_Cname,pre_Role)

  let pre_location=document.createElement('p')
  pre_location.classList.add('preLoc')
  let pre_Start=document.createElement('p')
  pre_Start.classList.add('preStart')
  let pre_End=document.createElement('p')
  pre_End.classList.add('preEnd')

  subdiv2.append(pre_location,pre_Start,pre_End)
 
  forText.append(subdiv1,subdiv2)
  
  //for label listeneer
  pc_companyName.addEventListener('input',(e)=>{
    delexpBut.style.display="block";
    // pc_title.textContent=e.target.value;
    pc_title.textContent="Company name";
    pre_Cname.textContent=e.target.value;
    // if(e.target.value.length<1){
    //   delexpBut.style.display="none";
    // }
    if(e.target.value.length>0){
      // pc_title.textContent="Company name";
      pc_title.textContent=e.target.value;
    }

  })

  pc_jobTitle.addEventListener('input',(e)=>{
    pre_Role.textContent= " | " + e.target.value
  })

  pc_location.addEventListener('input',(e)=>{
    pre_location.innerHTML=e.target.value+' | ';
  })

  pc_start.addEventListener('input',(e)=>{
    pre_Start.innerHTML=e.target.value+" To ";
  })

  pc_end.addEventListener('input',(e)=>{
    pre_End.innerHTML=" "+e.target.value;
  })




  ///////second div preview.the text editor value

      let textA=document.createElement('textarea')
      textA.classList.add('editor')
      // textA.style.display="block"
      
      exp.append(forLabelDiv,pcdiv,textA)

      
      let ex_text=document.createElement('h5')
      ex_text.classList.add('extext')
      exp_preview.classList.add('ex-preview')

      
      const easyMDE = new EasyMDE({ element: textA , class:"textC", minHeight: '100px',overFlowY:'auto',margin:'20px',paddingTop:'20px'});

      easyMDE.codemirror.on("change", function(e) {
        const preview =exp_preview;
        // console.log(e);
        

        preview.innerHTML = easyMDE.options.previewRender(easyMDE.value());
        console.log(preview);
        // Render Markdown in preview
        
      });
      forEditor.append(exp_preview)

      expPreDiv.append(forText,forEditor)
     
delexpBut.addEventListener('click',(e)=>{
  forText.remove()
  forEditor.remove()
  easyMDE.toTextArea()
  textA.remove()
  pcdiv.remove()
  forLabelDiv.remove()
  // easyMDE.remove()

})

}
expBut.addEventListener('click',()=>{
  mainBlockHeadingexp.style.display="block"
  createExp()
})

//////////////////for PROFESSIONAL SUMMARYYYYYYYYYYY


let sum=document.querySelector('.psummary')

let mainBlockHeadingsum=document.createElement('div')
mainBlockHeadingsum.classList.add('mainblockheading')
let inPsumElement=document.createElement('p')
inPsumElement.textContent="Summary"
inPsumElement.classList.add('inpelement')
let inpsumelehr=document.createElement('hr')
inpsumelehr.classList.add('inpeleHr')
mainBlockHeadingsum.append(inPsumElement,inpsumelehr)


let pre_sum=document.createElement('div')
let pre_sum_text=document.createElement('h6')
pre_sum_text.classList.add('pre_exp_summary')
pre_sum.append(mainBlockHeadingsum,pre_sum_text)
mainBlockHeadingsum.style.display="none"
sum.addEventListener('input',(e)=>{
  if(e.target.value.length>0){
    mainBlockHeadingsum.style.display="block"
  }else{
    mainBlockHeadingsum.style.display="none"
  }
  pre_sum_text.textContent=e.target.value
})



// for skillssssssssssssssssss(programming SKILLS)
let isExecuted=false





let mainBlockHeadingskill=document.createElement('div')
mainBlockHeadingskill.classList.add('mainblockheading')
let inPskillElement=document.createElement('p')
inPskillElement.textContent="Skills"
inPskillElement.classList.add('inpelement')
let inpeleskillhr=document.createElement('hr')
inpeleskillhr.classList.add('inpeleHr')
mainBlockHeadingskill.append(inPskillElement,inpeleskillhr)
mainBlockHeadingskill.style.display="none"
function toggleDisplay(){
  if(isExecuted){
    mainBlockHeadingskill.style.display="block"
  }else{
    mainBlockHeadingskill.style.display="none"
  }
}

let alangb = document.querySelector('.addLangBlock');
let forChildIn = document.querySelector('.addlan');

let main_skill_div = document.createElement('div');
let sub_pl = document.querySelector('.sub_pl_but');
let inv = '';
let res = '';
sub_pl.disabled=true
// Capture input value
forChildIn.addEventListener('input', (e) => {
  inv = e.target.value.trim();
  isExecuted = true; // Mark event as executed
  toggleDisplay();
  if(inv.length>0){
    sub_pl.disabled=false;
  }else{
    sub_pl.disabled=true;
  }
  
});

// Handle skill addition
sub_pl.addEventListener('click', () => {
  
  if(inv!==""){
    get_pl_data(inv);
    forChildIn.value = ''; // Clear input field after adding
    inv="";
    sub_pl.disabled=true;
  }
});

// Function to handle skill data and display
let pre_pro_lan = document.createElement('div');
let preview_proskill = document.createElement('p'); // Separate for skill text

function get_pl_data(data) {
  
  // Add text to the preview section
  if (res.length > 0) {
    res += ', ' + data.trim();
  } else {
    res = data;
  }

  pre_pro_lan.innerHTML = "<span class='forSkillLabel'>Programming Languages:&nbsp; </span>"; // Ensure this part stays fixed
  pre_pro_lan.classList.add('pre_proLan');
  
  preview_proskill.textContent = res; // Update the skill text only
preview_proskill.classList.add('prev_pr_ski')
  let skilldis = document.querySelector('.dispSkill');
  let coverSkill = document.createElement('div');
  let coverSkill_text = document.createElement('p');
  
  let delskillBut = document.createElement('button');
  delskillBut.textContent = "x"; // Delete button

  delskillBut.classList.add('forskillDeletion');
  coverSkill_text.classList.add('coverSkill_te');

  // Append elements
  coverSkill.append(coverSkill_text, delskillBut);
  coverSkill.classList.add('coversk');
  
  coverSkill_text.textContent = data; // Set skill text
  pre_pro_lan.append(preview_proskill); // Append preview section only once

  skilldis.append(coverSkill);

  // Handle skill deletion
  delskillBut.addEventListener('click', (e) => {
    deleteProSkill();
    
    let checkWord = e.target.parentElement.textContent.slice(0, -1); // Get the word to remove (without 'x')
    if (res.includes(checkWord)) {
      res = res
      .replace(new RegExp(`\\s*,?\\b${checkWord}\\b,?\\s*`), '') // Remove the word and any surrounding commas/spaces
      .replace(checkWord, '').replace(/,,/g, ',').replace(/^,|,$/g, '').trim(); // Update skill text
      preview_proskill.textContent = res; // Reflect the updated text
      let lt=document.querySelector('.forSkillLabel')
      if(preview_proskill.textContent.length>0){
        
        lt.style.display="block"
      }else{
        lt.style.display="none"
      }
    }
  });

  // Function to remove the skill block
  function deleteProSkill() {
    coverSkill.remove(); // Remove the skill block
  }

  main_skill_div.append(pre_pro_lan);
}


  // for skillssssssssssssssssss(frameworks SKILLS)


let frames=document.querySelector('.dispFrame')
let addFrames=document.querySelector('.addFrame')
let fr_but=document.querySelector('.sub_af_but')

let preview_add_frame=document.createElement('div')
preview_add_frame.classList.add('preview_add_frame_css')

let frames_value=''
let ar_fr=""
fr_but.disabled=true;
addFrames.addEventListener('input',(e)=>{
  frames_value=e.target.value.trim()
  isExecuted = true; // Mark event as executed
  toggleDisplay();
  if(frames_value.length>0){
    fr_but.disabled=false;
  }else{
    fr_but.disabled=true;
  }
})

fr_but.addEventListener('click',(e)=>{
  
  if(frames_value!==""){
    get_af_data(frames_value)
    addFrames.value=''
    frames_value=""
    fr_but.disabled=true;
  }
})

let preview_af_t=document.createElement('p')
preview_af_t.classList.add('pre_af_s')
function get_af_data(af_data){
  preview_add_frame.innerHTML="<span class='forSkillLabelLib'>Libraries/framework:&nbsp;  </span>"

  if(ar_fr.length>0){
    ar_fr+=", "+af_data
  }else{
    ar_fr=af_data
  }
  console.log(ar_fr);
  
  // console.log(af_data);
  let cre_preview_area=document.createElement('div')
  cre_preview_area.classList.add('cre_pre_area')
  let cre_preview_area_text=document.createElement('p')
  cre_preview_area_text.classList.add('cre_p_adf_text')
  
  let delFrameBut=document.createElement('button')


  delFrameBut.textContent="x"

  delFrameBut.classList.add('forframeDeletion')

  cre_preview_area_text.textContent=af_data

  preview_af_t.textContent=ar_fr
  cre_preview_area.append(cre_preview_area_text,delFrameBut)
  frames.append(cre_preview_area)

  // main preview containerrrrrrrr


  
 

  delFrameBut.addEventListener('click',(e)=>{
    deleteAf()
    let checkWordaf = e.target.parentElement.textContent.slice(0, -1); // Get the word to remove (without 'x')
    if (ar_fr.includes(checkWordaf)) {
      ar_fr = ar_fr
      .replace(new RegExp(`\\s*,?\\b${checkWordaf}\\b,?\\s*`), '') // Remove the word and any surrounding commas/spaces
      .replace(checkWordaf, '').replace(/,,/g, ',').replace(/^,|,$/g, '').trim(); // Update skill text
      preview_af_t.textContent = ar_fr; // Reflect the updated text
    }
    let ltlib=document.querySelector('.forSkillLabelLib')
      if(preview_af_t.textContent.length>0){
        
        ltlib.style.display="block"
      }else{
        ltlib.style.display="none"
      }
  })
  function deleteAf(){
    // preview_af_t.remove()
    cre_preview_area.remove()
    // delFrameBut.remove()
  }
  preview_add_frame.append(preview_af_t)
}

// toooooolsssssssss block


let dt=document.querySelector('.dispTool')

//////FOR RIGHT SIDE PREVIEW DIV
let right_tool_preview=document.createElement('div')




let tIn=document.querySelector('.addTool')

let ad_tool_but=document.querySelector('.sub_tl_but')
let tooladd=""
let tstr=''
ad_tool_but.disabled=true;
tIn.addEventListener('input',(e)=>{
  tooladd=e.target.value.trim()
  isExecuted = true; // Mark event as executed
  toggleDisplay();
  if(tooladd.length>0){
    ad_tool_but.disabled=false;
  }else{
    ad_tool_but.disabled=true;
  }
})

ad_tool_but.addEventListener('click',(e)=>{
 if(tooladd!==""){
  addTools(tooladd)
  tIn.value=""
  tooladd=""
  ad_tool_but=true;

 }
 
})

let right_side_preview_text=document.createElement('p')
right_side_preview_text.classList.add('right_side_preview_textcssS')
function addTools(tool){
  right_tool_preview.innerHTML="<span class='forSkillLabeltool'>Tools & platforms :&nbsp; </span> "
  right_tool_preview.classList.add('right_tool_preview_css')
  if(tstr.length>0){
    tstr+=' ,'+tool
  }else{
    tstr=tool
  }
    let toolDiv=document.createElement('div')
    toolDiv.classList.add('dispToolArea')
    let toolDivText=document.createElement('p')
    toolDivText.classList.add('disToolText')
    toolDivText.textContent=tool

    let delToolBut=document.createElement('button')

   
    right_side_preview_text.textContent=tstr
    delToolBut.textContent="x"
  
    delToolBut.classList.add('forToolDeletion')
    toolDiv.append(toolDivText,delToolBut)

    dt.append(toolDiv)
    
    
    delToolBut.addEventListener('click',(e)=>{
      deleteTool();
      let checkWordstool = e.target.parentElement.textContent.slice(0, -1); // Get the word to remove (without 'x')
    if (tstr.includes(checkWordstool)) {
      tstr = tstr
      .replace(new RegExp(`\\s*,?\\b${checkWordstool}\\b,?\\s*`), '') // Remove the word and any surrounding commas/spaces
      .replace(checkWordstool, '').replace(/,,/g, ',').replace(/^,|,$/g, '').trim(); // Update skill text
      right_side_preview_text.textContent = tstr; // Reflect the updated text
    }
    let lttool=document.querySelector('.forSkillLabeltool')
    if(right_side_preview_text.textContent.length>0){
      
      lttool.style.display="block"
    }else{
      lttool.style.display="none"
    }
    })

    function deleteTool(){
      toolDiv.remove()
      // right_side_preview_text.remove()
      // delToolBut.remove()

    }

    right_tool_preview.append(right_side_preview_text)
   
}


/////////////databases


let dbArea=document.querySelector('.dispdb')

//////FOR RIGHT SIDE PREVIEW DIV
let right_db_preview=document.createElement('div')

right_db_preview.classList.add('right_db_previewcss')


let dIn=document.querySelector('.adddb')

let ad_db_but=document.querySelector('.sub_db_but')
let dbtextadd=""
let dbstr=''

ad_db_but.disabled = true;


dIn.addEventListener('input',(e)=>{
  dbtextadd=e.target.value.trim()
  isExecuted = true; // Mark event as executed
  toggleDisplay();

   // Enable the submit button only if there is text in the input field
   if (dbtextadd.length > 0) {
    ad_db_but.disabled = false;  // Enable the button
  } else {
    ad_db_but.disabled = true;  // Disable the button if input is empty
  }
})


  ad_db_but.addEventListener('click',(e)=>{
  
    if (dbtextadd !== "") {
      adddb(dbtextadd);  // Add the database to the preview
      dIn.value = "";  // Clear the input field
      dbtextadd = "";  // Reset dbtextadd
      ad_db_but.disabled = true;  // Disable the button after adding the entry
    }
   
  })


let right_side_preview_dbtext=document.createElement('p')
right_side_preview_dbtext.classList.add('right_side_preview_dbtextcss')
function adddb(db){
  right_db_preview.innerHTML="<span class='forSkillLabeldb'>Databases :&nbsp; </span> "
  if(dbstr.length>0){
    dbstr+=" ,"+db
  }else{
    dbstr=db
  }
    let dbDiv=document.createElement('div')
    dbDiv.classList.add('dispDbArea')
    let dbDivText=document.createElement('p')
    dbDivText.classList.add('disDbText')
    dbDivText.textContent=db

    let deldbBut=document.createElement('button')

    deldbBut.textContent="x"
  
    deldbBut.classList.add('forDbDeletion')
    dbDiv.append(dbDivText,deldbBut)
  
  dbArea.append(dbDiv)
    right_side_preview_dbtext.textContent=dbstr
    deldbBut.addEventListener('click',(e)=>{
      deleteDb()
      let checkWorddb = e.target.parentElement.textContent.slice(0, -1); // Get the word to remove (without 'x')
    if (dbstr.includes(checkWorddb)) {
      dbstr = dbstr
      .replace(new RegExp(`\\s*,?\\b${checkWorddb}\\b,?\\s*`), '') // Remove the word and any surrounding commas/spaces
      .replace(checkWorddb, '').replace(/,,/g, ',').replace(/^,|,$/g, '').trim(); // Update skill text
      right_side_preview_dbtext.textContent = dbstr; // Reflect the updated text
    }
    let ltdb=document.querySelector('.forSkillLabeldb')
    if(right_side_preview_dbtext.textContent.length>0){
      
      ltdb.style.display="block"
    }else{
      ltdb.style.display="none"
    }
    })

    function deleteDb(){
      dbDiv.remove()
      
      // right_side_preview_dbtext.remove()
      // deldbBut.remove()

    }

    right_db_preview.append(right_side_preview_dbtext)
   
}

// ////////////////////////////////projects

let pro_create=document.querySelector('#procreate')

let pb=document.querySelector('.proBody')

////main div for display results in right side
let right_pro_preview=document.createElement('div')
right_pro_preview.classList.add('rmprodiv')
 let mainBlockHeadingpro=document.createElement('div')
  mainBlockHeadingpro.classList.add('mainblockheading')
  let inPproElement=document.createElement('p')
  inPproElement.textContent="Projects"
  inPproElement.classList.add('inpelement')
  let inpeleprohr=document.createElement('hr')
  inpeleprohr.classList.add('inpeleHr')
  mainBlockHeadingpro.append(inPproElement,inpeleprohr)
  mainBlockHeadingpro.style.display="none"

function createProjects(){
  /////sub div for display main content right side
  // let mainBlockHeadingpro=document.createElement('div')
  // mainBlockHeadingpro.classList.add('mainblockheading')
  // let inPproElement=document.createElement('p')
  // inPproElement.textContent="Experience"
  // inPproElement.classList.add('inpelement')
  // let inpeleprohr=document.createElement('hr')
  // inpeleprohr.classList.add('inpeleHr')
  // mainBlockHeadingpro.append(inPproElement,inpeleskillhr)
  // mainBlockHeadingpro.style.display="none"


  let prodiv1=document.createElement('div')
  prodiv1.classList.add('pdiv1')

  let name_link=document.createElement('div')
  name_link.classList.add('nameL')
  
  let prodiv2=document.createElement('div')
prodiv2.classList.add('pdiv2')

let project_head=document.createElement('div')
project_head.classList.add('project_head_css')
let proTitle=document.createElement('h4')
proTitle.classList.add('proTitle_css')
proTitle.textContent="Project Title"

let delproBut=document.createElement('button')
  
// delBut.textContent='del'
let image=document.createElement('img')
image.setAttribute('src','download.png')
image.classList.add('forproIm')
delproBut.classList.add('forproDeletion')

delproBut.append(image)


project_head.append(proTitle,delproBut)

  let childpb=document.createElement('div')
  childpb.classList.add('childInPro')
  let pro_name_label=document.createElement('label')
  pro_name_label.textContent="Project name"
  let pro_name=document.createElement('input')

  let pro_tech_label=document.createElement('label')
  pro_tech_label.textContent="technogies used"
  let pro_tech=document.createElement('input')

  let pro_link_label=document.createElement('label')
  pro_link_label.textContent="project url"
  let pro_link=document.createElement('input')
  let pro_des_label=document.createElement('label')
  pro_des_label.textContent="Project description"
  let pro_des=document.createElement('textarea')
  pro_des.classList.add('pro_textarea')

  childpb.append(project_head,pro_name_label,pro_name,pro_tech_label,pro_tech,pro_link_label,pro_link,pro_des_label,pro_des)
  pb.append(childpb)


  ///////////create fields for storing the input data
  let pname_text=document.createElement('h6')
  pname_text.classList.add('pname_css')
  let ptech_text=document.createElement('h6')
  ptech_text.classList.add('ptech_css')
  let plink_text=document.createElement('a')
  plink_text.style.textDecoration="none"
  plink_text.style.color="gray"
  let pdes_text=document.createElement('h6')
  pdes_text.classList.add('pdesc')

  //////event lsiteners for every input

  pro_name.addEventListener('input',(e)=>{
    pname_text.textContent=e.target.value
    if(e.target.value.length>0){
      proTitle.textContent=e.target.value
    }else{
      proTitle.textContent="Project Title"
    }
    
  })

  pro_tech.addEventListener('input',(e)=>{
    ptech_text.textContent=e.target.value;
  })

  pro_link.addEventListener('input',(e)=>{
    plink_text.setAttribute('href',e.target.value)
    plink_text.textContent="| Link"
  })

  pro_des.addEventListener('input',(e)=>{
    pdes_text.textContent="."+e.target.value;
  })

  name_link.append(pname_text,plink_text)
  prodiv1.append(name_link,ptech_text)
  prodiv2.append(pdes_text)



  right_pro_preview.append(prodiv1,prodiv2)

  function deletePro(){
    prodiv1.remove()
    prodiv2.remove()
    childpb.remove()
    delproBut.remove()
  }

  delproBut.addEventListener('click',()=>{
    deletePro()
  })

}

pro_create.addEventListener('click',()=>{
  mainBlockHeadingpro.style.display="block"
  createProjects()
})


// CERTIFICATIONSSSSSSSSSSSSSSSSSSSSS


let crcert=document.querySelector('#certcreate')

let preview_certifi=document.createElement('div')

let mainLeftBlock=document.querySelector('.certBlock')


let mainBlockHeadingcert=document.createElement('div')
mainBlockHeadingcert.classList.add('mainblockheading')
let inPcertElement=document.createElement('p')
inPcertElement.textContent="Certifications"
inPcertElement.classList.add('inpelement')
let inpelecerthr=document.createElement('hr')
inpelecerthr.classList.add('inpeleHr')
mainBlockHeadingcert.append(inPcertElement,inpelecerthr)
mainBlockHeadingcert.style.display="none"
function createCertificate(){

  let labelcDiv=document.createElement('div')
  labelcDiv.classList.add('labelcertDiv')

  let labelcDivText=document.createElement('p')
  labelcDivText.textContent="Certificate name"
  labelcDivText.classList.add('labeltextCss')

  let delcertBut=document.createElement('button')
  
  // delBut.textContent='del'
  let image=document.createElement('img')
  image.setAttribute('src','download.png')
  image.classList.add('forcertIm')
  delcertBut.classList.add('forcertDeletion')

  delcertBut.append(image)

  labelcDiv.append(labelcDivText,delcertBut)

  let forInpLabels=document.createElement('div')
  forInpLabels.classList.add('inputlabels')

  let cert_label=document.createElement('label')
  cert_label.textContent="certification name"
  let cert_name=document.createElement('input')

  let link_label=document.createElement('label')
  link_label.textContent="certification link"
  let cert_Link=document.createElement('input')
  let issue_label=document.createElement('label')
  issue_label.textContent="issued by"
  let issue=document.createElement('input')


  forInpLabels.append(labelcDiv,cert_label,cert_name,link_label,
    cert_Link,issue_label,issue)  


    mainLeftBlock.append(forInpLabels)

    // create text for right side preview

    // let cul=document.createElement('ul')
    // cul.classList.add('culul')
    // let cli=document.createElement('li')
    let ali=document.createElement('a')
    ali.classList.add('listText')
   
    let create_issue=document.createElement('p')
    create_issue.classList.add('pissuedBy')
    // let clia=document.createElement('li')
   
    
    cert_name.addEventListener('input',(e)=>{
     
      if(e.target.value.length>0){
        labelcDivText.textContent=e.target.value.slice(0,45)
      }
      ali.textContent=`${e.target.value}`
      cert_Link.addEventListener('input',(e)=>{
        ali.setAttribute('href',e.target.value)
      })
    })

    issue.addEventListener('input',(e)=>{
      create_issue.textContent=`${e.target.value}`
    })


    let linkcert=document.createElement('div')
    linkcert.classList.add('linkkkkk')

    linkcert.append(ali,create_issue)

   

    // issue.addEventListener('input',(e)=>{
    //   cli+'-'+e.target.value
      
    // })

    // cli.append(ali)
    // cul.append(cli,linkcert)
    preview_certifi.append(linkcert)


    function deleteCert(){
      forInpLabels.remove()
      linkcert.remove()
      delcertBut.remove()
    }


    delcertBut.addEventListener('click',(e)=>{
     
      deleteCert()
    })
}


crcert.addEventListener('click',(e)=>{
   mainBlockHeadingcert.style.display="block"
  createCertificate()
})









// honorsssssssssssssssssss

let honor=document.querySelector('.honor')
let hb=document.querySelector('.addHonor')

let pre_honor=document.createElement('div')

let mainBlockHeadinghon=document.createElement('div')
mainBlockHeadinghon.classList.add('mainblockheading')
let inPhonElement=document.createElement('p')
inPhonElement.textContent="Honors & awards"
inPhonElement.classList.add('inpelement')
let inpelehonhr=document.createElement('hr')
inpelehonhr.classList.add('inpeleHr')
mainBlockHeadinghon.append(inPhonElement,inpelehonhr)
mainBlockHeadinghon.style.display="none"

function createHonor(){
  let honorBlock=document.createElement('div')
  honorBlock.classList.add('hblock')
  let hInp=document.createElement('input')
  hInp.setAttribute('placeholder','ex:won gold medal in hakthon')
  hInp.classList.add('onorInput')


  let delhonBut=document.createElement('button')
  
  // delBut.textContent='del'
  let image=document.createElement('img')
  image.setAttribute('src','download.png')
  image.classList.add('forhon')
  delhonBut.classList.add('forhonDeletion')
  
  delhonBut.append(image)
  delhonBut.classList.add('delhonBlock')

  honorBlock.append(hInp,delhonBut)

  honor.append(honorBlock)

  let cre_hon_text=document.createElement('p')
cre_hon_text.classList.add('honor_text')
  hInp.addEventListener('input',(e)=>{
    cre_hon_text.textContent=e.target.value;
  })

  pre_honor.append(cre_hon_text)



}

hb.addEventListener('click',()=>{
  mainBlockHeadinghon.style.display="block"
  createHonor()
})




previewBody.append(divs,jobRole,extraInfo,linksDisplay,pre_sum,mainBlockHeading,edu_block,
  mainBlockHeadingexp,expPreDiv,mainBlockHeadingskill,main_skill_div,preview_add_frame,
  right_tool_preview,right_db_preview,mainBlockHeadingpro,right_pro_preview,mainBlockHeadingcert,preview_certifi,mainBlockHeadinghon,pre_honor)

const button = document.getElementById('download-button');

			function generatePDF() {
				// Choose the element that your content will be rendered to.
				const element = document.getElementById('previewBody');
				// Choose the element and save the PDF for your user.
				html2pdf().from(element).save();
			}

			button.addEventListener('click', generatePDF);









