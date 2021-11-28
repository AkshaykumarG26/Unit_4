Problem
go to https://www.mockaroo.com/ and download a sample books json which has following fields
- author
- book name
- pages
- published year and download a json of 100 items
Create an Express application which handles below apis
- get '/' this will return all the users
- post '/books' - pass an user to it and it will append it to the end of the users and  return it
- get '/books/:id' - this will return user with a specific id
- patch '/books/:id' - pass a different author and published year only and update those on the book that matched the id
- delete '/books:id' - delete the book that matched the id
- Add a middleware that adds { api_requested_by: "Your Name"} // so sample would be { api_requested_by: "Dhaval Chheda"} in your response

Note :-
when you are returning an array it should be outside the array for e.g :- { "api_requested_by": "Dhaval Chheda", "books": [] // this is your books array }
for single book returned it should be like { "api_requested_by": "Dhaval Chheda", "book": {} // this will have your book }
Have fun guys .. Happy coding .. :)