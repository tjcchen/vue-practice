<script>
import { check } from "../utils/auth";

export default {
  functional: true,
  props: {
    authority: {
      type: Array,
      required: true
    }
  },
  render(h, context) {
    console.log('checkout context: ');
    console.log(context);

    const { props, scopedSlots } = context;
    return check(props.authority) ? scopedSlots.default() : null;
  }
}
</script>