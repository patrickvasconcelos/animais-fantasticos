export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      const valorBitcoin = document.querySelector(target);
      valorBitcoin.innerText = (1000 / bitcoin.BRL.sell)
        .toFixed(4)
        .replace('.', ',');
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
