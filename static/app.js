var act = data;
const cont = document.querySelector('.search')
var search=[];
const prompt='in';
const container = document.querySelector('.container')
let darkBool = false;

const info = document.querySelector('.info')




function createCard(c){
    let details=false;
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
    if(details){
        const nativeName = document.createElement('span');
        nativeName.innerHTML = `<b>Native Name: ${c.nativeName}</b>`;
        div.append(nativeName);
    }
    div.appendChild(pop);
    div.appendChild(region);
    
    div.classList.add('card');
    if(darkBool){
        div.classList.toggle('dark-input')
    }
    
   
    div.appendChild(capital);
    div.addEventListener('click',(e)=>{
        window.location.href = document.URL + '/details/' + c
    })
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




