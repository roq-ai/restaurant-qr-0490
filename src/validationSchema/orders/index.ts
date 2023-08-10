import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  table_number: yup.number().integer().required(),
  status: yup.string().required(),
  menu_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
