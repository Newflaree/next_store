export const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)]">
      <svg className="animate-spin h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 10h2zm2 5.291l1.416 1.416A8 8 0 014 12H2c0 2.21.896 4.21 2.343 5.657z" style={{ color: 'var(--primary)' }}></path>
      </svg>
    </div>
  );
}
