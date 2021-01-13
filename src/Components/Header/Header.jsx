import React from 'react';
import style from "./header.module.css"


const Header = () => {
    return (
      <header className={style.header}>
        <div className='logo'>
           {/* <img src={logo}/> */}
        </div>
          <h1 className={style.title}>Social Network</h1>
      </header>
    );
}

export default Header
