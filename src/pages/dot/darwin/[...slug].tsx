import React from 'react';
import { useRouter } from 'next/router';

const base = 'https://raw.githubusercontent.com/d3dr5v/dot/refs/heads/master/darwin/';

export const Arch = () => {
  const router = useRouter();
  const  { slug } = router.query;

  if (typeof window !== 'undefined') {
    window.location.href = `${base}${slug}`;
  }

  return (
    <div>redirecting...</div>
  );
};

export default Arch;
