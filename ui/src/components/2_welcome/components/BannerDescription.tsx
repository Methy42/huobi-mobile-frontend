import { defineComponent } from "vue";
import "../styles/BannerDescription.scss";

export default defineComponent({
  setup() {
    return () => <div class="banner-description-wrapper">
      <span class="large-description">WELCOME TO STAR DUKE</span>
      <span class="normal-description">A PLAY TO EARN GAME</span>
      <span class="normal-description">BASED ON BLOCKCHAIN</span>
    </div>
  }
});
