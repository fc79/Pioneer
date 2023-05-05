import React, { useState } from 'react';
import styles from './SideMenu.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { SideMenuData } from './SideMenuData';
import { default as Settings } from '../../Icons/MenuIcons/Settings.svg';
import { default as Pioneer } from '../../Icons/MenuIcons/PioneerIcon.svg';
import { default as Line } from '../../Icons/MenuIcons/Line.svg';
const SideMenu = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const onMouseEnter = (event) => setCollapsed(false);
  const onMouseLeave = (event) => setCollapsed(true);

  const onItemClick = (event) => navigate(event.target.dataset.key);
  return (
    <div className={`${props.className} ${styles.base}`}>
      <nav
        className={`${styles.container} ${
          collapsed ? styles.collapsed : styles.expand
        }  ${
          collapsed ? styles['collapsed-animation'] : styles['expand-animation']
        }`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div
          className={`${styles.width} ${styles.pioneer} ${
            collapsed ? styles['pioneer-collapsed'] : styles['pioneer-expand']
          }`}
        >
          <div
            className={
              collapsed
                ? styles['pioneer-collapsed-li']
                : styles['pioneer-expand-li']
            }
          >
            <span>
              <img src={Pioneer} alt="" />
            </span>
            <span>Pioneer</span>
          </div>
        </div>
        <img src={Line} alt="" />
        <ul className={`${styles.width}`}>
          {SideMenuData.map((item) => {
            return (
              <li
                onClick={onItemClick}
                data-label={item.key}
                key={item.key}
                className={
                  item.key === location.pathname ? styles['menu-items'] : ''
                }
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
        {/* <div
          className={`${styles.width} ${styles.pioneer} ${
            collapsed ? styles['pioneer-collapsed'] : styles['pioneer-expand']
          }`}
        >
          <div
            className={
              collapsed
                ? styles['pioneer-collapsed-li']
                : styles['pioneer-expand-li']
            }
          >
            <span>
              <img src={Settings} alt="" />
            </span>
            <span>Settings</span>
          </div>
        </div> */}
      </nav>
    </div>
  );
};
export default SideMenu;
