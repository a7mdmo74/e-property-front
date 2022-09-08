import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { MdWavingHand } from "react-icons/md";
import { registerSchema } from "../../components/schemas/register";
export default function Register() {
  const router = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        fName: "",
        mName: "",
        lName: "",
        age: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: registerSchema,
      onSubmit: (values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
        router("/", { replace: true });
      },
    });
  return (
    <div
      className="w-full px-4 py-10 flex items-center justify-center"
      dir="rtl"
    >
      <div className="flex flex-col items-center bg-white/90 w-full md:w-[75%] p-5 rounded-lg">
        <div className="flex items-center justify-center text-xl md:text-3xl gap-1">
          <h2 className="font-semibold">
            مرحبا بك في{" "}
            <span className="text-slate-600 select-none">EProperty</span>
          </h2>
          <span className="text-slate-600 select-none">
            <MdWavingHand />
          </span>
        </div>
        <form
          className="flex flex-col items-center gap-3 mt-6 w-full"
          onSubmit={handleSubmit}
          method="post"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-[75%] gap-6">
            <span>
              <input
                name="fName"
                type="text"
                className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
                placeholder="اسم المستخدم"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fName}
              />
              <p className="text-red-700">
                {errors.fName && touched.fName && errors.fName}
              </p>
            </span>
            <span>
              <input
                type="text"
                name="mName"
                className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
                placeholder="الاسم الاوسط"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mName}
              />
              <p className="text-red-700">
                {errors.mName && touched.mName && errors.mName}
              </p>
            </span>
            <span>
              <input
                type="text"
                name="lName"
                className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
                placeholder="اللقب"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lName}
              />
              <p className="text-red-700">
                {errors.lName && touched.lName && errors.lName}
              </p>
            </span>
            <span>
              <input
                type="email"
                name="email"
                className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
                placeholder="البريد الالكتروني"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <p className="text-red-700">
                {errors.email && touched.email && errors.email}
              </p>
            </span>
            <span>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
                placeholder="رقم الهاتف"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              <p className="text-red-700">
                {errors.phone && touched.phone && errors.phone}
              </p>
            </span>
            <span>
              <input
                type="password"
                name="password"
                className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
                placeholder="كلمة المرور"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <p className="text-red-700">
                {errors.password && touched.password && errors.password}
              </p>
            </span>
            <span>
              <input
                type="password"
                name="confirmPassword"
                className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
                placeholder="تأكيد كلمة المرور"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              <p className="text-red-700">
                {errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword}
              </p>
            </span>
          </div>
          <div className="flex items-center justify-center w-1/2 my-2">
            <input
              type="submit"
              value="تسجيل الدخول"
              className="bg-[#9155FD] py-2 px-4 w-full text-white text-lg font-semibold rounded-lg cursor-pointer"
            />
          </div>
        </form>
        <div className="flex items-center justify-center my-4">
          <p className="flex gap-2 items-center text-lg">
            <span>لديك حساب بالفعل؟</span>
            <span className="text-[#9155FD]">
              <Link to="/login">قم بتسجيل الدخول</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
