'use client';

import { useEffect, useState } from 'react';

export default function Welcome() {
  const [userData, setUserData] = useState();
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem('user')));
  }, []);

  return (
    <h1 className="text-center text-3xl font-semibold p-8">
      Welcome {userData?.fullname}
    </h1>
  );
}
