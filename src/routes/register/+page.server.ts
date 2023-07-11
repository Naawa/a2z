import { fail, redirect } from "@sveltejs/kit"

export const load = async ( event ) => {
  const session = await event.locals.getSession()
  if (session) {
    throw redirect(303, '/dashboard');
  }
};

export const actions = {
    default: async ({ request, url, locals: { supabase } }) => {
      const formData = await request.formData()
      const name = formData.get('name') as string
      const email = formData.get('email') as string
      const password = formData.get('password') as string
  
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {  
            emailRedirectTo: `${url.origin}/auth/callback`,
            data: {
                name: name,
            },
        },
      })
  
      if (error) {
        return fail(500, { message: 'Server error. Try again later.', success: false, email })
      }
      
      throw redirect(303, '/dashboard');
    },
  }