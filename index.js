// Code your solutions in this file
let people = ["Guadalupe", "Ollie", "Aki"];
function countDown(){
    for(let i = 10;i >= 0;i--){
        console.log(i)
    }
}
function writeCards(names) {
  let thankYouMessages = [];
  for (let name of names) {
    thankYouMessages.push(`Thank you, ${name}, for the wonderful surprise gift!`);
  }
  return thankYouMessages;
}let names = ["Guadalupe", "Ollie", "Aki"];
let  thankYouMessages = writeCards(names);

console.log(thankYouMessages);