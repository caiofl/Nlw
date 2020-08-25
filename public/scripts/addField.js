//Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', cloneField)

//Executar uma açao
function cloneField() {
    // Duplicar os campos, Que campos??
    const newFieldcontainer = document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os campos, que campo ?
    const fields = newFieldcontainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""
    })
 

    // Colocar na pagina, onde ?
    document.querySelector('#schedule-items').appendChild(newFieldcontainer)
}