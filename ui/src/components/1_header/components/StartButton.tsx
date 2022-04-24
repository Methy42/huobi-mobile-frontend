import { defineComponent } from "vue";
import "../styles/StartButton.scss"

export default defineComponent({
  setup() {
    return () => <div class="start-button-wrapper">
      <img src="/images/HeaderStartButton/HeaderStartButton.png" alt="" srcset="/images/HeaderStartButton/HeaderStartButton@2x.png 2x,/images/HeaderStartButton/HeaderStartButton@3x.png 3x" />
      <span>START</span>
    </div>
  }
});
