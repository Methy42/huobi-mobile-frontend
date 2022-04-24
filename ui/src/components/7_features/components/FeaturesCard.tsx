import { defineComponent, ref } from "vue";
import "../styles/FeaturesCard.scss";

const BgElement = (props: any) => <div class="bg-wrapper">
  <img class={{ active: props.active }} src="/images/FeaturesCard/BgLight.png" alt="" srcset="/images/FeaturesCard/BgLight@2x.png 2x,/images/FeaturesCard/BgLight@3x.png 3x" />
  <div class="mask-block"></div>
</div>

export default defineComponent({
  props: ["feature"],
  setup(props) {
    const active = ref(false);

    return () => <div tabindex="0" class="features-card-wrapper" onFocus={() => active.value = true} onBlur={() => active.value = false} >
      <BgElement active={ active.value } />
      <div class="icon-image-wrapper">
        <img src={ props.feature.icon[0] } alt="" srcset={ `${ props.feature.icon[1] } 2x,${ props.feature.icon[2] } 3x` } />
      </div>
      <div class="description-image-wrapper">
        <img src={ props.feature.description[0] } alt="" srcset={ `${ props.feature.description[1] } 2x,${ props.feature.description[2] } 3x` } />
      </div>
      <div class="tip-span-wrapper">
        <span>{ props.feature.tip }</span>
      </div>
    </div>
  }
});
