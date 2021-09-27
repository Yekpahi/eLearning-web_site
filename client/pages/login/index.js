import { useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from 'next/link';


const Register = () => {

  const [email, setEmail] = useState("prince@gmail.com");
  const [password, setPassword] = useState("123456zert");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.table({ name, email, password})

    try {
      setLoading(true);
      const { data } = await axios.post(`/api/login`, {
      email,
      password,
    });
    console.log("LOGIN RESPONSE", data)
    //setLoading(false);
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false)
    }
    
  };

  return (
    <>
      <h1 className="jumbotron text-center bg-primary square">
        Welcome to ...
      </h1>
      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-4 p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder ="Enter email"
            required
          />
          <input
            type="password"
            className="form-control mb-4 p-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder ="Enter password"
            required
          />
          <button  
          type="submit" 
          className="btn btn-block btn-primary"
          disabled = {!email || !password || loading}
          >
            { loading ? <SyncOutlined spin /> :"Soumettre"}
          </button>
        </form>
        <p className="text-center p-3">
         Not yet registered  ? {" "}
          <Link href ="/register">
            <a href="">Register </a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;

