import { goto } from '$app/navigation';
import { redirect } from '@sveltejs/kit'

export const load = async ( event ) => {
  const session = await event.locals.getSession()
  if (!session) {
    throw redirect(303, '/login');
  }
  goto('/dashboard');
};

export const actions = {
  default: async ({ locals: { supabase } }) => {
    await supabase.auth.signOut()
    throw redirect(303, '/')
  },
}
