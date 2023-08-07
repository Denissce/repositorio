import React from "react"
import Stack from "@mui/material/Stack"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Login() {

    return (
        <Stack width="500px" spacing={1} px={1} py={3} m={2} >

            <TextField label="Email" placeholder="ejemplo@ejemplo.com" />

            <TextField label="Password" placeholder="Tu contraseña" type="password" />

            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Recordarme" />
            </FormGroup>

            <Button variant="outlined">Login</Button>

        </Stack>
    )

}