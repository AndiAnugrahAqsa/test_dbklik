const dineInOrders = []
const takeAwayOrders = []
const servedOrders=[]
const prompt = require('prompt-sync')();

for (let i = 0; i < 10; i++) {
    console.log(`PESANAN KE-${i+1}`);
    console.log('Masukkan jenis pesanan:\n- "1" untuk pesanan makan di tempat\n- "2" untuk pesanan ambil\n- Selain "1" dan "2" untuk close order');
    const input = prompt('INPUT: ');
    let orderNumber;
    switch (input) {
        case "1":
            orderNumber = prompt('Masukkan nomor pesanan ambil: ');
            dineInOrders.push(Number(orderNumber))
            break;
        case "2": 
            orderNumber = prompt('Masukkan nomor pesanan makan di tempat: ');
            takeAwayOrders.push(Number(orderNumber))
            break
        default:
            return;
    }
    servedOrders.push(Number(orderNumber))
    console.log("-----------------------------------------------");
    console.log("Pesanan ambil:", takeAwayOrders);
    console.log("Pesanan makan di tempat:", dineInOrders);
    console.log("Pesanan yang dilayani:", servedOrders);
    console.log("-----------------------------------------------");
    console.log("###########################################################################\n");
}