import { defineComponent } from "vue";
import "./styles/Welcome.scss";

export default defineComponent({
  setup() {
    return () => <div class="welcome-wrapper">
      <banner src={ "/images/WelcomeBanner/WelcomeBanner.png" } srcset={ "/images/WelcomeBanner/WelcomeBanner@2x.png 2x,/images/WelcomeBanner/WelcomeBanner@3x.png" } />
      <banner-description />
      <enter-button />
    </div>
  }
});
