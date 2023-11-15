import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import LinearProgress from '@mui/material/LinearProgress';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const boxStyle = {
  margin: '40px',
}
const containerSyle= {
  display: 'flex',
  justifyContent: 'space-between', 
}
const MoreHorizIconSyle={
  marginRight: '20px'
}

export default function App() {
  
 
  return (
    <MantineProvider theme={theme}>
      <div style={containerSyle}>
        <Box style={boxStyle} sx={{ width: '80%' }}>
          <Stack spacing={2}>
            <Item>
              <InsertDriveFileIcon />
              2022 W2 FILE.pdf
            </Item>
            <Item>
              <InsertDriveFileIcon />
              2022 w2 file.pdf
              <div>
                <DisabledByDefaultIcon color="error" /> UPLOAD FAILED
              </div>
            </Item>
            <Item>
              <div style={{paddingRight: '10px',  marginRight: '10px'}}>
              <InsertDriveFileIcon />
              2022 w2 File.pdf
             
             <MoreHorizIcon style={MoreHorizIconSyle}  />
             </div>
              <div>
                <CheckBoxIcon color="success" /> UPLOAD FAILED
                </div>
            </Item>
          </Stack>
        </Box>
      </div>
    </MantineProvider>
  );
}

