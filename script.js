const text = document.querySelector('#text');
const words = document.querySelector('#words');
const letters = document.querySelector('#letters');
const lines = document.querySelector('#lines');

text.addEventListener('input', (e)=>{
    const ourText = e.target.value;

    const wordCount = ((ourText.trim()).split(/\s+/)).length;
    const lineCount = (ourText.match(/\n/g ))?(ourText.match(/\n/g )).length + 1:0;
    const filtered = ((ourText.trim()).split('')).filter(e=>{
        return (e != ' ' && e!= '\n');
        
    })

    words.innerText = wordCount;
    lines.innerText = lineCount;
    letters.innerText = filtered.length;

})


function clearInput(){
    text.value = '';
    words.innerText = 0;
    letters.innerText = 0;
    lines.innerText = 0;
}