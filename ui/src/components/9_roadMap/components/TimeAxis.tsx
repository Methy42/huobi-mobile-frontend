import { defineComponent } from "vue";
import "../styles/TimeAxis.scss"

export default defineComponent({
  setup() {
    return () => <div class="time-axis-wrapper">
      {/* <div class="left-container">
        <div class="q1-lable-container">
          <span class="label">2022 Q1</span>
        </div>
        <div class="q2-message-container">
          <img class="message-bg-image" src="/images/RoadMapTimeAxis/Q2MessageBg.png" alt="" srcset="/images/RoadMapTimeAxis/Q2MessageBg@2x.png 2x,/images/RoadMapTimeAxis/Q2MessageBg@3x.png 3x" />
          <span class="title">GAME TASTING & NFT SALES</span>
          <span class="detail">
            - Star Duke game Beta test
            - Planet land, planet R&D base spacecraft NFTs sales
          </span>
        </div>
        <div class="q3-lable-container">
          <span class="label">2022 Q3</span>
        </div>
        <div class="q4-message-container">
          <img class="message-bg-image" src="/images/RoadMapTimeAxis/Q4MessageBg.png" alt="" srcset="/images/RoadMapTimeAxis/Q4MessageBg@2x.png 2x,/images/RoadMapTimeAxis/Q4MessageBg@3x.png 3x" />
          <span class="title">AME FEATURES IMPROVED WITH IGO</span>
          <span class="detail">
            - Adding more game scenes and NFT rental gameplay
            - Establish IGO Launchpad
          </span>
        </div>
      </div>
      <div class="axis-container">
        <img src="/images/RoadMapTimeAxis/AxisBg.png" alt="" srcset="/images/RoadMapTimeAxis/AxisBg@2x.png 2x,/images/RoadMapTimeAxis/AxisBg@3x.png 3x" />
      </div>
      <div class="right-container">
        <div class="q1-message-container">
          <img class="message-bg-image" src="/images/RoadMapTimeAxis/Q1MessageBg.png" alt="" srcset="/images/RoadMapTimeAxis/Q1MessageBg@2x.png 2x,/images/RoadMapTimeAxis/Q1MessageBg@3x.png 3x" />
          <span class="title">GAME PLANNING & DESIGN </span>
          <span class="detail">
            - Game planning and design
            - Game prototype demo
            - Game art & graphics publishing
          </span>
        </div>
        <div class="q2-lable-container">
          <span class="label">2022 Q2</span>
        </div>
        <div class="q3-message-container">
          <img class="message-bg-image" src="/images/RoadMapTimeAxis/Q3MessageBg.png" alt="" srcset="/images/RoadMapTimeAxis/Q3MessageBg@2x.png 2x,/images/RoadMapTimeAxis/Q3MessageBg@3x.png 3x" />
          <span class="title">GAME  PUBLIC RELEASED TOKEN ONLINE</span>
          <span class="detail">
            - Public release of the game
            - NFT market release
            - $SDK Token issued
          </span>
        </div>
        <div class="q4-lable-container">
          <span class="label">2022 Q4</span>
        </div>
      </div> */}
      <img class="axis-image" src="/images/RoadMapTimeAxis/Axis.png" alt="" srcset="/images/RoadMapTimeAxis/Axis@2x.png 2x,/images/RoadMapTimeAxis/Axis@3x.png 3x" />
    </div>
  }
});
