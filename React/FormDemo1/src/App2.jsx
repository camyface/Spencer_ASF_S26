import {useState} from "react";

const App = () => {

  const initialData = {
    fname: "",
    password: "",
    age: 0
  }
  const [data, setData] = useState(initialData);

  const handleChange = (event) => {

      setData({...data, [event.target.name]: event.target.value});
      console.log(data);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(data);
    setData(initialData)
  }

  return (
      <>
      <h1>This is my project...</h1>
        {/*//first name password age*/}
        <form onSubmit={handleSubmit}>
          <label>First Name:
            <input
                type={"text"}
                placeholder={"Enter your first name"}
                onChange={handleChange}
                name={"fname"}
                value={data.fname}
            />
          </label> <br/>
          <label>
            Password
            <input
                type="password"
                placeholder={"Whats yo password??"}
                onChange={handleChange}
                name={"password"}
                value={data.password}/>
          </label> <br/>
          <label>
            Age <input
              type="number"
              placeholder={"Enter your age time now"}
              onChange={handleChange}
              name={"age"}
              value={data.age}/>

          </label> <br/>

          <button type={"submit"}>Submit</button>
          <button type="reset">Reset </button>
        </form>

      </>
  )
}

export default App;