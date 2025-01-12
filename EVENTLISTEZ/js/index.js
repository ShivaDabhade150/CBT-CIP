  


/*scroll nav-br*/

   const navBar = document.querySelector(".nav-bar");



  
 
    
        window.addEventListener("scroll",()=>{

          console.log(scrollY);

          if(scrollY > 1)
          {
              navBar.classList.add("nav-scroll");

          }
          else{

              navBar.classList.remove("nav-scroll");

          }
        })



/*slider code*/

const btn1= document.querySelector("#btn1");

const btn2= document.querySelector("#btn2");

const slide_container = document.querySelector(".slide-container") 

let slide_length = document.querySelectorAll(".slide");
console.log(slide_length)


  let current =1;
  
  let clearTime;
btn2.addEventListener("click",()=>{
      
       current++;
       clearTimeout(clearTime);
      
       update_img();
});

btn1.addEventListener("click",()=>{
       
    current--;
   clearTimeout(clearTime);
   
    update_img();
})


   function update_img()
   {
      
    if(current > slide_length.length)
        {
          current=1; 
        }
      
        if(current < 0)
            {
              current=slide_length.length; 
            }

     slide_container.style.transform = `translateX(-${(current-1)*1920}px)` ;

     setTimeout(()=>{
        current++;
        crearTime=update_img();},4000);
   }