<template>
  <div
    class="bg-white border border-gray-300 rounded p-4 mt-4 dark:bg-dark-800 dark:border-dark-800"
  >
    <!-- Campus details -->
    <div class="pb-4 flex justify-between">
      <div class="flex items-start mr-6">
        <span
          class="text-gray-500 w-20 flex-grow-0 flex-shrink-0 dark:text-dark-400"
          >Campus</span
        >
        <span>{{ campus }}</span>
      </div>
      <div class="text-sm text-primary-500">
        <a href="" @click.prevent="handleChangeData">Change</a>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue';

export default {
  setup(props, context) {
    const form$ = inject('form$');

    // `Campus details` data
    const campus = computed(() => {
      return form$.value.data.campus;
    });

    const handleChangeData = () => {
      form$.value.steps$.goTo('page0');
    };

    return {
      campus,
      handleChangeData,
    };
  },
};
</script>
