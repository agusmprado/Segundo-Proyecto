const tBodyAdmin = document.getElementById("tbodyAdminUsers");
const usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios")) || [];
const userLog = usuariosLocalStorage.find((usuario) => usuario.login);

tBodyAdmin.innerHTML = usuariosLocalStorage
  .map(
    (usuario) => `
<tr>
   <th scope="row">${usuario.id}</th>
   <td>${usuario.nombreUsuario}</td>
   <td>${usuario.rol === "admin" ? "Administrador" : "Usuario"}</td>
   <td>
   <!-- Button trigger modal -->
   <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal-${
     usuario.id
   }">
     Editar
   </button>

   <!-- Modal -->
   <div class="modal" id="exampleModal-${
     usuario.id
   }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog">
       <div class="modal-content">
         <div class="modal-header">
           <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Usuario</label>
              <input type="text" value='${
                usuario.nombreUsuario
              }' class="form-control" id="inputUsuario" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text"></div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Role</label>
              <input type="text" class="form-control" id="inputRole" value='${
                usuario.rol === "admin" ? "Administrador" : "Usuario"
              }'>
            </div>
            <div class='d-flex justify-content-center'>
              <button type="button" class="btn" onclick='nuevoCambioUsuario(${
                usuario.id
              })'>Guardar Cambios</button>
            </div>
          </form>
         </div>
       </div>
     </div>
   </div>
    <button class='btn ${
      usuario.rol === "admin" && "d-none"
    }' onclick='eliminarUsuario(${usuario.id})'>Eliminar</button>
   </td>
 </tr>

   `).join(``)

const inputUsuario = document.getElementById("inputUsuario");
const inputRole = document.getElementById("inputRole");

const nuevoCambioUsuario  = (idUsuario) => {
  const usuarioL = usuariosLocalStorage.find((usuario) => usuario.id === idUsuario);
  const usuarioIndex = usuariosLocalStorage.findIndex((usuario) => usuario.id === idUsuario)

  const actualizarUsuario = {
    id: usuarioL.id,
    nombreUsuario: inputUsuario.value ? inputUsuario.value : usuarioL.nombreUsuario, 
    contrasenia: usuarioL.contrasenia,
    rol: inputRole.value ? inputRole.value === "Administrador" ? "admin" : "usuario" : usuarioL.rol,
    deleted: usuarioL.deleted,//nborrado logico
    login: usuarioL.login//deriva diectamente a la pagina del isuario
  }

  usuariosLocalStorage[usuarioIndex] = actualizarUsuario;

  localStorage.setItem(`usuarios`, JSON.stringify(usuariosLocalStorage));
  location.reload();
}

const eliminarUsuario =(idUsuario) => {
  const confirmacionEliminacion = confirm(`estas seguro que quiers eliminar este usuario?`);

  if(confirmacionEliminacion){
    const usuarioNoBorrado = usuariosLocalStorage.filter(
      (usuario) => usuario.id !== idUsuario
    );
    localStorage.setItem(`usuarios`, JSON.stringify(usuarioNoBorrado));
  }
}