import React from 'react';
import styles from './sidebar.module.css';
import { FaUserFriends } from "react-icons/fa";
import { GoSponsorTiers } from "react-icons/go";
import MenuLinks from './menuLinks/MenuLinks';
import { GiPublicSpeaker } from "react-icons/gi";
import { FaUserTie } from "react-icons/fa";
import {
  MdDashboard,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { auth, signOut } from '@/app/auth';

async function Sidebar() {

  const { user } = await auth();

  const menuItems = [
    {
      title: "Pages",
      list:  [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title : "Delegates",
          path : "/dashboard/delegates",
          icon : <FaUserFriends />
        },
        {
          title : "Sponsors",
          path : "/dashboard/sponsors",
          icon : <GoSponsorTiers />
        },
        {
          title : "Speakers",
          path : "/dashboard/speakers",
          icon : <GiPublicSpeaker />
        },
        {
          title : "Nominies",
          path : "/dashboard/nominees",
          icon : <FaUserTie />
        },
      ],
    },
    // {
    //   title: "Analytics",
    //   list: [
    //     {
    //       title: "Revenue",
    //       path: "/dashboard/revenue",
    //       icon: <MdWork />,
    //     },
    //     {
    //       title: "Reports",
    //       path: "/dashboard/reports",
    //       icon: <MdAnalytics />,
    //     },
    //     {
    //       title: "Teams",
    //       path: "/dashboard/teams",
    //       icon: <MdPeople />,
    //     },
    //   ],
    // },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img className={styles.userImage} src={user.img || "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Pic.png"} width={50} height={50} alt="" />
        <div className={styles.userDetails}>
            <span className={styles.username}>{user.username}</span>
            <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLinks item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>  
      <form action={async () => {
        "use server"
        await signOut();
      }}>
        <button className={styles.logout}>
          <MdLogout/> Log Out
        </button>
      </form>
    </div>
  )
}

export default Sidebar