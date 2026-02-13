export default function SignupSuccessPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-h-screen max-w-md space-y-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-xl text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/10 ring-1 ring-indigo-500/20">
                    <svg
                        className="h-8 w-8 text-indigo-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
                    Check your email
                </h2>
                <p className="mt-4 text-slate-400">
                    We've sent a magic link to your email address. Please follow the link to verify your account and get started.
                </p>
                <div className="mt-8">
                    <a
                        href="/login"
                        className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300"
                    >
                        Go to login
                        <svg
                            className="ml-2 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
