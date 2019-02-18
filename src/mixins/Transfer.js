export default {
  props: {
    transfer: {
      type: String,
      default: 'both',
      validator(v) {
        return ['none', 'drag', 'drop', 'both'].includes(v);
      },
    },
  },
  computed: {
    draggable() {
      return ['drag', 'both'].includes(this.transfer);
    },
    droppable() {
      return ['drop', 'both'].includes(this.transfer);
    },
  },
};
