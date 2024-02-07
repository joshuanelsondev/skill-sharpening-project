const people = [
     { name: "Wade Carson", hasMembership: false },
     { name: "Ray Anderson", hasMembership: true },
     { name: "America Marsh", hasMembership: true },
     { name: "Patience Patel", hasMembership: false },
   ];
   createLineOrder(people);
   //> [ "Ray Anderson", "America Marsh", "Wade Carson", "Patience Patel" ]

function createLineOrder(members) {
 return members.reduce((arr, item) => {
   item.hasMembership ? arr.push(item.name) : arr
   return arr
 },[])
} 

console.log(createLineOrder(people))