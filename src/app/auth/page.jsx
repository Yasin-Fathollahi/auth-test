'use client';
import { useRouter } from 'next/navigation';
import AuthForm from './_components/auth-form';
import authImage from '@/assets/undraw_fingerprint-login_19qv.svg';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Auth() {
  const router = useRouter();
  useEffect(() => {
    const hasCookie = document.cookie.includes('isLoggedIn');

    if (hasCookie) {
      router.push('/dashboard');
      return;
    }
    localStorage.removeItem('user');
  });

  return (
    <main className="lg:flex lg:justify-center">
      <div className="h-screen flex flex-col justify-center lg:w-2/3">
        <div className="p-8 sm:flex items-center gap-4 ">
          <div className="sm:w-full sm:mb-8">
            <h1 className="text-center font-bold text-3xl mb-8">Login</h1>
            <AuthForm />
          </div>
          <div className="hidden bg-indigo-500 sm:flex w-full h-full justify-center sm:py-20 rounded-xl">
            <Image
              src={authImage}
              alt="a woman holding fingerprint illustration"
              priority
              className="w-1/2 rotate-y-180"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
