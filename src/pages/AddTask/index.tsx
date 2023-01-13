// import { useState } from "react";
// import { tasksService } from "../../services";
// import { useNavigate, useParams } from "react-router-dom";
// import { Category } from "../../types";

const AddTask = () => {
  return <div>Estoy en AddTask</div>;
};
// const { id } = useParams();

// const [title, setTitle] = useState("");
// const [date, setDate] = useState("");
// const [category, setCategory] = useState("");
// const [description, setDescription] = useState("");
// const [status, setStatus] = useState("");

// const [ifError, setIfError] = useState(false);

// const navigate = useNavigate();

//   // const obtenerUserAEditar = async () => {
//   //   if (id) {
//   //     const rta = await usersService.get(id);
//   //     setName(rta.name);

//   //   }
//   // };

//   // if (id && name === "" && color === "") obtenerUserAEditar();

//   const enviarFormulario = async (e: any) => {
//     e.preventDefault();

//     setIfError(false);

// let rta;
// if (id) {
//   rta = await tasksService.update({ id, title, date: new Date(date), category, description, status });
// } else {
// rta = await tasksService.add({
//   title,
//   date: new Date(date),
//   category,
//   description,
//   status,
// });
// }

//     // if (rta) {
//     //   navigate("/users/save");
//     // } else {
//     //   setIfError(true);
//     // }
//   };

//   return (
//     <form onSubmit={enviarFormulario}>
//       <div className="mb-3">
//         <label htmlFor="title-control">Título</label>
//         <input
//           type="text"
//           name="title"
//           id="title-control"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="form-control"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="date-control">Fecha</label>
//         <input
//           type="date"
//           name="date"
//           id="date-control"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           className="form-control"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="category-control">Categoría</label>
//         <input
//           type="select"
//           name="category"
//           id="category-control"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="form-control"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="description-control">Descripción</label>
//         <input
//           type="text"
//           name="description"
//           id="description-control"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="form-control"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="status-control">Status</label>
//         <input
//           type="text"
//           name="status"
//           id="status-control"
//           value={status}
//           onChange={(e) => setStatus(e.target.value)}
//           className="form-control"
//         />
//       </div>

//       <button className="btn btn-primary" type="submit">
//         Enviar
//       </button>

//       {ifError && <p style={{ color: "red" }}>Hubo un error</p>}
//     </form>
//   );
// };

export { AddTask };
// export { tasksService };
