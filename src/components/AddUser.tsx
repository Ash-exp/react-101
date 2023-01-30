import { useUserContext } from '../context/UserContext';
const AddUser = () => {
  let { changeInput, saveUser, newUser } = useUserContext();
  return (
    <>
      <section className="card col-6 col-lg-4 p-4 mt-3">
        <h1>Add New User </h1>
        <form onSubmit={saveUser}>
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter User Name"
              name="userName"
              value={newUser.userName}
              onChange={changeInput}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Mobile Number"
              name="mobileNumber"
              value={newUser.mobileNumber}
              onChange={changeInput}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Email Id
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email Address"
              name="emailId"
              value={newUser.emailId}
              onChange={changeInput}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Date Of Birth
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Date Of Birth"
              name="DOB"
              value={newUser.DOB}
              onChange={changeInput}
            />
          </div>

          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              placeholder="User Address"
              name="address"
              value={newUser.address}
              onChange={changeInput}
            ></textarea>
          </div>

          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Gender
            </label>
            <select
              className="form-select capitalize"
              name="gender"
              onChange={changeInput}
              value={newUser.gender}
            >
              <option value="men's clothing">Male</option>
              <option value="jewelery">Female</option>
              <option value="electronics">Prefer Not To Say</option>
            </select>
          </div>

          <button className="mt-2 btn btn-outline-success">
            <span className="fa fa-floppy-o me-2 "></span>
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default AddUser;
