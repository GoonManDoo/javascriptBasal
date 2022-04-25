// array/basic2.js

let data =
`[{"id":1,"first_name":"Tawsha","last_name":"Cissell","email":"tcissell0@accuweather.com","gender":"Female","ip_address":"229.198.40.69"},
{"id":2,"first_name":"Paige","last_name":"Skeels","email":"pskeels1@free.fr","gender":"Male","ip_address":"220.161.18.218"},
{"id":3,"first_name":"Gran","last_name":"Conneely","email":"gconneely2@wordpress.com","gender":"Male","ip_address":"46.116.17.157"},
{"id":4,"first_name":"Averil","last_name":"Feldmann","email":"afeldmann3@nationalgeographic.com","gender":"Female","ip_address":"181.62.130.117"},
{"id":5,"first_name":"Efren","last_name":"Josebury","email":"ejosebury4@gnu.org","gender":"Male","ip_address":"138.60.149.5"},
{"id":6,"first_name":"Micheil","last_name":"Ginger","email":"mginger5@newsvine.com","gender":"Male","ip_address":"133.44.200.87"},
{"id":7,"first_name":"Vick","last_name":"Brookwell","email":"vbrookwell6@discuz.net","gender":"Male","ip_address":"125.209.207.197"},
{"id":8,"first_name":"Chickie","last_name":"Bowsher","email":"cbowsher7@ustream.tv","gender":"Female","ip_address":"12.162.103.125"},
{"id":9,"first_name":"Katerina","last_name":"Brandenburg","email":"kbrandenburg8@studiopress.com","gender":"Female","ip_address":"75.40.0.162"},
{"id":10,"first_name":"Ulysses","last_name":"Groom","email":"ugroom9@bing.com","gender":"Male","ip_address":"181.27.201.98"},
{"id":11,"first_name":"Simone","last_name":"Brea","email":"sbreaa@ihg.com","gender":"Female","ip_address":"166.112.123.178"},
{"id":12,"first_name":"Hazlett","last_name":"Reihm","email":"hreihmb@fema.gov","gender":"Male","ip_address":"30.1.226.119"},
{"id":13,"first_name":"Omar","last_name":"Marsh","email":"omarshc@craigslist.org","gender":"Non-binary","ip_address":"53.113.186.90"},
{"id":14,"first_name":"Perry","last_name":"Uglow","email":"puglowd@abc.net.au","gender":"Female","ip_address":"194.146.13.243"},
{"id":15,"first_name":"Pavel","last_name":"Vosse","email":"pvossee@mapy.cz","gender":"Male","ip_address":"218.200.208.158"}]`

// find();
let objAry = []; 
objAry = JSON.parse(data); // 

let result = objAry.find(function (elem){
  return elem.gender == 'Female';
});

console.log(result);
