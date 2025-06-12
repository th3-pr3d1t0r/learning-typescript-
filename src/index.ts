// let sale: number = 123456789;
// let course :string = "typscript "

// let numbers :number[] = [1,2,3,4,5,6,7,8]
// //this is to specify the type so tha typescript doesnt run into errors later 


// numbers.forEach(n => n.toString);
// //notice how when you want to access the variable you directly get all the native meathods for that spesific data type 

// //tuples this is 

// let user : [number,string] =  [32, "dave"]

// // in this spesific example you have specified to typscript that the user variable is goingt to be an array that has the type of number and the second element has the type of string so if the types dont match then it returns an error 

// // the advantage of specifying the data type is that you can call inbuilt meathods spesific to the data type of the elements by referencing the index number 


// user[0].toString 
// //notice how typescript already recognises that this is of type number and uses the to string meathod 



// // enums 

//  const enum size{small=1, medium , large}  //if you assigned one of the values an integer it autocompletes the indexing but if youassigned   a  string value then you are going to have to specify how  what each of them stands  for 

// let mySize :size = size.medium; // notice how you can reference the enum you created earlier as the  type and still reference tthe spesific value fro the array 

// // console.log(mySize);

// let userIncome : string | null = prompt("how much do you make a year")//

// // let taxYear :number |null = prompt("what year is this income from") 

// function calculateTax(income:number, taxYear = 2021){ // you can alls specify the type of the 
//     if (income > 50000){
//         const taxedIncome :number = (income * 10 ) / 100 
//         const product :string = taxedIncome.toString() + taxYear.toString
//         return product;

//     }else{
//         return (income * 5) /100 & taxYear;
//     }

// }


// calculateTax(userIncome,userYear);


// function calculateRectangleArea(length:number , breadth:number):number{
//     let area = length * breadth
//     return  area;

// };

// calculateRectangleArea(5,4);// function calculates the area of a rectangle 


// function isEven(num :number):boolean{
//     if(num % 2 == 0){
//         return true
//     }
//     else{
//         return false
//     }

// }

// isEven(7);


// function isValidPassword(password:string):boolean{
//     let hasUpperCase:boolean = false;
//     let hasLowerCase:boolean = false;
//     let hasNumber:boolean =false;
 
//     if(password.length>=8){
//        for(let i = 0 ; i<password.length; i++){
//             let char = password[i];
           
            
//                 //firat step check of the current value is a number or a letter 
//             if(/\d/.test(char) ){//now this will test if the character currently looping over is a number 
//                 hasNumber = true;
//             }
//             else{
//                 if(/[A-Z]/.test(char)){//to check if it is has uppercase letters 
//                     hasUpperCase =true;

//                 }
//                 if(/[a-z]/.test(char)){
//                     hasLowerCase = true;
//                 }
//             }
//              if(hasLowerCase && hasNumber && hasUpperCase){
//                return true
//             }
//         }

//         return false
//     }
//     else{
//         return false;
//     }



// }


interface Product {
    id:number,
    name:string , 
    price:number,
    category:string
    status?:ProductStatus
    quantity?:number


};
interface Category {
    id: number;
    name: string;
    description: string;
}

interface DetailedProduct {
    id: number;
    name: string;
    price: number;
    categoryName: string;
    categoryDescription: string;
}

const allProducts: Product[] = [
    { id: 1, name: "Laptop", price: 1200, category: "Electronics" ,},
    { id: 2, name: "Keyboard", price: 75, category: "Electronics" },
    { id: 3, name: "The Great Novel", price: 25, category: "Books" },
    { id: 4, name: "T-Shirt", price: 20, category: "Clothing" },
    { id: 5, name: "Mouse", price: 30, category: "Electronics" },
    { id: 6, name: "Cookbook", price: 35, category: "Books" },
];

const sampleCategories: Category[] = [
    { id: 101, name: "Electronics", description: "Gadgets and devices." },
    { id: 102, name: "Books", description: "Written and published works." },
    { id: 103, name: "Furniture", description: "Items for home and office decor." },
];

function filterProductByCategory(products:Product[],targetCaegory:string):Product[]{
    
    let matchingProducts = products.filter((product) => product.category == targetCaegory)

    return matchingProducts
    

}

filterProductByCategory(allProducts,"Electronics");


function updateProductprice(products:Product[],productId:number,newPrice:number):Product[]{

    for(let product of products){
         if(product.id == productId){
            product.price =newPrice
            break
        }

    }
    return products

    
}

function getProductDetails(products:Product[],categorys:Category[],productId:number) :DetailedProduct | null{
    let correctProduct = products.find((product) => product.id == productId)
    if(correctProduct == undefined){
        return null
    }
    let correctCategry = categorys.find((category) => category.name == correctProduct.category)
    if(correctCategry == undefined){
        return null 
    }
    const detailedProduct :DetailedProduct={
        id: correctProduct.id,
        name: correctProduct.name,
        price: correctProduct.price,
        categoryName: correctCategry.name,
        categoryDescription: correctCategry.description
         }
    return detailedProduct

}

getProductDetails(allProducts,sampleCategories,1);


function deletProductById(products:Product[],productId:number):boolean{
    let productExists :number = products.findIndex((product) => product.id == productId)
    if(productExists == -1){
        return false
    }
    else{
        products.splice(productExists,1)
    }

    return true

}

enum ProductStatus {
    Available = "Available",
    OutOfStock = "OutOfStock",
    Discontinued = "Discontinued",
}

interface NewProductInput {
    name: string;
    price: number;
    category: string;
    status?: ProductStatus; 
    quantity?: number; 
}

function addNewProduct(products:Product[],newProductInput:NewProductInput):Product|null{
    if(newProductInput.name === "" || newProductInput.price <= 0 || newProductInput.category === ""){
        return null
    }
    let higherId:number = 0  
    products.forEach(product => {
        if(product.id > higherId){
            higherId = product.id
        }    
    });
    if(newProductInput.status === undefined){
        newProductInput.status = ProductStatus.Available
    }
    if(newProductInput.quantity === undefined){
        newProductInput.quantity = 0
    }
    let newProduct = {
        id:higherId+1,
        name: newProductInput.name,
        price: newProductInput.price,
        category: newProductInput.category,
        status: newProductInput.status, 
        quantity:newProductInput.quantity 
        
    }
    products.push(newProduct);
    return newProduct || null 

}
interface User{
    name:string,
    id:number,
    email:string
}

class UserService{
    private users: User[];
    constructor(usersArray:User[]){
        this.users = usersArray
    }
    async getUserById(id:number) :Promise <User |null> {
        await new Promise(resolve => setTimeout(resolve, 500));
        let user =this.users.find((user) => user.id == id)
        if(user == undefined){
            return null
        }
        return user
    }
}
//random comment