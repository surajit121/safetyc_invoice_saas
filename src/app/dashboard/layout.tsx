import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import {
    LayoutDashboard,
    FileText,
    Users,
    Package,
    Settings,
    LogOut,
    Plus,
    CreditCard,
    Bell
} from 'lucide-react'
import { logout } from '@/app/auth/actions'

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    return (
        <div className="flex h-screen bg-slate-950 text-white overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 bg-slate-900/50 flex flex-col">
                <div className="p-6">
                    <Link href="/dashboard" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
                            <FileText className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">InvoiceSaaS</span>
                    </Link>
                </div>

                <nav className="flex-grow px-4 space-y-2">
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-3 rounded-lg bg-indigo-600/10 px-3 py-2 text-indigo-400 transition-all hover:bg-indigo-600/20"
                    >
                        <LayoutDashboard className="h-5 w-5" />
                        <span className="font-medium">Dashboard</span>
                    </Link>
                    <Link
                        href="/dashboard/invoices"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-400 transition-all hover:bg-white/5 hover:text-white"
                    >
                        <FileText className="h-5 w-5" />
                        <span className="font-medium">Invoices</span>
                    </Link>
                    <Link
                        href="/dashboard/customers"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-400 transition-all hover:bg-white/5 hover:text-white"
                    >
                        <Users className="h-5 w-5" />
                        <span className="font-medium">Customers</span>
                    </Link>
                    <Link
                        href="/dashboard/items"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-400 transition-all hover:bg-white/5 hover:text-white"
                    >
                        <Package className="h-5 w-5" />
                        <span className="font-medium">Items</span>
                    </Link>
                </nav>

                <div className="p-4 border-t border-white/5 space-y-2">
                    <Link
                        href="/dashboard/settings"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-400 transition-all hover:bg-white/5 hover:text-white"
                    >
                        <Settings className="h-5 w-5" />
                        <span className="font-medium">Settings</span>
                    </Link>
                    <form action={logout}>
                        <button
                            type="submit"
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-slate-400 transition-all hover:bg-red-500/10 hover:text-red-400"
                        >
                            <LogOut className="h-5 w-5" />
                            <span className="font-medium">Logout</span>
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow overflow-y-auto bg-slate-950 flex flex-col">
                {/* Top Header */}
                <header className="h-16 border-b border-white/5 px-8 flex items-center justify-between sticky top-0 bg-slate-950/50 backdrop-blur-xl z-20">
                    <h1 className="text-sm font-medium text-slate-400 capitalize">
                        Overview
                    </h1>
                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-lg hover:bg-white/5 text-slate-400">
                            <Bell className="h-5 w-5" />
                        </button>
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border border-white/10 flex items-center justify-center text-xs font-bold">
                            {user.email?.charAt(0).toUpperCase()}
                        </div>
                    </div>
                </header>

                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
