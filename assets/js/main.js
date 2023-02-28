mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*==============SHOW SIDEBAR=================*/

const navMenu = document.getElementById('sidebar'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===========SIDEBAR SHOW============== */
/* Validate if constant exists */

if(navToggle){
    navToggle.addEventListener("click",() => {
        navMenu.classList.add('show-sidebar')
    })
}

/*========= SIDEBAR HIDDEN============= */

if(navClose){
    navClose.addEventListener("click",() => {
        navMenu.classList.remove('show-sidebar')
    })
}

/*=========== SKILLS TAB============== */

const tabs = document.querySelectorAll('[data-target]'),
    tabContent=document.querySelectorAll('[data-content]')

    tabs.forEach(tab=>{
        tab.addEventListener("click",()=>{
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents=>{
                tabContents.classList.remove('skills_active')
            })
            target.classList.add('skills_active')

            tabs.forEach(tab=>{
                tab.classList.remove('skills_active')
            })
            tab.classList.add('skills_active')
        })
    })

/*========MIXITUP FILTER PORTFOLIO================ */

let mixer = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});


/*============ LINK ACTIVE WORK================= */

const linkWork = document.querySelectorAll('.work_item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work');
}

linkWork.forEach(l=> l.addEventListener("click",activeWork))

/*========== Work Popup============== */


document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work_button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup(){
    document.querySelector(".portfolio_popup").classList.toggle("open");
}

document.querySelector(".portfolio_popup-close").addEventListener("click",togglePortfolioPopup)


function portfolioItemDetails(portfolioItem){
   document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
   document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
   document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;
}



/*============== INPUT ANIMATION ========== */
const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

/* ============ SCROLL SECTIONS ACTIVE LINK ========== */
//get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

//add an event listener listening for scroll
window.addEventListener("scroll",navHighlighter);

function navHighlighter(){
    //get current scroll position
    let scrollY = window.pageYOffset;
    //Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active-link")
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}

/* ============== SHOW SCROLL UP ============= */
