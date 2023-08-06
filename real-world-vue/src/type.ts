export interface EventItem {
    id:number
    category: string
    title:string
    description:string
    location:string
    date: string
    time:string
    petsAllowed:boolean
    organizer:string
}

export interface PassengerItem {
    id:number,
    first_name: string,
    last_name: string,
    email: string,
    
}
