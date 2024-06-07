var notas = []
var table = document.getElementById("table")

window.onload = () => {
    createrow0()
}

document.getElementById("form").onsubmit = (evt) => {
    evt.preventDefault()
    var dataipnt = {
        nome: document.getElementById("nome").value,
        matricula: document.getElementById("matricula").value,
        n_1: Number(document.getElementById("n_1").value),
        n_2: Number(document.getElementById("n_2").value),
        media: null,
        situacao: null,
    }
    if(!table) return
    var tr = table.insertRow(notas.length + 1);
    var i = 0;
    for(var d in dataipnt) {
        var dd = dataipnt[d]
        if(d == "media" || d == "situacao") continue;
        var el = tr.insertCell(i)
        el.innerHTML = dd
        i++
    }
    var el = tr.insertCell(i)
    dataipnt.media = Number(((dataipnt.n_1 + dataipnt.n_2) / 2).toFixed(2))
    console.log(dataipnt)
    el.innerHTML = dataipnt.media
    i++
    var el2 = tr.insertCell(i)
    el2.innerHTML = dataipnt.media > 5 ? "<b style='color: green'>Aprovado</b>" : "<b style='color: red'>Reprovado</b>"
    i++
    notas.push(dataipnt)
}

document.getElementById("clear").onclick = async (evt) => {
    evt.preventDefault()
    table.innerHTML = "";
    createrow0()
    notas = []
    Swal.fire({
        title: "Notas limpas!!",
        icon: "success"
    });
    return
}

function createrow0() {
    var tr = table.insertRow(0);
    var el = tr.insertCell(0)
    el.innerHTML = "Nome"
    el = tr.insertCell(1)
    el.innerHTML = "Matricula"
    el = tr.insertCell(2)
    el.innerHTML = "Nota 1"
    el = tr.insertCell(3)
    el.innerHTML = "Nota 2"
    el = tr.insertCell(4)
    el.innerHTML = "Media"
    el = tr.insertCell(5)
    el.innerHTML = "Situacao"
}