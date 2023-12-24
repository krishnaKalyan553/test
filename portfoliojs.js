let arr = document.getElementsByClassName("move");
let boundary = document.getElementById("skill");
let x =[]
let y=[]
let  dx =[]
let dy = []
for (let i = 0; i < arr.length; i++){
    x[i] = boundary.offsetLeft + boundary.clientWidth/2;
    y[i] = boundary.offsetTop + boundary.clientHeight/2;
    dx[i] = Math.random() * (3 - 1) + 1;
    dy[i] = Math.random() * (3 - 1) + 1;
}

let fontSize = 10;
function animate(){
    for (let i = 0; i < arr.length; i++){
        arr[i].style.left = `${x[i]}px`;
        arr[i].style.top = `${y[i]}px`;
        x[i] += dx[i];
        y[i] += dy[i];
    if (x[i] + dx[i] > boundary.offsetLeft + boundary.clientWidth - fontSize || x[i] + dx[i] < boundary.offsetLeft + fontSize) {
        dx[i] = -dx[i];
    }

    if (y[i] + dy[i] > boundary.offsetTop + boundary.clientHeight - fontSize || y[i] + dy[i] < boundary.offsetTop + fontSize) {
        dy[i] = -dy[i];
    }
    
}
    requestAnimationFrame(animate);

}
animate();












