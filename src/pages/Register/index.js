import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { MdWavingHand } from "react-icons/md";
import { basicSchema } from "../../components/schemas/login";
export default function Register() {
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
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
    validationSchema: basicSchema,
    onSubmit: (values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }, 1000);
    },
  });
  return (
    <div className="w-full min-h-screen p-4 flex items-center justify-center">
      <div className="flex flex-col items-center bg-white/90 w-full md:w-1/2 p-5 rounded-lg">
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
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-[75%] gap-6">
            <input
              type="text"
              className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
              placeholder="اسم المستخدم"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fName}
            />
            <input
              type="text"
              className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
              placeholder="الاسم الاوسط"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.mName}
            />
            <input
              type="text"
              className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
              placeholder="اللقب"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lName}
            />
            <input
              type="email"
              className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
              placeholder="البريد الالكتروني"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
              placeholder="رقم الهاتف"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            <input
              type="password"
              className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
              placeholder="كلمة المرور"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <input
              type="password"
              className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
              placeholder="تأكيد كلمة المرور"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
          </div>
          <div className="flex items-center justify-center w-1/2 my-2">
            <button className="bg-[#9155FD] hover:bg-[#9155FD]/90 py-2 px-4 w-full text-white text-lg font-semibold rounded-lg">
              تسجيل الدخول
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center my-4">
          <p className="flex gap-2 items-center text-lg">
            <span className="text-[#9155FD]">
              <Link to="/login">قم بتسجيل الدخول</Link>
            </span>
            <span>لديك حساب بالفعل؟</span>
          </p>
        </div>
      </div>
    </div>
  );
}
