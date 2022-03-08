let countEl= document.getElementById("count-el")
let saved =document.getElementById("saved")

let count = 0 

function increment() {
     
     count += 1
     countEl.innerText= count
} 
    
function save()  {
 saved.textContent += count + " - "
 count= 0
 countEl.innerText= 0
}