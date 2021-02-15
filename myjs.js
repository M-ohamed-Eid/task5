var bank_user = [
    {
        name : "Mohamed",
        balance:5000,
        accNum:23,
    },
    {
        name:"Mahmoud",
        balance:4000,
        accNum:34,
    },
    {
        name:"Ibrahim",
        balance:3000,
        accNum:45,
    },
    {
        name:"Tarek",
        balance:4500,
        accNum:56,
    },
    {
        name:"Mostafa",
        balance:3500,
        accNum:67,
    }
]


// //////////////////////////// add users

var adduser = (x , y ,z) =>{
    return {
        name:x , 
        balance:y,
        accNum: z
    }
}

bank_user.push(adduser("soha", 2500 , 456))

console.log(bank_user)


////////////////////////////////////// edit balabce

function editUser(accNum , newBalance){
    for(var i = 0 ; i<bank_user.length ; i++){
        if (  bank_user[i].accNum == accNum ) {
            bank_user.balance = newBalance
            
        }
    }
}


////////////////////////////////////// delete user


 function deleteUser (accNum){
    for(var i = 0 ; i<bank_user.length ; i++){
        if (  bank_user[i].accNum == accNum ) {
            bank_user.splice(bank_user[i] , 1)
            
        }
    }
}

// delete bank_user.accNum; why it doesn't work ?


// ///////////////////////////////// show users

function show(){
    console.table(bank_user);
}
show();