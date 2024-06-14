import React from 'react'

type Props = {}

const Header = (props: Props) => {
    const count:number = 1;
  return (
    <>
        <header>
            <div className='nav-header'>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </header>
    </>
  )
}

export default Header