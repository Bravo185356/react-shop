import classes from "./MainBlock.module.scss";
import "./MainBlock.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "./swiperStyles.scss";

export const MainBlock = () => {
  return (
    <div className={classes.mainBlock}>
      <div className={classes.mainContainer}>
        <div className={classes.slider}>
          <Swiper
            modules={[Navigation]}
            navigation={{ nextEl: `.${classes.nextButton}`, prevEl: `.${classes.prevButton}` }}
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img className={classes.slideImage} src="images/Rectangle 4.jpg" alt="Картинка" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={classes.slideImage} src="images/Rectangle 4.jpg" alt="Картинка" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={classes.slideImage} src="images/Rectangle 4.jpg" alt="Картинка" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={classes.slideImage} src="images/Rectangle 4.jpg" alt="Картинка" />
            </SwiperSlide>
            <div className={classes.prevButton}>
              <img src="/icons/Group 37.svg" alt="Стрелка" />
            </div>
            <div className={classes.nextButton}>
              <img src="/icons/Group 38.svg" alt="Стрелка" />
            </div>
          </Swiper>
        </div>
        <div className={classes.popularCategories}>
          <a href="/" className={classes.popularCategoryItem}>
            <img src="/images/Rectangle 6.jpg" alt="Популярная категория" />
          </a>
          <a href="/" className={classes.popularCategoryItem}>
            <img src="/images/Rectangle 6.jpg" alt="Популярная категория" />
          </a>
          <a href="/" className={classes.popularCategoryItem}>
            <img src="/images/Rectangle 6.jpg" alt="Популярная категория" />
          </a>
          <a href="/" className={classes.popularCategoryItem}>
            <img src="/images/Rectangle 6.jpg" alt="Популярная категория" />
          </a>
        </div>
        <div className={classes.socials}>
          <a className={classes.socialsItem} href="https://www.instagram.com/">
            <img src="/icons/instagram.svg" alt="instagram" />
            <span>41000</span>
          </a>
          <a className={classes.socialsItem} href="https://www.facebook.com/">
            <img src="/icons/facebook.svg" alt="facebook" />
            <span>41000</span>
          </a>
          <a className={classes.socialsItem} href="https://www.discord.com/">
            <img src="/icons/discord.svg" alt="discord" />
            <span>41000</span>
          </a>
          <a className={classes.socialsItem} href="https://www.youtube.com/">
            <img src="/icons/youtube.svg" alt="Youtube" />
            <span>41000</span>
          </a>
        </div>
      </div>
    </div>
  );
};
