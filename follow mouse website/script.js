const coords = { x:0, y:0}
const circles = document.querySelectorAll(".circle");

circles.forEach(function (circle){
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener("mousemove", function(e){
    coords.x = e.pageX;
    coords.y = e.pageY;
});

function animateCircle(){

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function(circle, index){
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = index /15

        circle.x = x;
        circle.y = y;

        const nextcircle = circles[index + 1] || circles[0];

        x += (nextcircle.x - x) * 0.9;
        y += (nextcircle.y - y) * 0.9;
    });
    requestAnimationFrame(animateCircle);
}
animateCircle();

const follow = document.querySelector('.follow');

follow.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
    follow.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
follow.addEventListener('mouseleave', () => {
    follow.style.transform = `rotateY(0deg) rotateX(0deg)`;
    follow.style.transition = "all 0.5s ease";
});
follow.addEventListener('mouseenter', () => {
    follow.style.transition = "none";
});

// Code for dragging elements
const moveElements = document.querySelectorAll('.stu');

moveElements.forEach(move => {
    let offsetX, offsetY;

    move.addEventListener('mousedown', (e) => {
        e.preventDefault();

        // Calculate the offset of the cursor relative to the element's position
        offsetX = e.clientX - move.getBoundingClientRect().left;
        offsetY = e.clientY - move.getBoundingClientRect().top;

        function mousemove(e) {
            e.preventDefault();

            move.style.left = (e.clientX - offsetX) + 'px';
            move.style.top = (e.clientY - offsetY) + 'px';
        }

        function mouseup() {
            // Remove the event listeners when the mouse button is released
            document.removeEventListener('mousemove', mousemove);
            document.removeEventListener('mouseup', mouseup);

        }

        // Attach the mousemove and mouseup listeners
        document.addEventListener('mousemove', mousemove);
        document.addEventListener('mouseup', mouseup);
    });
});




