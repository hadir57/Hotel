import { Reservation } from "./Reservation";

export interface Chambre{
    id:string,
    numero:Int16Array,
    type:string,
    prix:Int16Array,
    image:string,
    description:string
    tab_pub : Reservation[],

}