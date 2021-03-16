const cep = document.querySelector("#cep")
    /*criando evento*/

const showData = (result) => {
    for (const campo in result) {
        /*Para eliminar campos que vem a mais da api original*/
        if (document.querySelector("#" + campo)) {
            /*Alimentar dinamicamente o formmulário*/
            if (document.querySelector("#" + campo).value = result[campo])
                console.log(campo)
        }
    }
}



cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    /*Usamos o tamplat string = crase, e tornamos dinamico o cep com ${SEARC}*/
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then(response => {
            response.json()
                /*chamando pra mostrar no log*/
                .then(data => showData(data))
        })
        .catch(e => console.log('Deu erro: ' + e, message))
})