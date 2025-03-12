
document.addEventListener("DOMContentLoaded", function() {




    let data=document.getElementById("deatils")

    
            let store = JSON.parse(localStorage.getItem('customerData')) || [];

            console.log(store);
            

    
            let tabBody=document.getElementById("tabBody")
    
    
            store.forEach((item,i) => {
    
    
                let tabRow=document.createElement('tr')
                let tabName=document.createElement('td')
                tabName.textContent=item.custName;
    
                let tabGmail=document.createElement('td')
                tabGmail.textContent=item.custgmail;
    
                let tabAge=document.createElement('td')
                tabAge.textContent=item.custAge;
    
                let tabRole=document.createElement('td')
                tabRole.textContent=item.custRole;
    
                let tabGender=document.createElement('td')
                tabGender.textContent=item.custgender ;
    
                
                let tabDOB=document.createElement('td')
                tabDOB.textContent=item.custdob;
    
                let tabInvites=document.createElement('td')
                tabInvites.textContent=item.custInvites ;

                let remove=document.createElement('td')
                var btn=document.createElement('button')

                btn.textContent='Delete'
                btn.className='removebtn'


                btn.addEventListener('click', () => {
                    
                    store = store.filter((sto,index) => index !== i);
                
                    localStorage.setItem('customerData', JSON.stringify(store));
                
                    tabRow.remove();

                });







    remove.appendChild(btn)

     
    
                tabRow.appendChild(tabName);
                tabRow.appendChild(tabGmail);
                tabRow.appendChild(tabAge);
                tabRow.appendChild(tabRole);
                tabRow.appendChild(tabGender);
                tabRow.appendChild(tabDOB);
                tabRow.appendChild(tabInvites);
                tabRow.appendChild(remove)
    
    
                tabBody.appendChild(tabRow);
           
                
// console.log(btn);

           
            });

    
    
            
            
            
            
           
            
    
            
    

        })
    
    
    
    
        