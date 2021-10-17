function sidebarToggle() {
  let sidebar = document.querySelector(".assideAdminPanel");
  sidebar.classList.toggle("sidebarView");
}
function iFrameOn() {
  ActivitesrichTextField.document.designMode = "On";
  ActualitesrichTextField.document.designMode = "On";
}
function iBold() {
  ActivitesrichTextField.document.execCommand("bold", false, null);
}
function iUnderline() {
  ActivitesrichTextField.document.execCommand("underline", false, null);
}
function iItalic() {
  ActivitesrichTextField.document.execCommand("italic", false, null);
}
function iFontSize() {
  var size = prompt("Enter a size 1 - 7", "");
  ActivitesrichTextField.document.execCommand("FontSize", false, size);
}
function iForeColor() {
  var color = prompt(
    "Define a basic color or apply a hexadecimal color code for advanced colors:",
    ""
  );
  ActivitesrichTextField.document.execCommand("ForeColor", false, color);
}
function iHorizontalRule() {
  ActivitesrichTextField.document.execCommand(
    "inserthorizontalrule",
    false,
    null
  );
}
function iUnorderedList() {
  ActivitesrichTextField.document.execCommand(
    "InsertOrderedList",
    false,
    "newOL"
  );
}
function iOrderedList() {
  ActivitesrichTextField.document.execCommand(
    "InsertUnorderedList",
    false,
    "newUL"
  );
}
function iLink() {
  var linkURL = prompt("Enter the URL for this link:", "http://");
  ActivitesrichTextField.document.execCommand("CreateLink", false, linkURL);
}
function iUnLink() {
  ActivitesrichTextField.document.execCommand("Unlink", false, null);
}
let ActivitesUploaded_image = "";
function activitesImage() {
  document.getElementById("UploadImageActivites").style.display = "block";
  const image_input = document.querySelector("#ActivitesImage_input");
  image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      ActivitesUploaded_image = reader.result;
      if (ActivitesUploaded_image != null) {
        let imgFile = document.createElement("img");
        imgFile.src = `${ActivitesUploaded_image}`;
      }
    });
    reader.readAsDataURL(this.files[0]);
  });
}

document.getElementById("firstSection");
let btn = document.querySelectorAll(".btn");
btn.forEach((text) => {
  let btnAside = text;
  btnAside.addEventListener("click", (e) => {
    let expr = btnAside.id;
    switch (expr) {
      case "dashboard":
        firstSection();
        break;
      case "activites":
        activitySection();
        break;
      case "actualites":
        actualitesSection();
        break;
      case "table":
        tableSection();
        break;
      case "component":
        componentSection();
        break;
    }
    function firstSection() {
      let firstSection = document.getElementById("firstSection");
      firstSection.classList.toggle("firstSection");
      firstSection.style.transitionDelay = "1s";
    }
    function activitySection() {
      let sectionActivites = document.getElementById("sectionActivites");
      sectionActivites.classList.toggle("displaySection");
    }
    function actualitesSection() {
      let sectionActualites = document.getElementById("sectionActualites");
      sectionActualites.classList.toggle("displaySection");
    }
    function tableSection() {
      let sectiontable = document.getElementById("sectiontable");
      sectiontable.classList.toggle("displaySection");
    }
    function componentSection() {
      let sectioncomponent = document.getElementById("sectioncomponent");
      sectioncomponent.classList.toggle("displaySection");
    }
  });
});
let ActivitesSubmitData = document.getElementById("ActivitesSubmitData");
ActivitesSubmitData.addEventListener("click", function (e) {
  getActivitesData();
});
let ActualitesSubmitData = document.getElementById("ActualitesSubmitData");
ActualitesSubmitData.addEventListener("click", function (e) {
  getActualitesData();
  getData();
});
let dataStorage = "";
let dataArray = [];
class ActivitesformData {
  constructor(ActivitesId, title, date, dataForm, uploadImage) {
    this.ActivitesId = ActivitesId;
    this.title = title;
    this.date = date;
    this.dataForm = dataForm;
    this.uploadImg = uploadImage;
  }
}
//create object & function for getActivitesData
function getActivitesData() {
  let oldActivites = JSON.parse(localStorage.getItem("Activites")) || [];
  let ActivitesId = localStorage.length;
  let ActivitesTitle = document.getElementById("Activitestitle").value.trim();
  let dataForm = document.getElementById("Activitesmyform");
  let ActivitesDate = document.getElementById("date").value;
  let ActivitesDataForm = (dataForm.elements["ActivitesmyTextArea"].value =
    window.frames["ActivitesrichTextField"].document.body.textContent);
  if (ActivitesTitle == "" && ActivitesDate == "" && ActivitesDataForm == "") {
    let outputActivites = document.getElementById("outputActivites");
    outputActivites.className = "bg-danger mt-3 text-white text-center p-2";
    outputActivites.innerHTML = "<h3>Fill all input Please</h3>";
  } else {
    let ActivFormData = new ActivitesformData(
      ActivitesId,
      ActivitesTitle,
      ActivitesDate,
      ActivitesDataForm,
      ActivitesUploaded_image
    );
    oldActivites.push(ActivFormData);
    localStorage.setItem("Activites", JSON.stringify(oldActivites));
   
  }
}

if(localStorage.length > 0){
  let ActivitesMain = JSON.parse(localStorage.getItem('Activites')) || [];
  let activitesoutput = document.getElementById("activitesOutput");
  ActivitesMain.forEach(el => {
    let outputImg = document.createElement("img");
    outputImg.id = "display_image";
    outputImg.src = el.uploadImg;     
    let divCard = document.createElement("div");
    divCard.className = "card mt-3 text-white bg-dark pb-5";
    divCard.id = el.ActivitesId;
    let header = document.createElement("header");
    let divBody = document.createElement("div");
    let span = document.createElement("button");
    span.className = "btn btn-danger postionx";
    span.innerHTML = "X";
    span.id = el.ActivitesId;
    span.type = "submit";
    divBody.className = "container";
    header.className = "container mt-3";
    let divTitle = document.createElement("div");
    divTitle.className = "d-flex";
    let theTitle = document.createElement("h3");
    theTitle.innerHTML = el.title;
    let spanDate = document.createElement("span");
    spanDate.className = "mt-2 ms-5";
    spanDate.textContent = " Publié le " + el.date;

    let bodyPara = document.createElement("p");
    bodyPara.innerHTML = el.dataForm;
    divTitle.append(theTitle);
    divTitle.append(spanDate);
    header.append(divTitle);
    header.append(span);
    divCard.append(header);
    divCard.append(outputImg);
    divBody.append(bodyPara);
    divCard.append(divBody);
    activitesoutput.append(divCard);
    span.addEventListener("click", (e) => {
      let btnspan = JSON.parse(localStorage.getItem("Activites"));
      btnspan.forEach((eldata, index) => {
        let Activites = localStorage.getItem("Activites");
        if (Activites == null) {
          btnspan = [];
        }
        let confrm = confirm("Are You Sure to Delete this item");
        if (confrm == true) {
          btnspan.splice(index, 1);
          localStorage.setItem("Activites", JSON.stringify(btnspan));
          window.location.reload();
        }
      });
    });
  });  
  }else{
      
  }

  let Activites = JSON.parse(localStorage.getItem("Activites"));
   if(Activites.length > 0){
  let activitesInfo = document.querySelector('#activitesInfo');
  activitesInfo.innerHTML ="<h3 class='text-center'> "+ Activites.length + "</h3>";
  }else{
    activitesInfo.innerHTML = "<h3 class='text-center'> 0 </h3>";
  }
  let Actualites = JSON.parse(localStorage.getItem("Actualites"));
   console.log(Actualites.length);
  if(Actualites.length > 0){
  let actualitesInfo = document.querySelector('#actualitesInfo');
  actualitesInfo.innerHTML ="<h3 class='text-center'> "+ Actualites.length + "</h3>";
  }else{
    actualitesInfo.innerHTML = "<h3 class='text-center'> 0 </h3>"
  }
 
  if (!localStorage.pageLoadCount)
    localStorage.pageLoadCount = 0;
  localStorage.pageLoadCount = parseInt(localStorage.pageLoadCount) + 1;
  document.getElementById('pageVisites').innerHTML = '<h3 class="text-center">' + localStorage.pageLoadCount + ' Fois </h3>';


  let ActualitesUploaded_image = "";
function actualitesImage() {
  document.getElementById("UploadImageActualites").style.display = "block";
  const image_input = document.querySelector("#actualitesImage_input");
  image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      ActualitesUploaded_image = reader.result;
      if (ActualitesUploaded_image != null) {
        let imgFile = document.createElement("img");
        imgFile.src = `${ActualitesUploaded_image}`;
        /*richTextField.document.execCommand('insertimage', false, upload_image);*/
      }
    });
    reader.readAsDataURL(this.files[0]);
  });
}
// Create object & function getActualitesData

class ActualitesformData {
  constructor(
    ActualitesId,
    ActualitesTitle,
    ActualitesDate,
    ActualitesDataForm,
    ActualitesUploaded_image
  ) {
    this.ActualitesId = ActualitesId;
    this.ActualitesTitle = ActualitesTitle;
    this.ActualitesDate = ActualitesDate;
    this.ActualitesDataForm = ActualitesDataForm;
    this.uploadImg = ActualitesUploaded_image;
  }
}
function getActualitesData() {
  let oldActualites = JSON.parse(localStorage.getItem("Actualites")) || [];
  let ActualitesId = localStorage.length;
  let ActualitesTitle = document.getElementById("Actualitestitle").value.trim();
  let ActualitesDate = document.getElementById("ActualitesDate").value;
  let ActualitesDataForm = document.getElementById("Actualitesmyform");
  ActualitesDataForm = ActualitesDataForm.elements[
    "ActualitesmyTextArea"
  ].value = window.frames["ActualitesrichTextField"].document.body.textContent;
  if (
    ActualitesTitle == "" &&
    ActualitesDate == "" &&
    ActualitesDataForm == ""
  ) {
    let outputActualites = document.getElementById("outputActualites");
    outputActualites.className = "bg-danger mt-3 text-white text-center p-2";
    outputActualites.innerHTML = "<h3>Fill all input Please</h3>";
  } else {
    const actualites = {
      id: ActualitesId,
      Title: ActualitesTitle,
      date: ActualitesDate,
      outputimg: ActualitesUploaded_image,
      bodyPara: ActualitesDataForm,
    };
    let ActUFormData = new ActualitesformData(actualites);
    oldActualites.push(ActUFormData);
    localStorage.setItem("Actualites", JSON.stringify(oldActualites));
    window.location.reload();
  }
}
let  ActualitesArray = "";
if(localStorage.length > 0){
  let ActualitesMain = JSON.parse(localStorage.getItem('Actualites')) || [];
  for(let i = 0; i<ActualitesMain.length; i++){
   ActualitesArray = ActualitesMain[i].ActualitesId; 
  let Actualitesoutput = document.getElementById("actualitesoutput");
  let outputImg = document.createElement("img");
    outputImg.id = "display_image";
    outputImg.src = ActualitesArray.outputimg;     
    let divCard = document.createElement("div");
    divCard.className = "card mt-3 text-white bg-dark pb-5";
    divCard.id = ActualitesArray.ActualitesId;
    let header = document.createElement("header");
    let divBody = document.createElement("div");
    let span = document.createElement("button");
    span.className = "btn btn-danger postionx";
    span.innerHTML = "X";
    span.id = ActualitesArray.ActualitesId;
    span.type = "submit";
    divBody.className = "container";
    header.className = "container mt-3";
    let divTitle = document.createElement("div");
    divTitle.className = "d-flex";
    let theTitle = document.createElement("h3");
    theTitle.innerHTML = ActualitesArray.Title;
    let spanDate = document.createElement("span");
    spanDate.className = "mt-2 ms-5";
    spanDate.textContent = " Publié le " + ActualitesArray.date;

    let bodyPara = document.createElement("p");
    bodyPara.innerHTML = ActualitesArray.bodyPara;
    divTitle.append(theTitle);
    divTitle.append(spanDate);
    header.append(divTitle);
    header.append(span);
    divCard.append(header);
    divCard.append(outputImg);
    divBody.append(bodyPara);
    divCard.append(divBody);
    Actualitesoutput.append(divCard);
    span.addEventListener("click", (e) => {
      let btnspan = JSON.parse(localStorage.getItem("Actualites"));
      btnspan.forEach((eldata, index) => {
        let Actualites = localStorage.getItem("Actualites");
        if (Actualites == null) {
          btnspan = [];
        }
        let confrm = confirm("Are You Sure to Delete this item");
        if (confrm == true) {
          btnspan.splice(index, 1);
          localStorage.setItem("Actualites", JSON.stringify(btnspan));
          window.location.reload();
        }
      });
    });
  }  
  
}else{
      
  }