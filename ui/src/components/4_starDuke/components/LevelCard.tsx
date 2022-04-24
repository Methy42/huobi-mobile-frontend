import { defineComponent, ref } from "vue";
import "../styles/LevelCard.scss";

export default defineComponent({
  props: ["level"],
  setup(props) {
    const active = ref(false);
    return () => <div tabindex="0" class="level-card-wrapper" onFocus={() => active.value = true} onBlur={() => active.value = false}>
      <img class={{
        "bg-img": true,
        "active": active.value
      }} src="/images/StarDukeLevelCard/BgActive.png" alt="" srcset="/images/StarDukeLevelCard/BgActive@2x.png 2x,/images/StarDukeLevelCard/BgActive@3x.png 3x" />
      <img class={{
        "bg-img": true,
        "active": !active.value
      }} src="/images/StarDukeLevelCard/Bg.png" alt="" srcset="/images/StarDukeLevelCard/Bg@2x.png 2x,/images/StarDukeLevelCard/Bg@3x.png 3x" />
      {(() => {
        let result;
        switch (props.level) {
          case "R":
            result = <>
              <img class="content-img" src="/images/StarDukeLevelCard/R-Content.png" alt="" srcset="/images/StarDukeLevelCard/R-Content@2x.png 2x,/images/StarDukeLevelCard/R-Content@3x.png 3x" />
              <img class="level-img" src="/images/StarDukeLevelCard/R-Level.png" alt="" srcset="/images/StarDukeLevelCard/R-Level@2x.png 2x,/images/StarDukeLevelCard/R-Level@3x.png 3x" />
            </>
            break;
          case "SR":
            result = <>
              <img class="content-img" src="/images/StarDukeLevelCard/SR-Content.png" alt="" srcset="/images/StarDukeLevelCard/SR-Content@2x.png 2x,/images/StarDukeLevelCard/SR-Content@3x.png 3x" />
              <img class="level-img" src="/images/StarDukeLevelCard/SR-Level.png" alt="" srcset="/images/StarDukeLevelCard/SR-Level@2x.png 2x,/images/StarDukeLevelCard/SR-Level@3x.png 3x" />
            </>
            break;
          case "SSR":
            result = <>
              <img class="content-img" src="/images/StarDukeLevelCard/SSR-Content.png" alt="" srcset="/images/StarDukeLevelCard/SSR-Content@2x.png 2x,/images/StarDukeLevelCard/SSR-Content@3x.png 3x" />
              <img class="level-img" src="/images/StarDukeLevelCard/SSR-Level.png" alt="" srcset="/images/StarDukeLevelCard/SSR-Level@2x.png 2x,/images/StarDukeLevelCard/SSR-Level@3x.png 3x" />
            </>
            break;
          default:
            result = <>
              <img class="content-img" src="" alt="" srcset="" />
              <img class="level-img" src="" alt="" srcset="" />
            </>
        }

        return result;
      })()}
    </div>
  }
});
