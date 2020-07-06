import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  const wrapper = mount(Counter);

  it("renders counter component", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

   // Test count value after clicking the increase button
  it("count++", () => {
    const button = wrapper.find("button");

    button.trigger("click");

    expect(wrapper.vm.count).toBe(1);
  });
});
