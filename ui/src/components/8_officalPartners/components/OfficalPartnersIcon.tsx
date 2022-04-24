import { defineComponent } from "vue";

export default defineComponent({
  props: ["icon"],
  setup(props) {
    return () => <div onClick={ () => location.href = props.icon.url }>
      <img src={ props.icon.images[0] } alt="" srcset={ `${ props.icon.images[1] } 2x,${ props.icon.images[2] } 3x` } />
    </div>
  }
});
