var BooksAPI=require('./BooksAPI');
var B=BooksAPI.getAll().then();
console.log(B);