import {
  Box,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { Colors } from "../../styles/theme";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { CartImage } from "../../styles/cart";
import { products } from "../../data";

export default function CartTable() {
  return (
    <Container>
      <TableContainer sx={{ padding: "20px 0" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>Item</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Price</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Count</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ textAlign: "start" }}>
                <Box display="flex" sx={{width:"100%",minWidth:"250px"}}><CartImage src={products[0].images}/>
                <Box ml={2} >
                    <Typography variant="body1"><b>Name : </b> Super Backpack</Typography>
                    <Typography variant="body1"><b>Size :</b> L</Typography>
                    <Typography variant="body1"><b>Description :</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nisi.</Typography>
                   
                    </Box>
                </Box>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>2.90 $</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <List
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "fit-content",
                    background: Colors.light_gray,
                    padding: "0",
                    margin: "auto",
                  }}
                >
                  <ListItemButton
                    sx={{
                      background: Colors.white,
                      justifyContent: "center",
                      width: "40px",
                      marginLeft: "4px",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        justifyContent: "center",
                      }}
                    >
                      <RemoveIcon />
                    </ListItemIcon>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      Count
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton
                    sx={{
                      background: Colors.white,
                      justifyContent: "center",
                      width: "40px",
                      marginRight: "4px",
                    }}
                  >
                  
                    <ListItemIcon
                      sx={{
                        justifyContent: "center",
                      }}
                    >
                      <AddIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </List>
              </TableCell>
              <TableCell sx={{ textAlign: "center",textWrap:"nowrap" }}>49.0 $</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
