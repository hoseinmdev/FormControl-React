import styles from "./input.module.css";

const Input = ({
  label,
  placeHolder,
  name,
  type = "text",
  onChange,
  value,
  error,
}) => {
  // console.log(formik)
  return (
    <>
      <label htmlFor={name} className={styles.inputControl}>
        <div>
          <span>{label}</span>
          <span className={styles.errorText}>{error && error}</span>
        </div>
        <input
          id={name}
          placeHolder={placeHolder}
          type={type}
          name={name}
          onChange={onChange}
          value={value}
        />
      </label>
    </>
  );
};

export default Input;
