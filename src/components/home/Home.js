import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'

const Home = () => {
    const {user, setUser} = useContext(UserContext)

    const setAsJohn = () => {
        const john = {
            name: 'john',
            email: 'john@email.com',
            password: '123',
            id: '123',
        }
        setUser(john)
    }
    const setAsTom = () => {
        const tom = {
            name: 'tom',
            email: 'tom@email.com',
            password: '456',
            id: '456',
        }
        setUser(tom)
    }
    return (
        <div>
            <h1>Home {JSON.stringify(user)}</h1>
            <button onClick={setAsJohn}>Set as John</button>
            <button onClick={setAsTom}>Set as Tom</button>
        </div>
    )
}

export default Home
