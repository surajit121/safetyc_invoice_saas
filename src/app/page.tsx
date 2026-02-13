import Link from 'next/link'
import { ArrowRight, CheckCircle, FileText, Globe, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-slate-950/50 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">InvoiceSaaS</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Features</a>
                <a href="#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Pricing</a>
                <Link href="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Sign in</Link>
                <Link
                  href="/signup"
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200 transition-all"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-500 to-purple-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
              Invoicing platform for modern businesses
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Automate your billing, track expenses, and get paid faster with our comprehensive financial management suite. Built for freelancers and startups.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/signup"
                className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
              >
                Start free trial
              </Link>
              <a href="#features" className="text-sm font-semibold leading-6 text-white group flex items-center gap-1">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 sm:py-32 bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-400 text-center">Faster Billing</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-center">Everything you need to scale</p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-white/5 bg-slate-950/50 transition-all hover:border-indigo-500/50 group">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 ring-1 ring-indigo-500/20 transition-all group-hover:scale-110">
                    <FileText className="h-6 w-6 text-indigo-400" />
                  </div>
                  <dt className="text-lg font-semibold leading-7 text-white">Smart Invoicing</dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-400">
                    Create professional invoices in seconds with our customizable templates and automated numbering.
                  </dd>
                </div>
                <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-white/5 bg-slate-950/50 transition-all hover:border-indigo-500/50 group">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 ring-1 ring-indigo-500/20 transition-all group-hover:scale-110">
                    <Shield className="h-6 w-6 text-indigo-400" />
                  </div>
                  <dt className="text-lg font-semibold leading-7 text-white">Secure Payments</dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-400">
                    Integrated with Razorpay for secure, fast, and reliable payment processing from around the globe.
                  </dd>
                </div>
                <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-white/5 bg-slate-950/50 transition-all hover:border-indigo-500/50 group">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 ring-1 ring-indigo-500/20 transition-all group-hover:scale-110">
                    <Globe className="h-6 w-6 text-indigo-400" />
                  </div>
                  <dt className="text-lg font-semibold leading-7 text-white">Multi-Currency</dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-400">
                    Bill your clients in their local currency with automated exchange rate updates for 100+ countries.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative isolate py-24 px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl bg-indigo-600 px-6 py-16 sm:px-16 sm:py-24 text-center overflow-hidden relative shadow-2xl transition-all hover:scale-[1.01]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-700 opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to automate your billing?</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-100">
                Join thousands of businesses that trust us for their invoicing and financial workflows.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/signup"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
                >
                  Get started now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-slate-950 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-indigo-600">
              <FileText className="h-3 w-3 text-white" />
            </div>
            <span className="text-lg font-bold">InvoiceSaaS</span>
          </div>
          <p className="text-sm text-slate-400">
            &copy; 2026 InvoiceSaaS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
