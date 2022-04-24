import { defineComponent } from "vue";
import "../styles/ItemCard.scss";

const basicCount = 1_000_000

export default defineComponent({
  props: ["active", "option"],
  setup(props) {
    return () => <div class={{ "item-card-wrapper": true, "active": props.active }}>
      <div class="item-bg-container">
        <img src="/images/TokenomicsItemCard/Bg.png" alt="" srcset="/images/TokenomicsItemCard/Bg@2x.png 2x" />
      </div>
      <span class="item-name">{ props.option.name }</span>
      <span class="item-value">{ props.option.value / basicCount }%</span>
      <span class="item-tip">({ props.option.value } token)</span>
    </div>
  }
});
