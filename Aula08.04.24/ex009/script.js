for(i=0; i<=100; i++){
    if(i % 3 === 0 && i % 5 === 1){
        console.log("fizz")
    }else if(i % 5 === 0 && i % 3 === 1){
        console.log("buzz")
    }else if(i%3 === 0 && i%5 === 0){
        console.log("fizzbuzz")
    } else {
        console.log(i)
    }
}
