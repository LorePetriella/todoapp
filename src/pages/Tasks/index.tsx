import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
// import { tasksService } from "../../services";
import { Task, Category } from "../../types";

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<Category[]>([]);
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  // const fetchData = () => {
  //   tasksService
  //     .getAll(search, title, date, description, category, status)
  //     .then((data) => setTasks(data));
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [search, title, date, description, category, status]);

  // const obtenerCategorias = async () => {
  //   const rta = await categoriesService.getAll();

  //   setCategories(rta);
  // };

  // if (!categories.length) obtenerCategorias();

  //   const borrarCategoria = async (id: string) => {
  //     await tasksService.remove(id);
  //     fetchData();
  //   };

  return (
    <div>
      <h1>Tasks</h1>

      <hr />

      <form action="">
        <input
          type="text"
          name="text"
          id="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <hr />

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Fecha</th>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>{elem.title}</td>
                {/* <td>{elem.date}</td>
                <td>{elem.category}</td> */}
                <td>{elem.description}</td>
                <td>{elem.status}</td>
                <td>
                  {/* <Button
                    variant="danger"
                    icon="trash"
                    handleClick={() => borrarTask(elem.id)}
                  /> */}
                  <Button
                    variant="primary"
                    icon="pencil"
                    handleClick={() => navigate(`/tasks/add/${elem.id}`)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { Tasks };
