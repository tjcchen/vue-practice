import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";
import sinon from "sinon";

describe("Counter.vue", () => {
  const change = sinon.spy();

  const wrapper = mount(Counter, {
    listeners: {
      change
    }
  });

  it("[UT Counter]: Renders counter component", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  /**
   * Test count value after clicking the increase button
   */
  it("[UT Counter]: Event handler of count++", () => {
    const button = wrapper.find("button");

    // Click the button for the very first time
    button.trigger("click");
    expect(wrapper.vm.count).toBe(1);
    expect(change.called).toBe(true);

    // Click the button for the second time
    button.trigger("click");
    expect(change.callCount).toBe(2);
  });
});
