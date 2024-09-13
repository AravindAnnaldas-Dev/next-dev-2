import React from "react";
import { useFormStatus } from "react-dom";

const FormSubmitButton = () => {
  const formStatus = useFormStatus();

  return (
    <>
      <button
        type="submit"
        className="w-[fit-content] border-[1px] border-[#212121] py-2 px-4 m-auto"
      >
        {formStatus.pending ? "Hold on!" : "submit"}
      </button>
    </>
  );
};

export default FormSubmitButton;
