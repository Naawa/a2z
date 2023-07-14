import { emailForLinkSchema } from "$lib/utils/validationSchema.js";
import { message, superValidate } from 'sveltekit-superforms/server';

export const load = async ( event ) => {
  const form = await superValidate(emailForLinkSchema);
  return { form };
};

export const actions = {
    default: async ({ request, url, locals: { supabase } }) => {
      const form = await superValidate(request, emailForLinkSchema);
      let email = form.data.email;
  
      if(!form.valid) {
          return message(form, "Invalid request.");
      }
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, { 
        redirectTo: `${url.origin}/api/auth/callback?next=/update-password`
      });

      if(error) {
        return message(form, "Error :(, please try again later.", {    
          status: 500
        });
      }

      return message(form, "Please check your email.")
    },
}