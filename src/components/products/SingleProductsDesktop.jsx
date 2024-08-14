
import { Stack } from "@mui/material";
import {
  Product,
  ProductActionsWrapper,
  ProductFavButton,
  ProductImage,
  ProductAddToCart,
  ProductActionButton,
} from "../../styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { useState } from "react";
import { useUIContext } from "../../context/ui";

export default function SingleProductsDesktop({ product, matches }) {
  const [showOptaions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  const {cartValue,setCartValue} = useUIContext();


  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.images} />
        <ProductFavButton isFav={0}>
          <FavoriteIcon />
        </ProductFavButton>

        {showOptaions && (
          <ProductAddToCart show={showOptaions} variant="contained"  onClick={() => setCartValue(count => count + 1 )}>
            Add to cart
          </ProductAddToCart>
        )}

        <ProductActionsWrapper show={showOptaions}>
          <Stack direction="column">
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductMeta product={product} matches={matches} />
    </>
  );
}
