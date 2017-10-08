


var divide = function(x, y, callback) {
  if(y == 0)
    callback('cannot divide by zero!')

  callback(null, x/y)
}

divide(1, 2, function(err, result) {
  if(err){
    console.log('there was an error')
  }

  console.log(result)
})



// servers cannot hang on i/o operations
//
// user1: load from database
// user2: request /

var global_data = null

user1.load(...., function(err, data){
  if(err){

  }
  user1.send(data)
  global_data = data


})


user2.send('')


data = user1.load(...)
user2.send('')

