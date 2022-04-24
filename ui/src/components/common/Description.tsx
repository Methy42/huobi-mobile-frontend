import { defineComponent } from "vue";
import "./styles/Description.scss"

export default defineComponent({
  props: ["content"],
  setup(props) {
    return () => <div class="description-wrapper">
      <span>{ props.content }</span>
    </div>
  }
});
