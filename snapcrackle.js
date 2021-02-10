function snapCrackle(maxValue) {
    let str = ''
    for (let i = 1; i <= maxValue; i++) {
        if (i % 2 !== 0 && i % 5 === 0) {
            str = str + 'SnapCrackle, '
        } else if (i % 2 !== 0) {
            str = str + 'Snap, '
        } else if (i % 5 === 0) {
            str = str + 'Crackle, '
        } else {
            str = str + i + ', '
        }
    }
    return str
}

function primo(x) {
    if (x < 2) {
        return false
    } else if (x > 2 && x % 2 === 0) {
        return false
    } else if (x !== 3 && x % 3 === 0) {
        return false
    } else if (x !== 5 && x % 5 === 0) {
        return false
    } else if (x !== 7 && x % 7 === 0) {
        return false
    }
    return true
}

function snapCracklePrime(maxValue) {
    let str = ''
    for (let i = 1; i <= maxValue; i++) {
        if (i % 2 === 0) {
            if (primo(i)) {
                str = str + 'Prime, '
            } else if (i % 5 === 0) {
                str = str + 'Crackle, '
            } else {
                str = str + i.toString() + ', '
            }
        } else {
            if (primo(i)) {
                if (i % 5 === 0) {
                   str = str + 'SnapCracklePrime, ' 
                } else {
                    str = str + ' SnapPrime, '
                }
            } else {
                if (i % 5 === 0){
                    str = str + 'SnapCrackle, '
                }else {
                    str = str + 'Snap, '
                }
            }
        }
    }
    return str
}

// console.log(snapCrackle(12))
console.log(snapCracklePrime(15))
// Snap, Prime, SnapPrime, 4, SnapCracklePrime, 6, SnapPrime, 8, Snap, Crackle, SnapPrime, 12, SnapPrime, 14, SnapCrackle,

