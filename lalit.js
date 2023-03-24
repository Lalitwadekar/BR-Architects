const projectScroll =document.getElementById('project_nav')
projectScroll.addEventListener("click",()=>{
    console.log(projectScroll)
    window.scroll({
        top: document.getElementById("project_page").offsetTop - 100,
        behavior: 'smooth'
    })
} )


const aboutScroll =document.getElementById('about_nav')
aboutScroll.addEventListener("click",()=>{
    console.log(aboutScroll)  
    window.scroll({
        top: document.getElementById("about_page").offsetTop - 100,
        behavior: 'smooth'
    })
})


const contactScroll =document.getElementById('contact_nav')
contactScroll.addEventListener("click",()=>{
    console.log(contactScroll)
    window.scroll({
        top: document.getElementById("contact_page").offsetTop - 100,
        behavior: 'smooth'
    })
})

