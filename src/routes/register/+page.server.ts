import { schema } from "$lib/utils/validationSchema";
import { redirect } from "@sveltejs/kit"
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
    default: async ({ request, url, locals: { supabase } }) => {

      const form = await superValidate(request, schema);
      let {email, password} = form.data;
  
      if(!form.valid) {
          return message(form, "Invalid request.");
      }
       
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {  
            emailRedirectTo: `${url.origin}/api/auth/callback`,
        },
      })
  
      if (error) {
        return message(form, "Error :(, please try again later.", 
        {    
          status: 500
        });
      }
      return message(form, "Registered successfully, please check your email.")
    },
  }