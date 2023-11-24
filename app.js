var act = data;
const cont = document.querySelector('.search')
var search=[];
const prompt='in';
const container = document.querySelector('.container')
let darkBool = false;

function createCard(c){
    const link = document.createElement('a');
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

    link.appendChild(img);
    link.appendChild(name);
    link.appendChild(pop);
    link.appendChild(region);
    link.appendChild(capital);
    link.classList.add('card');
    if(darkBool){
        link.classList.toggle('dark-input')
    }
    div.appendChild(link);
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
        // console.clear();
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

//toggling dark mode tasks

const dark = document.querySelector('.dark-mode')
const header = document.querySelector('header')
const button = document.querySelector('header button')
const input = document.querySelector('.search input')
const select = document.querySelector('select')

dark.addEventListener('click',(e)=>{
    document.body.classList.toggle('dark');
   header.classList.toggle('dark-input');
   button.classList.toggle('dark-input');
   input.classList.toggle('dark-input');
   select.classList.toggle('dark-input');
   for(let card of container.children){
    card.classList.toggle('dark-input');

   }
   if(darkBool){
    darkBool = false;
   }else{
    darkBool=true;
   }
})



// card click to details page

const details = document.querySelector('details')
const home = document.querySelector('home')


for(let card of container.children){
    card.addEventListener('onclick',(e)=>{
        e.preventDefault();
        console.log(e.type)
    })
}