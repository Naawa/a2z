import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import { redirect } from '@sveltejs/kit'

export const handle = async ({ event, resolve }) => {
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event,
  })

  event.locals.getSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()
    return session
  }

  if (event.url.pathname.startsWith("/login")) {
    const session = await event.locals.getSession()
    if (session) {
      throw redirect(303, '/dashboard');
    }
  }
  if (event.url.href.startsWith("/login")) {
    const session = await event.locals.getSession()
    if (session) {
      throw redirect(303, '/dashboard');
    }
  }
  if (event.url.pathname.startsWith("/register")) {
    const session = await event.locals.getSession()
    if (session) {
      throw redirect(303, '/dashboard');
    }
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range'
    },
  })
}