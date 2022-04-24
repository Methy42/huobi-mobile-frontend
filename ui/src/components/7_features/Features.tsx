import { defineComponent, ref } from "vue";
import "./styles/Features.scss";

export default defineComponent({
  setup() {
    const activeIndex = ref(NaN);

    const featuresList = [{
      icon: [
        "/images/FeaturesCard/Icon1.png",
        "/images/FeaturesCard/Icon1@2x.png",
        "/images/FeaturesCard/Icon1@3x.png"
      ],
      description: [
        "/images/FeaturesCard/Description1.png",
        "/images/FeaturesCard/Description1@2x.png",
        "/images/FeaturesCard/Description1@3x.png"
      ],
      tip: "ANYONE HAS THE OPPORTUNITY TO GET  HIGH-VALUE NFT"
    }, {
      icon: [
        "/images/FeaturesCard/Icon2.png",
        "/images/FeaturesCard/Icon2@2x.png",
        "/images/FeaturesCard/Icon2@3x.png"
      ],
      description: [
        "/images/FeaturesCard/Description2.png",
        "/images/FeaturesCard/Description2@2x.png",
        "/images/FeaturesCard/Description2@3x.png"
      ],
      tip: "VARIOUS GAME MECHANICS EARN MONEY WHILE PLAYING"
    }, {
      icon: [
        "/images/FeaturesCard/Icon3.png",
        "/images/FeaturesCard/Icon3@2x.png",
        "/images/FeaturesCard/Icon3@3x.png"
      ],
      description: [
        "/images/FeaturesCard/Description3.png",
        "/images/FeaturesCard/Description3@2x.png",
        "/images/FeaturesCard/Description3@3x.png"
      ],
      tip: "BUILD R&D SITES & SPACECRAFT TO EARN SDK TOKENS FOR FUNCTION UPGRADE"
    }, {
      icon: [
        "/images/FeaturesCard/Icon4.png",
        "/images/FeaturesCard/Icon4@2x.png",
        "/images/FeaturesCard/Icon4@3x.png"
      ],
      description: [
        "/images/FeaturesCard/Description4.png",
        "/images/FeaturesCard/Description4@2x.png",
        "/images/FeaturesCard/Description4@3x.png"
      ],
      tip: "（COMING SOON）TAKE PART IN DAILY CHALLENGE ANDWIN REWARDS"
    }, {
      icon: [
        "/images/FeaturesCard/Icon5.png",
        "/images/FeaturesCard/Icon5@2x.png",
        "/images/FeaturesCard/Icon5@3x.png"
      ],
      description: [
        "/images/FeaturesCard/Description5.png",
        "/images/FeaturesCard/Description5@2x.png",
        "/images/FeaturesCard/Description5@3x.png"
      ],
      tip: "EARN CLNY TOKEN BY STAKING LP TOKENS"
    }, {
      icon: [
        "/images/FeaturesCard/Icon6.png",
        "/images/FeaturesCard/Icon6@2x.png",
        "/images/FeaturesCard/Icon6@3x.png"
      ],
      description: [
        "/images/FeaturesCard/Description6.png",
        "/images/FeaturesCard/Description6@2x.png",
        "/images/FeaturesCard/Description6@3x.png"
      ],
      tip: "NFT FROM MYSTERY BOXES CAN BE SOLD ON THE MARKET"
    }];

    return () => <div class="features-wrapper">
      <basic-title content={ "SIX FEATURES" } />
      <div class="space-24px"></div>
      <div class="features-list-container">
        { featuresList.map((feature, index) => <features-card class="features-card-container" active={ index === activeIndex.value } feature={ feature } />) }
      </div>
    </div>
  }
});
