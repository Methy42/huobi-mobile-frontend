import { defineComponent } from "vue";
import "../styles/EnterButton.scss";

export default defineComponent({
  setup() {
    return () => <div class="enter-button-wrapper" onClick={ () => location.href = "http://game.starduke.io" }>
      <img src="/images/WelcomeEnterButton/WelcomeEnterButton.png" alt="" srcset="/images/WelcomeEnterButton/WelcomeEnterButton@2x.png 2x,/images/WelcomeEnterButton/WelcomeEnterButton@3x.png 3x" />
      <span class="lable">ENTER  THE  GAME</span>
    </div>
  }
});
