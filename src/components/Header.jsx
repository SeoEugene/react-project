import React from 'react'

const Header = () => {
  return (
    <header id="header" role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">portfolio<em>developer</em></a>
        </div>
        <nav className="header__nav" role="navigation" area-label="메인 메뉴">
          <ul>
            <li><a href="#intro">intro</a></li>
            <li><a href="#skill">skill</a></li>
            <li><a href="#site">site</a></li>
            <li><a href="#port">portpolio</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </nav>
        <div className="header__nav__mobile" id="headerToggle" aria-controls="primary" aria-expanded="false" role="button">
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header