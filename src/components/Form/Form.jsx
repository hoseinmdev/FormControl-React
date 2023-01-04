import Input from "../common/Input/Input";
import styles from "./form.module.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

const Form = () => {

  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirmation: "",
  };
  const yup = Yup.string();
  const phoneRegExp =
    /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi;
  const validationSchema = Yup.object({
    name: yup.required("نام اجباری است"),
    email: yup.email("ایمیل نامعتبر است").required("ایمیل اجباری است"),
    phoneNumber: yup
      .min(1, "کمتر از 11 رقم !")
      .max(11, "بیشتر از 11 رقم !")
      .matches(phoneRegExp, "شماره را با 09 تکمیل کنید")
      .required("شماره موبایل اجباری است"),
    password: yup
      .min(6, "کمتر از 6 کارکتر است")
      .required("رمز عبور اجباری است"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "پسورد همخوانی ندارد")
      .required("تایید رمز عبور اجباری است"),
  });
  const onSubmit = (values, helpers) => {
    helpers.resetForm();
    toast.success("اطلاعات ثبت شد");
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={styles.formControl}>
        <Input
          label="نام"
          placeholder="نام خود را وارد کنید ..."
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          error={formik.errors.name}
          touched={formik.touched.name}
        />
        <Input
          label="آدرس ایمیل"
          placeholder="ایمیل خود را وارد کنید ..."
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.errors.email}
          touched={formik.touched.email}
          type="email"
        />
        <Input
          label="شماره موبایل"
          placeholder="شماره موبایل خود را وارد کنید ..."
          name="phoneNumber"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
          error={formik.errors.phoneNumber}
          touched={formik.touched.phoneNumber}
        />
        <Input
          label="رمز عبور"
          placeholder="رمز عبور خود را وارد کنید ..."
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.errors.password}
          touched={formik.touched.password}
          type="password"
        />
        <Input
          label="تکرار رمز عبور"
          placeholder="رمز عبور خود را تکرار کنید ..."
          name="passwordConfirmation"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.passwordConfirmation}
          error={formik.errors.passwordConfirmation}
          touched={formik.touched.passwordConfirmation}
          type="password"
        />
        <button
          disabled={!formik.isValid}
          style={{
            opacity: !formik.isValid && 0.5,
            cursor: !formik.isValid && "default",
          }}
          type="submit"
        >
          ثبت اطلاعات
        </button>
      </form>
    </>
  );
};

export default Form;
