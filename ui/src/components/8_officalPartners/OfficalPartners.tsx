import { defineComponent } from "vue";
import "./styles/OfficalPartners.scss"

export default defineComponent({
  setup() {
    const partnersList = [[
      "/images/OfficalPartners/Partner1.png",
      "/images/OfficalPartners/Partner1@2x.png",
      "/images/OfficalPartners/Partner1@3x.png"
    ], [
      "/images/OfficalPartners/Partner2.png",
      "/images/OfficalPartners/Partner2@2x.png",
      "/images/OfficalPartners/Partner2@3x.png"
    ], [
      "/images/OfficalPartners/Partner3.png",
      "/images/OfficalPartners/Partner3@2x.png",
      "/images/OfficalPartners/Partner3@3x.png"
    ], [
      "/images/OfficalPartners/Partner4.png",
      "/images/OfficalPartners/Partner4@2x.png",
      "/images/OfficalPartners/Partner4@3x.png"
    ], [
      "/images/OfficalPartners/Partner5.png",
      "/images/OfficalPartners/Partner5@2x.png",
      "/images/OfficalPartners/Partner5@3x.png"
    ], [
      "/images/OfficalPartners/Partner6.png",
      "/images/OfficalPartners/Partner6@2x.png",
      "/images/OfficalPartners/Partner6@3x.png"
    ], [
      "/images/OfficalPartners/Partner7.png",
      "/images/OfficalPartners/Partner7@2x.png",
      "/images/OfficalPartners/Partner7@3x.png"
    ], [
      "/images/OfficalPartners/Partner8.png",
      "/images/OfficalPartners/Partner8@2x.png",
      "/images/OfficalPartners/Partner8@3x.png"
    ]];

    const iconList = [{
      images: [
        "/images/OfficalPartners/Icon1.png",
        "/images/OfficalPartners/Icon1@2x.png",
        "/images/OfficalPartners/Icon1@3x.png"
      ],
      url: "#"
    }, {
      images: [
        "/images/OfficalPartners/Icon2.png",
        "/images/OfficalPartners/Icon2@2x.png",
        "/images/OfficalPartners/Icon2@3x.png"
      ],
      url: "https://t.me/StarDuke"
    }, {
      images: [
        "/images/OfficalPartners/Icon3.png",
        "/images/OfficalPartners/Icon3@2x.png",
        "/images/OfficalPartners/Icon3@3x.png"
      ],
      url: "#"
    }, {
      images: [
        "/images/OfficalPartners/Icon4.png",
        "/images/OfficalPartners/Icon4@2x.png",
        "/images/OfficalPartners/Icon4@3x.png"
      ],
      url: "https://starduke.medium.com/"
    }, {
      images: [
        "/images/OfficalPartners/Icon5.png",
        "/images/OfficalPartners/Icon5@2x.png",
        "/images/OfficalPartners/Icon5@3x.png"
      ],
      url: "#"
    }, {
      images: [
        "/images/OfficalPartners/Icon6.png",
        "/images/OfficalPartners/Icon6@2x.png",
        "/images/OfficalPartners/Icon6@3x.png"
      ],
      url: "https://twitter.com/StarDukeGames"
    }, {
      images: [
        "/images/OfficalPartners/Icon7.png",
        "/images/OfficalPartners/Icon7@2x.png",
        "/images/OfficalPartners/Icon7@3x.png"
      ],
      url: "#"
    }, {
      images: [
        "/images/OfficalPartners/Icon8.png",
        "/images/OfficalPartners/Icon8@2x.png",
        "/images/OfficalPartners/Icon8@3x.png"
      ],
      url: "https://discord.gg/3RQ9V255MB"
    }, {
      images: [
        "/images/OfficalPartners/Icon9.png",
        "/images/OfficalPartners/Icon9@2x.png",
        "/images/OfficalPartners/Icon9@3x.png"
      ],
      url: "#"
    }];

    return () => <div class="offical-partners-wrapper">
      <basic-title content={"OFFICAL PARTNERS"} />
      <div class="offical-partners-list-container">
        {partnersList.map((partner) => <offical-partners-card class="offical-partners-card-container" partner={partner} />)}
      </div>
      <div class="icon-list-container">
        {iconList.map(icon => <offical-partners-icon icon={icon} />)}
      </div>
    </div>
  }
});
