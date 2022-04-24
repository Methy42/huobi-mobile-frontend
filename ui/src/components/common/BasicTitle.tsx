import { defineComponent } from "vue";
import "./styles/BasicTitle.scss";

export default defineComponent({
  props: ["content"],
  setup(props) {
    return () => <div class="basic-title-wrapper">
      <span>{ props.content }</span>
    </div>
  }
});
