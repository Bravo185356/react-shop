import classes from "./Header.module.scss";
import classNames from "classnames";
import { Arrow } from "../../UI/Arrow";

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classNames(classes.headerRow, classes.headerRow1)}>
        <div className={classes.headerContainer}>
          <div className="logo">LOGO</div>
          <ul className={classes.menu}>
            <li className="menu-item">Про нас</li>
            <li className="menu-item">Акции</li>
            <li className="menu-item">Блог</li>
            <li className="menu-item">Контакты</li>
            <li className="menu-item">Оплата</li>
            <li className="menu-item">Гарантия</li>
            <li className="menu-item">Тех поддержка</li>
          </ul>
          <div className={classes.language}>
            <span>RU</span>
            <span>|</span>
            <span>EN</span>
          </div>
        </div>
      </div>
      <div className={classNames(classes.headerRow, classes.headerRow2)}>
        <div className={classes.headerContainer}>
          <button className={classes.catalogButton}>
            Каталог
            <Arrow color="white" />
          </button>
          <div className={classes.inputWrapper}>
            <input placeholder="Поиск" />
            <img src="/icons/search.svg" alt="Поиск" />
          </div>
          <div className={classes.call}>
            <img src="icons/phone-call.svg" alt="Телефон" />
            <div>
              <div className="phone-number">0509004279</div>
              <div className={classes.phoneNote}>Бесплатно по Украине</div>
            </div>
            <Arrow />
          </div>
          <button className={classes.loginButton}>Войти</button>
          <div className={classes.headerControls}>
            <img src="/icons/heart.svg" alt="Сердце" />
            <img src="/icons/Vector.svg" alt="Весы" />
            <img src="/icons/shopping-cart.svg" alt="Корзина" />
          </div>
        </div>
      </div>
    </header>
  );
};
