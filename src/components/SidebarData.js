import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'People',
        path: '/people',
        icon: <BsIcons.BsPeopleFill />,
        cName: 'nav-text'
    },
    {
        title: 'Research',
        path: '/research',
        icon: <GiIcons.GiSeatedMouse />,
        cName: 'nav-text'
    },
    {
        title: 'Publications',
        path: '/publications',
        icon: <GiIcons.GiArchiveResearch />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <IoIcons.IoMdContact />,
        cName: 'nav-text'
    }
]
