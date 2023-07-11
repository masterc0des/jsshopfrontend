import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/gr'

export const SidebarData = [
    {
        title: 'Startseite',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Stöbern',
        path: '/stoebern',
        icon: <AiIcons.AiOutlineSearch />,
        cName: 'nav-text'
    },
    {
        title: 'Kontakt',
        path: '/kontakt',
        icon: <AiIcons.AiOutlineContacts/>,
        cName: 'nav-text'
    },
    {
        title: 'Über uns',
        path: '/ueberuns',
        icon: <AiIcons.AiFillInfoCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Log-In',
        path: '/login',
        icon: <AiIcons.AiOutlineLogin />,
        cName: 'nav-text'
    },
    {
        title: 'Registrieren',
        path: '/registrieren',
        icon: <AiIcons.AiOutlineLogin />,
        cName: 'nav-text'
    },
]