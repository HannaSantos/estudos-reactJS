import { useState } from "react";
import React from "react";
import Modal from "../ModalClose";
import { TextField, Container, Grid, Box, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../style.css';

function IndexLogin() {
  const [isModalVisible, setIsmodalVisible] = useState(true);

  return (
    <div className="modal">
      {isModalVisible ? (
        <Modal onClose={() => setIsmodalVisible()}>
          <Container maxWidth="sm">
          <Box sx={{ height: '24px'}}/>
          
          <h1> Seja bem-vindo </h1>
            <Grid container direction="column" alignItems="stretch" sx={{'& button': { m: 1 }}}>
              <TextField id="outlined-basic" label="E-MAIL" variant="outlined"/>
              <Box sx={{ height: '24px'}}/>
              <TextField id="outlined-basic" label="SENHA" variant="outlined" />
              <h4>Esqueceu a senha ?</h4>
              <Box sx={{ height: '24px'}}/>
              <Button variant="contained" size="large">ENTRAR</Button>
              <Button variant="outlined" startIcon={<GitHubIcon />} size="large"> Entrar com o GitHub </Button>
              <Box sx={{ height: '24px'}}/>
              <Grid container direction="row" justifyContent="space-around">
              <h4>Não possui uma conta?</h4>
              <Button variant="contained" size="small" sx={{width: '260px'}}>CADASTRO</Button>
              </Grid>
            </Grid>
          </Container>
        </Modal>
      ) : null}
    </div>
  );
}

export default IndexLogin;
