export default {
  props: {
    dress: {
      type: String,
      default: 'primary',
    },
    variant: {
      type: String,
      default: 'normal',
    },
  },
  computed: {
    classes() {
      const { name } = this.$options;

      return {
        'ui-component': true,
        [`${name}`]: true,
      };
    },
  },
};
