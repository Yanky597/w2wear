app.component("side-nav",{
    /* html */
    template:
    `
     <!-- NAVBAR  #2-->
     <nav
     class="navbar navbar-light set-background-to-DKpurple m-0"
     style="position: absolute"
   >
     <div class="container-fluid">
       <button
         class="navbar-toggler remove-outline set-color-to-purple-dk"
         type="button"
         data-bs-toggle="offcanvas"
         data-bs-target="#offcanvasNavbar"
         aria-controls="offcanvasNavbar"
       >
         <span class="navbar-toggler-icon"></span>
       </button>
       <div
         class="offcanvas offcanvas-start set-background-to-ltpurple"
         tabindex="-1"
         id="offcanvasNavbar"
         aria-labelledby="offcanvasNavbarLabel"
       >
         <div class="offcanvas-header">
           <h5 class="offcanvas-title" id="offcanvasNavbarLabel">MENU</h5>
           <button
             type="button"
             class="btn-close text-reset"
             data-bs-dismiss="offcanvas"
             aria-label="Close"
           ></button>
         </div>
         <div class="offcanvas-body">
           <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
             <li class="nav-item">
               <a
                 class="nav-link active"
                 aria-current="page"
                 href="./index.html"
                 >Home</a
               >
             </li>
             <li class="nav-item">
               <a
                 class="nav-link"
                 href="./hotOrCold.html"
                 >Set Your Body Temp</a
               >
             </li>
             <li class="nav-item">
               <a class="nav-link" href="./aboutUs.html"
                 >About Us</a
               >
             </li>
             <li class="nav-item">
             <a class="nav-link" href="./forecast.html"
               >Forecast</a
             >
           </li>
             <li class="nav-item">
               <a class="nav-link" @click="resetLocation">Reset Location</a>
             </li>
           </ul>
         </div>
       </div>
     </div>
   </nav>
    `
    ,
    methods:{
      resetLocation : () =>{
        localStorage.setItem("locationIsSet", false);
        location.reload();
      }
    }
})