var act = data;
const cont = document.querySelector('.search')
var search=[];
const prompt='in';
const container = document.querySelector('.container')
function createCard(c){
    
    const div = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');
    const pop = document.createElement('span');
    const region = document.createElement('span');
    const capital = document.createElement('span');
    name.innerHTML = `<b>${c.name}</b>`;
    name.classList.add('name');
    img.src=c.flags.svg;
    pop.innerHTML = `<b>Population:</b> ${c.population}`;
    region.innerHTML = `<b>Region:</b> ${c.region}`;
    capital.innerHTML = `<b>Capital:</b> ${c.capital}`;

    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(pop);
    div.appendChild(region);
    div.appendChild(capital);
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
        container.innerHTML =``;
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

