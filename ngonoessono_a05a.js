/*Gertrude Vanessa Ngono Essono
ngonoessono_a05a.js
INFO2124
Thoendel
01/172020*/

const todo = [];
todo[0]= 'cleaning';
todo[1]= 'laundry';
todo[2]= 'shopping';
todo[3]= 'volunteering';
console.log(todo);
todo.unshift('painting');
console.log(todo);

todo.reverse();
console.log(todo);

todo.sort();
console.log(todo);

todo.includes('x');

const grocery = new Array();
grocery[0]= 'apples';
grocery[1]= 'mangoes';
grocery[2]= 'carrots';
grocery[3]= 'wine';
grocery[4]= 'chicken';
grocery[5]= 'lemonade';
console.log(grocery);

/*there are two ways to remove the first item:
grocery.shift() however, we are going to have 5 items in the list.
inserting 2 others items in the middle will be difficult because the middle of 5 is 2.5.

we can also use delete(), which is our best option as it will delete the item bu the space will still be there. we still have 6 and it is easy to insert two items in the middle.8*/

delete grocery[0];
console.log(grocery);

grocery.splice(3,0, 'oranges');
grocery.splice(4,0, 'lemon');
console.log(grocery);
