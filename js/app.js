let btnNavigation = document.querySelector('.navbar-toggler');
btnNavigation.addEventListener('click',function(){
 let navbarCollapse = document.querySelector('.navbar-collapse');
// navbarCollapse.classList.remove("collapse");
 navbarCollapse.classList.toggle("collapseDev");

});