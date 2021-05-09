import colors, { refs } from './constants'

refs.startBtn.addEventListener('click', () => { bgcTimer.start() });
refs.stopBtn.addEventListener('click', () => { bgcTimer.stop() });


class BgcTimer {
    constructor({onTick}) {
        this.intervalId = null;
        this.isActive = false;
            this.onTick = onTick;
        }

        start() {
    if (this.isActive) {
        return;
    }
                
    this.isActive = true;
        this.intervalId = setInterval(() => {
        this.onTick();
        console.log(changeBgc())
    }, 1000);
        }
        
  stop() {
    clearInterval(this.intervalId);
          this.isActive = false;
          refs.body.style.backgroundColor = "transparent";
  }
}

const bgcTimer = new BgcTimer({
        onTick: changeBgc,
})

function changeBgc() {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval( 0, colors.length -1 )];
    return refs.body.style.backgroundColor;
}

const randomIntegerFromInterval = ( min, max ) => {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
};




//  //------------- Without Class
// refs.startBtn.addEventListener('click', () => {bgcTimer.start()});
// refs.stopBtn.addEventListener('click', () => { bgcTimer.stop() });

// const bgcTimer = {
//   intervalId: null,
//   isActive: false,
//   start() {
//     if (this.isActive) {
//         return;
//     }
                
//     this.isActive = true;
//     this.intervalId = setInterval(() => {
//       changeBgc();
//       console.log(changeBgc())
//     }, 1000);
//   },
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//       refs.body.style.backgroundColor = "transparent";
//   }
// }

// function changeBgc() {
//     refs.body.style.backgroundColor = colors[randomIntegerFromInterval( 0, colors.length -1 )];
//     return refs.body.style.backgroundColor;
// }

// const randomIntegerFromInterval = ( min, max ) => {
//     return Math.floor( Math.random() * ( max - min + 1 ) + min );
// };
// console.log(changeBgc());