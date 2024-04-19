export type Restaurant = {
    name: string;
    category: string;
    address:Address;
    menu:Menu[];
}

export type Address = {
    city: string;
    detail: string;
    zipCode: Number;
}

export type Menu = {
    name: string;
    price: Number;
    category: string;
}

// Omit: 타입 제외
// 혹은 원 타입에 ?를 사용해도 된다 (있을 수도 있고 없을 수도 있고) 대신 있어야 되는 상황에서도 체킹을 못함
export type AddressWithoutZip = Omit<Address, 'zipCode'>

// Pick: 특정 타입만 선택
export type RestaurantOnlyCatgory = Pick<Restaurant, 'category'>

export type ApiResponse<T> = {
    data:T[],
    totalPage:number,
    page:number
}

export type RestaurantResponse = ApiResponse<Restaurant>
export type MenuResponse = ApiResponse<Menu>
