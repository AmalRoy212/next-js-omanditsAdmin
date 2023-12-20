import Sidebar from '../ui/dashboard/sidebar/Sidebar'
import Navbar from '../ui/dashboard/navbar/navbar';
import styles from "../ui/dashboard/dashboard.module.css";

function Layout({children}) {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <Sidebar/>
        </div>
        <div className={styles.content}>
            <Navbar/>   
            {children}
        </div>
    </div>
  )
}

export default Layout