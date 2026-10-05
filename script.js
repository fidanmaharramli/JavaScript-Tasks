let n1 =21;
if (n1 % 3 === 0 && n1 %7 === 0) {
    console.log("1. Bolunur");
} else {
    console.log("1. Bolunmur");
}

let n2 = 3;
let m2 = 10;
let countOdd = 0;

for (let i = n2; i <= m2; i++) {
    if (i % 2 !== 0) {
        countOdd++;
    }
}
console.log("2. Tek ededlerin sayi:", countOdd);
let n3 = 3;
let m3 = 10;
let sumEven = 0;
for (let i = n3; i <= m3; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    }
}
console.log("3. Cut ededlerin cemi:", sumEven);
let n4 = 17;
let isPrime = true;

if (n4 < 2) {
    isPrime = false;
} else {
    for (let i = 2; i < n4; i++) {
        if (n4 % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log("4. Sade ededdi");
} else {
    console.log("4. Murekkeb ededdi");
}
let numbers5 = [2, 5, 8, 10, 13];
let sum5 = 0;
for (let i = 0; i < numbers5.length; i++) {
    if (numbers5[i] % 2 === 0) {
        sum5 += numbers5[i];
    }
}

console.log("5. Cut ededlerin cemi:", sum5);
let numbers6 = [12, 5, 25, 3, 18];
let min = numbers6[0];
let max = numbers6[0];

for (let i = 1; i < numbers6.length; i++) {
    if (numbers6[i] < min) {
        min = numbers6[i];
    }

    if (numbers6[i] > max) {
        max = numbers6[i];
    }
}
console.log("6. En kiciy:", min);
console.log("6. En boyuy:", max);
let numbers7 = [5, -3, 0, 8, -2, 0, 10];

let positive = 0;
let negative = 0;
let zero = 0;
for (let i = 0; i < numbers7.length; i++) {
    if (numbers7[i] > 0) {
        positive++;
    } else if (numbers7[i] < 0) {
        negative++;
    } else {
        zero++;
    }
}

console.log("7. Musbet:", positive);
console.log("7. Menfi:", negative);
console.log("7. 0:", zero);

let numbers8 = [2, 5, 2, 8, 2, 10, 5];
let searchNumber = 2;
let count8 = 0;

for (let i = 0; i < numbers8.length; i++) {
    if (numbers8[i] === searchNumber) {
        count8++;
    }
}
console.log("8. Tekrarlanma sayi:", count8);

let numbers9 = [1, 2, 3, 4, 5];
let reversed = [];
for (let i = numbers9.length - 1; i >= 0; i--) {
    reversed.push(numbers9[i]);
}
console.log("9. Tersine:", reversed);
let n10 = 12345;
let temp10 = n10;
let sum10 = 0;

while (temp10 > 0) {
    sum10 += temp10 % 10;
    temp10 = Math.floor(temp10 / 10);
}
console.log("10. Reqemlerin cemi:", sum10);
let n11 = 1221;
let original11 = n11;
let reversed11 = 0;

while (n11 > 0) {
    let digit = n11 % 10;
    reversed11 = reversed11 * 10 + digit;
    n11 = Math.floor(n11 / 10);
}

if (original11 === reversed11) {
    console.log("11. Palindromdu");
} else {
    console.log("11. Palindrom deil");
}
let student = {
    name: "Fidas",
    age: 20,
    group: "PA203",
    score: 85
};
console.log("12. Student:", student);
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Group:", student.group);
console.log("Score:", student.score);
if (student.score >= 51) {
    console.log("13. Passed");
} else {
    console.log("13. Failed");
}

let students =[
    {
        name: "Fidan",
        age: 20,
        group: "PA203",
        score: 85
    },
    {
        name: "Ali",
        age: 21,
        group: "PA203",
        score: 75
    },
    {
        name: "Leyla",
        age: 20,
        group: "PA203",
        score: 92
    }
];
console.log("14. Score-u 80 den yuxari olan studentler:");
for (let i = 0; i < students.length; i++) {
    if (students[i].score > 80) {
        console.log(students[i]);
    }
}
let products= [
    {
        name: "Laptop",
        price: 1500
    },
    {
        name: "Mouse",
        price:50
    },
    {
        name: "Keyboard",
        price:100
    },
    {
        name: "Monitor",
        price: 400
    }
];
let expensiveProduct = products[0];
for (let i = 1; i < products.length; i++) {
    if (products[i].price > expensiveProduct.price) {
        expensiveProduct = products[i];
    }
}
console.log("15. En bahali mehsul:", expensiveProduct);