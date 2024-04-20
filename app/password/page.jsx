"use client"

/* implmentar un formulario para cambio de contraseña
    - input text para contraseña
    - input text para confirmar contraseña
    - botón: Cambiar mi contraseña
      - al guardar, debe validar:
        * que contraseña tenga valor (es requerido)
        * contraseña tenga longitud mínima de 6
        * que confirmar contraseña tenga valor (es requerido)
        * contraseña y confirmar contraseña son iguales
      Generar mensajes de error.

    - acción para guardar la nueva contraeña (ejemplo pendiente)

    - Si no está autenticado, no mostrar el formulario
      redireccionarlo a /login

*/

// hacerlo aquí


// implementar vista con el fomulario para registrar producto
// name, price, description

import { useState } from "react"
import { saveNewPassword } from "./actions";

export default function ChangePassword() {
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');

  // estados de errores
  const [errors, setErrors] = useState({});

  function savePassword(form) {
    // evitar el submit
    form.preventDefault();

    // realizar la validación
    let errorList = {};
    if (!password) { // si nombre no tiene valor
      errorList.password = "La contraseña es obligatoria.";
    } else if (password.length < 6) {
      errorList.password = "La contraseña debe ser de al menos 6 carácteres.";
    }

    if (!confirmPwd) { // si nombre no tiene valor
      errorList.confirmPwd = "Confirmar contraseña es obligatorio.";
    } else if (confirmPwd != password) {
      errorList.confirmPwd = "Confirmar contraseña y la nueva contraseña no coinciden.";
    }

    if (Object.keys(errorList).length > 0) {
      setErrors(errorList);
      return;
    }

    console.log("Ir a guardar");

    saveNewPassword(password, confirmPwd)
    .then((result) => {
      // procesar el resultado
      console.log(result);
      alert(result.message);
    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });

  } // fin saveProduct()

  return(
    <form 
      className="flex flex-col gap-3 mt-8"
      onSubmit={savePassword}
    >
      <div className="flex flex-col gap-1">
        <label className="text-black">Nombre</label>
        <input
          name="password"
          type="password"
          placeholder="Nueva contraseña"
          className="text-black border border-gray-800 rounded p-2"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors({
              ...errors,
              password: '', // limpiar mensaje de error en password
            });
          }}
        />
        <p className="text-red-500">{errors.password}</p>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-black">Confirmar Contraseña</label>
        <input
          name="confirmPwd"
          type="password"
          placeholder="Precio del producto"
          className="text-black border border-gray-800 rounded p-2"
          value={confirmPwd}
          onChange={(e) => {
            setConfirmPwd(e.target.value);
            setErrors({
              ...errors,
              confirmPwd: '', // limpiar mensaje de error en confirmPwd
            });
          }}
        />
        <p className="text-red-500">{errors.confirmPwd}</p>
      </div>

      <button
        type="submit"
        className="border rounded-lg bg-sky-600 p-2 text-lg"
      >
        Cambiar contraseña
      </button>
    </form>
  )
}