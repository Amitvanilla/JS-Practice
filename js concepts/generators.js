function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const generator = idGenerator();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3

console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3