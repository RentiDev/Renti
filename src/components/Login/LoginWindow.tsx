import Link from "next/link";

const LoginWindow = () => {
    const handleLoginFormSubmit = (e) => {
      e.preventDefault();
      // Add your login form submission logic here
    };
  
    return (
      <div className="flex justify-center items-center fixed inset-0 bg-gradient-to-br from-[#C4DAFC] to-[#356dbe]">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-lufgaExtraBold text-gray-900 text-center mb-6">
            Log in to your account
          </h2>
          <form onSubmit={handleLoginFormSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-lufgaMedium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border-gray-300 font-lufgaMedium rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-lufgaMedium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full border-gray-300 font-lufgaMedium rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm font-lufgaMedium text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-lufgaMedium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-lufgaMedium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6 font-lufgaMedium text-sm text-center">
            Don't have an account?{" "}
            <Link href="/signup" className="font-lufgaMedium text-indigo-600 hover:text-indigo-500">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default LoginWindow;