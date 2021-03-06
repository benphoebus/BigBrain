import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IconName from 'react-icons/vsc';

const SidebarData = [
  {
    title: 'Login',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Register',
    path: '/register',
    icon: <IconName.VscAccount />,
    cName: 'nav-text',
  },
];

export default SidebarData;
