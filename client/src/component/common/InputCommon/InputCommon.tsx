import React, { useState } from "react";
import Styles from "./InputCommon.module.css";

const defaultState: IPropsInputCommon = {
  isShowPassword: false,
};

const InputCommon: React.FC<IPropsInputCommon> = (props) => {
  const {
    label,
    color = "red",
    isInputPassword = false,
    type = "text",
  } = props;
  const [state, setState] = useState<IPropsInputCommon>(defaultState);
  const { isShowPassword, colorTextPassword } = state;

  const handleShowPassword = () => {
    setState((prev) => {
      return {
        ...prev,
        isShowPassword: !prev.isShowPassword,
        colorTextPassword: prev.isShowPassword ? "red" : "blue",
      };
    });
  };
  return (
    <div className="input-group">
      {label ?? <span className="input-group-text">{label}</span>}
      <input
        type={isInputPassword ? "password" : type}
        aria-label="First name"
        className={`form-control ${Styles.input_text}`}
        style={{
          color: color,
        }}
      />
      <span onClick={handleShowPassword} style={{ color: colorTextPassword }}>
        {isShowPassword ? "show" : "hide"}
      </span>
    </div>
  );
};

export default InputCommon;
