function prime(num){
    counter = 0;
    for (let i=1; i<=num; i++) {
        if ( num % i == 0) {
            counter++;
        }
    }
    if (counter === 2) {
          return true;
    }
    return false;   
}

let answer = prime(17);

if (answer == true) {
    console.log("prime");
}
else {
    console.log("Not Prime");
}
