export default function LoginLoading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-xl animate-pulse">
                <div className="space-y-4">
                    <div className="mx-auto h-8 w-48 bg-slate-800 rounded-lg"></div>
                    <div className="mx-auto h-4 w-32 bg-slate-800/50 rounded-lg"></div>
                </div>

                <div className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="h-4 w-24 bg-slate-800 rounded"></div>
                            <div className="h-10 w-full bg-slate-800/50 rounded-lg"></div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-4 w-24 bg-slate-800 rounded"></div>
                            <div className="h-10 w-full bg-slate-800/50 rounded-lg"></div>
                        </div>
                    </div>

                    <div className="h-10 w-full bg-indigo-600/20 rounded-lg"></div>
                </div>

                <div className="mx-auto h-4 w-48 bg-slate-800/30 rounded mt-6"></div>
            </div>
        </div>
    )
}
