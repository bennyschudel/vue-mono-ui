<template>
  <svg
    class="ui-icon"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    :width="size"
    :height="size"
  >
    <template v-if="is('lock-closed')">
      <path
        class="fill no-stroke"
        d="M17.7,10.5H6.3c-0.4,0-0.8,0.5-0.8,1v9c0,0.5,0.3,1,0.8,1h11.5c0.4,0,0.8-0.5,0.8-1v-9C18.5,11,18.2,10.5,17.7,10.5z M12.8,16.2v1.7c0,0.4-0.3,0.8-0.8,0.8s-0.8-0.3-0.8-0.8v-1.7c-0.4-0.3-0.8-0.7-0.8-1.3c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5C13.5,15.4,13.2,15.9,12.8,16.2z"
      />
      <path
        class="stroke no-fill"
        d="M18.5,20.5c0,0.5-0.3,1-0.8,1H6.3c-0.4,0-0.8-0.5-0.8-1v-9c0-0.6,0.3-1,0.8-1h11.5c0.4,0,0.8,0.4,0.8,1V20.5z"
      />
      <path
        class="stroke no-fill"
        d="M15.5,10c0,0,0-3,0-4c0-1.9-1.6-3.5-3.5-3.5S8.5,4.1,8.5,6c0,1,0,4,0,4"
      />
    </template>
    <template v-else-if="is('lock-open')">
      <path
        class="fill no-stroke"
        d="M13.5,14.9c0-0.8-0.7-1.5-1.5-1.5s-1.5,0.7-1.5,1.5c0,0.6,0.3,1,0.8,1.3v1.7c0,0.4,0.3,0.8,0.8,0.8s0.8-0.3,0.8-0.8v-1.7C13.2,15.9,13.5,15.4,13.5,14.9z"
      />
      <path
        class="stroke no-fill"
        d="M18.5,20.5c0,0.5-0.3,1-0.8,1H6.3c-0.4,0-0.8-0.5-0.8-1v-9c0-0.6,0.3-1,0.8-1h11.5c0.4,0,0.8,0.4,0.8,1V20.5z"
      />
      <path
        class="stroke no-fill"
        d="M15.5,10c0,0,0-3,0-4c0-1.9-1.6-3.5-3.5-3.5S8.5,4.1,8.5,6c0,1,0,1.5,0,1.5"
      />
    </template>
    <template v-else-if="is('arrow-up')">
      <polyline class="no-fill stroke" points="7,13 12,8 17,13" />
    </template>
    <template v-else-if="is('arrow-down')">
      <polyline class="no-fill stroke" points="17,10 12,15 7,10" />
    </template>
    <template v-else-if="is('arrow-right')">
      <polyline class="no-fill stroke" points="11,6.5 16,11.5 11,16.5" />
    </template>
    <template v-else-if="is('arrow-left')">
      <polyline class="no-fill stroke" points="13,16.5 8,11.5 13,6.5" />
    </template>
    <template v-else-if="is('sync')">
      <path
        class="stroke no-fill"
        d="M17.3,6.7c-1.4-1.4-3.2-2.2-5.3-2.2c-4.1,0-7.5,3.4-7.5,7.5"
      />
      <path
        class="stroke no-fill"
        d="M6.7,17.3c1.4,1.4,3.2,2.2,5.3,2.2c4.1,0,7.5-3.4,7.5-7.5"
      />
      <polyline class="stroke no-fill" points="2,8 4.5,12 8.5,9.5" />
      <polyline class="stroke no-fill" points="22,16 19.5,12 15.5,14.5" />
    </template>
    <template v-else-if="is('star')">
      <polygon
        class="no-fill stroke"
        points="12,2.5 14.1,9 21,9 15.4,13.1 17.6,19.6 12,15.6 6.4,19.6 8.6,13.1 3,9 9.9,9"
      />
    </template>
    <template v-else-if="is('download')">
      <path
        class="no-fill stroke"
        d="M21,21H3v-3h18V21z M12,2v13 M7,10l5,5l5-5"
      />
    </template>
    <template v-else-if="is('trash')">
      <rect class="stroke no-fill" x="6" y="7" width="12" height="15" />
      <line class="stroke no-fill" x1="9" y1="10" x2="9" y2="19" />
      <line class="stroke no-fill" x1="12" y1="10" x2="12" y2="19" />
      <line class="stroke no-fill" x1="15" y1="10" x2="15" y2="19" />
      <line class="stroke no-fill" x1="5" y1="4" x2="19" y2="4" />
      <rect class="stroke no-fill" x="9.5" y="1" width="5" height="3" />
    </template>
    <template v-else-if="is('plus')">
      <line class="stroke no-fill" x1="12" y1="6.5" x2="12" y2="17.5" />
      <line class="stroke no-fill" x1="6.5" y1="12" x2="17.5" y2="12" />
    </template>
    <template v-else-if="is('sortable-block')">
      <rect class="stroke no-fill" x="7" y="7" width="10" height="10" />
      <polyline class="stroke no-fill" points="21,10 23,12 21,14" />
      <polyline class="stroke no-fill" points="3,10 1,12 3,14" />
    </template>
    <template v-else-if="is('sortable-block-active')">
      <rect class="stroke fill" x="7" y="7" width="10" height="10" />
      <polyline class="stroke no-fill" points="21,10 23,12 21,14" />
      <polyline class="stroke no-fill" points="3,10 1,12 3,14" />
    </template>
    <template v-else-if="is('palette')">
      <path
        class="stroke no-fill"
        d="M15.73,20.73c-2.25-2.25-3-5.19-1.57-6.57s4.32-.68,6.57,1.57a9.58,9.58,0,0,1,.67.76A9.71,9.71,0,0,0,22.5,12,10.13,10.13,0,0,0,12.25,2,10.13,10.13,0,0,0,2,12,10.13,10.13,0,0,0,12.25,22a10.34,10.34,0,0,0,4-.8A6.06,6.06,0,0,1,15.73,20.73Z"
      />
      <circle class="fill no-stroke" cx="9" cy="17" r="1.5" />
      <circle class="fill no-stroke" cx="6" cy="12.5" r="1.5" />
      <circle class="fill no-stroke" cx="8" cy="8" r="1.5" />
      <circle class="fill no-stroke" cx="12.5" cy="6" r="1.5" />
      <circle class="fill no-stroke" cx="17" cy="8.5" r="1.5" />
    </template>
  </svg>
</template>

<script>
export default {
  name: 'ui-icon',
  props: {
    icon: {
      type: String,
    },
    size: {
      type: Number,
      default: 24,
    },
  },
  methods: {
    is(name) {
      return this.icon === name;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/components/UiIcon';
</style>
