import {useEffect} from 'react';

export type UserType = {
    name: string
    hair: number
    address: {
        title: string
        house: number
    }
}
export type LaptopType = {
    title: string
}

export  type  UserWithLaptop = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}
export type CompanyType = { id: number, title: string }[];
export type CompaniesType = {
    companies: CompanyType
}
export const makeHairStyle = (u: UserType, power: number) => {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    return copy
}
export const updateLaptop = (u: UserWithLaptop, newLaptop: string) => {
    return {
        ...u, laptop: {...u.laptop, title: newLaptop}
    }

}

export const updatedBooks = (u: UserWithLaptop & UserWithBooksType, book: string) => (
    {...u, books: u.books.map(el => el === 'js' ? el = book : el)}
)
export const removeCssBook = (u: UserWithLaptop & UserWithBooksType, book: string) => (
    {...u, books: u.books.filter
        (el => el !== book)}
)
export const addCompany = (u:  CompaniesType, id:number, newtitle: string ) => (
    {...u, companies: u.companies.map(el=>el.id === id
            ? {...el, title:newtitle}
            : el)}
)
export const updatedUser2 = (companies:  {[key:string]: CompanyType}, UserName:string, companyId: number, newTitle:string ) => {
    const companiesCopy = {...companies}
    companiesCopy[UserName] = companiesCopy[UserName].map(el=>el.id ===companyId
    ? {...el, title:newTitle }
    :el)
    return companiesCopy
}