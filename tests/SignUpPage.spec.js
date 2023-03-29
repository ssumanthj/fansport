import SignUp from "../src/components/player/SignUp.vue";
import { mount } from "@vue/test-utils";

describe("Sign Up Page", () => {
  describe("layout", () => {
    it("HelloWorld Component renders the correct text", async () => {
      const wrapper = mount(SignUp);
      const todo = wrapper.get('[data-test="welcomeText"]');
      expect(todo.text()).toBe("Hello, welcome");
    });
  });
});
