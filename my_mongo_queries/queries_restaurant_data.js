// find restaurant in manchester
db.restaurant.find({'address line 2':'Manchester'})

// find restaurant in manchester and sort them ascending order
db.restaurant.find({'address line 2':'Manchester'}).sort({ 'outcode': 1 })

// find restaunt which have ratings below 3
db.restaurant.find({'rating':{$lt: 3}})

// find restaunt which have ratings above 5
db.restaurant.find({'rating':{$gt: 5}})

// find restaunt which have ratings greater  5
db.restaurant.find({'rating':{$gt: 5,$eq: 6}})

// logical operators
// AND

db.restaurant.find({$and: [{'address line 2': 'Ashford','rating': {$gt: 4}}]})
db.restaurant.find({$and: [{'address line 2': 'Ashford','rating': {$eq: 5.5}}]})


// OR operations
db.restaurant.find({$or: [{'address line 2': 'London','rating': {$gt: 5}}]})


// NOT operator which will give us 2 type of data
// 1. restaurants with rating not greater than 5
// 2. restaurants with no ratings

db.restaurant.find({'rating': {$not: {$gt: 5}}})


// contrary to not operator is less than equal to operator
// it will give us restaurants with rating less than or equal to 4.5
// but it will not list down non rated restaurants in it

db.restaurant.find( { 'rating': { $lte: 4.5 } } )


// 
db.restaurant.find({$and: [{'type_of_food': 'Thai'},{'rating': {$gt: 5} }]},{'name':1,'address':1,'address line 2':1})


