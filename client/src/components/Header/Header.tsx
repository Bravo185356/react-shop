import classes from "./Header.module.scss";
import classNames from "classnames";
import { useState } from "react";
import { ReactComponent as NightTheme } from "../../assets/icons/night-theme.svg";
import { ReactComponent as LightTheme } from "../../assets/icons/light-theme.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as ShoppingCart } from "../../assets/icons/shopping-cart.svg";
import { ReactComponent as PhoneCall } from "../../assets/icons/phone-call.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-down.svg";

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  function toggleMenu() {
    document.body.classList.toggle("no-scroll");
    setMenuActive(!menuActive);
  }

  return (
    <header className={classes.header}>
      <div className={classNames(classes.headerRow, classes.headerRow1)}>
        <div className={classes.headerContainer}>
          <div className="logo">LOGO</div>
          <div className={classNames(classes.menu, menuActive && classes.menuActive)}>
            <ul className={classes.menuList}>
              <li className="menu-item">Про нас</li>
              <li className="menu-item">Акции</li>
              <li className="menu-item">Блог</li>
              <li className="menu-item">Контакты</li>
              <li className="menu-item">Оплата</li>
              <li className="menu-item">Гарантия</li>
              <li className="menu-item">Тех поддержка</li>
            </ul>
            <div onClick={toggleMenu} className={classes.closeMenuButton}>
              X
            </div>
          </div>
          <div className={classes.burgerMenuBackground}></div>
          <div className={classes.headerControls}>
            <div className={classes.language}>
              <span>RU</span>
              <span>|</span>
              <span>EN</span>
            </div>
            <div className={classes.colorVariant}>
              <button className={classes.themeButton}>
                <i>
                  <NightTheme fill="white" stroke="#2D2D2D" />
                </i>
              </button>
              <button className={classes.themeButton}>
                <i>
                  <LightTheme />
                </i>
              </button>
            </div>
            <div onClick={toggleMenu} className={classes.burgerButtonWrap}>
              <div className={classes.burgerButton}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames(classes.headerRow, classes.headerRow2)}>
        <div className={classes.headerContainer}>
          <button className={classes.catalogButton}>
            <div className={classes.buttonName}>Каталог</div>
            <i>
              <Arrow className={classes.whiteArrow} />
            </i>
          </button>
          <div className={classes.inputWrapper}>
            <input placeholder="Поиск" />
            <i>
              <Search />
            </i>
          </div>
          <div className={classes.call}>
            <i>
              <PhoneCall />
            </i>
            <div className={classes.callInfo}>
              <div className="phone-number">0509004279</div>
              <div className={classes.phoneNote}>Бесплатно по Украине</div>
            </div>
            <i>
              <Arrow />
            </i>
          </div>
          <button className={classes.loginButton}>Войти</button>
          <div className={classes.headerControls}>
            <i>
              <Heart />
            </i>
            <img src="/icons/Vector.svg" alt="Весы" />
            <i>
              <ShoppingCart />
            </i>
          </div>
        </div>
      </div>
    </header>
  );
};
