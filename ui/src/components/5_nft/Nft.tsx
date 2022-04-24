import { defineComponent } from "vue";
import "./styles/Nft.scss";

export default defineComponent({
  setup() {
    return () => <div class="nft-wrapper">
      <basic-title content={ "NFT MYSTERY BOX" } />
      <div class="space-15px"></div>
      <banner src="/images/NftBanner/NftBanner.png" srcset="/images/NftBanner/NftBanner@2x.png 2x,/images/NftBanner/NftBanner@3x.png 3x" />
      <div class="space-15px"></div>
      <description content={ "R&D sites and spacecraft have 900000 NFT mystery boxes respectively. Divided into 3 levels and each level has 1-5 stars." } />
      <div class="space-20px"></div>
      <star-line />
    </div>
  }
});
