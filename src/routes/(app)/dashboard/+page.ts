import { redirect } from '@sveltejs/kit'

export const load = async ({ parent }) => {
  const { supabase, session } = await parent()
  if (!session) {
    throw redirect(303, '/')
  }
  // Use supabase to query.
  return {
    user: session.user,
  }
}