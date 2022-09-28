// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
// The text of each message should be the same, 
// but each message should be personalized with the person’s name.



const names  = ["Aneeq","Abdullah","Zain","Anas"]
const temp= names.map((e)=>{
return e.concat(" Here")
})
console.log(temp);