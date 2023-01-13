import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { usersService } from "../../services";
import { User } from "../../types";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const fetchData = () => {
    console.log("entré al fetch data");
    usersService.getAll(search).then((data) => setUsers(data));

    console.log(users);
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  const borrarUser = async (id: string) => {
    await usersService.remove(id);
    fetchData();
  };

  return (
    <>
      <div>
        <h1>Estoy en Users</h1>
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
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Password</th>
            <th>Birthdate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>{elem.name}</td>
                <td>{elem.lastname}</td>
                <td>{elem.email}</td>
                <td>{elem.password}</td>
                <td>
                  {elem.birthdate.getFullYear()}/{elem.birthdate.getMonth() + 1}
                  /{elem.birthdate.getDate()}
                </td>
                <td>
                  <Button
                    variant="danger"
                    icon="trash"
                    handleClick={() => borrarUser(elem.id)}
                  />
                  <Button
                    variant="primary"
                    icon="pencil"
                    handleClick={() => navigate(`/users/save/${elem.id}`)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export { Users };
