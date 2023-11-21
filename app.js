var act = data;
const cont = document.querySelector('.search')
var search=[];
const prompt='in';
const container = document.querySelector('.container')
function createCard(c){
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src=c.flags.svg
    div.appendChild(img);
    div.classList.add('card');
    container.appendChild(div);
}



const filter = document.getElementById('region');
const promptInput =document.getElementById('country');

//adding the country names to the search list
for(let i=0;i<act.length;i++){
    search.push(act[i].name)
}


['input','change'].forEach(elem=>{
    cont.addEventListener(elem,(e)=>{
        console.clear();
        for(let s of search){
            if(s.toLowerCase().indexOf(promptInput.value) == 0){
                var d = act[search.indexOf(s)]
                if(d.region===filter.value){
                    
                    createCard(d);
                }else if(filter.value==='all'){
                    
                    createCard(d);
                }
            }
        }
        
    
    });
});

