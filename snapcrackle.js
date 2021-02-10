function snapCrackle(maxValue) {
    let str = ''
    for (let i = 1; i <= maxValue; i++) {
        debugger
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

console.log(snapCrackle(12))