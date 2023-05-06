import {
    addCompany,
    CompaniesType,
    makeHairStyle,
    removeCssBook,
    updatedBooks,
    updateLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptop
} from './immutability';
import {Simulate} from 'react-dom/test-utils';
import copy = Simulate.copy;


test('reference type test', () => {
    let user: UserType = {
        name: 'Andrei',
        hair: 32,
        address: {
            title: 'Vitebsk',
            house: 12

        }
    }

    const updatedUser = makeHairStyle(user, 2)
    expect(updatedUser.hair).toBe(16)
    expect(user.hair).toBe(32)
})

test('change address', () => {
    let user: UserWithLaptop = {
        name: 'Andrei',
        hair: 32,
        address: {
            title: 'Vitebsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    // const updatedUser = moveUser(user, 'Kiev')
    //
    // expect(updatedUser).not.toBe(user)
    // expect(updatedUser.laptop.title).toBe(user.laptop.title)
    // expect(user.address.title).not.toBe(updatedUser.address.title)

})
test('update laptop to MacBook', () => {
    let user: UserWithLaptop = {
        name: 'Andrei',
        hair: 32,
        address: {
            title: 'Vitebsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const updatedUser = updateLaptop(user, 'MacBook')
    expect(updatedUser).not.toBe(user)
    expect(updatedUser.laptop.title).not.toBe(user.laptop.title)
    expect(updatedUser.laptop.title).toBe('MacBook')


})
test('updatedBooks', () => {
    let user: UserWithLaptop & UserWithBooksType = {
        name: 'Andrei',
        hair: 32,
        address: {
            title: 'Vitebsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['html', 'css', 'js']
    }
    const updatedUserBooks = updatedBooks(user, 'ts')

    expect(updatedUserBooks.books[2]).toEqual('ts')
    expect(user.books[2]).toEqual('js')

})
test('removeCssBook', () => {
    let user: UserWithLaptop & UserWithBooksType = {
        name: 'Andrei',
        hair: 32,
        address: {
            title: 'Vitebsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['html', 'css', 'js']
    }
    const updatedUserBooks = removeCssBook(user, 'css')

    expect(updatedUserBooks.books[1]).toBe('js')
    expect(user.books[2]).toBe('js')

})
test('updatedUserCompany', () => {
    let user: UserWithLaptop & CompaniesType = {
        name: 'Andrei',
        hair: 32,
        address: {
            title: 'Vitebsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id:1, title: "Epam"}, {id:2, title: "IT-Inc"}]
    }
    const updatedUserCompany= addCompany(user, 1, 'Google')

    expect(updatedUserCompany.companies[0]).toEqual({id:1, title: "Google"})
    expect(user.companies[0]).toEqual({id:1, title: "Epam"})

})


