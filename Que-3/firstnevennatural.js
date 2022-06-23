// write a program to print first n even natural numbers ?

let n = parseInt(process.argv[2])

function even(num){
    for(let i=1;i<=num;i++){
        console.log(2*i)
    }
}

even(n)