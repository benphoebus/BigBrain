import React from 'react';
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IconName from 'react-icons/vsc';

const SidebarData = [
  {
    title: 'Login',
    path: '/Login',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Register',
    path: '/Register',
    icon: <IconName.VscAccount />,
    cName: 'nav-text',
  },
];

export default SidebarData;
