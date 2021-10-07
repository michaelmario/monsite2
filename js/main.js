(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation');
    
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
       form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }  
          form.classList.add('was-validated')
        }, false)
      })

      let dataForm = {};
      let btnEnvoyer = document.querySelector('#btnEnvoyer');
      btnEnvoyer.addEventListener('click',(e)=>{
     
        getclassData();

       /* getFormData();
        window.location.reload(true);*/
      })
      /* function getFormData(){
        let familyName =  document.getElementById('familyName').value;
        let name =  document.getElementById('name').value;
          let email = document.getElementById('email').value;
          let city = document.getElementById('city').value;
          let  messageSend = document.getElementById('messageSend').value;
          let invalidCheck = document.getElementById('invalidCheck').value;
            dataForm = {
            "name":name,
            "familyName":familyName,
            "email":email,
            "city":city,
            "messageSend":messageSend,
            "invalidCheck": "yes"
          }
           localStorage.setItem('Contact', JSON.stringify(dataForm));
       }
     
          let retrievedContact = JSON.parse(localStorage.getItem('Contact'));
          console.log(retrievedContact);*/
          
          
          function getclassData(){
             let familyName =  document.getElementById('familyName').value;
            let name =  document.getElementById('name').value;
              let email = document.getElementById('email').value;
              let city = document.getElementById('city').value;
              let  messageSend = document.getElementById('messageSend').value;
              let invalidCheck = document.getElementById('invalidCheck').value;
            
            class ClassformData{
             constructor(familyName,name,email,city,messageSend , invalidCheck){
                  this.familyNamely = familyName;
                   this.name = name;
                   this.email = email;
                   this.city = city;
                   this.messageSend = messageSend;
                   this.invalidCheck = invalidCheck;                   
                }               
            }            
            let formData = new ClassformData(familyName,name,email,city,messageSend,invalidCheck);
            localStorage.setItem('Contact', JSON.stringify(formData));
            console.log(formData); 
          } 
           
    })()

  