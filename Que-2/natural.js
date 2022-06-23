// write a function to print first n natural numbers ?

let n = parseInt(process.argv[2])

let myfunction = (num) => {
    for(let i=1;i<=num;i++){
        console.log(i)
    }
}
myfunction(n)