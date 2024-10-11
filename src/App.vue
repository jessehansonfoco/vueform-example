<script setup lang="ts">
import SelectedCampus from './components/SelectedCampus.vue';
import SelectedBuilding from './components/SelectedBuilding.vue';
</script>

<template>
  <div
    class="bg-white rounded-lg p-10 max-w-xl shadow-box-circle dark:bg-dark-1000"
  >
    <form @submit="handleSubmit">
      <Vueform>
        <template #empty>
          <FormSteps>
            <FormStep name="page0" label="Campus" :elements="['campus']" />
            <FormStep
              name="page1"
              label="Building"
              :elements="['selected_campus', 'building']"
            />
            <FormStep
              name="page2"
              label="Floor"
              :elements="['selected_campus', 'selected_building', 'floor']"
            />
          </FormSteps>

          <FormElements>
            <SelectElement
              name="campus"
              :items="[
                {
                  value: 'a',
                  label: 'Campus A',
                },
                {
                  value: 'b',
                  label: 'Campus B',
                },
                {
                  value: 'c',
                  label: 'Campus C',
                },
              ]"
              :search="true"
              :native="false"
              label="Campus"
              input-type="search"
              autocomplete="off"
            />

            <StaticElement name="selected_campus">
              <SelectedCampus />
            </StaticElement>

            <StaticElement name="selected_building">
              <SelectedBuilding />
            </StaticElement>

            <SelectElement
              name="building"
              :items="[
                {
                  value: 'a',
                  label: 'Building A',
                },
                {
                  value: 'b',
                  label: 'Building B',
                },
                {
                  value: 'c',
                  label: 'Building C',
                },
              ]"
              :search="true"
              :native="false"
              label="Building"
              input-type="search"
              autocomplete="off"
            />

            <SelectElement
              name="floor"
              :items="[
                {
                  value: '1',
                  label: 'Floor 1',
                },
                {
                  value: '2',
                  label: 'Floor 2',
                },
                {
                  value: '3',
                  label: 'Floor 3',
                },
              ]"
              :search="true"
              :native="false"
              label="Floor"
              input-type="search"
              autocomplete="off"
            />
          </FormElements>

          <FormStepsControls />
        </template>
      </Vueform>
    </form>
  </div>
</template>
