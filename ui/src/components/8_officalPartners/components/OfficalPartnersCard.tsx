import { defineComponent } from "vue";

export default defineComponent({
  props: ["partner"],
  setup(props) {
    return () => <div class="offical-partners-card-wrapper">
      <img src={ props.partner[0] } alt="" srcset={ `${ props.partner[1] } 2x,${ props.partner[2] } 3x` } />
    </div>
  }
});
