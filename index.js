//----- NÓS ------

let saveEl = document.getElementById("save-el-1")
let countEl = document.getElementById("count-el-1")
let count = 0

function increment() {
    count += 1
    saveEl.textContent = '+' + count
}

function save() {
    let atual = Number(countEl.textContent) || 0   
    let novoTotal = atual + count   

    countEl.textContent = novoTotal                
    saveEl.textContent = ''                        
    count = 0                           

    verificarFimDeJogo(novoTotal, "Nós")
}

function remove() {
    let atual = Number(countEl.textContent) || 0
    if (atual > 0){
        countEl.textContent = atual - 1
    }
}


// ----- ELES ------

let saveEl2 = document.getElementById("save-el-2")
let countEl2 = document.getElementById("count-el-2")
let count2 = 0


function increment2() {
    count2 += 1
    saveEl2.textContent = '+' + count2
}
function save2() {
    let atual2 = Number(countEl2.textContent) || 0
    let novoTotal2 = atual2 + count2

    countEl2.textContent = novoTotal2
    saveEl2.textContent = ''
    count2 = 0

    verificarFimDeJogo(novoTotal2, "Eles")
}

function remove2() {
    let atual2 = Number(countEl2.textContent) || 0
    if (atual2 > 0){
        countEl2.textContent = atual2 - 1
    }
}


// ------ VVERIFICAÇÃO ------

function verificarFimDeJogo(total, time){
    if (total >= 12){
        alert(`Fim de jogo! ${time} venceram`)
        count = 0
        count2 = 0
        countEl.textContent = 0
        countEl2.textContent = 0
        saveEl.textContent = ''
        saveEl2.textContent = ''
    }

}


    