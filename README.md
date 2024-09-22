# 🚀 express-react-form: Dynamic Forms Made Easy

express-react-form is a powerful, lightweight form library for React and Express applications that lets you create stunning, functional forms with minimal effort. Say goodbye to complex setups and hello to intuitive, responsive forms that just work.

## ✨ Features

- 🎨 **Beautiful UI out of the box**: Sleek, modern designs that adapt to your brand
- 🔧 **Easy customization**: Tailor forms to your exact needs with simple configuration
- 🛡️ **Built-in error handling**: Robust validation with clear, user-friendly error messages
- 📱 **Fully responsive**: Perfect on desktop, tablet, or mobile
- 🔌 **Plug and play**: Get started with just a few lines of code
- 🚦 **Smart submission handling**: Seamless form submissions with success and error states
- ⚛️ **React integration**: Seamlessly works with your React components
- 🖥️ **Express backend support**: Easy server-side handling and validation

## 🚀 Quick Start

### Installation

Install express-react-form using npm:

`npm install express-react-form`

Or using yarn:

`yarn add express-react-form`

### Usage

Here's a basic example of how to use express-react-form:

```typescript
import DynamicForm, { FormField } from "express-react-form";
import "express-react-form/dist/styles.css";
function Home() {
  const handleFormSubmit = (values) => {
    console.log("Form submitted with values:", values);
  };
  const formData: FormField[] = [
    {
      id: 1,
      label: "First Name",
      name: "firstName",
      type: "text",
      required: true,
    },
    {
      id: 2,
      label: "Email",
      name: "email",
      type: "email",
      required: true,
    },
    {
      id: 3,
      label: "Password",
      name: "password",
      type: "password",
      required: true,
    },
    {
      id: 4,
      label: "Role",
      name: "role",
      type: "enum",
      required: true,
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
        { label: "Guest", value: "guest" },
      ],
    },
  ];
  return (
    <div>
      <h1>Dynamic Form Example</h1>
      <DynamicForm formData={formData} onSubmitFun={handleFormSubmit} />
    </div>
  );
}
export default Home;
```

This example demonstrates a basic form with text, email, password, and enum fields. You can easily customize the form fields, styles, and behavior to fit your needs.

## 🎛️ Customization

Tailor your form to perfection:

## 📄 License

Express React Form is MIT licensed.

---

Ready to craft amazing forms? Get started with Express React Form today! 🎉
