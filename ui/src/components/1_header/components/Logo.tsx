import { defineComponent } from "vue";
import "../styles/Logo.scss";

export default defineComponent({
  setup() {
    return () => <div class="logo-wrapper">
      <img src="/images/HorizontalStarDukeLogo/HorizontalStarDukeLogo.png" alt="" srcset="/images/HorizontalStarDukeLogo/HorizontalStarDukeLogo@2x.png 2x,/images/HorizontalStarDukeLogo/HorizontalStarDukeLogo@3x.png 3x" />
    </div>
  }
});
