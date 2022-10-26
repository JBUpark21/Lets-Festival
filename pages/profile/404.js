import Link from 'next/link';

export default function PageNouFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <h3>페이지가 없습니다. 확인해보세요.</h3>
      <Link href="/">홈으로 돌아가기!</Link>
    </div>
  );
}
