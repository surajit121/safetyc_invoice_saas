import { CreditCard, Clock, FileCheck, Plus } from 'lucide-react'

export default function DashboardLoading() {
    return (
        <div className="space-y-8 animate-pulse">
            {/* Header with Actions Skeleton */}
            <div className="flex items-center justify-between">
                <div>
                    <div className="h-9 w-64 bg-slate-800 rounded-lg mb-2"></div>
                    <div className="h-4 w-96 bg-slate-800/50 rounded-lg"></div>
                </div>
                <div className="h-10 w-32 bg-slate-800 rounded-lg"></div>
            </div>

            {/* Stats Grid Skeleton */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="rounded-2xl border border-white/5 bg-slate-900/50 p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-between space-y-0 pb-2">
                            <div className="h-4 w-24 bg-slate-800 rounded"></div>
                            <div className="h-4 w-4 bg-slate-800 rounded"></div>
                        </div>
                        <div className="space-y-2 mt-2">
                            <div className="h-8 w-32 bg-slate-800 rounded"></div>
                            <div className="h-3 w-20 bg-slate-800/50 rounded"></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity Skeleton */}
            <div className="rounded-2xl border border-white/5 bg-slate-900/50 p-6 backdrop-blur-sm">
                <div className="h-6 w-32 bg-slate-800 rounded mb-4"></div>
                <div className="h-32 w-full bg-slate-800/20 rounded-xl border-2 border-dashed border-white/5"></div>
            </div>
        </div>
    )
}
