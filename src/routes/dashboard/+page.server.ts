import { redirect } from '@sveltejs/kit'

export const load = async ( event ) => {
  const session = await event.locals.getSession()
  if (!session) {
    throw redirect(303, '/login');
  }
};

export const actions = {
  default: async ({ locals: { supabase } }) => {
    throw redirect(303, '/logout')
  },
}
