let sale: number = 123456789;
let course :string = "typscript "

let numbers :number[] = [1,2,3,4,5,6,7,8]
//this is to specify the type so tha typescript doesnt run into errors later 


numbers.forEach(n => n.toString);
//notice how when you want to access the variable you directly get all the native meathods for that spesific data type 

//tuples this is 

let user : [number,string] =  [32, "dave"]

// in this spesific example you have specified to typscript that the user variable is goingt to be an array that has the type of number and the second element has the type of string so if the types dont match then it returns an error 

// the advantage of specifying the data type is that you can call inbuilt meathods spesific to the data type of the elements by referencing the index number 


user[0].toString 
//notice how typescript already recognises that this is of type number and uses the to string meathod 



// enums 

 const enum size{small=1, medium , large}  //if you assigned one of the values an integer it autocompletes the indexing but if youassigned   a  string value then you are going to have to specify how  what each of them stands  for 

let mySize :size = size.medium; // notice how you can reference the enum you created earlier as the  type and still reference tthe spesific value fro the array 

// console.log(mySize);

function calculateTax(income:number, taxYear = 2021){ // you can alls specify the type of the 
    if (income > 50000)
        return (income * 10 ) / 100 & taxYear;

    else
        return (income * 5) /100 & taxYear;

}


calculateTax(100000)