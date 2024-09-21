"use client"
import DynamicForm, { FormField } from '@/container/dynamicForm';
import React from 'react'


function Home() {

  const customLabelStyles: React.CSSProperties = {
    fontWeight: 500,
    color:"black"
  };

  const customInputStyles: React.CSSProperties = {
    borderRadius: '10px',


  };

  const customInputContainerStyles: React.CSSProperties = {
    display:"flex",
    flexDirection:"column",
    
    width:"300px"
  };

  const customContainerStyles: React.CSSProperties = {
   display:"grid",
   gridTemplateColumns:"1fr 1fr",
   gap:5
   
  };
  const buttonStyles: React.CSSProperties = {
  display:"flex",
  flexDirection:"row",
  justifyContent:"center"
   };
   const handleFormSubmit = (values:any) => {
    console.log("Form Submitted with values:268484584", values);
  };

  const formData: FormField[] = [
    { id: 1, label: "First Name", name: "firstName", type: "text", required: true, displayErrorMessage: true,      labelStyles:customLabelStyles,
    inputStyles:customInputStyles,
    inputContainerStyles:customInputContainerStyles
  },
  { id: 1, label: "Last Name", name: "LastName", type: "text", required: true, displayErrorMessage: false,      labelStyles:customLabelStyles,
    inputStyles:customInputStyles,
    inputContainerStyles:customInputContainerStyles
  },
    { id: 2, label: "Email", name: "email", type: "email", required: true, displayErrorMessage: false,inputStyles:customInputStyles,labelStyles:customLabelStyles,inputContainerStyles:customInputContainerStyles },
    { id: 3, label: "Password", name: "password", type: "password", required: true, displayErrorMessage: false },
        { id: 6, label: "Role", name: "role", type: "enum", required: true, displayErrorMessage: false, options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
        { label: "Guest", value: "guest" }
      ] 
    },
    // { id: 4, label: "About", name: "about", type: "textarea", required: false, displayErrorMessage: false },
    // { id: 5, label: "Age", name: "age", type: "number", required: true, displayErrorMessage: false },
    // { id: 6, label: "Role", name: "role", type: "enum", required: true, displayErrorMessage: false, options: [
    //     { label: "Admin", value: "admin" },
    //     { label: "User", value: "user" },
    //     { label: "Guest", value: "guest" }
    //   ] 
    // },
  ];
  return (
    <div className='flex flex-col justify-center items-center w-[100%]'>
    <h1 className='text-xl font-semibold'>Customizable Dynamic Form</h1>
    <DynamicForm
      formData={formData}
      // labelStyles={customLabelStyles}
      // inputStyles={customInputStyles}
      // inputContainerStyles={customInputContainerStyles}
      containerStyles={customContainerStyles}
      buttonContainerStyles={buttonStyles}
      onSubmitFun={handleFormSubmit}
      // ClassName="bg-[yellow]"
    />
  </div>
  )
}

export default Home