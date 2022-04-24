import { defineComponent } from "vue";
import "./styles/Banner.scss";

export default defineComponent({
  props: ["src", "srcset"],
  setup(props) {
    return () => <div class="common-banner-wrapper">
      <img src={ props.src } alt="" srcset={ props.srcset } />
    </div>
  }
});
