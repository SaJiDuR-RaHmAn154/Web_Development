// API (Application Programming Interface)
// It's one kind of waiter
// It takes request and serves data or rejects the request
// Our js code(client) sends request to api's(one kind of link(URL)) end points and sends responses in form of data
// APIs are communication medium between two softwares
// Web APIs
// The data that is provied by APIs are in JSON format

// Some apis are paid(where we have to use key to use)

// Some free APIs

// https://catfact.ninja/fact (provides some fact about cats in JSON format)
// https://www.boredapi.com/api/activity (suggests some activities in JSON format)
// https://dog.ceo/api/breeds/image/random (sends dog images)
 
// -----After reading JSON Methods(in JSON.js)-----


// ------Testing API requests------
// tools (Hoppscoth,postman(quite old))
// Hoppscoth is the alternative way 

// -------USING HOPPSCOTCH---------
// https://hoppscotch.io  (go to this link )
// from dropdown select GET and in URL paste https://catfact.ninja/fact link and Send request.You will get api response as JSON


// request sending using JS to API and responses in XML/JSON will occur in Asynchronous way
// AJAX (asynchronous javascript and XML)
// when we like a post in social media. The like count increases without reloading the current page
// This occurs in asynchronous way by sending a request to api to increase the like count


// ----HTTPS verbs(one kind of work)----

// ->GET,POST,DELETE,PUT etc from the dropdown of hoppscotch

// ----Status Codes----

// -> 200(OK)
// -> 404 (Not Found(when the api doesn't exist or the data not found))->https://dog.ceo/api/breeds/image/random2 (paste this)
// -> 400 (Bad Request)
// -> 500 (Internal server error)

// go to Status code MDN to read about this

// -------Additional Information in URL------

// ------Query strings-----

// search this in browser
// https://www.google.com/search?q=mango(here q is key and mango is value)
// q=mango&q=apple (more than one key-value pair hole avabe likhbo)

// https://api.potterdb.com/   (this is harry potter api)
// https://api.potterdb.com/v1/movies (paste this in Hoppscoth to get all the info of v1 movies of harry potter in JSON format)
// https://api.potterdb.com/v1/movies/id (returns all the info related to the movie having the mentioned id)


// -------Http Headers-------

// headers are of two types - request headers and response headers
// type anything in google,open console,go to network section and select any file and go to headers section to get information

// https://icanhazdadjoke.com/ (paste this in hoppscotch)
// go to header section set Header to Accept and value1 to application/json