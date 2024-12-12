//BÀI 1 

const isPerFectSquare = function() {
    let n = parseInt(prompt("Nhập số vào đây: "))
    if (isNaN(n) || n <= 0)  return alert("Vui lòng nhập lại một số nguyên dương")
        alert(`Các số chính phương từ 1 đến ${n} là: `)
    for(let i = 1; i  <= n; i++) {
        if(i * i <= n) {
            alert(i * i)
        }
    }
}
isPerFectSquare()
