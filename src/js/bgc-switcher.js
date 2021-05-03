import colors, { refs } from './colors-list'

console.log(colors[3])
console.log(colors.length);


 refs.startBtn.addEventListener('click', changeBgc);

// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random(color) * (max - min + 1) + min);
// };
// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
            
function changeBgc() {
        refs.body.style.backgroundColor = colors[1];
        console.log(colors[1]);
        return refs.body.style.backgroundColor;}
       


// function changeBgc() {
//     colors.map(color => {
//         refs.body.style.backgroundColor = color;
//         console.log(color);
//         return color;
//     });
// };


// const colorContainer = colors.map(color => {
//     const bodyStyleRef = refs.body.style.backgroundColor;
//     console.log(bodyStyleRef.textContent);
//     bodyStyleRef.textContent = color;
//     return bodyStyleRef;
// });
// refs.body.style.backgroundColor.append(...colorContainer)


// const BGC = changeBgc();

// const timeOutId = setTimeout(BGC, 1000);

// console.log(setTimeout);

// function changeBgc(e) {
//     colors.map(color => {
//         refs.body.style.backgroundColor = color;
//         console.log(color);
//         const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };
//         console.log(e.currentTarget);
//         return color;
//     })
// };







// setTimeout(function changeBgc() {
//     document.body.style.backgroundColor = "#000";
// },1000);
// setTimeout(function bgcSwitchMaker() {
//     colors.map(color => {
//         refs.body.style.backgroundColor = color;
    
//     })}, 1000);

 console.log(changeBgc);
// bgcSwitchMaker();



// console.log(randomIntegerFromInterval);


console.log(refs.startBtn);
console.log(colors);
console.log(refs.body);