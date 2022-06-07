 let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');


let stockPrice = document.getElementById('stock-price');

ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    stockPrice.innerText = stockObject.p;

   //  stockPrice.style.color = 'red'; 
   //  stockPrice.innerText = parseFloat(stockObject.p).toFixed(2);
}