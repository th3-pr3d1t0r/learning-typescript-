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
    constructor(initialIteclms?:T[]){
         let items
         no real progress today but have to push
         

    } 
    

}