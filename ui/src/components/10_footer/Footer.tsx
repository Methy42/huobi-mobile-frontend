import { defineComponent } from "vue";
import "./styles/Footer.scss";

export default defineComponent({
  setup() {
    return () => <div class="foolter-container">
      <div class="link-list-container">
        <div class="link-button">
          <span>ABOUT US</span>
        </div>
        <div class="link-button">
          <span>VULNERABILITY BOUNTY</span>
        </div>
        <div class="link-button" onClick={ () => location.href = "https://docs.starduke.io/" }>
          <span>Q&A</span>
        </div>
        <div class="link-button">
          <span>AUDIT</span>
        </div>
      </div>
      <div class="copyright-container">
        <span>Copyright © 2022.AII Rights Reserved</span>
      </div>
    </div>
  }
});
