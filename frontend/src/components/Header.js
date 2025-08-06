import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import styles from '../styles/header.module.css';
import { useState } from 'react';

export default function Header() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLocale = router.locale === 'en' ? 'th' : 'en';
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoNav}>
        <Link href="/" locale={router.locale}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </Link>

        <button className={styles.mobileToggle} onClick={toggleMobileMenu}>
          ☰
        </button>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.show : ''}`}>
          <Link href="/" className={styles.link}>{t('home')}</Link>
          <Link href="/about" className={styles.link}>{t('about')}</Link>
          <Link href="/contact" className={styles.link}>{t('contact')}</Link>
        </nav>
      </div>

      <div className={styles.language}>
        <button onClick={toggleLanguage}>
          {t('language')} ⌄
        </button>
      </div>
    </header>
  );
}
