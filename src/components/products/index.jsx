import { Container, Grid, useMediaQuery, useTheme,Typography,Box } from "@mui/material";
import { products } from "../../data";
import SingleProducts from "./SingleProducts";
import SingleProductsDesktop from "./SingleProductsDesktop";


export const getProductsToDisplay = (products, showAll) => {
  return showAll ? products : products.slice(0, 6);
};

export default function Products({ showAll = false }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const displayProducts = getProductsToDisplay(products, showAll);
  const renderProducts = displayProducts.map((product) => (
    <Grid
      item
      key={product.id}
      xs={12}
      sm={6}
      md={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {matches ? (
        <SingleProducts product={product} matches={matches} />
      ) : (
        <SingleProductsDesktop product={product} matches={matches} />
      )}
    </Grid>
  ));

  return (
    <>
    <Box display="flex" justifyContent={"center"} sx={{p:4}}>
      <Typography variant="h4">Our Products</Typography>
    </Box>
    <Container
      sx={{
        display: "flex",
        my: "20px",
        padding: 0,
      }}
    >
    
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        alignItems="center"
        sx={{ my: "20px", padding: 0 }}
      >
        
        {renderProducts}
      </Grid>
    </Container>
    </>
  );
}