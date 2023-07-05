const newMessage= document.querySelectorAll('.message.active');
let pendingNotification=+document.querySelector('.Notification-count').innerHTML
const markAll=document.querySelector('.btn')
function decreaseCount(){
    if(pendingNotification > 0){
        pendingNotification--
        document.querySelector('.Notification-count').innerHTML=pendingNotification
    }
    else{
        document.querySelector('.Notification-count').innerHTML=pendingNotification
    }
}
newMessage.forEach(message=>{
    message.addEventListener('click',function(e){
        if(e.target.parentNode.closest('.message.active')){
            e.target.parentNode.closest('.message').classList.remove('active')
            decreaseCount()
        }
    })
})
markAll.addEventListener('click',function(){
    pendingNotification=0
    decreaseCount()
    newMessage.forEach(message=>{
       message.classList.remove('active')
    })
})
