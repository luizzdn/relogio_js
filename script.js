function chamaRelogio() {
    const spanRelogio = document.querySelector("#relogio") /* Selecionando o span com id Relogio e guardando na variavel spanRelogio para manipular */
    const date = new Date()
    const horas = date.getHours().toString().padStart(2, "0")
    const minutos = date.getMinutes().toString().padStart(2, "0")
    const segundos = date.getSeconds().toString().padStart(2, "0")

    spanRelogio.innerHTML = `${horas}:${minutos}:${segundos}` /* Colocando dentro do html a variavel date */
}
chamaRelogio()

setInterval(chamaRelogio, 1000)

