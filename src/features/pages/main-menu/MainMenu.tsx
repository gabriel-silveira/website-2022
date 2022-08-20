import React from 'react';
import styles from './MainMenu.module.css';

function MainMenu() {
  const profilePic = 'https://www.gabrielsilveira.com.br/img/gabriel-silveira-profile.a0973d97.png'
  return (
    <div className={`${styles.mainMenu} bg-slate-50 text-center`}>
      <img
        src={profilePic}
        className="rounded-full inline-block mt-6 border-8"
        width="140px"
      />
    </div>
  )
}

export default MainMenu
