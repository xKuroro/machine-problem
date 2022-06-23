let inputs;
const allBtns = document.querySelectorAll('button');
const buttonSubmit = document.querySelector('#submit');
const buttonSubmit2 = document.querySelector('.submit2');
const buttonSubmit3 = document.querySelector('.submit3')
let inputField = document.querySelector('.inputs');
let inputField2 = document.querySelector('.inputs2');
let inputField3 = document.querySelector('.inputs3');
const outputContainer = document.querySelector('.output-container');
const outputContainer2 = document.querySelector('.output-container2');
const outputContainer3 = document.querySelector('.output-container3')
// const box = document.querySelector('.box');

let brows = 5;
let bcolumns = 5;

function boxes(){
    let 
}

// Size of 3
// Number of lines height
let height = 3;
// Number of character width in each line
let width = (2 * height) - 1;
let pixel = 40;

const printX = (b) => {
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

const printY = (b) => {
    
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
            if (j == counter || j == height - counter  && i <= parseInt(height / 2)){
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

const printZ = (b) => {
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
    let inputFields = document.querySelector('.inputs').value.toUpperCase().split('');
    console.log(inputFields);
    for(let i = 0; i < inputFields.length; i++){
        
        if(inputFields[i] === 'X'){
            const divBox = document.createElement('div');
            divBox.classList.add('box');
            outputContainer.append(divBox)
            p.push(inputFields[i])
            console.log(p)
            console.log(p.length)
            printX(divBox);
    
        }else if(inputFields[i] === 'Y'){
            const divBox = document.createElement('div');
            divBox.classList.add('box');
            outputContainer.append(divBox)
            p.push(inputFields[i])
            console.log(p)
            console.log(p.length)
            printY(divBox);
           
        }else if(inputFields[i] === 'Z'){
            const divBox = document.createElement('div');
            divBox.classList.add('box');
            outputContainer.append(divBox)
            p.push(inputFields[i])
            console.log(p)
            console.log(p.length)
            printZ(divBox);
        }
        // return inputFields;
    }
}

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
let heighthor = 5;
// Number of character width in each line
let widthHor = (2 * heighthor) - 1;
let pixelHor = 21;

const printXhor = (b) => {
    const box = document.querySelector('.box');
    let i, j, counter = 0;
    for (let i = 0; i < heighthor; i++) {
        console.log(i)
     for (let j = 0; j < heighthor; j++) {
        let newI = i * pixelHor;
        let newJ = j * pixelHor;
        
        let div = document.createElement('div');
        // div.style.border = '1px solid greenyellow';
        div.style.top = newI + 'px';
        div.style.left = newJ + 'px';
        
        div.style.fontFamily = 'inherit';
        div.style.width = '24px';
        div.style.height = '24px';
        div.style.textAlign = 'center';
        div.style.position = 'absolute';
        // box.append(div)
         if (i == j || i + j == heighthor - 1 ){
    // document.write("o");
            div.innerHTML = 'o';
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

const printYhor = (b) => {
    
    let i, j, counter = 0;
    for (i = 0; i < heighthor; i++) {
        for (j = 0; j < heighthor; j++) {
            let newI = i * pixelHor;
            let newJ = j * pixelHor;
            
            let div = document.createElement('div');
            div.style.border = '1px solid greenyellow';
            div.style.top = newI + 'px';
            div.style.left = newJ + 'px';
            div.style.margin = '4px';
            div.style.fontFamily = 'inherit';
            div.style.width = '24px';
            div.style.height = '24px';
            div.style.textAlign = 'center';
            div.style.position = 'absolute';
            if (j == counter || j == heighthor - counter  && i <= parseInt(heighthor / 2)){
                div.innerHTML = 'o';
                console.log('o');
                b.append(div);
                // box.append(div);
            }else{
                div.innerHTML = ' ';
                b.append(div);
            }
        }
        if (i < parseInt(heighthor / 2))
            counter++;
    }
}

const printZhor = (b) => {
    let i, j, counter = heighthor - 1;
    for (i = 0; i < heighthor; i++) {
        for (j = 0; j < heighthor; j++) {
            let newI = i * pixelHor;
            let newJ = j * pixelHor;
            
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
       
        if (i == 0 || i == heighthor - 1 || j == counter){
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
buttonSubmit2.addEventListener('click', getInputHorizontal);


function getInputHorizontal(){
    console.log('horizontal')
    let p = []
    let inputFields2 = document.querySelector('.inputs2').value.toUpperCase().split('');
    console.log(inputFields2);
    for(let i = 0; i < inputFields2.length; i++){
        
        if(inputFields2[i] === 'X'){
            const divBox2 = document.createElement('div');
            divBox2.classList.add('box');
            outputContainer2.append(divBox2)
            p.push(inputFields2[i])
            console.log(p)
            console.log(p.length)
            printXhor(divBox2);
    
        }else if(inputFields2[i] === 'Y'){
            const divBox2 = document.createElement('div');
            divBox2.classList.add('box');
            outputContainer2.append(divBox2)
            p.push(inputFields2[i])
            console.log(p)
            console.log(p.length)
            printYhor(divBox2);
           
        }else if(inputFields2[i] === 'Z'){
            const divBox2 = document.createElement('div');
            divBox2.classList.add('box');
            outputContainer2.append(divBox2)
            p.push(inputFields2[i])
            console.log(p)
            console.log(p.length)
            printZhor(divBox2);
        }
        // return inputFields;
    }
}