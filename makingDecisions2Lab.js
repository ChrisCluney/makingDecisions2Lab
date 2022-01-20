let arr = [10, 20, 30, 40, 50, 60]


let firstItem = 0

let lastItemRemoved = arr.pop();
console.log(lastItemRemoved)

console.log(arr)

// var family = ['Tyler', 'Jordan', 'Ryan', 'Alice', 'Ireland'];

// for (let i = 0; i < family.length; i++){
//     console.log(family[i])
// }

// var nums = [1,2,3,6,22,98,45,23,22,12];
// let evensArr = []

// for (let i = 0; i < nums.length; i++){
//     if (nums[i] % 2 === 0){
//     evensArr.push(nums[i]);
// }

// }
// console.log(evensArr);

// var score = 74

// if(score >= 90){
//     console.log(`A`)
// }else if (score >= 80 ){
//     console.log(`B`)
// }else if (score >= 70){
//     console.log(`C`)
// }else if (score >= 60){
//     console.log(`D`)
// }else {console.log(F)
// }

// var myFavoriteNumbers = [4,8,12,16,20,24];

// let someNum = myFavoriteNumbers[4];
// // console.log(someNum);

// if(myFavoriteNumbers.length < 7) {
// console.log(`There are not enough elemnts in this array`);
// } else {
//         someNum = myFavoriteNumbers[6];
//         console.log(someNum)
// }

// var listOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12];

// for(let i = 0; i < listOfNumbers.length; i++){
//     if(listOfNumbers[i] % 3 === 0)
//     console.log(`${listOfNumbers[i]} is divisible by 3`)

// }

// var letters = ['A', 'B', 'C', 'D', 'E'];

// for(let i = letters.length - 1; i >= 0; i--){
//     console.log(letters[i])
// }


// let letterGrade = 'B'


// switch(letterGrade){
//     case `A`:
//         console.log(`The student is doing excellently`);
//         break;
        
//         case `B`:
//             console.log(`The student is doing well`);
//             break;
//             case `C`:
//             console.log(`The student is doing alright.`);
//             break;
//             case `D`:
//             console.log(`The student is not doing very well`);
//             break;
//             case `F`:
//             console.log(`The student is failing`);
//             break;
//             default:
//                 console.log(`Not an eligible grade`)
// }

// for(let i = 1; i <= 100; i++){}
//     if(i % 3 === 0){
//         console.log(`Dev`)
//     } else if(i % 5 === 0 ){
//         console.log(`mountain`)
//     } else if(i % 3 && 5 === 0){
//             console.log(`Devmountain`)
//     } else {
//         console.log(i)
//     }

            
        
// }


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('Devmountain');
    } else if (i % 5 === 0) {
      console.log('mountain');
    } else if (i % 3 === 0) {
      console.log('Dev');
    } else {
      console.log(i);
    }
  
  }