import { Typography} from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitile } from "../../styles/banner";


export default function Banner(){
    return (
        <BannerContainer>
            <BannerImage src="/images/banner/banner_img.png"/>
            <BannerContent>
                <Typography variant="6">Huge Collecion </Typography>
                <BannerTitile variant="h2">New Bags</BannerTitile>
                <BannerDescription variant="subtitile"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis odit magnam corrupti sit mollitia dignissimos quas iste nostrum aspernatur deserunt.</BannerDescription>
                <BannerShopButton color="primary"> Shop Now</BannerShopButton>
            </BannerContent>
        </BannerContainer>

    )
}