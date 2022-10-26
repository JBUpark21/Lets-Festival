import React from 'react';

export default function about() {
  const name = 'JBPARK21';
  return (
    <div>
      <h1> About Page</h1>
      <li>웹 어플리케이션 보안 예제사이트 WAS입니다.</li>
      <li> 개발자의 프로필과 코인에 대한 정보 페이지가 있습니다.</li>

      <h2> 개발 언어와 프레임워크 소개</h2>
      <li>Next.js를 사용했으며, File-based routing을 제공합니다. </li>
      <li>React를 사용하며 JSX 문법을 이용했습니다. </li>
      <li>Tailwind CSS를 사용한 웹 사이트입니다. </li>
      <li>이 웹사이트의 개발자는 {name} 입니다.</li>
      <li>github에 이 웹 사이트의 코드가 올라가있습니다.</li>
    </div>
  );
}
