import { Link, useNavigate } from "react-router-dom";
import { MdWavingHand } from "react-icons/md";
import { useFormik } from "formik";
import { loginSchema } from "../../components/schemas/login";

export default function Login() {
  const router = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: (values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
          router("/", { replace: true });
        }, 200);
      },
    });
  return (
    <div
      dir="rtl"
      className="w-full px-4 py-10 flex items-center justify-center"
    >
      <div className="flex flex-col items-center bg-white/90 shadow-xl w-full md:w-1/2 p-5 rounded-lg">
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
          <input
            className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
            placeholder="البريد الالكتروني"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <p className="text-red-700">
            {errors.email && touched.email && errors.email}
          </p>
          <input
            className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
            placeholder="كلمة المرور"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <p className="text-red-700">
            {errors.password && touched.password && errors.password}
          </p>
          <div className="flex items-center justify-between w-full text-lg md:text-xl">
            <div className="flex items-center gap-1">
              <p>تذكرني</p>
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
            </div>
            <div className="text-[#9155FD]">
              <Link to="/">نسيت كلمة المرور؟</Link>
            </div>
          </div>
          <div className="flex items-center justify-center w-full my-2">
            <input
              type="submit"
              value="تسجيل الدخول"
              className="bg-[#9155FD] py-2 px-4 w-full text-white text-lg font-semibold rounded-lg cursor-pointer"
            />
          </div>
        </form>
        <div className="flex items-center justify-center my-4">
          <p className="flex gap-2 items-center text-lg">
            <span>ليس لديك حساب؟</span>
            <span className="text-[#9155FD]">
              <Link to="/register">قم بإنشاء حساب جديد</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
