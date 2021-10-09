

let floors = [{name: 'floor 1', seats: 10},
              {name: 'floor 2', seats: 5},
              {name: 'floor 3', seats: 15},
              {name: 'floor 4', seats: 3},
              {name: 'floor 5', seats: 10}
]
let inceptionuSpaceAvaliable = true
console.log('Start')
console.log('Enter Librarry')
console.log('Sanitize ')
console.log('ask receptionist about floor seat availability')
console.log(floors)
console.log('floor selection based on seats')
// console.log(floors.seats)
for(let i = 0; i < floors.length; i++){
    if(floors[i].seats >= 10){
        console.log(floors[i])
    }
}
    if (floors.seats >= 10){
        console.log('setup for coding')
    }else{ 
        console.log('Is InceptionU space available?', inceptionuSpaceAvaliable)
        if(inceptionuSpaceAvaliable){
            console.log('Enter InceptionU')
        }else{
            console.log('Go Home')
            console.log('Do something else')
        } 

    }
    console.log('code')
console.log('End')
