import { Seller } from "./seller"

export type Sale = {
    id: 23,
    visited: number,
    deals: number,
    amount: number,
    date: string,
    seller: Seller
}
export type SalePage = {
    content?: Sale[],
    last: boolean,
    totalPages: number,
    totalElements: number,
    first: boolean,
    numberOfElements?: number,
    size?: number,
    number: number,
    empty?: boolean
}

export type SaleSum = {
    saleName: string,
    sum: number
}

export type SaleSuccess = {
    saleName: string,
    visited: number,
    deals: number
}