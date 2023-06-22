let selectedRow = null;






// jnjel

let Aman = document.querySelector(".display-5");

document.querySelector(".student-list").addEventListener("click",(e) =>{
    target = e.target;
    if( target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        Aman.remove();
        alert("ԴՈՒՔ ՋՆՋԵՑԻՑ ՆՐԱՆ");
    }
});