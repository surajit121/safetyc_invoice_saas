'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
    const supabase = await createClient()

    // type-casting here for convenience
    // in real apps, you should use a library like cod to validate data
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        redirect('/login?error=' + encodeURIComponent(error.message))
    }

    redirect('/dashboard')
}

export async function signup(formData: FormData) {
    const supabase = await createClient()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        redirect('/signup?error=' + encodeURIComponent(error.message))
    }

    // Check if we need to redirect to a confirmation page
    redirect('/signup/success')
}

export async function logout() {
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect('/login')
}
