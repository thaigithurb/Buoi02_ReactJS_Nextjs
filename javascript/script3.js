const checkDogs = (dogsJulia, dogsKate) => {
    const copyDogsJulia = dogsJulia.slice(1, dogsJulia.length - 2);
    bothDogsJuliaAndKate = [...copyDogsJulia, ...dogsKate];
    for (let i = 0; i < bothDogsJuliaAndKate.length; i++) {
        if (bothDogsJuliaAndKate[i] < 3) {
            console.log(`Dog number ${i + 1} is still a puppy`);
        }
        else {
            console.log(`Dog number ${i + 1} is an adult, and is ${bothDogsJuliaAndKate[i]} years old`);
        }
    }
}

dogsJulia = [3, 5, 2, 12, 7];
dogsKate = [4, 1, 15, 8, 3];

checkDogs(dogsJulia, dogsKate);