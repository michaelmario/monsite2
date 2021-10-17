if(localStorage.length > 0){
    let ActivitesMain = JSON.parse(localStorage.getItem('Activites')) || []; 
    ActivitesMain.forEach(element => {
        let mainSection = document.querySelector('.mainSection');
    let imgMainSection = document.createElement('img');
    imgMainSection.src = element.uploadImg;
    imgMainSection.className = "card-img-top imgTopCard";
    imgMainSection.alt = element.title; 
    
    let MainSectionContent = document.createElement('div');
    MainSectionContent.className = "card-body";
    let TitleMain = document.createElement('h5');
     TitleMain.className = "card-title";
     TitleMain.textContent = element.title;
     MainSectionContent.append(TitleMain);
     let Paragraph = document.createElement('p');
     Paragraph.textContent = element.dataForm;
     MainSectionContent.append(Paragraph); 
    
    mainSection.append(imgMainSection);
    mainSection.append(MainSectionContent);
    
    });
    }else{
        
    }