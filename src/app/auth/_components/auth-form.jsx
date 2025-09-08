import { useActionState } from 'react';
import { login } from '@/actions';
import ButtonPrimary from '@/components/button-primary';
export default function AuthForm() {
  const [state, formAction, isPending] = useActionState(login, {
    error: null,
    data: null,
  });

  if (state.data) {
    localStorage.setItem('user', JSON.stringify(state.data));
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-sm">
          Phone Number
        </label>
        <input
          type="number"
          id="phone"
          name="phone"
          placeholder="09xxx, +98xxx, 00989xxx"
          required
          className="border-2 border-indigo-200 px-4 py-2 rounded-lg placeholder:text-sm focus:outline-indigo-400"
          autoComplete="on"
        />
        {state.error && (
          <p className="text-sm text-red-500 font-semibold">{state.error}</p>
        )}
      </div>
      <ButtonPrimary
        color="indigo"
        isPending={isPending}
        buttonShadow="button-shadow-login"
      >
        Submit
      </ButtonPrimary>
    </form>
  );
}
