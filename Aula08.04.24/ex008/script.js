function fatorial(n){
    if (n < 0){
        console.log('0')
    } else if (n === 0 || n === 1){
        return 1
    } else {
        return n*fatorial(n-1)
    }
}
console.log(fatorial(5))

