function getAge(b_y, b_m, b_d){
    var today = new Date();
    var y = today.getFullYear();
    var m = today.getMonth() + 1;
    var d = today.getDate();
    var age = y - b_y;
    if(b_m > m || (b_m == m && b_d > d)){
        age--;
    }
    return age;
};

function setAge(){
    var elem = document.getElementById("age");
    elem.innerText =  getAge(1990, 1, 10);
};

window.addEventListener('DOMContentLoaded', function(){
    setAge();
    const elems = document.getElementsByClassName('item');
    for(var elem of elems){
        elem.addEventListener('click', function(){
            this.nextElementSibling.classList.toggle('active');
        });
    };
});
