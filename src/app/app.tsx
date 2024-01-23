export function App() {
  return (
    <div className="min-h-dvh flex flex-col gap-8">
      <header className="flex items-center shadow-sm bg-neutral-100 dark:bg-neutral-950 min-h-14 px-safe-offset-4 pt-safe dark:shadow-black"></header>

      <main className="flex-1 flex flex-col items-center justify-center py-4 px-safe-offset-4">
        <h1 className="mb-4 text-primary-500 dark:text-primary-400">
          Project Template
        </h1>
      </main>

      <footer className="flex flex-col items-center justify-center gap-4 px-safe-offset-4 pt-4 pb-safe-offset-4">
        <p className="text-neutral-500 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} Project Template. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
