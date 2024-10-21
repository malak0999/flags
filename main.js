
let count = document.getElementById('count')
let inp = document.getElementById('inp')

// function data(calback){
//     const getData = new XMLHttpRequest()
//     getData.addEventListener('readystatechange',()=>{
//         if(getData.readyState === 4 && getData.status === 200){
//         const jsonData = JSON.parse(getData.responseText)
       

      
//         calback(jsonData, undefined)
        
//     }else{
//         calback(undefined, 'xato')
//     }
// })

    
//     getData.open
//     getData.send()
// }


// data((data, err)=>{   
//     console.log(data);
     
    
// if(err) {
//     console.log(err);
    
// }else{
//     data.forEach((item)=>{

//         
//         })
// }
// })
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



