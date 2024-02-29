// task 1 hello world
// console.log("Hello, World!");


// let message = "Hello World!";
// console.log(message);


// //task 2 Personal Message
// let personName : string = "Eric";
// console.log(`Hello ${personName}, would you like to learn some python today?`);


// //task 3 Name Cases
// let personName : string = "Asmarah Syed";
// console.log('lowercase' , personName.toLowerCase());
// console.log('uppercase' , personName.toUpperCase());
// console.log('titlecase' , personName.replace(/\b\w/g,c=> c.toUpperCase()));


// task 4 Famous Quote
// console.log('Albert Einstein once said, "A person who never made a mistake never tried anything new."');


// task 5 famous quote 2
// let famous_person : string = "Albert Einstein";
// let message : string ='"A person who never made a mistake never tried anything new."';
// console.log(`${famous_person} once said, ${message}`);


// task 6 Stripping Names
// const personName : string ='      \n\t Asmarah Syed\t\n       ';
// console.log(personName);

// const personName2 : string = personName.trim();
// console.log(personName2);


// task 7 and 8 Number Eight
// console.log(6 + 2);
// console.log(10 - 2);
// console.log(4 * 2);
// console.log(16 / 2);


// //task 9 Favorite Number
//  const favoriteNumber : number = 8;
//  const message : string = "Here is your favorite number "  +  favoriteNumber;
//  console.log(message);


// task 10 Adding Comments
// Program written by: Asmarah
// Current Date : 17-2-2024
// This program will be add two digits
// console.log(2 + 6);


// task 11 Names
// let names : string[] = ['Saima', 'Mahira', 'Ali', 'Asad'];
// for(let i = 0; i<names.length; i++){
//     console.log(names[i]);
// }


// task 12 Repeat task 11 with message
// let names : string[] = ['Saima', 'Mahira', 'Ali', 'Asad'];
// const message : string = 'Welcome To Governor IT Initiative:';
// for(let i = 0; i<names.length; i++){
//     console.log(message + names[i]);
// }


// task 13 Your own array for transportation
// let transportation : string[] = ['Car', 'Train', 'Cycle' , 'Motorcycle'];

// for(let i = 0; i<transportation.length; i++){
//     console.log('I would like to own a  ' + transportation[i]);
// }


// task 14 Guest list
// let guest_list : string[] = ['Ali', 'Asad' , 'Khan' ,'Muneeb'];
// for(let i= 0; i<guest_list.length; i++){
// console.log('Dear Mr.' + guest_list[i], 'You are invited to the dinner.');
// }



// task 15 Changing guest list using task 14
// let guest_list : string[] = ['Ali', 'Asad' , 'Khan', 'Muneeb'];
// for(let i= 0; i<guest_list.length; i++){
// console.log('Dear Mr.' + guest_list[i], 'You are invited to the dinner.');
// }
// let absent_Guest : string = 'Ali';
// let new_Guest : string = 'Noman';

// guest_list[0] = new_Guest;
// for(let i= 0; i<guest_list.length; i++){
// console.log('Dear Mr.' + guest_list[i], 'You are invited to the dinner.');
// }
// console.log(`Mr. ${absent_Guest} is not coming to the dinner.`);



// task 16 More guests using task 14 and 15
// let guest_list : string[] = ['Ali', 'Asad' , 'Khan', 'Muneeb'];
// let absent_Guest : string = 'Ali';
// let new_Guest : string = 'Noman';

// guest_list[0] = new_Guest;
// for(let i= 0; i<guest_list.length; i++){
// console.log('Dear Mr.' + guest_list[i], 'You are invited to the dinner.');
// }
// console.log(`Mr. ${absent_Guest} is not coming to the dinner.`);
// console.log('Good News! We find big table so we are inviting 3 more guest.');

// guest_list.unshift('Yasir');
// guest_list.splice(2,0,'Danish');
// guest_list.push('Hamza');

// for(let i= 0; i<guest_list.length; i++){
// console.log('Dear Mr.' + guest_list[i], 'You are invited to the dinner.');
// }


// task 17 Shrinking guest list continue with task 16
// let guest_list : string[] = ['Ali', 'Asad' , 'Khan', 'Muneeb'];
// for(let i= 0; i<guest_list.length; i++){
// console.log('Dear Mr.' + guest_list[i], 'You are invited to the dinner.');
// }

// let absent_Guest : string = 'Ali';
// let new_Guest : string = 'Noman';

// guest_list[0] = new_Guest;
// for(let i= 0; i<guest_list.length; i++){
// console.log('Dear Mr.' + guest_list[i], 'You are invited to the dinner.');
// }
// console.log(`Mr. ${absent_Guest} is not coming to the dinner.`);
// console.log('Good News! We find big table so we are inviting 3 more guest.');

// //add 3 guest in array
// guest_list.unshift('Yasir');
// guest_list.splice(2,0,'Danish');
// guest_list.push('Hamza');

// //I print some guest 
// for(let i= 0; i<guest_list.length; i++){
// console.log('Dear Mr.' + guest_list[i], 'You are invited to the dinner.');
// }
// console.log('\nSorry we cannot arrange big table, only two peoples will be invited.');

// //I remove guest with the help of while loop.
// while(guest_list.length>2){
//    let remove_Guest= guest_list.pop();// for using remove guest in array
//    console.log(`Sorry Mr. ${remove_Guest}, You are not invited for dinner.`);
// }

// //remaining two invited guest
// for(let i= 0; i<guest_list.length; i++){
// console.log('Dear Mr.' + guest_list[i], 'You are  still invited to the dinner.');
// }
// //I remove all guest from array
// guest_list.splice(0,2);
// console.log(guest_list);



// //task 18 seeing the world
// // the locations in a array
// let places : string[] = ['Italy', 'Germany', 'Agra', 'Eifel Tower', 'Pakistan'];

// //print your array in its original order
// console.log('Original ' + places);

// //print your array in alphabetical order without modifying the actual list
// console.log('Copy ' + [...places].sort());

// //show that your array is still in its original order by printing it.
// console.log('Original ' + places);

// //print your array in reverse alphabetical order without changing the order of the original list.
// console.log('Copy ' + [...places].sort().reverse());

// //show that your array is still in its original order by printing it again.
// console.log('0riginal ' + places);

// //reverse the order of your list.Print the array to show that its order has changed.
// console.log('Original ' + places.reverse());

// //reverse the order of your list again.Print the list to show its back to its original order.
// console.log('Original ' + places.reverse());

// //sort your array so its stored in alphabetical order.Print the array to show that its order has been changed.
// console.log('Original ' + places.sort());

// //sort to change your array so its stored in reverse alphabetical order.Print the list to show that its order 
// //has changed.
// console.log('Original ' + places.sort().reverse());



// task 19 invitations
// let invitations : string[] = ['Yasir', 'Noman'];
// let count_invitations : number = invitations.length
// console.log(`${count_invitations} people will come to the dinner.`);



// task 20 
// let country : string[] = ['Pakistan', 'India', 'NewYork', 'Japan', 'China'];
// console.log('List of country:');
// console.log(country);


// task 21
// let person : {name : string, fname : string, age : number}={name : 'Asmarah', fname : 'Syed', age : 28};
// console.log(person);


// task 22 error
// const days : string[] = ['Sunday', 'Monday' ,'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// // nconsole.log(days{7});
// console.log(days[6]);


// task 23 Subaru
// let car = 'subaru';
//  console.log("is car == 'subaru'? predict true");
//  console.log(car == 'subaru');

//  console.log("is car != 'honda city'? predict true");
//  console.log(car != 'honda city');

//  console.log("is car == 'subaru'? predict false");
//  console.log( car == 'subaru');

//  console.log("is car == 'SUBARU'? predict false");
//  console.log( car == 'SUBARU');

//  console.log("is car.length == 6? predict true");
//  console.log( car.length == 6);

//  console.log("is car.length == 10? predict true");
//  console.log( car.length != 10);

//  console.log("is 10 > 45? predict false");
//  console.log(10 > 45);

//  console.log("is 3 <= 2? predict false");
//  console.log(3 <= 2);

//  console.log("is 72 >= 83? predict false");
//  console.log(72 >= 83);

//  console.log("70 >= 63? predict true");
//  console.log(70 >= 63);



// task 24 
// test for equality and inequality
//  let name_1 : string = 'Asmarah';
//  let name_2 : string = 'Asmarah Syed';
//  let name_3 : string = 'Miss Asmarah Syed';
// if(name_1 == name_2){
//     console.log('names are equal');
//  }else{
//    console.log('names are not equal');
// }

// // //test for data types
// if(name_1 != name_2){
//  }else{
//     console.log('names are equal');
// }

// if(name_1 != name_3){
//     console.log('names are equal');
// }

// //test for numerical
//  let age_1 : number = 18;
//  let age_2 : number = 22;

//  if(age_1 == 18){
//     console.log('eligible for vote');
//  }
//  if(age_2 != 22){
//     console.log('eligible for vote in older category ');
//  }

// // test for greater and lessthan
//  if(age_1 <= age_2){
//     console.log('younger')
//  }
//  if(age_2 >= age_1){
//      console.log('older');
//  }

// //test for logical operators
//  if(age_1 == 18 && age_2 == 22){
//    console.log('Person is eligible for vote');
//  }
//  if(age_1 == 18 || age_2 !== 22){
//     console.log('Person is not eligible for vote');
//  }

// // test for items in an array
//  let country : string[] = ['Pakistan', 'India', 'Japan','China'];
//   if(country.includes('Pakistan')){
//    console.log('Pakistan is in country list');
//   }

// // test for items is not in an array
//  if(!country.includes('america')){
//    console.log('america is not include in an array.');
//  }



// task 25 alien-color
//  let alien_color = 'green';
//  if(alien_color == 'green'){
//      console.log('you earn 5 points');
//  }

//  let alien_color2 : string = 'red';
//  if(alien_color == 'green'){
//      console.log('no output');
//  }


// task 26 alien-color2
//  let alien_color = 'green';
//  if(alien_color == 'green'){
//      console.log('player just earned 5 points shooting the alien.')
//  }else{console.log('player just earned 10 points.');
//  }

//  let alien_color2 = 'red';
//  if(alien_color == 'green'){
//      console.log('player just earned 5 points shooting the alien.')
//  }else{console.log('player just earned 10 points.');
//  }



// //task 27 alien-color3
//  let alien_color : string = 'green';
//  if(alien_color == 'green'){
//      console.log('player just earned 5 points.')
//  }else if(alien_color == 'yellow'){
//    console.log('player just earned 10 points.');
//  }else{
//    console.log('player just earned 15 points');
// }

// let alien_color2 : string = 'yellow';
//  if(alien_color2 == 'green'){
//      console.log('player just earned 5 points.')
//  }else if(alien_color2 == 'yellow'){
//    console.log('player just earned 10 points.');
//  }else{
//    console.log('player just earned 15 points');
// }



// task 28 -------2,4,13,20,65,older
//  let age : number = 18;
//  if(age < 2){
//      console.log('You are a baby');
//  }else if(age < 4){
//     console.log('You are a toddler');
//  }else if(age < 13){
//      console.log('You are a kid');
//  }else if(age < 20){
//      console.log('You are a teenager');
//  }else if(age < 65){
//      console.log('You are a adult');
//  }else{console.log('You are older');
//  }


//  let age_1 : number = 1;
//  if(age_1 < 2){
//      console.log('You are a baby');
//  }else if(age_1 < 4){
//      console.log('You are a toddler');
//  }else if(age_1 < 13){
//      console.log('You are a kid');
//  }else if(age_1 < 20){
//      console.log('You are a teenager');
//  }else if(age_1 < 65){
//      console.log('You are a adult');
//  }else{console.log('You are older');
//  }



// task 29 favourite-fruits
//  let favourite_fruits : string[] = ['Mango', 'Apple', 'Orange', 'Berry', 'Peach'];
//  if(favourite_fruits.includes('Mango')){
//      console.log('Mango');
//  }
//  if(favourite_fruits.includes('Apple')){
//      console.log('Apple');
//  }

//  if(favourite_fruits.includes('Orange')){
//      console.log('Orange');
//  }

//  if(favourite_fruits.includes('Berry')){
//      console.log('You really likes bananas');
//  }

//  if(favourite_fruits.includes('Peach')){
//      console.log('You really likes bananas');
//  }



// task 30
// let users :string [] = ['Admin', 'Eric', 'Ali', 'Danish', 'Habib'];

// for(let user of users){
// if(user === 'Admin'){
//      console.log("Hello Admin, would you like to see a status report?");
// }else{
//        console.log(`Hello ${user},thank you for logging in again`);
//  }
// }


// task 31
// let users :string [] = ['Admin', 'Eric', 'Ali', 'Danish', 'Habib'];

// if(users.length === 0){
//     console.log("We need to find some users!")
// }else{
//     for(let user of users){
//         if(user === "Admin"){
//      console.log("Hello Admin, would you like to see a status report?");
//  }else{
//      console.log(`Hello ${user},thank you for logging in again`);
//         }
//     }
// }

// users = []
// if(users.length === 0){
//      console.log("We need to find some users!")
// }



// //task 32

// let current_users : string [] = ['admin', 'eric', 'Ali', 'Danish', 'Habib'];

// let new_users : string [] = ['admin', 'eric', 'Aliza', 'Hamza', 'Haseeb'];

// let current_users_lower : string [] = current_users.map(user => user.toLowerCase());

// for(let new_user of new_users ){
// if(current_users_lower.includes(new_user.toLowerCase())){
//     console.log(`Sorry ${new_user}, that name is taken`);
// }else{
//     console.log(`Yes ${new_user}, is still in available list`);
// }
// }



// //task 33
// let numbers : number [] = [1,2,3,4,5,6,7,8,9];

// for(let number of numbers){

// if(number === 1){
//     console.log(`${number}st`)
// }else if (number === 2){
//     console.log(`${number}nd`)
// } else if (number === 3){
//     console.log(`${number}rd`)
// }else{
//     console.log(`${number}th`)
// }
// }



// // task 34
// let favorite_pizza : string [] = ['supreme', 'chicken', 'tikka'];

// for(let pizza of favorite_pizza){
//     console.log(pizza)
// }
//     console.log("\n");

// for(let pizza of favorite_pizza){
//     console.log(`I really like ${pizza} pizza!`);
// }
//     console.log('I really love pizza');



// // task 35
// let animals : string [] = ['cat' , 'lion' ,'dog'];

// for(let animal of animals){
//     console.log(animal)
// }
// console.log("\n");

// for(let animal of animals){
//     console.log(`A ${animal} has a tail`);
// }

// console.log("\n All of these are great pets!");




// // task 36
// function makeshirt(size : string, text : string): void {
//     console.log(`You order a ${size} shirt that says ${text}`);
// }

// makeshirt('large', '"i love typescript"');
// makeshirt('medium', '"i need a big shirt"');




// // task 37
// function makeshirt(size : string = 'large', text : string = 'I love typescript'): void {
//     console.log(`You have order a ${size} shirt that says ${text}`);
// }

// makeshirt();
// makeshirt('medium');

// //different message
// makeshirt('small', 'I need a big shirt to wear');



// // task 38
// function describe_city (city : string, country : string = 'Pakistan'):void {
//     console.log(`${city} is in ${country}`);
// }

// describe_city('Karachi');
// describe_city('France', 'Europe')
// describe_city('Lahore', 'Punjab');



// //task 39
// function cityCountry(city : string, country : string) : string{
//     return `${city}, ${country}`
// } 

// let c1 = cityCountry('Lahore', 'Pakistan');
// let c2 = cityCountry('Tokyo', 'Japan');
// let c3 = cityCountry('Paris', 'France');

// console.log(c1);
// console.log(c2);
// console.log(c3);



// //task 40
// function makeAlbum(artist : string, title : string) : {artist : string ; title : string}  {
// const dictionaries = {
//     artist : artist.charAt(0).toUpperCase() + artist.slice(1),
//     title : title.charAt(0).toUpperCase() + title.slice(1),
// };
// return dictionaries;
// }

// let album = makeAlbum('ali', 'sunlight');
//  console.log(album);

//  album = makeAlbum('asad', 'redlight');
//  console.log(album);

//  album = makeAlbum('hamza', 'greenlight');
//  console.log(album);



// // task 41
// function show_magicians(magicians : string[]) : void {
//     for(const magician of magicians){
//         console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//     }
// }

// const magician : string[] = ['ali','asad','hamza'];
// show_magicians(magician);



// task 42
// function make_gtreat(magicians: string[]) : void {
//     for(let i=0; i < magicians.length ; i++){
//         magicians[i] = magicians[i]   +  ' the great'
//     }}

//     const magicians2 : string[] = ['ali','asad','hamza'];
//     make_gtreat(magicians2);
//     show_magicians(magicians2);



// task 43
// function make_gtreat2(magicians: string[]) : string[] {
//     const greatMagicians : string[] = [];
//     for(let i = 0; i < magicians.length; i++){
//         greatMagicians.push(magicians[i] +  '  the great');
//     }
//     return greatMagicians;
// }

// const magicians3 : string[]  =  ['ali','asad','hamza'];
// const greatMagicions2 : string[] = make_gtreat2(magicians3);
// show_magicians(magicians3);
// show_magicians(greatMagicions2);



// task 44
// function sandwich(...items: string[]): void {
//     console.log("sandwich order:")
//     for(let i = 0; i < items.length; i++){
//         console.log(`- ${items[i]}`)
//     }
// }
// console.log("Enjoy your sandwich Asmarah")

// sandwich('capsicum', 'cabbage', 'chicken')
// sandwich('beef', 'cheese')
// sandwich('garlic chicken', 'mayo sauce')


// task 45
// type car = {
//     manufacture : string
//     model : string
//     [key : string] : any;
// }

// function createcar(manufacture : string, model : string, optional : Record<string, any>): car {
//     return{
//         manufacture,
//         model,
//         ...optional
//     }
// }

// const mycar : car = createcar("toyota", "corolla", {color : "black", year : "2024"})
// console.log(mycar);



// //////////45 task completed///////////////////