import { defineComponent, ref, watch } from "vue";
import "./styles/Tokenomics.scss"

export default defineComponent({
  props: ["isPlay"],
  setup(props) {
    const list = [{
      name: "Exchange and public offering",
      value: 10_000_000
    },
    {
      name: "Ecosystem",
      value: 10_000_000
    },
    {
      name: "Adviser",
      value: 3_000_000
    },
    {
      name: "Game Rewards",
      value: 40_000_000
    },
    {
      name: "Community",
      value: 7_000_000
    },
    {
      name: "Market",
      value: 5_000_000
    },
    {
      name: "Team",
      value: 10_000_000
    },
    {
      name: "Private placement",
      value: 15_000_000
    }];

    const activeIndex = ref(NaN);

    console.log("hello", props.isPlay);

    watch(props.isPlay, (newValue) => {
      console.log("hello", newValue);
    });

    return () => <div class="tokenomics-wrapper">
      <basic-title content={ "TOKENOMICS" } />
      { props.isPlay ? "heeeee" : "nooooo" }
      <pie-chart activeIndex={ activeIndex } onHover={ (index: number) => activeIndex.value = index } />
      <div id="legendItems" class="list-container">
        { list.map((item, index) => <item-card class="item-card-container" active={ index === activeIndex.value } option={ item } onClick={ () => {
          activeIndex.value = index;
          console.log(activeIndex.value);
        } } />) }
      </div>
    </div>
  }
});
