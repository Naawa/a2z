import { redirect } from '@sveltejs/kit'
import { schema } from '$lib/utils/validationSchema.js';
import { message, superValidate } from 'sveltekit-superforms/server';

export const load = async ( event ) => {
  const session = await event.locals.getSession()
  if (session) {
    throw redirect(303, '/dashboard');
  }
};

export const actions = {
  default: async ({ request, locals: { supabase } }) => {
    const form = await superValidate(request, schema);

    /**
     * if(!form.valid) {
        return message(form, "Invalid request.");
      }
     * let { email, password } = form.data;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      return message(form, error.message);
    }
     */

    return message(form, "Login does not work yet...");
  }
}
