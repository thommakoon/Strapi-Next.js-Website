import Header from './Header';
import Footer from './Footer';
import styles from '../styles/layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
}