var pointsArray = document.getElementsByClassName('point');

var animatePoints = function (points) {
    var revealPoint = function (element) {
        element.style.opacity = 1;
        element.style.transform = "scaleX(1) translateY(0)";
        element.style.msTransform = "scaleX(1) translateY(0)";
        element.style.WebkitTransform = "scaleX(1) translateY(0)";
    };

    //points.forEach(revealPoint); --> Does not work
    [].forEach.call(points, revealPoint);
};

window.onload = function () {
    // Automatically animates the points on a tall screen where scrolling can't trigger the animation
    if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    }

    window.addEventListener('scroll', function (event) {
        if (pointsArray[0].getBoundingClientRect().top <= 500) {
            animatePoints(pointsArray);
        }
    });
}