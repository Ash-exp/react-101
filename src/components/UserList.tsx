import { useUserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  let navigate = useNavigate();
  let { userList, removeUser } = useUserContext();
  return (
    <section className="row justify-content-center mt-2 min-vh-100">
      <div className="col-auto my-auto table-responsive">
        <table className="table align-middle">
          <thead className="thead-dark bg-dark text-white">
            <tr>
              <th scope="col ">Sr</th>
              <th scope="col">Username</th>
              <th scope="col">mobileNumber</th>
              <th scope="col">emailId</th>
              <th scope="col">address</th>
              <th scope="col">DOB</th>
              <th scope="col">gender</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.length !== 0 ? null : (
              <tr>
                <td colSpan={8} className="text-danger fw-bold text-center">
                  No User Found
                </td>
              </tr>
            )}
            {userList.map((User, index) => {
              return (
                <tr key={index} className="text-wrap">
                  <th scope="row">{index + 1}</th>
                  <td>{User.userName}</td>
                  <td>{User.mobileNumber}</td>
                  <td>{User.emailId}</td>
                  <td>{User.address}</td>
                  <td>{User.DOB}</td>
                  <td>{User.gender}</td>
                  <td>
                    <div className="btn-group">
                      <button
                        className="btn btn-sm btn-danger ml-1"
                        title="delete"
                        onClick={() => removeUser(index)}
                      >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-primary mr-1"
                        title="edit"
                        onClick={() => navigate('/user/edit/' + User.id)}
                      >
                        <i className="fa fa-edit" aria-hidden="true"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UserList;
