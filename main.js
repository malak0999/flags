
let count = document.getElementById('count')
let inp = document.getElementById('inp')
inp.addEventListener('input', ()=>{
    
    let val = inp.value.toLowerCase()
    
    const name = document.querySelectorAll('.kolya')
    name.forEach((item)=>{
        if(item.lastElementChild.textContent.toLowerCase().includes(val)){
            item.classList.remove('hidden')
        }else{
            item.classList.add('hidden')
        }
    })
    
})
fetch('https://restcountries.com/v3.1/all?fields=name,flags').then((data)=>{
    return data.json()
}).then((item)=>{
    item.forEach((consts)=>{

        count.innerHTML += 

         `<ul class='kolya'>
                <li><img src="${consts.flags.png}" alt=""></li>
                <li>${consts.name.common}</li>
                </ul>`
    })
})



