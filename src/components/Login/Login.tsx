export default function Login() {
  return (
    <section className="h-screen bg-gradient-to-r from-white via-emerald-50 to-emerald-100 px-8 py-16">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Logga in | Loopr Studio
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              E-postadress
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
                           outline-1 outline-gray-300 placeholder:text-gray-400 
                           focus:outline-2 focus:outline-emerald-500"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Lösenord
              </label>
              <a
                href="#"
                className="text-sm font-semibold text-emerald-600 hover:text-emerald-500"
              >
                Glömt lösenord?
              </a>
            </div>

            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 
                           outline-1 outline-gray-300 placeholder:text-gray-400 
                           focus:outline-2 focus:outline-emerald-500"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 
                         text-sm/6 font-semibold text-white shadow-sm 
                         hover:bg-emerald-500 focus-visible:outline-2 
                         focus-visible:outline-offset-2 focus-visible:outline-emerald-600 cursor-pointer"
            >
              Logga in
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
