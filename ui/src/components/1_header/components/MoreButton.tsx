import { defineComponent } from "vue";
import "../styles/MoreButton.scss"

export default defineComponent({
  setup() {
    return () => <div class="more-button-wrapper">
      <img src="/images/HeaderMoreButton/HeaderMoreButton.png" alt="" srcset="/images/HeaderMoreButton/HeaderMoreButton@2x.png 2x,/images/HeaderMoreButton/HeaderMoreButton@3x.png 3x" />
    </div>
  }
});
