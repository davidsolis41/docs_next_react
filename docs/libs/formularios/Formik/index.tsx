import React from "react";
import * as yup from "yup";
import { useFormik, FormikHelpers } from "formik/dist";
import { ToastContainer, toast } from "react-toastify/dist";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Provider from "../../../providers/Provider";
import formValue from "./typesForm";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Ingresa un email valido")
    .required("El email es requerido"),
});

export default function Form() {
  const {
    values,
    errors,
    touched,
    isValidating,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setSubmitting,
    setFieldValue,
    setFieldError,
  } = useFormik<formValue>({
    validationSchema,
    onSubmit,
    validateOnMount: false,
    validateOnChange: false,
    validateOnBlur: true,
    initialValues: {
      email: "",
    },
  }); // extraccion de propiedades y metodos del formulario

  async function onSubmit(
    values: formValue,
    helpers: FormikHelpers<formValue>
  ) {
    helpers.setSubmitting(true);
    let peticion = await Provider.post(``, {}, values);
    helpers.setSubmitting(false);

    if (peticion.status == 200) {
      console.log("peticion exitosa");
      helpers.resetForm();
    } else {
      console.log("ha ocurrido un error");
    }
  }

  function errorValidate() {
    const errorKeys: string[] = Object.keys(errors); // arreglo con las keys de los errores
    if (errorKeys.length > 0) {
      const errores: any = errors; // convertimos a 'any' los errores para manejarlos
      for (let i = 0; i < errorKeys.length; i++) {
        if (errores[errorKeys[i]]) {
          return toast.error(errores[errorKeys[i]], {
            // notificacion al usuario
            theme: "colored",
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
    }
  }

  React.useEffect(() => {
    if (isValidating) errorValidate();
  }, [isValidating]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          label="Email"
          error={Boolean(errors.email)}
          helperText={Boolean(errors.email) ? errors.email : undefined}
          value={values.email}
          onChange={(e) =>
            String(e.target.value).length <= 10 && handleChange(e)
          }
          onBlur={(e) => {
            handleBlur(e);
          }}
        />
        <Button type="submit">Enviar</Button>
        {isSubmitting ? <p>Enviando...</p> : null}
      </form>
    </>
  );
}
