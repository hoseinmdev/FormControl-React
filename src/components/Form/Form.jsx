import Input from "../common/Input/Input";
import styles from "./form.module.css";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";

const Form = () => {
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
  };
  const onSubmit = (values) => {
    // console.log(values);
  };
  
  const yup = Yup.string();
  const validationSchema = Yup.object({
    name: yup.required("نام اجباری است"),
    email: yup.email("ایمیل نامعتبر است").required("ایمیل اجباری است"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className={styles.formControl}>
        <Input
          label="نام"
          placeHolder="نام خود را وارد کنید ..."
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={formik.errors.name}
        />
        <Input
          label="آدرس ایمیل"
          placeHolder="ایمیل خود را وارد کنید ..."
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />
        <Input label="رمز عبور" name="password" />
        <Input label="تکرار رمز عبور" name="password" />
        <button type="submit">ثبت اطلاعات</button>
      </form>
    </>
  );
};

export default Form;
