const btn = document.querySelector("button")

btn.addEventListener("click", ()=> {
    const request = new XMLHttpRequest()                                           //создание запроса
    request.open("GET", "data.json.")                                   //определение метода запроса и пути
    request.setRequestHeader("content-type","application/json")       //добавляем тип данных в заголовки
    request.send()                                                              //ожидание запроса
    request.addEventListener("load", ()=>{                         //ожидание загрузки
        const data = JSON.parse(request.response)
        console.log(data)
        document.querySelector(".name").innerHTML = data.name
        document.querySelector(".age").innerHTML = data.age
    })
})