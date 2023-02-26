import React from "react";
import InputCommon from "../../common/InputCommon/InputCommon";

const Home: React.FC = () => {
  return (
    <div className="App">
      <InputCommon color="blue" type="color" />
      <InputCommon label={"Email"} />
      <InputCommon label={"Password"} isInputPassword={true} />
    </div>
  );
};

export default Home;
