export default function ButtonPrimary({
  color,
  isPending,
  children,
  buttonShadow,
}) {
  const colorMap = {
    red: 'bg-red-500 active:bg-red-600',
    indigo: 'bg-indigo-500 active:bg-indigo-600',
  };

  const classes = `
  transition-all hover:cursor-pointer 
  inline-block w-full h-10 text-white rounded-lg
  -translate-y-1 active:translate-y-1 duration-75
  ${colorMap[color] || 'bg-gray-500 active:bg-gray-600'}
`;

  return (
    <div className="relative">
      <div
        className={`absolute ${buttonShadow} w-full h-10 rounded-lg -translate-y-1`}
      ></div>
      <button disabled={isPending} className={classes}>
        {!isPending ? children : <div className="loader mx-auto" />}
      </button>
    </div>
  );
}
