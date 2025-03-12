
let formdet=document.getElementById("Gmail-btn");

formdet.addEventListener("click", mainValue);

var formsinvite=[];

function mainValue(event){


    event.preventDefault()


    let inputvalue=document.getElementById('inputValue')

    
    let inputfeild=inputvalue.value;
   
    
    let emailRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  

    var list=document.createElement('li')
    list.className='listStyle';
     let gmailContent= list.textContent=inputfeild;
    let button=document.createElement('button')
    button.id="delete-button"
    button.textContent="DELETE"
 
   
   if(emailRegex.test(inputfeild)){

    console.log(list);
    
    formsinvite.push(inputfeild)
  
  
    button.addEventListener('click', (a)=>{


        a.preventDefault()
        let cancel=formsinvite.indexOf(gmailContent)
            
        let remove=formsinvite.splice(cancel,1)


        
        console.log(remove);
        
        list.remove()
       
    })


    if(inputvalue!==''){
        list.appendChild(button)
        document.getElementById("ul-container").appendChild(list)   
        inputvalue.value=""
    }

   }

   else if (inputfeild==""){
    alert("enter the gmail")
   }

   else if (inputfeild==formsinvite){
    alert("the gmail is already exixts")
   }

   else{
   alert("Enter a valid mail")

   }

   


}

