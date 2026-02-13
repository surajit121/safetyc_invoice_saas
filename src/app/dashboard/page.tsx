import { Plus, CreditCard, Clock, FileCheck } from 'lucide-react'

export default function DashboardPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-300">
            {/* Header with Actions */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Financial Overview</h2>
                    <p className="text-slate-400">Welcome to your dashboard. Here's a summary of your activity.</p>
                </div>
                <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20">
                    <Plus className="h-4 w-4" />
                    Create Invoice
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-white/5 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-indigo-500/30">
                    <div className="flex items-center justify-between space-y-0 pb-2">
                        <p className="text-sm font-medium text-slate-400">Total Revenue</p>
                        <CreditCard className="h-4 w-4 text-indigo-400" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-green-400">+20.1% from last month</p>
                    </div>
                </div>
                <div className="rounded-2xl border border-white/5 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-indigo-500/30">
                    <div className="flex items-center justify-between space-y-0 pb-2">
                        <p className="text-sm font-medium text-slate-400">Pending</p>
                        <Clock className="h-4 w-4 text-amber-400" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold">$2,350.00</div>
                        <p className="text-xs text-slate-400">12 invoices pending</p>
                    </div>
                </div>
                <div className="rounded-2xl border border-white/5 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-indigo-500/30">
                    <div className="flex items-center justify-between space-y-0 pb-2">
                        <p className="text-sm font-medium text-slate-400">Paid Invoices</p>
                        <FileCheck className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold">+12,234</div>
                        <p className="text-xs text-green-400">+19% from last month</p>
                    </div>
                </div>
                <div className="rounded-2xl border border-white/5 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-indigo-500/30">
                    <div className="flex items-center justify-between space-y-0 pb-2">
                        <p className="text-sm font-medium text-slate-400">Active Clients</p>
                        <Plus className="h-4 w-4 text-indigo-400" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-indigo-400">+201 since last hour</p>
                    </div>
                </div>
            </div>

            {/* Recent Activity (Placeholder) */}
            <div className="rounded-2xl border border-white/5 bg-slate-900/50 p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4">Recent Invoices</h3>
                <div className="text-sm text-slate-400 text-center py-12 border-2 border-dashed border-white/5 rounded-xl">
                    No invoices found. <br />
                    <button className="mt-4 text-indigo-400 hover:underline">Create your first invoice</button>
                </div>
            </div>
        </div>
    )
}
