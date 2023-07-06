class ham-menu{
const ham-menu = document.querySelector('ham-menu');
const men = document.querySelector('men');

ham-menu.addeventlistener('click',function(){
    men.classList.toggle('show');
});
}