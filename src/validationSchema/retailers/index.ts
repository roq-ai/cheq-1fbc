import * as yup from 'yup';

export const retailerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  network_id: yup.string().nullable(),
});
