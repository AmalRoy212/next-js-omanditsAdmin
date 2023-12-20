import React from 'react';
import styles from './sidebar.module.css';
import { FaUserFriends } from "react-icons/fa";
import { GoSponsorTiers } from "react-icons/go";
import MenuLinks from './menuLinks/MenuLinks';
import { GiPublicSpeaker } from "react-icons/gi";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

function Sidebar() {

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
          title : "Products",
          path : "/dashboard/products",
          icon : <FaUserFriends />
        },
        {
          title : "Users",
          path : "/dashboard/users",
          icon : <FaUserFriends />
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
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
        <img className={styles.userImage} src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Pic.png" width={50} height={50} alt="" />
        <div className={styles.userDetails}>
            <span className={styles.username}>John Doe</span>
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
    </div>
  )
}

export default Sidebar