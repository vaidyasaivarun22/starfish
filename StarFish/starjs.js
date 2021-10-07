//In navbar searching input item.
function searchInput()
{
    var searchInput = document.getElementById('textsearch').value;
    if(confirm(" Ask Google About: "+searchInput))
    {
        window.open("https://google.com/search?q="+searchInput);
    }
};
//Onhover bouncing effect for corresponding download button. 
function start(p1)
{
    document.getElementById('hover-me'+p1).style.animation = "bouncing 0.5s ease 0s infinite alternate both";
}
function stop(p1)
{
    document.getElementById('hover-me'+p1).style.animation = 'none';
}
//This function is used for hiding and displaying the sections for each languages.
function display_section(p1)
{
   var x = document.getElementById('dropdown_section'+p1);
   if(x.style.display === "none") 
   {
    x.style.display = "block";
   } 
   else 
   {
    x.style.display = "none";
   }
}
function suggestion()
{
    alert("you have option to choose from any of the available languages to practice,select the drop-down present on top-rightside.");
}
