debugger;

// 배열명.puch( 배열명.length + 1) === [ ...배열명, 배열명.length + 1]

const 배열명 = [1, 2, 3, 4];
배열명.push(5); //[1, 2, 3, 4, 5];
배열명.push(6); //[1, 2, 3, 4, 5, 6];

const arr2 = [...배열명]; // [1, 2, 3, 4, 5, 6];

const lenth = arr2.length; // 6

// ...배열명 : 1, 2, 3, 4, 5, 6
// 배열명.length + 1] : 7
const arr3 = [...배열명, 배열명.length + 1]; // [1, 2, 3, 4, 5, 6, 7];
