import { defineComponent, ref } from "vue";
import "./styles/RoadMap.scss";

export default defineComponent({
  setup() {
    const tabActive = ref("PHASE1");
    return () => <div class="road-map-container">
      <basic-title content={ "ROAD MAP" } />
      <div class="tab-list-container">
        <pha-tab-button onClick={ () => tabActive.value = "PHASE1" } active={ tabActive.value === "PHASE1" } lable={ "PHASE1: IN2022" } />
        <pha-tab-button onClick={ () => tabActive.value = "PHASE2" } active={ tabActive.value === "PHASE2" } lable={ "PHASE2" } />
        <pha-tab-button onClick={ () => tabActive.value = "PHASE3" } active={ tabActive.value === "PHASE3" } lable={ "PHASE3" } />
      </div>
      <time-axis class="time-axis-container" />
    </div>
  }
});
