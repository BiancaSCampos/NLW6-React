import { useHistory } from "react-router-dom";
import { Button } from "../Components/Button";

import { auth, firebase } from "../Services/firebase";

import illustrationImg from "../Assets/images/illustration.svg";
import logoImg from "../Assets/images/logo.svg";
import googleIconImg from "../Assets/images/google-icon.svg";
import { TestContext } from "../App"
import "../Styles/auth.scss";
import { useContext } from "react";



export function Home() {
  const history = useHistory();


  function handleCreateRoom() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then((result) => {
      console.log(result);

      history.push("/rooms/new");
    });
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong> Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
