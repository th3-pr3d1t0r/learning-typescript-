interface Identifiable {
    id:number;
}
interface Product extends Identifiable{
    name:string;
    price:number;

}
interface User extends Identifiable{
    name:string;
    email:string;
}

class GenericRepository<T extends Identifiable>  {
    protected items: T[] = [];
    private  nextId = 1 
    constructor(initialItems?:T[]){
       if(initialItems && initialItems.length >0){
        this.items = initialItems;
        
       }
        
    } 
    async findById(id:number):Promise<T | null>{
        try{
            await new Promise(resolve => setTimeout(resolve, 500));
            let user = this.items.find(item => item.id == id)
            if(user == undefined){
                return null
              }
            return user
           
        }
        catch(error){
            console.log(error)  
            return null
        }
    }
    async findAll() :Promise<T[]>{
       
        await new Promise(resolve => setTimeout(resolve, 300));
        
        return this.items
        
    }
    async add(item:Omit<T,'id'>):Promise<T[]>{
        await new Promise(resolve => setTimeout(resolve, 400));
        newItem = new item 
        new array = this 

       
    }
    

    

}