import React from "react";
import { FormikBag, FormikProps, withFormik } from "formik";
import * as yup from "yup";
import { ToastContainer } from "react-toastify/dist/components/ToastContainer";
import { toast } from "react-toastify/dist/core/toast";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import formValue from "./typesForm";
import Provider from "../../../providers/Provider";

function Form(props: FormikProps<formValue>) {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldError,
  } = props; // extraccion de propiedades y metodos del formulario

  function enviarFormulario(e: React.FormEvent<HTMLFormElement>) {
    const errorsKeys = Object.keys(errors); // arreglo con las queys de los errores

    if (errorsKeys.length > 0) {
      const errores: any = errors; // convertimos a 'any' los errores para manejarlos
      const errorAMostrar = errores[errorsKeys[0]]; // el primer error encontrado

      toast.error(errorAMostrar, {
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
    } else {
      handleSubmit(e);
    }
  }

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
      <form onSubmit={enviarFormulario}>
        <TextField
          name="email"
          label="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email ? errors.email : ""}
        />
        <Button type="submit">Enviar formulario</Button>
        {isSubmitting ? <p>Enviando...</p> : null}
      </form>
    </>
  );
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Ingresa un email valido")
    .required("El email es requerido"),
});

async function handleSubmit(
  values: formValue,
  formikBag: FormikBag<formValue, formValue>
) {
  formikBag.setSubmitting(true);
  let peticion = await Provider.post(``, {}, values);
  formikBag.setSubmitting(false);

  if (peticion.status == 200) {
    console.log("peticion exitosa");
    formikBag.resetForm();
  } else {
    console.log("ha ocurrido un error");
  }
}

const FormularioControlado = withFormik<formValue, formValue>({
  mapPropsToValues: (props) => ({ email: props.email || "" } as formValue),
  handleSubmit,
  validationSchema,
})(Form);

export default FormularioControlado;
