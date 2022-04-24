import { defineComponent, inject } from "vue";
import "./styles/StarDuke.scss";

export default defineComponent({
  props: ["isPlay"],
  setup(props) {

    return () => <div class={{ "star-duke-wrapper": true }}>
      <basic-title content={ "LAND IN STAR DUKE" } />
      <div class="space-1"></div>
      <banner src={ "/images/StarDukeBanner/StarDukeBanner.png" } srcset={ "/images/StarDukeBanner/StarDukeBanner@2x.png 2x,/images/StarDukeBanner/StarDukeBanner@3x.png" }/>
      <div class="space-2"></div>
      <description class="description-1-container" content={ `There are 300,000  NFT plots. Divided into 3 levels: R, SR, SSR` } />
      <div class="space-3"></div>
      <description class="description-2-container" content={ `Different quality levels correspond to different land types, and different land types have different income growth rates.` } />
      <div class="space-3"></div>
      <level-card level={"R"} />
      <div class="space-2"></div>
      <level-card level={"SR"} />
      <div class="space-2"></div>
      <level-card level={"SSR"} />
    </div>
  }
});
