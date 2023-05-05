import {UserType} from './immutability';
import {Simulate} from 'react-dom/test-utils';
import copy = Simulate.copy;


const hairdresser = (u:UserType, power:number) =>{
const copy = {
    ...u
}
     copy.hair = u.hair/power
    return copy
}

test ('reference type test', () => {
    let user: UserType = {
        name: 'Andrei',
        hair: 32,
        address: {
            title: 'Vitebsk'
        }
    }

    const updatedUser = hairdresser(user, 2)
    expect(updatedUser.hair).toBe(16)
})

