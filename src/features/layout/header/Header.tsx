import React from 'react';

function Header() {
  return (
    <header className="absolute top-0 w-screen py-3 px-5 bg-slate-100">
      <b>Gabriel Silveira</b> | Front-end Developer

      <div className="absolute top-0 right-0 py-2">
        <i className="devicon-github-original colored text-2xl mr-4"></i>
        <i className="devicon-linkedin-plain colored text-2xl mr-5"></i>
      </div>
    </header>
  )
}

export default Header
