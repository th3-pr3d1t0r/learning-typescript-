interface identifiable {
    id:number;
}
interface product extends identifiable{
    name:string;
    price:number;

}
interface user extends identifiable{
    name:string;
    email:string;
}

class GenericsRepository<T extends identifiable>  {
    protected items :T[];
    private  maxId = 1 
    constructor(initialItems?:T[]){
       
        initialItems?.forEach( item => {if(item.id > this.maxId ){
            this.maxId = item.id;

        }})
        let nextId = this.maxId + 1


       
        
         

    } 
    

}