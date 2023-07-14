import { redirect } from '@sveltejs/kit'
import { schema } from '$lib/utils/validationSchema.js';
import { message, superValidate } from 'sveltekit-superforms/server';

export const load = async ( event ) => {
  const session = await event.locals.getSession()
  if (session) {
    throw redirect(303, '/dashboard');
  }
  const form = await superValidate(schema);
  return { form };
};

export const actions = {
  default: async ({ request, locals: { supabase } }) => {
    const form = await superValidate(request, schema);
    if(!form.valid) {
      return message(form, "Invalid request.");
    }
    let { email, password } = form.data;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      return message(form, "Invalid crediantials.", 
      {    
        status: 500
      });
    }
    return message(form, "Logged in successfully.");
  }
}
