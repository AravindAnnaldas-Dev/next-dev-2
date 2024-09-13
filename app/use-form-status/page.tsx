"use client";

import FormSubmitButton from "@/components/FormSubmitButton";
import React from "react";

const UseFormStatus = () => {
  return (
    <>
      <div className="w-full h-full">
        <form
          action="https://dummyjson.com/todos/add"
          method="POST"
          className="w-[fit-content] m-auto bg-sky-100 px-6 py-6 flex flex-col gap-4"
        >
          <div className="w-full flex flex-col items-start gap-[6px]">
            <label htmlFor="todo">Todo</label>
            <input type="text" name="todo" className="px-1 py-2" />
          </div>
          <div className="w-full flex flex-col items-start gap-[6px]">
            <label htmlFor="userId">UserId</label>
            <input type="number" name="userId" className="px-1 py-2" />
          </div>
          <FormSubmitButton />
        </form>
      </div>
    </>
  );
};

export default UseFormStatus;
