import { logout } from '@/actions';
import Welcome from './_components/welcome';
import ButtonPrimary from '@/components/button-primary';

export default function Dashboard() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <Welcome />
        <form action={logout} className="w-24">
          <ButtonPrimary color="red" buttonShadow="button-shadow-logout">
            Logout
          </ButtonPrimary>
        </form>
      </div>
    </main>
  );
}
