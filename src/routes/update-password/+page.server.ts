import { newPasswordSchema } from "$lib/utils/validationSchema";
import { redirect } from "@sveltejs/kit"
import { message, superValidate } from 'sveltekit-superforms/server';

export const load = async ( event ) => {
  const session = await event.locals.getSession()
  if (!session) {
    throw redirect(303, '/close');
  }
  const form = await superValidate(newPasswordSchema);
  return { form };
};

export const actions = {
    default: async ({ request, locals: { supabase } }) => {

      const form = await superValidate(request, newPasswordSchema);
      let newPassword = form.data.newPassword;
  
      if(!form.valid) {
          return message(form, "Invalid request.");
      }
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      })

      if(error) {
        return message(form, "Error, please contact support.");
      }
      await supabase.auth.signOut();
      return message(form, "Password reset successfully.");
    },
}