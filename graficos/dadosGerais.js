const url="https://raw.githubusercontent.com/sandrogeneroso/2024-API-VIL-ES/refs/heads/main/api-VIL%C3%95ES-.JSON"

async function vizualizainfo(){
    const res=await fetch(url)
    const dados= await res.json()

    console.log(dados)
    const viloes=Object.keys(dados)
    const viloesMaisVotados=viloes[0]
    const quantidadedeVotos=Object.values(dados)[0]

    let paragrafo=document.createElement('p')
    paragrafo.classList.add('caixa-grafico_texto')
    
    paragrafo.innerHTML=`Nessa pesquisa buscouse compreender qual o vilao mais votado pelos jovens brasileiros que amao cinema. ${viloesMaisVotados} foi o vilao mais votado entre todos, com o total de ${quantidadedeVotos}  votos em ima pergunta que teve milhoes de participante` 

     let caixa= document.getElementById('caixa-grafico')
     caixa.appendChild(paragrafo)
}

vizualizainfo()