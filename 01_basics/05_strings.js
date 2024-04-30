const fName = "pankaj";
const lName = "chouhan";
const city = "phulera"
// const fullName = (fName + " " + lName);
// console.log(fullName);

//console.log(`hi guys, my first name is ${fName.toLocaleUpperCase()} and my last name is ${lName.toLocaleUpperCase()} and i am from ${city.toLocaleUpperCase()}`)

// console.log(name)
// console.log(name[7])
// console.log(name.__proto__);
// console.log(name.toUpperCase());
// console.log(name.length);
// console.log(name.charAt(2));
// console.log(name.indexOf("a", "k"))

// console.log(name.substring(0,4))

// console.log(name)

// const anotherName = name.slice(6 , 4);
// console.log(anotherName)

// const anotherName = name.slice(11 , 15);
// console.log(anotherName)
// const newName = name.substring(-15,4);
//  console.log(newName)












// const name = new String("hitesh-hc");
// const anotherName = name.slice(-8,0)
// console.log(anotherName)

// const myName = "           Pankaj Chouhan                 ";
// const sliceName = myName.slice(0);
// // console.log(sliceName)
// console.log(myName);

// const trimmedMyName = myName.trim()
// console.log(trimmedMyName);

// const myName = "Pankaj Chouhan";
// const subStr = myName.substring(5,5);          //If IndexStart = IndexEnd, substring() Returns an Empty String.
// const subStr1 = myName.substring(5,0);         //If IndexStart > IndexEnd, arguments were swapped
// const subStr2 = myName.substring(13,9);        //'''''''''''''''''''''''''''''''''''''''''''''''' 
// const subStr3 = myName.substring(6,0);         //''''''''''''''''''''''''''''''''''''''''''''''''
// const subStr4 = myName.substring(-8 , 6)    // If IndexStart = Negative Value , Then IndexStart = 0 Considered


// console.log(subStr);
// console.log(subStr1);
// console.log(subStr2);
// console.log(subStr3);
// console.log(subStr4);


const url = "https://prayshant.com/pankaj%20chouhan";
const replaced = url.replace("%20" , "-");
console.log(replaced);

const isIncluded = url.includes("pankaj");
console.log(isIncluded);

const isIncluded2 = url.includes("bruce");
console.log(isIncluded2);
