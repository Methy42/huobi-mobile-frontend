import { defineComponent } from "vue";
import "./styles/Story.scss"

export default defineComponent({
  setup() {
    return () => <div class="story-wrapper">
      <basic-title content={ "STORY" } />
      <description content={ `In the future, the earth environment deteriorates 
and is no longer suitable for human habitation. 
Many countries jointly set up an organization for 
outer space exploration to search for a planet 
suitable for the continuation
of human civilization.` } />
      <basic-tip class="basic-tip-container" content={ `A decentralized exploration game sited on blockchain ` } />
      <div class="space-1"></div>
      <back-button lable={ "White paper" } onClick={ () => location.href = "https://docs.starduke.io/" } />
      <div class="space-2"></div>
      <back-button lable={ "Tokenomics" } onClick={ () => location.href = "https://docs.starduke.io/our-token/star-duke-token" } />
    </div>
  }
});
