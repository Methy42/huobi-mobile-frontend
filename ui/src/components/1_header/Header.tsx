import { defineComponent } from "vue";
import "./styles/Header.scss"

export default defineComponent({
  props: ["showRightPopup"],
  setup(props) {
    return () => <div class="header-wrapper">
      <logo />
      <div class="empty-block"></div>
      <start-button onClick={ () => location.href = "https://game.starduke.io" } />
      <more-button onClick={ props.showRightPopup } />
    </div>
  }
});
