import React from 'react';
import classes from '../menu/menu.module.css';
import panze1Image from "../../assets/pan1.jpeg";
import panze2Image from "../../assets/pan2.jpeg";
import panze3Image from "../../assets/pan3.jpeg";
import panze4Image from "../../assets/pan4.jpeg";
import panze5Image from "../../assets/pan5.jpeg";
import MainHeader from '../header/MainHeader';

const Menu = () => {
  return (
    <div>
      <MainHeader></MainHeader>
    
    <section id='menu' className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Menu</h2>
        <div className={classes.menuItems}>
          <div className={classes.menuItem}>
            <img src={panze1Image} alt="panze1" />
            <div className={classes.menuItemDetails}>
              <h3 className={classes.menuItemTitle}>Panzerotti Ranchero</h3>
              <p className={classes.menuItemDescription}>Delicioso panzerotti con queso y salchicha</p>
              <p className={classes.menuItemPrice}>$4.000</p>
            </div>
          </div>
          <div className={classes.menuItem}>
            <img src={panze2Image} alt="panze2" />
            <div className={classes.menuItemDetails}>
              <h3 className={classes.menuItemTitle}>Panzerotti Vegano</h3>
              <p className={classes.menuItemDescription}>Delicioso panzerotti con especias.</p>
              <p className={classes.menuItemPrice}>$6.000</p>
            </div>
          </div>
          <div className={classes.menuItem}>
            <img src={panze3Image} alt="panze3" />
            <div className={classes.menuItemDetails}>
              <h3 className={classes.menuItemTitle}>Panzerotti Jamonado</h3>
              <p className={classes.menuItemDescription}>Delicioso panzerotti con jamon y queso</p>
              <p className={classes.menuItemPrice}>$7.000</p>
            </div>
          </div>
          <div className={classes.menuItem}>
            <img src={panze4Image} alt="panze4" />
            <div className={classes.menuItemDetails}>
              <h3 className={classes.menuItemTitle}>Panzerotti Quesudo</h3>
              <p className={classes.menuItemDescription}>Delicioso panzerotti con queso chedar</p>
              <p className={classes.menuItemPrice}>$4.000</p>
            </div>
          </div>
          <div className={classes.menuItem}>
            <img src={panze5Image} alt="panze5" />
            <div className={classes.menuItemDetails}>
              <h3 className={classes.menuItemTitle}>Panzerotti Taco</h3>
              <p className={classes.menuItemDescription}>Delicioso panzerotti echo de taco</p>
              <p className={classes.menuItemPrice}>$5.500</p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    </div>
  );
};

export default Menu;
