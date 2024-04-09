import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { IMAGES, MainLogoSvg, SideBarNavItem } from '../../components/index';
import { SIDE_BAR_ITEMS } from '../../const/sideBarItems';
import '../../styles/sidebar.css';

export const Root = () => {
  const { pathname } = useLocation();

  return (
    <>
      <aside id="sidebar" className="sidebar">
        <div className="sidebar__head">
          <MainLogoSvg />

          <p className="sidebar__title">
            Dashboard<span className="sidebar__sub-title">v.01</span>
          </p>
        </div>

        <nav className="sidebar__nav">
          <ul>
            {SIDE_BAR_ITEMS.map(({ id, link, icon, title }) => (
              <SideBarNavItem key={id} link={link} icon={icon} title={title} pathname={pathname} />
            ))}
          </ul>
        </nav>

        <figure className="sidebar__user">
          <img className="sidebar__user-img" src={IMAGES.image} alt="Evano user photo"></img>

          <figcaption className="sidebar__user-caption">
            Evano <span className="sidebar__user-role">Project Manager</span>
          </figcaption>
        </figure>
      </aside>

      <div id="detail" className="main">
        <header className="main__header">Hello Evano 👋🏼,</header>

        <Outlet />
      </div>
    </>
  );
};
