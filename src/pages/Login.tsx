import Logo from '../../assets/icons/logo_blanc.png';
import '../styles/App.css';

function Login() {
  return (
    <div>
      <div className="WelcomeContent">
        <img src={Logo} alt="Logo Sushi" id="LogoSushi" />
        <div className="LoginModal">
          <h1 className="LoginSection">Welcome on the Administrator Panel</h1>
          <h2 className="LoginSection separator">Please Login to continue</h2>
          <p className="CredentialsText">Your username :</p>
          <input
            type="text"
            placeholder="username"
            className="CredentialsField"
          />
          <p className="CredentialsText">Your password :</p>
          <input
            type="password"
            placeholder="password"
            className="CredentialsField"
          />
          <button id="LoginButton" type="button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
