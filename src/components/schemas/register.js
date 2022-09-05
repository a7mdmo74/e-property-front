import * as yup from "yup";

const passwordRules = /^.{6,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("يجب إدخال البريد الالكتروني"),
  fName: yup.string().required("يرجي ملئ البيانات"),
  mName: yup.string().required("يرجي ملئ البيانات"),
  lName: yup.string().required("يرجي ملئ البيانات"),
  age: yup.number().positive("").integer().required("يجب ملئ البيانات"),
  phone: yup.number().positive("").integer().required("يجب ملئ البيانات"),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: "Please enter a stronger password" })
    .required("يجب ادخال كلمة المرور"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("passeord"), null], "كلمة المرور يجب ان تكون مطابقة")
    .required("يجب ملئ البيانات"),
});
// const passwordRules = /^(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
