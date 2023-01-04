import styles from "./input.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Input = ({
  label,
  placeholder,
  name,
  type = "text",
  onChange,
  onBlur,
  value,
  error,
  touched,
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const iconClicked = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };
  const renderIcon = () => {
    if (type === "password")
      return showPassword ? (
        <FaEyeSlash className={styles.customStyle} onClick={iconClicked} />
      ) : (
        <FaEye className={styles.customStyle} onClick={iconClicked} />
      );
  };
  return (
    <>
      <label htmlFor={name} className={styles.inputControl}>
        <div className={styles.ErrorControl}>
          <span>{label}</span>
          <span className={styles.errorText}>{error && touched && error}</span>
        </div>
        <div className={styles.passwordControl}>
          <input
            id={name}
            placeholder={placeholder}
            type={showPassword ? "password" : "text"}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            style={{ width: type === "password" ? "90%" : "100%" }}
          />
          {renderIcon()}
        </div>
      </label>
    </>
  );
};

export default Input;
