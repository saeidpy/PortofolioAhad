import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom'

function NavBar(props) {
    const { t,i18n  } = useTranslation()

    const changeLanguage = () =>{
       if(i18n.language ==="en") 
        i18n.changeLanguage("fa")
        else
        i18n.changeLanguage("en")
    }

    return (
        <div className="NavBar">


            <nav className="nav">
                <div className="profile">
                    <img src="/images/avatar.jpeg" alt="profile image" />
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            {t("navBar.home")}
                        </NavLink>
                    </li>

                </ul>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            {t("navBar.aboutMe")}
                        </NavLink>
                    </li>

                </ul>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/portfolio" exact activeClassName="active">
                            {t("navBar.projects")}
                        </NavLink>
                    </li>

                </ul>
                {/* <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/blog" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>

                </ul> */}
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            {t("navBar.contact")}
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    {/* <div onChange={changeLanguage} >
                        <input type="radio" value="en" name="language"  /> English
                        <input type="radio" value="zh-hk" name="language" /> persian
                    </div> */}
                    <p>
                        @2021 Ahad Sheibani
                    </p>

                </footer>
            </nav>

        </div>
    );
}

export default NavBar;