export default function initFetchBitcoin() {
    fetch("https://blockchain.info/ticker")
        .then((response) => response.json())
        .then((bitcoin) => {
            const valorBitcoin = document.querySelector(".btc-preco");
            valorBitcoin.innerText = (1000 / bitcoin.BRL.sell)
                .toFixed(4)
                .replace(".", ",");
        })
        .catch((erro) => {
            console.log(Error(erro));
        });
}
