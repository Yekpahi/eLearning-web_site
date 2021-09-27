import { useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from 'next/link';


const Register = () => {
  const [name, setName] = useState("Prince");
  const [email, setEmail] = useState("prince@gmail.com");
  const [password, setPassword] = useState("123456zert");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.table({ name, email, password})

    try {
      setLoading(true);
      const { data } = await axios.post(`/api/register`, {
      name,
      email,
      password,
    });
    toast("Registration successfuk, please login");
    setLoading(false);
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
            type="name"
            className="form-control mb-4 p-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder ="Enter name"
            required
          />
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
          disabled = {!name || !email || !password || loading}
          >
            { loading ? <SyncOutlined spin /> :"Soumettre"}
          </button>
        </form>
        <p className="text-center p-3">
          Already registered? {" "}
          <Link href ="/login">
            <a href="">Login</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;