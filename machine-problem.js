let inputs;
const allBtns = document.querySelectorAll('button');
const buttonSubmit = document.querySelector('#submit');
// const buttonSubmit2 = document.querySelector('.submit2');
// const buttonSubmit3 = document.querySelector('.submit3')
let inputField = document.querySelector('.inputs');
const outputContainer = document.querySelector('.output-container');
const oddNumber = document.querySelector('.oddNumber');



// Size of 3
// Number of lines height

// Number of character width in each line

let pixel = 40;

const printX = (b,height) => {
    b.style.width = (39 * height) + 'px';
    b.style.height = (39 * height) + 'px';
    let width = (2 * height) - 1;
    const box = document.querySelector('.box');
    let i, j, counter = 0;
    for (let i = 0; i < height; i++) {
        console.log(i)
     for (let j = 0; j < height; j++) {
        let newI = i * pixel;
        let newJ = j * pixel;
        
        let div = document.createElement('div');
        // div.style.border = '1px solid greenyellow';
        div.style.top = newI + 'px';
        div.style.left = newJ + 'px';
        div.style.margin = '4px';
        div.style.fontFamily = 'inherit';
        div.style.width = '24px';
        div.style.height = '24px';
        div.style.textAlign = 'center';
        div.style.position = 'absolute';
        // box.append(div)
         if (i == j || i + j == height - 1 ){
    // document.write("o");
            div.innerHTML = 'o'
            console.log('o');
       b.append(div);
        
      }else{
        console.log(' ');
         box.append(div);
    }
        }
 
    }
    counter++;
  
}
// PRINT Y
// const printY = (b,height) => {
//     // let width = (2 * height) - 1;
//     // let i, j, counter = 0;
// for (let i = 0; i < height; i++) {
//     for (let j = 0; j < height; j++) {
//       const boxElem = document.createElement("div");
//       boxElem.classList.add("box-item");

//       const y = `${i * pixel}px`;
//       const x = `${j * pixel}px`;

//       boxElem.style.top = y;
//       boxElem.style.left = x;
//       boxElem.innerText = "o";
//       boxElem.style.textAlign = 'center';
//       boxElem.style.width = '24px';
//       boxElem.style.height = '24px';

//       let halfOfTheInput = Math.round(height / 2);

//       if (Math.round(height / 2) > i) {
//         if (i == j || i + j == height - 1) {
//           b.appendChild(boxElem);
//         }
//       } else {
//         boxElem.style.left = `${(halfOfTheInput - 1) * pixel}px`;
//         parentElem.appendChild(boxElem);
//         console.log({ i, j });
//       }
//     }
//   }
// }
// ;

// XXXX
// const printY = (parentElem,height) => {
//     for (let i = 0; i < height; i++) {
//       for (let j = 0; j < height; j++) {
//         const boxElem = document.createElement("div");
//         boxElem.classList.add("box-item");
  
//         const y = `${i * pixel}px`;
//         const x = `${j * pixel}px`;
  
//         boxElem.style.top = y;
//         boxElem.style.left = x;
//         boxElem.innerText = "o";
  
//         let halfOfTheInput = Math.round(height / 2);
  
//         if (Math.round(height / 2) > i) {
//           if (i == j || i + j == height - 1) {
//             parentElem.appendChild(boxElem);
//           }
//         } else {
//           boxElem.style.left =` ${(halfOfTheInput - 1) * pixel}px`;
//           parentElem.appendChild(boxElem);
//         }
//       }
//     }
//   };
const printY = (b,height) => {
    b.style.width = (39 * height) + 'px';
    b.style.height = (39 * height) + 'px';
    let width = (2 * height) - 1;
    let i, j, counter = 0;
    for (i = 0; i < height; i++) {
        for (j = 0; j < height; j++) {
            let newI = i * pixel;
            let newJ = j * pixel;
            
            let div = document.createElement('div');
            // div.style.border = '1px solid greenyellow';
            div.style.top = newI + 'px';
            div.style.left = newJ + 'px';
            div.style.margin = '4px';
            div.style.fontFamily = 'inherit';
            div.style.width = '24px';
            div.style.height = '24px';
            div.style.textAlign = 'center';
            div.style.position = 'absolute';
            if (j == counter || i + j == height - counter  && i <= parseInt(height / 2)){
                div.innerHTML = 'o';
                console.log('o');
                b.append(div);
                // box.append(div);
            }else{
                div.innerHTML = ' '
                b.append(div);
            }
        }
        if (i < parseInt(height / 2)){
            counter++;
        }
    }
}

const printZ = (b,height) => {
    b.style.width = (39 * height) + 'px';
    b.style.height = (39 * height) + 'px';
    let width = (2 * height) - 1;
    let i, j, counter = height - 1;
    for (i = 0; i < height; i++) {
        for (j = 0; j < height; j++) {
            let newI = i * pixel;
            let newJ = j * pixel;
            
            let div = document.createElement('div');
            // div.style.border = '1px solid greenyellow';
            div.style.top = newI + 'px';
            div.style.left = newJ + 'px';
            div.style.margin = '4px';
            div.style.fontFamily = 'inherit';
            div.style.width = '24px';
            div.style.height = '24px';
            div.style.textAlign = 'center';
            div.style.position = 'absolute';
       
        if (i == 0 || i == height - 1 || j == counter){
            div.innerHTML = 'o'
             console.log('o');
             b.append(div);
            
           } else{
            div.innerHTML = ' ';
            b.append(div);
           }
                
        }
        counter--;
        // document.write(`<br/>`);
    }
}
buttonSubmit.addEventListener('click', getInput);


function getInput(){
    let p = []
    let inputOddNumber = parseInt(document.querySelector('.oddNumber').value);
    let inputDirection = document.querySelector('.direction').value.toLowerCase();
    let inputText = document.querySelector('.inputs').value.toUpperCase().split('');
    console.log(inputText);
    console.log(inputOddNumber)
    let elemFlow = setDir(inputDirection);
    console.log(elemFlow)
    // if()


    for(let i = 0; i < inputText.length; i++){
        
        if(inputText[i] === 'X'){

            outputContainer.style.flexDirection = `${elemFlow}`;
            let height = inputOddNumber;
            const divBox = document.createElement('div');
            divBox.classList.add('box');
            outputContainer.append(divBox)
            p.push(inputText[i])
            console.log(p)
            console.log(p.length)
            printX(divBox,height);
    
        }else if(inputText[i] === 'Y'){

            outputContainer.style.flexDirection = `${elemFlow}`;
            let height = inputOddNumber;
            const divBox = document.createElement('div');
            divBox.classList.add('box');
            outputContainer.append(divBox)
            p.push(inputText[i])
            console.log(p)
            console.log(p.length)
            printY(divBox,height);
           
        }else if(inputText[i] === 'Z'){

            outputContainer.style.flexDirection =   `${elemFlow}`;
            let height = inputOddNumber;
            const divBox = document.createElement('div');
            divBox.classList.add('box');
            outputContainer.append(divBox)
            p.push(inputText[i])
            console.log(p)
            console.log(p.length)
            printZ(divBox,height);
        }
        // return inputFields;
    }
}

   function setDir(dir){
        let directions = '';
        if(dir === 'vertical'){
            return directions = 'row'
        }else{
            return directions = 'column'
        };
        
    };

// allBtns.forEach(btns => {
//     btns.addEventListener('click', function (e){
//         console.log(e.currentTarget)
//        const btnName = e.currentTarget.classList;

//        if(btnName.contains('ver')){
//            console.log('vertical')
//        }else if(btnName.contains('hor')){
//         console.log('horizontal')
//        }
//     } )
// })

// Size of 5
// Number of lines height
// let heighthor = 5;
// // Number of character width in each line
// let widthHor = (2 * heighthor) - 1;
// let pixelHor = 21;

// const printXhor = (b) => {
//     const box = document.querySelector('.box');
//     let i, j, counter = 0;
//     for (let i = 0; i < heighthor; i++) {
//         console.log(i)
//      for (let j = 0; j < heighthor; j++) {
//         let newI = i * pixelHor;
//         let newJ = j * pixelHor;
        
//         let div = document.createElement('div');
//         // div.style.border = '1px solid greenyellow';
//         div.style.top = newI + 'px';
//         div.style.left = newJ + 'px';
        
//         div.style.fontFamily = 'inherit';
//         div.style.width = '24px';
//         div.style.height = '24px';
//         div.style.textAlign = 'center';
//         div.style.position = 'absolute';
//         // box.append(div)
//          if (i == j || i + j == heighthor - 1 ){
//     // document.write("o");
//             div.innerHTML = 'o';
//             console.log('o');
//        b.append(div);
        
//       }else{
//         console.log(' ');
//          box.append(div);
//     }
//         }
 
//     }
//     counter++;
  
// }

// const printYhor = (b) => {
    
//     let i, j, counter = 0;
//     for (i = 0; i < heighthor; i++) {
//         for (j = 0; j < heighthor; j++) {
//             let newI = i * pixelHor;
//             let newJ = j * pixelHor;
            
//             let div = document.createElement('div');
//             div.style.border = '1px solid greenyellow';
//             div.style.top = newI + 'px';
//             div.style.left = newJ + 'px';
//             div.style.margin = '4px';
//             div.style.fontFamily = 'inherit';
//             div.style.width = '24px';
//             div.style.height = '24px';
//             div.style.textAlign = 'center';
//             div.style.position = 'absolute';
//             if (j == counter || j == heighthor - counter  && i <= parseInt(heighthor / 2)){
//                 div.innerHTML = 'o';
//                 console.log('o');
//                 b.append(div);
//                 // box.append(div);
//             }else{
//                 div.innerHTML = ' ';
//                 b.append(div);
//             }
//         }
//         if (i < parseInt(heighthor / 2))
//             counter++;
//     }
// }

// const printZhor = (b) => {
//     let i, j, counter = heighthor - 1;
//     for (i = 0; i < heighthor; i++) {
//         for (j = 0; j < heighthor; j++) {
//             let newI = i * pixelHor;
//             let newJ = j * pixelHor;
            
//             let div = document.createElement('div');
//             // div.style.border = '1px solid greenyellow';
//             div.style.top = newI + 'px';
//             div.style.left = newJ + 'px';
//             div.style.margin = '4px';
//             div.style.fontFamily = 'inherit';
//             div.style.width = '24px';
//             div.style.height = '24px';
//             div.style.textAlign = 'center';
//             div.style.position = 'absolute';
       
//         if (i == 0 || i == heighthor - 1 || j == counter){
//             div.innerHTML = 'o'
//              console.log('o');
//              b.append(div);
            
//            } else{
//             div.innerHTML = ' ';
//             b.append(div);
//            }
                
//         }
//         counter--;
//         // document.write(`<br/>`);
//     }
// }
// buttonSubmit2.addEventListener('click', getInputHorizontal);


// function getInputHorizontal(){
//     console.log('horizontal')
//     let p = []
//     let inputFields2 = document.querySelector('.inputs2').value.toUpperCase().split('');
//     console.log(inputFields2);
//     for(let i = 0; i < inputFields2.length; i++){
        
//         if(inputFields2[i] === 'X'){
//             const divBox2 = document.createElement('div');
//             divBox2.classList.add('box');
//             outputContainer2.append(divBox2)
//             p.push(inputFields2[i])
//             console.log(p)
//             console.log(p.length)
//             printXhor(divBox2);
    
//         }else if(inputFields2[i] === 'Y'){
//             const divBox2 = document.createElement('div');
//             divBox2.classList.add('box');
//             outputContainer2.append(divBox2)
//             p.push(inputFields2[i])
//             console.log(p)
//             console.log(p.length)
//             printYhor(divBox2);
           
//         }else if(inputFields2[i] === 'Z'){
//             const divBox2 = document.createElement('div');
//             divBox2.classList.add('box');
//             outputContainer2.append(divBox2)
//             p.push(inputFields2[i])
//             console.log(p)
//             console.log(p.length)
//             printZhor(divBox2);
//         }
//         // return inputFields;
//     }
// }