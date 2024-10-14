export type EventModel = {
    id: number,
    name: string,
    description: string,
    image: string,
    isActive: boolean,
    startDate: string,
    endDate: string,
    packages: packagesModel[],
}

export type packagesModel ={
    id: number,
    name: string,
    description: string,
    products: productModel[],
}

export type productModel = {
    id: number,
    name: string,
    price: number,
}

