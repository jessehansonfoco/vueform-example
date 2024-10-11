<script setup lang="ts">
import SelectedCampus from './components/SelectedCampus.vue';
import SelectedBuilding from './components/SelectedBuilding.vue';
import SelectedFloor from './components/SelectedFloor.vue';
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
            <FormStep
              name="page3"
              label="Room"
              :elements="[
                'selected_campus',
                'selected_building',
                'selected_floor',
                'rooms',
              ]"
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

            <StaticElement name="selected_floor">
              <SelectedFloor />
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

            <SelectElement
              name="room"
              :items="[
                {
                  value: 'x',
                  label: 'Room X',
                },
                {
                  value: 'y',
                  label: 'Room Y',
                },
                {
                  value: 'z',
                  label: 'Room Z',
                },
              ]"
              :search="true"
              :native="false"
              label="Room"
              input-type="search"
              autocomplete="off"
            />

            <ListElement name="rooms" add-text="+ Add room">
              <template #default="{ index }">
                <ObjectElement :name="index">
                  <StaticElement name="h4" tag="h4" content="Room" />
                  <SelectElement
                    name="room_type"
                    :search="true"
                    :native="false"
                    label="Room type"
                    input-type="search"
                    autocomplete="off"
                    :items="['Wiring', 'Boiler room', 'Other']"
                    :rules="['required']"
                    default="Wiring"
                  />
                  <StaticElement
                    name="html"
                    :columns="{
                      container: 1,
                    }"
                  />
                  <GroupElement
                    name="container"
                    :columns="{
                      container: 11,
                    }"
                  >
                    <StaticElement name="h4" tag="h4" content="Batteries" />
                    <GroupElement
                      name="container"
                      :conditions="[['rooms.*.container.beds', 'not_empty']]"
                    >
                      <StaticElement
                        name="html"
                        content="Battery type"
                        :columns="{
                          container: 10,
                        }"
                      />
                      <StaticElement
                        name="html_copy"
                        content="Count"
                        :columns="{
                          container: 2,
                        }"
                      />
                    </GroupElement>
                    <ListElement name="beds" add-text="+ Add battery">
                      <template #default="{ index }">
                        <ObjectElement :name="index">
                          <SelectElement
                            name="bed_type"
                            :search="true"
                            :native="false"
                            input-type="search"
                            autocomplete="off"
                            :columns="{
                              container: 10,
                            }"
                            :items="['220 Volt Hookup', '120 Volt']"
                            default="220 Volt Hookup"
                          />
                          <TextElement
                            name="bed_count"
                            input-type="number"
                            :rules="['required', 'integer']"
                            autocomplete="off"
                            :columns="{
                              container: 2,
                            }"
                            default="1"
                          />
                        </ObjectElement>
                      </template>
                    </ListElement>
                  </GroupElement>
                  <StaticElement name="divider" tag="hr" />
                </ObjectElement>
              </template>
            </ListElement>
          </FormElements>

          <FormStepsControls />
        </template>
      </Vueform>
    </form>
  </div>
</template>
