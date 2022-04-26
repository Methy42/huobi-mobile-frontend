import { defineComponent, ref } from "vue";
import { Popup } from "vant";
import "./styles/MoreMenuPopup.scss"

const isShow = ref(false);

export default defineComponent({
  props: ["content"],
  methods: {
    open() {
      isShow.value = true;
    }
  },
  setup(props) {
    const menuItemList = [{
      lable: "GAME",
      url: "https://game.starduke.io"
    },{
      lable: "MARKET",
      url: "https://game.starduke.io"
    },{
      lable: "SDK FARM",
      url: "#"
    },{
      lable: "LIQUIDITY",
      url: "#"
    },{
      lable: "DAO",
      url: "#"
    }];

    const activeIndex = ref(NaN);

    return () => <Popup class="more-menu-popup-wrapper" show={ isShow.value } position="right" >
      <div class="popup-header">
        <div class="close-button">
          <img class="close-button-bg" src="/images/MoreMenuPopup/CloseBg.png" alt="" srcset="/images/MoreMenuPopup/CloseBg@2x.png 2x,/images/MoreMenuPopup/CloseBg@3x.png 3x" onClick={ () => isShow.value = false } />
          <img class="close-button-x" src="/images/MoreMenuPopup/CloseX.png" alt="" srcset="/images/MoreMenuPopup/CloseX@2x.png 2x,/images/MoreMenuPopup/CloseX@3x.png 3x" onClick={ () => isShow.value = false } />
        </div>
      </div>
      <div class="menu-item-list">
        { menuItemList.map((item, index) => <div class={{ "menu-item": true, "active": index === activeIndex.value }} onClick={ () => {
          activeIndex.value = index;
          location.href = item.url;
        } }>
          <span>{ item.lable }</span>
          <img src="/images/MoreMenuPopup/MenuItemActiveLine.png" alt="" srcset="/images/MoreMenuPopup/MenuItemActiveLine@3x.png 2x,/images/MoreMenuPopup/MenuItemActiveLine@3x.png 3x" />
        </div>) }
      </div>
    </Popup>
  }
});
