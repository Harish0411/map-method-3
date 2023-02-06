const users = [
  {
    first_name: 'Mike',
    location: 'London'
  },
  {
    first_name: 'Tim',
    location: 'US'
  },
  {
    first_name: 'John',
    location: 'Australia'
  }
];

// Output = ['Mike lives in London', 'Tim lives in US', 'John lives in Australia']

/*let result = users.map(function(val){
    let value =[val.first_name, val.location].join(" lives in ");
	return value;
   });*/
   
let result = users.map(function(val){
    return `${val.first_name} lives in ${val.location}`;

   });
   
 console.log(result);