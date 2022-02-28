import React from "react";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify/dist";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextFormField from "./textFormField";
import Switch from "@mui/material/Switch";
import type FormValue from "./typesForm";
import "react-toastify/dist/ReactToastify.css";
import Provider from "../../../providers/Provider";
import FormControlLabel from "@mui/material/FormControlLabel";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Ingresa un email valido")
    .required("El email es requerido"),
});

function Form() {
  const {
    watch,
    register,
    handleSubmit,
    control,
    formState: { touchedFields: touch, errors, isSubmitting },
    setValue,
    setError,
    clearErrors,
    reset,
    trigger,
  } = useForm<FormValue>({
    defaultValues: {
      email: "",
      mayor: false,
    },
    resolver: yupResolver(validationSchema),
  });

  async function onSubmit(values: FormValue) {
    let peticion = await Provider.post(``, {}, values);

    if (peticion.status == 200) {
      console.log("peticion exitosa");
      reset();
      return true;
    } else {
      console.log("ha ocurrido un error");
      return false;
    }
  }

  function errorValidate(errs: any) {
    const keysErrors: string[] = Object.keys(errs);
    for (let i = 0; i < keysErrors.length; i++) {
      if (errs[keysErrors[i]]) {
        return toast.error(errs[keysErrors[i]].message, {
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

  React.useEffect(() => {}, [watch("email")]);

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
      <div>
        <TextField
          {...register("email")}
          label="Email"
          error={Boolean(errors.email)}
          helperText={errors.email ? errors.email.message : undefined}
          value={watch("email")}
          onChange={({ target: { value } }) =>
            value.length <= 10 && setValue("email", value)
          }
          onBlur={({ target: { value } }) => {
            trigger("email");
          }}
        />

        <TextFormField
          control={control}
          name="email"
          label="Email"
          helperText="Ingresa tu email"
        />

        <Controller
          control={control}
          name="mayor"
          render={({
            field: { value, onChange, onBlur, ref, name },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
          }) => (
            <FormControlLabel
              label="Mayor"
              labelPlacement="bottom" // start | end | bottom | top
              control={
                <Switch name={name} checked={value} onChange={onChange} />
              }
            />
          )}
        />

        <Button onClick={(e) => handleSubmit(onSubmit, errorValidate)(e)}>
          Enviar formulario
        </Button>
      </div>
    </>
  );
}

export default Form;
