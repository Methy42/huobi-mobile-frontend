import { defineComponent, ref } from "vue";
import "../styles/BackButton.scss"

export default defineComponent({
  props: [ "lable" ],
  setup(props) {
    const active = ref(false);
    return () => <div tabindex="0" class="back-button-wrapper" onFocus={ () => active.value = true } onBlur={ () => active.value = false }>
      <img class={{ "active": active.value }} src="/images/StoryBackButton/StoryBackButtonActive.png" alt="" srcset="/images/StoryBackButton/StoryBackButtonActive@2x.png 2x,/images/StoryBackButton/StoryBackButtonActive@3x.png 3x" />
      <img class={{ "active": !active.value }} src="/images/StoryBackButton/StoryBackButton.png" alt="" srcset="/images/StoryBackButton/StoryBackButton@2x.png 2x,/images/StoryBackButton/StoryBackButton@3x.png 3x" />
      <span>{ props.lable }</span>
    </div>
  }
});
