if(localStorage.length > 0){
let ActualitesMain = JSON.parse(localStorage.getItem('Actualites')) || []; 
    for(let i = 0; i<ActualitesMain.length; i++){
        ActualitesArray = ActualitesMain[i].ActualitesId; 
        console.log(ActualitesArray)
    let mainSection = document.querySelector('.mainSection');
    mainSection.classList.add('container');
    let mainCardSection = document.createElement('div'); 
    mainCardSection.className="card mb-3"; 

    let mainDivSection = document.createElement('div'); 
    mainDivSection.className="row"; 
    
    let colImgSection = document.createElement('div'); 
    colImgSection.className="col-lg-3 py-3";
    
    let imgMainSection = document.createElement('img');
    imgMainSection.src = ActualitesArray.outputimg;
    imgMainSection.className = "img-fluid coverPhoto";
    imgMainSection.alt = ActualitesArray.Title; 

    let colTextSection = document.createElement('div'); 
    colTextSection.className="col p-4 d-flex flex-column position-static";

    let strong = document.createElement('strong');
    strong.className="d-inline-block mb-2 text-primary";
    strong.innerHTML ="<h5 class='card-title'>" + ActualitesArray.Title + "</h5>";
    
    let MainSectionContent = document.createElement('div');
    MainSectionContent.className = "card-body";
    MainSectionContent.append(strong);
     
     let Paragraph = document.createElement('p');
     Paragraph.textContent = ActualitesArray.bodyPara;
     MainSectionContent.append(Paragraph); 
     colImgSection.append(imgMainSection)
     mainDivSection.append(colImgSection);
     
    colTextSection.append(MainSectionContent);
    mainDivSection.append(colTextSection);
    mainCardSection.append(mainDivSection);
    mainSection.append(mainCardSection);
      }
    }else if(ActualitesMain.length === 0){
        let mainSection2 = document.querySelector('.mainSection');
        mainSection2.classList.add('container');
        let mainDivSection2 = document.createElement('div'); 
         mainDivSection2.className="row"; 
        let mainCardSection2 = document.createElement('div'); 
         mainCardSection2.className="card mb-3";
        mainCardSection2.append(mainDivSection2);
        mainSection2.append(mainCardSection2);
     }
    