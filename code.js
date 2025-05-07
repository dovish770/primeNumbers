let print_prime_div = document.getElementById("print_prime_div")
let input2 = document.getElementById("input2")
let print = document.getElementById("print")
let answer2 = document.getElementById("answer2");



print.onclick = function () {

    answer2.innerHTML = "";
    const number = Number(input2.value);

    if (!Number.isInteger(number)) {
        answer.textContent = "please enter a valid integer number";
        return;
    }

    let existingUl = print_prime_div.querySelector("ul");
    if (existingUl) existingUl.remove();

    let primes = [];
    const ul = document.createElement("ul")
    print_prime_div.appendChild(ul)

    for (let i = 2; i <= number; i++) {
        if (isPrime(i)) {
            const li = document.createElement("li")
            li.textContent = i.toString()
            ul.appendChild(li);
            primes.push(i)
        }
    }

    if (primes.length < 1) {
        answer2.textContent = "no primes was found..."
        return;
    }
}




let input = document.getElementById("input1")
let calculate = document.getElementById("calculate")
let answer = document.getElementById("answer")
let time = document.getElementById("time")

calculate.onclick = function () {
    const start = performance.now();

    let number = Number(input.value);

    if (!Number.isInteger(number)) {
        answer.textContent = "please enter a valid integer number";
        return;
    }

    for (let i = 2; i < number / 2; i++) {
        if (isPrime(i) && number % i === 0) {
            let other = number / i;

            if (isPrime(other)) {
                const end = performance.now();
                time.textContent = `${(end - start).toFixed(2)} ms.`;
                answer.textContent = `${i}, ${other}`;
                return;
            }
        }
    }

    const end = performance.now();
    time.textContent = `${(end - start).toFixed(2)} ms.`;
    answer.textContent = "no prime numbers was found";
    return;
}




const isPrime = (number) => {
    if (number < 2 || number % 1 !== 0) return false;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}
