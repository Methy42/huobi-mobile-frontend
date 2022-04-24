import { defineComponent } from "vue";
import "../styles/PhaTabButton.scss";

export default defineComponent({
  props: ["active", "lable"],
  setup(props) {
    return () => <div class="pha-tab-button-wrapper">
      <img class={{ "active": !props.active }} src="/images/RoadMapPhaButton/Bg.png" alt="" srcset="/images/RoadMapPhaButton/Bg@2x.png 2x,/images/RoadMapPhaButton/Bg@3x.png 3x" />
      <img class={{ "active": props.active }} src="/images/RoadMapPhaButton/BgActive.png" alt="" srcset="/images/RoadMapPhaButton/BgActive@2x.png 2x,/images/RoadMapPhaButton/BgActive@3x.png 3x" />
      <span>{ props.lable }</span>
    </div>
  }
});
