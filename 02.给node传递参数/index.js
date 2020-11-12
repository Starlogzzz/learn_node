console.log("Hello World");
console.log(process); 

console.log(process.argv[0]);
console.log(process.argv[1]);

process.argv.forEach(ele => {
  console.log(ele)
});