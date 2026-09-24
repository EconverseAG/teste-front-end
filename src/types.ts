export interface Produto {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
}

export interface ApiResponse {
    success: boolean;
    products: Produto[];
}
