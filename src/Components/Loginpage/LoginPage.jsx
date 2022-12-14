import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import EmailField from "../Emailfield/EmailField";
import Passfield from "../Passfield/Passfield";
import Button from "../Button/Button";
import "./style.css";
import useAut from "../../hook/aut";

  const LoginPage = () => {
  const { signin } = useAut();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const handleLogin = () => {
    if (!email | !senha) {
      setErro("Preencha os campos");
      return;
    } 

    
    const res = signin(email, senha);
    if (res) {
      setErro(res);
      return;
    }
    navigate("/userlist");
  };

  return (
    <section className="card">
      <h1 className="tittle">Bem-vindo(a)</h1>
      <form>
        <h1 className="loginTittle">Login</h1>
        {/* EMAIL */}
        <EmailField
          value={email}
          type="Email"
          placeholder="Digite seu E-mail"
          onChange={(e) => [setEmail(e.target.value), setErro("")]}
        />
        {/* PASSWORD */}
        <Passfield
          type="Password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setErro("")]}
        />
        <label>{erro}</label>
        <p></p>
        <Button type="submit" onClick={handleLogin} text="Login" />
        <div className="toRegister">
        <label >
          Não possui cadastro?
          <Link to="/registerpage">Clique aqui</Link>
        </label>
        </div>


      </form>
    </section>
  );
};

export default LoginPage;
