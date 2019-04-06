import * as directives from '../directives';

export default {
  name: 'ui-component',
  props: {
    tag: {
      type: String,
    },
    dress: {
      type: String,
    },
    variant: {
      type: String,
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
  directives: {
    ...directives,
  },
};
