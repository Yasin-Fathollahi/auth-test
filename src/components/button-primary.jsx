export default function ButtonPrimary({ color, isPending, children }) {
  return (
    <div className="relative">
      <div className="absolute button-shadow w-full h-10 rounded-lg -translate-y-1"></div>
      <button
        disabled={isPending}
        className={`transition-all hover:cursor-pointer active:bg-${color}-600 inline-block w-full h-10 bg-${color}-500 text-white rounded-lg -translate-y-1 active:translate-y-1 duration-75`}
      >
        {!isPending ? children : <div className="loader mx-auto" />}
      </button>
    </div>
  );
}
