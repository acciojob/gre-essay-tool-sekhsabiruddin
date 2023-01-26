//your code here
let essay = document.getElementById('evaluatedText');


essay.addEventListener('keyup', ()=>{
    let count = document.getElementById('wordCount');
    let text = essay.value;
    let length = wordCounter(text);

    count.innerHTML = length;
})

function wordCounter(line){
    let space = 1;
    let count = 0;
    for(let i=0; i<line.length; i++ ){
        let c = line.charAt(i);
        console.log(space);
        if(space == 0 && c == " "){
            count++;
            space++;
        }else if(c != " "){
            space = 0;
        }
        if(i==line.length-1 && c != " "){
            count++;
        }
    }

    return count;
}

