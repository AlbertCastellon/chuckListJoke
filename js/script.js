const btnObtener = document.getElementById('fetchJoke');
const jokeList = document.getElementById('jokeList');
const clearBtn = document.getElementById('clear')
const eliminarOne = document.getElementById('eliminarOne')
const printChistes = () => {
    for(let i = 0; i < localStorage.length; i++){
        const chiste = document.createElement('li');
        chiste.innerHTML = localStorage[i]
        
        
        const btnEliminar = document.createElement('button')
        btnEliminar.class = 'btnEliminar'
        btnEliminar.id = localStorage.key(i)
        btnEliminar.innerHTML = 'eliminar'
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox'
        
        chiste.appendChild(btnEliminar)
        chiste.appendChild(checkbox)
        jokeList.appendChild(chiste)
    }
}

btnObtener.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random').then((response) => {
        
        return response.json();
  
    }).then((data) => {
        localStorage.setItem(localStorage.length, data.value)
        const chiste = document.createElement('li');
        chiste.innerHTML = data.value
        const btnEliminar = document.createElement('button')
        btnEliminar.class = 'btnEliminar'
        btnEliminar.id = localStorage.length
        btnEliminar.innerHTML = 'eliminar'
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox'
        chiste.appendChild(btnEliminar)
        chiste.appendChild(checkbox)
        jokeList.appendChild(chiste)
        
        
    })
})

/*const btnEliminar = document.querySelectorAll('.btnEliminar')

btnEliminar.addEventListener('click', () => {
    localStorage.removeItem(btnEliminar.id -1)
})
*/
printChistes()

clearBtn.addEventListener('click', () => {
    localStorage.clear()
})

