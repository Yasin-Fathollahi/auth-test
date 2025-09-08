'use client';
import { useActionState } from 'react';
import { login } from '@/actions';
export default function AuthForm() {
  const [state, formAction, isPending] = useActionState(login, { error: null });

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
          placeholder="09xxx, +98xxx, 00989xxx"
          required
          className="border-2 border-indigo-200 px-4 py-2 rounded-lg placeholder:text-sm focus:outline-indigo-400"
          autoComplete="on"
        />
        {state.error && (
          <p className="text-sm text-red-500 font-semibold">{state.error}</p>
        )}
      </div>
      <div className="relative">
        <div className="absolute button-shadow w-full h-10 rounded-lg -translate-y-1"></div>
        <button
          disabled={isPending}
          className="transition-all hover:cursor-pointer active:bg-indigo-600 inline-block w-full h-10 bg-indigo-500 text-white rounded-lg -translate-y-1 active:translate-y-1 duration-75"
        >
          {!isPending ? 'Submit' : <div className="loader mx-auto" />}
        </button>
      </div>
    </form>
  );
}
