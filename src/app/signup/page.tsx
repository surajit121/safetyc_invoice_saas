import { signup } from '@/app/auth/actions'

export default async function SignupPage(props: {
    searchParams: Promise<{ error?: string }>
}) {
    const searchParams = await props.searchParams
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-h-screen max-w-md space-y-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-xl transition-all hover:border-slate-700">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
                        Create an account
                    </h2>
                    <p className="mt-2 text-center text-sm text-slate-400">
                        Start your free trial today
                    </p>
                </div>
                <form className="mt-8 space-y-6" action={signup}>
                    <div className="space-y-4 rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" title="password label" className="block text-sm font-medium text-slate-300">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="mt-1 block w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    {searchParams.error && (
                        <div className="rounded-lg bg-red-500/10 p-3 text-sm text-red-400 border border-red-500/20">
                            {searchParams.error}
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white transition-all hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
                <p className="mt-2 text-center text-sm text-slate-400">
                    Already have an account?{' '}
                    <a href="/login" className="font-medium text-indigo-400 hover:text-indigo-300">
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    )
}
