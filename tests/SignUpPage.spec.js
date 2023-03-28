import SignUpPage from "../src/pages/SignUpPage.vue";
import { mount } from "@vue/test-utils";

describe("Sign Up Page", () => {
  describe("layout", () => {
    it("HelloWorld Component renders the correct text", () => {
      const wrapper = mount(SignUpPage);
      expect(wrapper.text()).toBe("Hello there!");
    });
  });
});
