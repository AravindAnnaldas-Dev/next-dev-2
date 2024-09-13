"use client";

import React, { useRef } from "react";

const OneUseRef = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    const formElements = formRef.current?.elements!;

    for (let i = 0; i < formElements?.length!; i++) {
      const inputElement = formElements[i] as HTMLInputElement;
      if (inputElement.name) {
        formData.append(inputElement.name, inputElement.value);
      }
      inputElement.value = "";
    }

    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
  };

  return (
    <div className="w-full h-full">
      <form
        ref={formRef}
        className="w-[fit-content] m-auto bg-sky-100 px-6 py-6 flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="w-full flex flex-col items-start gap-[6px]">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" className="px-1 py-2" />
        </div>
        <div className="w-full flex flex-col items-start gap-[6px]">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className="px-1 py-2" />
        </div>
        <div className="w-full flex flex-col items-start gap-[6px]">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="px-1 py-2" />
        </div>
        <button
          type="submit"
          className="w-[fit-content] border-[1px] border-[#212121] py-2 px-4 m-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default OneUseRef;
