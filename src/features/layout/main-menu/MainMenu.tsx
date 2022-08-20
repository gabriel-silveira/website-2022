import React from 'react';
import styles from './MainMenu.module.css';
import MainMenuItem from './main-menu-item/MainMenuItem';

const profilePic = 'https://media-exp1.licdn.com/dms/image/C4E03AQGA0-Stkip9SQ/profile-displayphoto-shrink_800_800/0/1654720580261?e=1666224000&v=beta&t=_ENm1C88cgmu3OVx36xORd1Z6OyVy4rO6Fid_P4voj0';

const menuItems = [
  {
    label: 'About',
  },
  {
    label: 'Experience',
  },
  {
    label: 'Education',
  },
  {
    label: 'Skills',
  },
  {
    label: 'Contact',
  },
];

function MainMenu() {
  return (
    <div className={`${styles.mainMenu} bg-slate-50 text-center`}>
      <img
        src={profilePic}
        className="rounded-full inline-block mt-6 mb-5 border-8"
        width="140px"
      />

      {menuItems.map((item) => (
        <MainMenuItem label={item.label} />
      ))}
    </div>
  );
}

export default MainMenu;
