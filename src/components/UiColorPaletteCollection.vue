<template>
  <div class="ui-color-palette-collection">
    <div
      v-for="(item, i) in palettes"
      :key="i"
      class="ui-color-palette-collection__item"
    >
      <UiColorPalette
        :colors="item.colors"
        @update:colors="d => onColorsUpdate(i, d)"
      />
      <UiIconButton icon="trash" @click="onRemoveClick(i)" />
    </div>
    <div class="ui-color-palette-collection__admin">
      <Drop
        @drop="onAddPalette"
        class="ui-drop ui-color-palette-collection__add"
      >
        <UiIconButton
          icon="plus"
          :icon-size="16"
          :padding="2"
          :margin="2"
          data-action="new-palette"
        />
      </Drop>
    </div>
  </div>
</template>

<script>
import { Drop } from 'vue-drag-drop';

import UiIconButton from './UiIconButton.vue';
import UiColorPalette from './UiColorPalette.vue';

export default {
  name: 'ui-color-palette-collection',
  props: {
    palettes: {
      type: Array,
    },
  },
  methods: {
    clonePalettes() {
      const data = [];

      this.palettes.forEach(d => {
        const { label } = d;
        const colors = d.colors.map(d => d.clone());

        data.push({
          label,
          colors,
        });
      });

      return data;
    },
    onColorsUpdate(i, d) {
      const data = this.clonePalettes();

      data[i].colors = d;

      this.emitUpdatePalettes(data);
    },
    onRemoveClick(i) {
      let data = this.clonePalettes();

      data.splice(i, 1);

      this.emitUpdatePalettes(data);
    },
    onAddPalette(d) {
      let data = this.clonePalettes();

      data.push({
        label: 'New palette',
        colors: d,
      });

      this.emitUpdatePalettes(data);
    },
    emitUpdatePalettes(d) {
      this.$emit('update:palettes', d);
    },
  },
  components: {
    Drop,
    UiIconButton,
    UiColorPalette,
  },
};
</script>

<style lang="scss">
@import '../styles/components/UiColorPaletteCollection';
</style>
