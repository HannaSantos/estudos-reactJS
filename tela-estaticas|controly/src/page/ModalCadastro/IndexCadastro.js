import { useState } from "react";
import React from "react";
import Modal from "../ModalClose";
import { TextField, Container, Grid, Box, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../style.css';

function IndexCadastro() {
  const [isModalVisible, setIsmodalVisible] = useState(true);

  return (
    <div className="modal">
      {isModalVisible ? (
        <Modal onClose={() => setIsmodalVisible()}>
          <Container maxWidth="sm">
          <Box sx={{ height: '24px'}}/>
          
          <h1> Faça parte da equipe </h1>
            <Grid container direction="column" alignItems="stretch" sx={{'& button': { m: 1 }}}>
                
              <TextField id="outlined-basic" label="NOME" variant="outlined"/>
              <Box sx={{ height: '24px'}}/>
              <TextField id="outlined-basic" label="E-MAIL" variant="outlined"/>
              <Box sx={{ height: '24px'}}/>
              <TextField id="outlined-basic" label="SENHA" variant="outlined" />
              <Box sx={{ height: '24px'}}/>
              <TextField id="outlined-basic" label="TELEFONE" variant="outlined"/>
              <Box sx={{ height: '24px'}}/>

              <Button variant="contained" size="large">ENTRAR</Button>

              <h5>ou se cadastre com GitHub</h5>
              <Button variant="outlined" startIcon={<GitHubIcon />} size="large"> Entrar com o GitHub </Button>
              <Box sx={{ height: '24px'}}/>

            </Grid>
          </Container>
        </Modal>
      ) : null}
    </div>
  );
}

export default IndexCadastro;
