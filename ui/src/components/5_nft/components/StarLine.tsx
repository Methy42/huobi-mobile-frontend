import { defineComponent } from "vue";
import "../styles/StarLine.scss";

export default defineComponent({
  setup() {
    return () => <div class="star-line-wrapper">
      <img src="/images/NftStars/NftStars.png" alt="" srcset="/images/NftStars/NftStars@2x.png 2x" />
    </div>
  }
});
