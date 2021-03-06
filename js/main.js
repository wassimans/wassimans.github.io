function loadImage(id, targetId) {
    var el = document.getElementById(id);
    var targetEl = targetId ? document.getElementById(targetId) : el;
    var imageToLoad;

    // if data-image is provided, we use that value
    if (el.dataset.image) {
        imageToLoad = el.dataset.image;
    } 
    //if the browser doesn't support srcset and currentSrc , we use the src value of the <img>
    else if (typeof el.currentSrc === 'undefined') {
        imageToLoad = el.src;
    } 
    //otherwise we can simply use currentSrc
    else {
        imageToLoad = el.currentSrc;
    }

    if (imageToLoad) {
        var img = new Image();
        img.src = imageToLoad;
        img.onload = function() {
            targetEl.classList.add('is-loaded');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadImage('wallpaper');
    loadImage('pictureImage', 'picture');
});