import { useRouter } from 'next/router';
import React from 'react';

export default function UserProfile() {
  const router = useRouter();
  console.log(router.query);
  const { username } = router.query;

  return (
    <div>
      <h1>UserProfile</h1>
      <p>Hello</p>
    </div>
  );
}
