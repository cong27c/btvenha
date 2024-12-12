//Bài 2
const multiplicationTable = function() {
    for (let i = 2; i <= 10; ++i) {
        document.write(`bảng nhân ${i}<br>`);
        for (let j = 1; j <= 10; ++j) {
        document.write(`${i} x ${j} = ${i * j}<br>`);
        }
    }
}
multiplicationTable()