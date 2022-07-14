let n1 = ''
let n2 = ''
let op = ''
function clickMe(key) {
    let result
    if (key == 1 || key == 2 || key == 3 || key == 4 || key == 5
        || key == 6 || key == 7 || key == 8 || key == 9 || key == 0 || key == '.') {
            if (op == '') {
                n1 = n1 + key
            } else {
                n2 = n2 + key
            }
    }
    if (key == 'AC') {
        n1 = ''
        n2 = ''
    }
    if (key == '-' || key == '+' || key == '*' || key == '/' || key == '%') {
        op = key
    }
    if (key == '=') {
        if (op == '+') {
            result = parseFloat(n1) + parseFloat(n2)
        }
        if (op == '%') {
            result = parseFloat(n1) % parseFloat(n2)
        }
        if (op == '-') {
            result = parseFloat(n1) - parseFloat(n2)
        }
        if (op == '*') {
            result = parseFloat(n1) * parseFloat(n2)
        }
        if (op == '/') {
           if (n2 == 0){
              alert('На ноль делить нельзя')
           }
           else{result = parseFloat(n1) / parseFloat(n2)
               }
        }    
        document.querySelector('#value').value = result
    } else {
        if (op == '') {
            document.querySelector('#value').value = n1
        } else {
            document.querySelector('#value').value = n2
        }
    }
}
