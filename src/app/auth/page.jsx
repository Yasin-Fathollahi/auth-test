import { validatePhoneNumber } from '@/utils/validation';
import AuthForm from './_components/auth-form';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Auth() {
  const cookieStore = await cookies();
  if (cookieStore.get('isLoggedIn')) {
    redirect('/dashboard');
  }
  return (
    <main>
      <div className="p-8">
        <div className="hidden bg-indigo-300 "></div>
        <div>
          <h1 className="text-center font-bold text-3xl mb-8">Login</h1>
          <AuthForm />
        </div>
      </div>
    </main>
  );
}
