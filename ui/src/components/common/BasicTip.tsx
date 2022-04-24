import { defineComponent } from "vue";
import "./styles/BasicTip.scss"

export default defineComponent({
  props: ["content"],
  setup(props) {
    return () => <div class="basic-tip-wrapper">
      <span>{ props.content }</span>
    </div>
  }
});
