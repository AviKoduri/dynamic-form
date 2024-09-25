# 🚀 react-dynamic-form: Dynamic Forms Made Easy

react-dynamic-form is a powerful, lightweight form library for React applications that lets you create stunning, functional forms with minimal effort. Say goodbye to complex setups and hello to intuitive, responsive forms that just work.

## ✨ Features

- 🎨 **Beautiful UI out of the box**: Sleek, modern designs that adapt to your brand
- 🔧 **Easy customization**: Tailor forms to your exact needs with simple configuration
- 🛡️ **Built-in error handling**: Robust validation with clear, user-friendly error messages
- 📱 **Fully responsive**: Perfect on desktop, tablet, or mobile
- 🔌 **Plug and play**: Get started with just a few lines of code
- 🚦 **Smart submission handling**: Seamless form submissions with success and error states
- ⚛️ **React integration**: Seamlessly works with your React components and frameworks like Next.js

## 🚀 Quick Start
## Benefits
- Reusability: Create forms dynamically without rewriting the component logic.

- Formik & Yup Integration: Enables smooth form handling and validation out of the box.

- Customizable Styles: Fully customizable styling for labels, inputs, and containers.

- Validation: Supports validation for multiple input types using Yup and custom regex patterns.

- Dynamic Fields: You can add input fields like text, email, password, textarea, radio, checkbox, file upload, and more.

## Installation

Install react-dynamic-form using npm:

```bash
npm install express-react-form
```

Or using yarn:

```bash
yarn add express-react-form
```

or using pnpm

```bash
yarn add express-react-form
```

or using bun

```bash
yarn add express-react-form
```


## Imports

In your React component, import the necessary modules:

```typescript
import DynamicForm, { FormField } from "express-react-form";
import "express-react-form/dist/styles.css";
```

## Basic Usage

Here’s an example of how to use the DynamicForm component with basic fields:

```typescript
const formData = [
  {
    id: 1,
    label: "First Name",
    name: "firstName",
    type: "text",
    required: true,
    displayErrorMessage: true,
  },
  {
    id: 2,
    label: "Email",
    name: "email",
    type: "email",
    required: true,
    displayErrorMessage: true,
  },
];

const handleSubmit = (values) => {
  console.log(values);
};

export default function BasicFormExample() {
  return <DynamicForm formData={formData} onSubmitFun={handleSubmit} />;
}
```

In this example, the form renders two input fields: one for the first name and one for email. Upon submission, the form data is logged to the console.

## Props Table

The following table describes the props for the `DynamicForm` component:

| Prop Name             | Type                                                | Description                             |
| --------------------- | --------------------------------------------------- | --------------------------------------- |
| formDataFormField     | Array of form field objects                         | Defines the fields in the form.         |
| edit                  | boolean                                             | If true, the form will be in edit mode. |
| containerStyles       | { className?: string; style?: React.CSSProperties } | Styles for the entire form container.   |
| buttonStyles          | { className?: string; style?: React.CSSProperties } | Styles for the submit button.           |
| buttonContainerStyles | { className?: string; style?: React.CSSProperties } | Styles for the button container.        |
| onSubmit              | (values: Record&lt;string, any&gt;) =&gt; void      | Function to handle form submission.     |

## FormField Type

The `FormField` object has the following structure:

| Prop Name            | Type                                                                                                                     | Description                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| id                   | number                                                                                                                   | Unique identifier for each field.                             |
| label                | string                                                                                                                   | The label text for the field.                                 |
| name                 | string                                                                                                                   | The name attribute for the field, used for form values.       |
| type                 | "text" or"email" or"password" or "textarea" or "number" or "enum" or "time" or "date" or "checkbox" or "radio" or "file" | Input type for the field (e.g., text, email, radio).          |
| required             | boolean                                                                                                                  | If true, the field will be required.                          |
| disabled             | boolean                                                                                                                  | If true, the field will be disabled.                          |
| displayErrorMessage  | boolean                                                                                                                  | If true, the error message will be displayed below the field. |
| regexPattern         | string                                                                                                                   | Custom regex pattern for field validation.                    |
| value                | number or  string or boolean                                                                                             | Pre-filled value for the field.                               |
| options              | { label: string; value: string }\[\]                                                                                     | Options for enum or radio fields.                             |
| labelStyles          | { className?: string; style?: React.CSSProperties }                                                                      | Styles for the label element.                                 |
| inputStyles          | { className?: string; style?: React.CSSProperties }                                                                      | Styles for the input element.                                 |
| inputContainerStyles | { className?: string; style?: React.CSSProperties }                                                                      | Styles for the input container.                               |
| radioInputContainerStyles | { className?: string; style?: React.CSSProperties }                                                                      | Styles for the radio input container.                               |


## 🎛️ Customization

Tailor your form to perfection:

## 📄 License

React Dynamic Form is MIT licensed.

---

Ready to craft amazing forms? Get started with React Dynamic Form today! 🎉
