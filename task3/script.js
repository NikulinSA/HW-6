const trafficLight = document.querySelector('#trafficLight');
// let i;

function makeGreen() {
    // for(i = 0; i < trafficLight.length; ++i){
    trafficLight.style.background = ('green');
    trafficLight.removeEventListener('click', makeGreen);
    trafficLight.addEventListener('click', makeYellow);
    // }
}

function makeYellow() {
    // for(i = 0; i < trafficLight.length; ++i){
    trafficLight.style.background = ('yellow');
    trafficLight.removeEventListener('click', makeYellow);
    trafficLight.addEventListener('click', makeRed);
    // }
}

function makeRed() {
    // for(i = 0; i < trafficLight.length; ++i){
    trafficLight.style.background = ('red');
    trafficLight.removeEventListener('click', makeRed);
    trafficLight.addEventListener('click', makeGreen);
    // }
}


//  for(i = 0; i < trafficLight.length; ++i){
 trafficLight.addEventListener('click', makeGreen);
//  }

