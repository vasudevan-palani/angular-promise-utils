## Synopsis

This project is aimed at providing utility functions in handling promises / array of promises.

## Code Example

```
// To sequence all the promises one after the another
//
//	- promises ( list of all promises )
//	- options ( List of options, interval : seconds to wait before retry )
//
$promiseutils.race(promises,options).then(function(resp){
    //Handle success
}).catch(function(resp){
    //Handle failure
});

// To sequence all the promises one after the another
//
//	- promises ( list of all promises )
//	- options ( List of options, interval : seconds to wait before retry )
//
$promiseutils.raceToFail(promises,options).then(function(resp){
    //Handle success
}).catch(function(resp){
    //Handle failure
});


// To sequence all the promises one after the another
//
//	- variables ( Array of variables , For each variable a promise will be created using promiseFn )
//	- promiseFn ( This function will involved to get an instance of promise )
//	- options ( List of options, interval : seconds to wait before retry )
//
$promiseutils.seq(variables,promiseFn,options).then(function(resp){
    //Handle success
}).catch(function(resp){
    //Handle failure
});

// To retry a promise a number of times
//
//	- arguments ( The inputs required to create a promise )
//	- promiseFn ( This function will involved to get an instance of promise )
//	- options ( List of options, maxretry : number of retries, interval : seconds to wait before retry )
//
$promiseutils.retry(arguments,promiseFn,options).then(function(resp){
    //Handle success
}).catch(function(resp){
    //Handle failure
});

```

## Installation

To include this source in your nodejs application

Step1 :
```
include the angular-promise-utils.js in your web app
```

Step2 :

include angular-promise-utils module in your angular module and start using $promiseUtils service.

## License

MIT License.
