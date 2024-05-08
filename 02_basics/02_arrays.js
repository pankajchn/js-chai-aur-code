// const marvel_heros = ["ironman", "thor", "hulk"];
// const dc_heros = ["batman", "flash", "superman"];
// const indian_heros = ["shaktiman", "krrish", "hatim"];

// PUSH:-
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][0]);

// CONCATE:-
// const concated = marvel_heros.concat(dc_heros);
// console.log(concated);
// console.log(marvel_heros);

// SPREAD OPERATOR:-
// const allHeros = [...marvel_heros, ...dc_heros, ...indian_heros];
// console.log(allHeros);

//  const anotherArray = [
//   1,
//   2,
//   3,
//   [4, 5, 6],
//   7,
//   8,
//   [9, 10, [11, 12, 13, [14, 15]]],
// ];

// console.log(typeof(anotherArray));
// console.log(anotherArray);

// // const realAnotherArray = anotherArray.flat(1);
// // const realAnotherArray = anotherArray.flat(2)
// // const realAnotherArray = anotherArray.flat(3);
// // const realAnotherArray = anotherArray.flat(5)
// const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);



// console.log(Array.isArray("Pankaj"));
// console.log(Array.from("pankaj"));
// console.log(Array.from({name : "Pankaj"}));


// const score = 100;
// const score1 = 200;
// const score2 = 300;
// console.log(Array.of(score, score1, score2));



// const number = [1, 2, 3, 4, 5];
// console.log(number.length);
// number[2] = 39;
// console.log(number);
// number.length = 3;
// console.log(number);
// number.length = 8;
// console.log(number);

// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr.splice(2, 2, "a", "b");
// console.log(arr);

// const arr2 = [1, 2, 3, 4, 5];
// console.log(arr2.splice(-5,-3,"f","z"));
// console.log(arr2);

// const arr3 = [1, 2, 3, 4, 5];
// const slicedArr = arr3.slice(1,3);
// console.log(slicedArr);
// console.log(arr3);

// const arr3 = [1, 2, 3, 4, 5];
// const slicedArr = arr3.slice(-3)
// console.log(slicedArr);
// console.log(arr3);

// let fruits = ['apple', 'banana'];
// let orange = fruits.push("orange");
// console.log(orange);
// console.log(fruits);
// console.log("apple");

// let fruits = ['apple', 'banana', 'orange'];
// let popped = fruits.pop(2);
// console.log(popped);
// console.log(fruits);

// let numbers = [1, 2, 3];

// // unshift() adds an element to the beginning
// numbers.unshift(0);
// console.log(numbers); // Output: [0, 1, 2, 3]

// // shift() removes the first element
// let firstNumber = numbers.shift(15);
// console.log(numbers); // Output: [1, 2, 3]
// console.log(firstNumber); // Output: 0

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.reverse();
// console.log(numbers); // Output: [5, 4, 3, 2, 1]



// let numbers = [5, 2, 8, 1, 3];
// numbers.sort();
// console.log(numbers); // Output: [1, 2, 3, 5, 8]

// let names = ['Alice', 'David', 'Charlie', 'Bob', 'Anime', 'Lala', 'Kaka' , 'Dog'];
// names.sort();
// console.log(names); // Output: ['Alice', 'Bob', 'Charlie', 'David']



// const num = [1, 2, 3, 1, 4, 2]
// console.log(num.indexOf(1,1));
// console.log(num);
// console.log(num.indexOf(2,2));

// let fruits = ['apple', 'banana', 'orange', 'apple'];
// console.log(fruits.indexOf('papaya'));

// const num = [1, 2, 3, 1, 4, 2];
// console.log(num.lastIndexOf(2));
// console.log(num.lastIndexOf(-8));
// console.log(num.lastIndexOf(98));
// console.log(numbers.reverse());
// console.log(numbers);




// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.includes(5,6));

// let fruits = ['apple', 'banana', 'orange'];
// let joinedByStar = fruits.join(" * ");
// let joinedByDash = fruits.join("^")
// console.log(fruits);
// console.log(joinedByStar)
// console.log(joinedByDash)

// let nestedArray = [1, 2, [3, 4], [5, [6, 7]]];
// let flattenedArray = nestedArray.flat();
// console.log(flattenedArray);

// let deeplyFlattenedArray = nestedArray.flat(2);
// console.log(deeplyFlattenedArray);

// console.log(nestedArray);

// // We can use Infinity
// let useInfinite = nestedArray.flat(Infinity);
// console.log(useInfinite);

// let fruits = ['apple', 'banana', 'orange'];
// let fruitsValues = Array.from(fruits.values()); 
// console.log(fruitsValues);
// console.log(fruits);

// let fruits1 = ['apple', 'banana', 'orange'];
// let fruitsEntry = Array.from(fruits.entries()); 
// console.log(fruitsEntry);



// const marvel_heros = ["ironman", "thor", "hulk"];
// const dc_heros = ["batman", "flash", "superman"];
// const indian_heros = ["shaktiman", "krrish", "hatim"];

// // marvel_heros.push(dc_heros);
// // console.log(marvel_heros);

// const allHeros =  marvel_heros.concat(dc_heros, indian_heros)
// console.log(allHeros);







console.log(Array.isArray("Pankaj"));
console.log(Array.from("Pankaj"));
console.log(Array.from({ name : "Pankaj" }));