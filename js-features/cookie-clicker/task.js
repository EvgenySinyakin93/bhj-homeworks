const element = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");


image.onclick = function(){
    clicker__counter.textContent++;
    image.width = 400;
    setTimeout(changeSize, 100);
};

function changeSize() {
    image.width = 200;
}


