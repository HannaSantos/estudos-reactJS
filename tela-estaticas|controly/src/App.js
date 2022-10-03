import React from "react";
import IndexLogin from "./page/ModalLogin/IndexLogin";
import { useState } from "react";
import IndexCadastro from "./page/ModalCadastro/IndexCadastro";

function App() {
  const [isModalVisible, setIsmodalVisible] = useState(false);

  return (
    <div className="App">
      <div>
      <button onClick={() => setIsmodalVisible(true)}>Login</button>
      {isModalVisible ? <IndexLogin /> : null}
      </div>

      <div>
      <button onClick={() => setIsmodalVisible(true)}>Cadastro</button>
      {isModalVisible ? <IndexCadastro /> : null}
      </div>
    </div>
  );
}

export default App;
