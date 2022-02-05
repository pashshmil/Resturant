interface Resturant {
    "id"?: number,
    "name": string,
    "chef_id": number,
    "dishes_id"?: number[],
    "popular"?: boolean,
    "signuture_dish_id"?:number,
    "src"?:string
}

export default Resturant;