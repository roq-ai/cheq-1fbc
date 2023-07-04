import * as yup from 'yup';

export const brandValidationSchema = yup.object().shape({
  name: yup.string().required(),
  network_id: yup.string().nullable(),
});
