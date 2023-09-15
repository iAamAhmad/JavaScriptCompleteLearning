//let and const are block scoped
{
    let a = 2;
    const b = 3;
    var c = 4;
    console.log(a); // 2
}

// console.log(a + b);
// ReferenceError: a is not defined
//because a and b are block scoped
//now
console.log(c); // 4
//because c is function scoped
// that is why we can access it outside the block