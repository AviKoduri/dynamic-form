"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldProps } from "formik";
import * as Yup from "yup";

export interface FormField {
  id: number;
  label: string;
  name: string;
  type: 'text' | 'email' | 'password' | 'textarea' | 'number' | 'enum' |"time" | "date" | "checkbox" | "radio" | "file"; 
  required: boolean;
  displayErrorMessage: boolean;
  options?: { label: string; value: string }[];
  labelStyles?: {
    className?:string;
    style?:React.CSSProperties
  };
  inputStyles?: {
    className?:string;
    style?:React.CSSProperties
  };
  inputContainerStyles?: {
    className?:string;
    style?:React.CSSProperties
  };

}
interface DynamicFormProps {
  formData: FormField[];
  containerStyles?: {
    className?:string;
    style?:React.CSSProperties
  };
  buttonStyles?: {
    className?:string;
    style?:React.CSSProperties
  };
  buttonContainerStyles?: {
    className?:string;
    style?:React.CSSProperties
  };
  onSubmitFun?: (values: Record<string, any>) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  formData,
  containerStyles = {},
  buttonStyles = {},
  buttonContainerStyles = {},
  onSubmitFun = (values) => {},
}) => {
  const validationSchema = Yup.object().shape(
    formData.reduce((schema, field) => {
      if (field.required) {
        switch (field.type) {
          case 'email':
            schema[field.name] = Yup.string()
              .email('Invalid email format')
              .required(`${field.label} is required`);
            break;
          case 'number':
            schema[field.name] = Yup.number()
              .required(`${field.label} is required`)
              .typeError(`${field.label} must be a number`);
            break;
          case 'password':
            schema[field.name] = Yup.string()
              .required(`${field.label} is required`);
            break;

          // case 'enum':
          //   schema[field.name] = Yup.string().oneOf(
          //     field.options || [],
          //     `Please select a valid ${field.label}`
          //   );
          //   break;

          case 'date':
            schema[field.name] = Yup.date().required(`${field.label} is required`);
            break;
          case 'checkbox':
            schema[field.name] = Yup.boolean().oneOf([true], `${field.label} is required`);
            break;
          case 'radio':
            schema[field.name] = Yup.string()
            //@ts-ignore
              .oneOf(field?.options || [], `Please select a valid ${field.label}`)
              .required(`${field.label} is required`);
            break;
          default:
            schema[field.name] = Yup.string().required();
        }
      } else {
        schema[field.name] = Yup.string();
      }
      return schema;
    }, {} as Record<string, Yup.AnySchema>)
  );
  
  const initialValues = formData.reduce((values, field) => {
    switch (field.type) {
      case 'number':
        values[field.name] = ""; 
        break;
      case 'checkbox':
        values[field.name] = false; 
        break;
      // case 'enum':
      //   values[field.name] = field.options?.[0] || ''; 
      //   break;

      default:
        values[field.name] = ''; 
    }
    return values;
  }, {} as Record<string, string | number | boolean>);

  const renderField = (fields: FormField) => {
    switch (fields.type) {
      case "textarea":
        return (
          <Field id={fields.name} name={fields.name}>
            {({ field, form: { touched, errors }, meta }: FieldProps) => (
              <div>
                <textarea
                  className={`h-[45px] w-[100%] rounded-xl border-2 ${
                    meta.touched && meta.error ? "border-[red]" : "border-grayColor"
                  } pl-3 ${fields?.inputStyles?.className}`}
                  style={fields?.inputStyles?.style}
                  placeholder={`Enter ${fields?.label}`}
                  {...field}
                />
              </div>
            )}
          </Field>
        );
  
      case "enum":
        return (
          <Field id={fields.name} name={fields.name} as="select">
            {({ field, form: { touched, errors }, meta }: FieldProps) => (
              <div>
                <select
                  className={`h-[45px] w-[100%] rounded-xl border-2 ${
                    meta.touched && meta.error ? "border-[red]" : "border-grayColor"
                  } pl-3 ${fields?.inputStyles?.className}`}
                  style={fields?.inputStyles?.style}
                  {...field}
                >
                  <option value="" disabled>Select {fields.label}</option>
                  {fields.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </Field>
        );

      default:
        return (
          <Field id={fields.name} name={fields.name}>
            {({ field, form: { touched, errors }, meta }: FieldProps) => (
              <div>
                <input
                  className={`h-[45px] w-[100%] rounded-xl ${fields?.type !=="file" &&"border-2"} ${
                    meta.touched && meta.error
                      ? "border-[red]"
                      : "border-grayColor"
                  } pl-3 ${fields?.inputStyles?.className}`}
                  type={fields.type}
                  style={fields?.inputStyles?.style}
                  placeholder={`Enter ${fields?.label}`}
                  {...field}
                />
              </div>
            )}
          </Field>
        );
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmitFun(values);
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} className="">
          <div style={containerStyles?.style} className={`${containerStyles?.className}`}>
            {formData.map((field) => (
              <div
                key={field.id}
                className={`flex flex-col gap-1 h-[85px] ${field?.inputContainerStyles?.className}`}
                style={field?.inputContainerStyles?.style}
              >
                <label
                  htmlFor={field.name}
                  className={`text-[16px] font-semibold ${field?.labelStyles?.className}`}
                  style={field?.labelStyles?.style}
                >
                  {field.label}
                </label>

                {renderField(field)}
                {field.displayErrorMessage && (
                  //@ts-ignore
                  <ErrorMessage
                    name={field.name}
                    component="div"
                    className="text-[12px] leading-[13.92px] ml-2 text-[red]"
                  />
                )}
              </div>
            ))}
          </div>
          <div style={buttonContainerStyles?.style} className={`${buttonContainerStyles?.className}`}>
            <button
              type="submit"
              className={`px-5 py-2 bg-primary rounded-md text-center font-semibold mt-2 ${buttonStyles?.className}`}
              style={buttonStyles?.style}
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DynamicForm;
