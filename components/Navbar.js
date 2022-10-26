import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">
          홈페이지
        </Link>

        <Link href="/about">
          공지사항
        </Link>

        <Link href="/profile">
          축제소개
        </Link>

        <Link href="/community">
          커뮤니티
        </Link>

        <Link href="/login">
          로그인
        </Link>
      </div>
    </div>
  );
}
