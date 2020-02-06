new Vue({
   el: "#app",
   methods: {
       show() {
           event.target.nextElementSibling.classList.toggle('active')
           event.target.classList.toggle('active')
       },
       openMenu(){
           event.target.parentNode.nextElementSibling.firstChild.firstChild.classList.toggle('active')
       }
   }
})