const flower1 = document.querySelector('.cart');
fetch('http://localhost:3000/flower')
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        flower1.innerHTML+=`
        <div class="cart1">
        <div class="image">
            <img class="image"
                src="${element.image}" alt="">
        </div>
        <div class="text3">
            <h3>${element.name}</h3>
            <p class="text4">${element.category}</p>
        </div>
    </div>
        
        `
    });
})
