const roomMap = document.getElementById("roomMap")
const ctx = roomMap.getContext('2d');


window.addEventListener('resize',render)

function render(){
    const maxWidth = window.innerWidth;
    const maxHeight = window.innerHeight;
    const longestDimension = maxWidth > maxHeight ? maxWidth : maxHeight;
    const shorterDimension = longestDimension === maxWidth ? maxHeight : maxWidth;
    const squareness = longestDimension / shorterDimension;
    const sideLength = shorterDimension * 0.85;
    const padding = shorterDimension - sideLength;
    
    
}
