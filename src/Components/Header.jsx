import React from 'react'
import { Link } from 'react-router-dom'
import LoginControl from './Pages/Login/LoginControl'
import { Provider } from "react-redux"
import store from '../store'
import TokenAuthor from './Pages/Login/TokenAuthor'

export default function Header(props) {
    return (
        <Provider store={store}>
            <div className='navbar'>
                <div className='headerwrap'>
                    <Link to='/' className='logo'>
                        <img
                            style={{ width: "154px", height: "20px" }}
                            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                            alt="로고"
                        />
                    </Link>
                    <div className='linkswrap'>
                        <ul>
                            <li>
                                <Link to='/movies' className='link'>영화</Link>
                            </li>
                            <li>
                                <Link to='/movies2' className='link'>영화2</Link>
                            </li>
                            <li>
                                <Link to='/tv' className='link'>TV 프로그램</Link>
                            </li>
                            <li>
                                <Link to='/celebrity' className='link'>인물</Link>
                            </li>
                        </ul>
                    </div>
                    <LoginControl></LoginControl>
                    <TokenAuthor></TokenAuthor>
                </div>
            </div>
        </Provider>
    )
}
