var frames;
var playing = false;
var isCustom = false;
var interval = null;
var speed = 250;
var selectedAnimationIndex = 0;

function toggleElementDisable(elementId, toggleValue) {
    document.getElementById(elementId).disabled = toggleValue;
}

function startAnim(el) {
    this.playing = true;
    el.disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("animation").disabled = true;
    document.getElementById("anim").readOnly = true;

    playFrames();
}

function stopAnim(el){
    this.playing = false;
    el.disabled = true;
    toggleElementDisable("start", false);
    toggleElementDisable("animation", false);
    document.getElementById("anim").readOnly = false;
}

function customAnim(){
    var selectedAnims = document.getElementById("anim").value;
    if(selectedAnims.split("=====\n").length > 0) {
        this.frames = selectedAnims.split("=====\n");
    } else {
        this.frames = selectedAnims.split("=====\\n");
    }
    document.getElementById("anim").innerHTML = selectedAnims;
}

function animateIt(el) {
    if(el.value == 'Custom') {
        alert('You can write your own animation and can Play it!');
        this.isCustom = true;
    }

    this.playing = false;
    document.getElementById("anim").readOnly = !this.isCustom;
    this.selectedAnimationIndex = 0;

    toggleElementDisable("start", false);
    toggleElementDisable("stop", true);

    var selectedAnims = ANIMATIONS[el.value];
    this.frames = selectedAnims.split("=====\n");
    document.getElementById("anim").value = selectedAnims;
} 

function playFrames() {
    if(this.isCustom && this.frames == '') {
        customAnim();
    }
    this.interval = setInterval(function(){
        if(this.playing) {
            this.selectedAnimationIndex = this.selectedAnimationIndex == this.frames.length ? 0 : this.selectedAnimationIndex;
            var perFrame = this.frames[this.selectedAnimationIndex++];
            document.getElementById("anim").value = perFrame;
        } else {
            clearInterval(this.interval);
        }
    }, this.speed);
}

function fontChanged(el) {
    document.getElementById("anim").style.fontSize = el.value;
}

function speedChanged(el){
    this.speed = el.checked ? 50 : 250;
    clearTimeout(this.interval);
    playFrames();
}