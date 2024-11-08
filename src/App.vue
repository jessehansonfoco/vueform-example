<script setup lang="ts">
import SelectedCampus from './components/SelectedCampus.vue';
import SelectedBuilding from './components/SelectedBuilding.vue';
import SelectedFloor from './components/SelectedFloor.vue';
import SelectedRoom from './components/SelectedRoom.vue';
</script>

<template>
  <div
    class="bg-white rounded-lg p-10 max-w-xl shadow-box-circle dark:bg-dark-1000"
  >
    <form @submit="handleSubmit">
      <Vueform>
        <template #empty>
          <FormSteps>
            <FormStep
              name="page0"
              label="Campus"
              :elements="[
                'campus',
                'divider',
                'campus_name',
                'campus_street1',
                'campus_street2',
                'campus_city',
                'campus_state',
                'campus_postcode',
                'campus_gps1',
                'campus_gps2',
                'divider_2',
                'campus_contacts',
                'campus_start_xyz',
                'campus_end_xyz',
                'campus_pickup_start',
                'campus_pickup_end',
                'campus_delivery_start',
                'campus_delivery_end',
                'campus_freight_type',
                'campus_freight_accessories',
                'campus_noncommercials',
              ]"
            />
            <FormStep
              name="page1"
              label="Building"
              :elements="[
                'selected_campus',
                'buildings',
                'divider_5',
                'building_contacts',
              ]"
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
            <FormStep
              name="page4"
              label="Customer Expectations"
              :elements="[
                'selected_campus',
                'selected_building',
                'selected_floor',
                'selected_room',
                'customer_quote_number',
                'customer_service_number',
                'customer_sales_order',
                'customer_po_float_days',
                'customer_po_release_date',
                'customer_field_service_days',
                'customer_desired_ready_date',
                'customer_required_services',
                'customer_required_components',
              ]"
            />
          </FormSteps>

          <FormElements>
            <SelectElement
              name="campus"
              :items="[
                {
                  value: 'Campus A',
                  label: 'Campus A',
                },
                {
                  value: 'Campus B',
                  label: 'Campus B',
                },
                {
                  value: 'Campus C',
                  label: 'Campus C',
                },
              ]"
              :search="true"
              :native="false"
              label="Campus ID"
              input-type="search"
              autocomplete="off"
            />

            <StaticElement name="divider" tag="hr" />

            <TextElement
              name="campus_name"
              placeholder="Campus name"
              :columns="{
                container: 12,
                label: 12,
                wrapper: 12,
              }"
              field-name="Campus name"
              label="Campus Info"
              :rules="['required', 'max:255']"
            />

            <TextElement
              name="campus_street1"
              placeholder="Street 1"
              :columns="{
                container: 12,
                label: 12,
                wrapper: 12,
              }"
              field-name="Street 1"
              :rules="['required', 'max:255']"
            />

            <TextElement
              name="campus_street2"
              placeholder="Street 2"
              :columns="{
                container: 12,
                label: 12,
                wrapper: 12,
              }"
              field-name="Street 2"
              :rules="['max:255']"
            />

            <TextElement
              name="campus_city"
              placeholder="City"
              :columns="{
                container: 4,
                label: 12,
                wrapper: 12,
              }"
              field-name="City"
              :rules="['required', 'max:255']"
            />

            <TextElement
              name="campus_state"
              placeholder="State or Province"
              :columns="{
                container: 4,
                label: 12,
                wrapper: 12,
              }"
              field-name="State or Province"
              :rules="['required', 'max:255']"
            />

            <TextElement
              name="campus_postcode"
              placeholder="Postal"
              :columns="{
                container: 4,
                label: 12,
                wrapper: 12,
              }"
              field-name="Postal"
              :rules="['required', 'max:255']"
            />

            <TextElement
              name="campus_gps1"
              placeholder="GPS 1"
              :columns="{
                container: 6,
                label: 12,
                wrapper: 12,
              }"
              field-name="GPS 1"
              :rules="['max:255']"
            />

            <TextElement
              name="campus_gps2"
              placeholder="GPS 2"
              :columns="{
                container: 6,
                label: 12,
                wrapper: 12,
              }"
              field-name="GPS 2"
              :rules="['max:255']"
            />

            <StaticElement name="divider_2" tag="hr" />

            <ListElement name="campus_contacts" add-text="+ Add Contact">
              <template #default="{ index }">
                <ObjectElement :name="index">
                  <TextElement
                    name="campus_contacts_firstname"
                    placeholder="First Name"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="First Name"
                    label="Contact Info"
                    :rules="['required', 'max:255']"
                  />

                  <TextElement
                    name="campus_contacts_lastname"
                    placeholder="Last Name"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Last Name"
                    label="&nbsp"
                    :rules="['required', 'max:255']"
                  />

                  <TextElement
                    name="campus_contacts_phone1"
                    placeholder="Phone 1"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Phone 1"
                    :rules="['required', 'max:255']"
                  />

                  <TextElement
                    name="campus_contacts_phone2"
                    placeholder="Phone 2"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Phone 2"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="campus_contacts_email"
                    placeholder="Email"
                    :columns="{
                      container: 12,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Email"
                    :rules="['required', 'max:255']"
                  />
                </ObjectElement>
              </template>
            </ListElement>

            <TextElement
              name="campus_start_xyz"
              placeholder="Start XYZ"
              :columns="{
                container: 6,
                label: 12,
                wrapper: 12,
              }"
              label="XYZ Scatter Plot"
              field-name="Start XYZ"
              :rules="['required', 'max:255']"
            />

            <TextElement
              name="campus_end_xyz"
              placeholder="End XYZ"
              :columns="{
                container: 6,
                label: 12,
                wrapper: 12,
              }"
              label="&nbsp;"
              field-name="End XYZ"
              :rules="['required', 'max:255']"
            />

            <DateElement
              name="campus_pickup_start"
              placeholder="Pick up Time Start"
              :time="true"
              display-format="MMM DD, HH:mm"
              :columns="{
                container: 6,
                label: 12,
                wrapper: 12,
              }"
              label="Pick up"
              field-name="Pick up Time Start"
            />

            <DateElement
              name="campus_pickup_end"
              placeholder="Pick up Time End"
              :time="true"
              display-format="MMM DD, HH:mm"
              :columns="{
                container: 6,
                label: 12,
                wrapper: 12,
              }"
              label="&nbsp;"
              field-name="Pick up Time End"
            />

            <DateElement
              name="campus_delivery_start"
              placeholder="Delivery Time Start"
              :time="true"
              display-format="MMM DD, HH:mm"
              :columns="{
                container: 6,
                label: 12,
                wrapper: 12,
              }"
              label="Delivery"
              field-name="Delivery Time Start"
            />

            <DateElement
              name="campus_delivery_end"
              :time="true"
              display-format="MMM DD, HH:mm"
              placeholder="Delivery Time End"
              :columns="{
                container: 6,
                label: 12,
                wrapper: 12,
              }"
              label="&nbsp;"
              field-name="Delivery Time End"
            />

            <SelectElement
              name="campus_freight_type"
              :items="[
                {
                  value: 'business',
                  label: 'Business',
                },
                {
                  value: 'residential',
                  label: 'Residential',
                },
                {
                  value: 'tradeshow',
                  label: 'Trade Show',
                },
                {
                  value: 'noncommercial',
                  label: 'Non-Commercial',
                },
              ]"
              :search="true"
              :native="false"
              label="Freight Type"
              input-type="search"
              autocomplete="off"
            />

            <SelectElement
              name="campus_freight_accessories"
              :items="[
                {
                  value: 'inbound-freight',
                  label: 'Inbound Freight',
                },
                {
                  value: 'inside-delivery',
                  label: 'Inside Delivery',
                },
                {
                  value: 'inside-pickup',
                  label: 'Inside Pickup',
                },
                {
                  value: 'liftgate-delivery',
                  label: 'Liftgate Delivery',
                },
                {
                  value: 'notify-before-delivery',
                  label: 'Notify Before Delivery',
                },
                {
                  value: 'project-from-freeze',
                  label: 'Project from Freeze',
                },
                {
                  value: 'single-shipment',
                  label: 'Single Shipment',
                },
                {
                  value: 'sort-separate-delivery',
                  label: 'Sort/Separate Delivery',
                },
              ]"
              :search="true"
              :native="false"
              label="Freight Accessories"
              input-type="search"
              autocomplete="off"
            />

            <SelectElement
              name="campus_noncommercials"
              :items="[
                {
                  value: 'airport',
                  label: 'Airport',
                },
                {
                  value: 'camp',
                  label: 'Camp',
                },
                {
                  value: 'church',
                  label: 'Church',
                },
                {
                  value: 'construction-site',
                  label: 'Construction Site',
                },
                {
                  value: 'country-club',
                  label: 'Country Club',
                },
                {
                  value: 'fair-amusment-park',
                  label: 'Fair/Amusement Park',
                },
                {
                  value: 'farm',
                  label: 'Farm',
                },
                {
                  value: 'government-site',
                  label: 'Government Site',
                },
              ]"
              :search="true"
              :native="false"
              label="Non-Commercials"
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

            <StaticElement name="selected_room">
              <SelectedRoom />
            </StaticElement>

            <SelectElement
              name="building_details_same_campus"
              :items="[
                {
                  value: 'no',
                  label: 'No',
                },
                {
                  value: 'yes',
                  label: 'Yes',
                },
              ]"
              :native="false"
              label="Building Details same as Campus"
              autocomplete="off"
            />

            <ListElement name="buildings" add-text="+ Add Building">
              <template #default="{ index }">
                <ObjectElement :name="index">
                  <TextElement
                    name="buildings_name"
                    placeholder="Building name"
                    :columns="{
                      container: 12,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Building name"
                    :rules="['required', 'max:255']"
                    label="Building Info"
                  />

                  <TextElement
                    name="buildings_street1"
                    placeholder="Street 1"
                    :columns="{
                      container: 12,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Street 1"
                    :rules="['required', 'max:255']"
                  />

                  <TextElement
                    name="buildings_street2"
                    placeholder="Street 2"
                    :columns="{
                      container: 12,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Street 2"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="buildings_city"
                    placeholder="City"
                    :columns="{
                      container: 4,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="City"
                    :rules="['required', 'max:255']"
                  />

                  <TextElement
                    name="buildings_state"
                    placeholder="State or Province"
                    :columns="{
                      container: 4,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="State or Province"
                    :rules="['required', 'max:255']"
                  />

                  <TextElement
                    name="buildings_postcode"
                    placeholder="Postal"
                    :columns="{
                      container: 4,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Postal"
                    :rules="['required', 'max:255']"
                  />

                  <TextElement
                    name="buildings_gps1"
                    placeholder="GPS 1"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="GPS 1"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="buildings_gps2"
                    placeholder="GPS 2"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="GPS 2"
                    :rules="['max:255']"
                  />

                  <StaticElement name="divider_x" tag="hr" />

                  <ToggleElement
                    name="buildings_delivery_reqd"
                    text="Delivery Required ?"
                    path="buildings.buildings_delivery_reqd"
                    dataPath="buildings.buildings_delivery_reqd"
                  />

                  <GroupElement
                    name="buildings_delivery_info"
                    add-class="bg-gray-100 p-6 -mt-4 border border-gray-300 rounded-b relative -top-0.5 dark:bg-dark-900 dark:border-dark-700"
                  >
                    <SelectElement
                      name="buildings_need_lift_gate"
                      :items="[
                        {
                          value: 'no',
                          label: 'No',
                        },
                        {
                          value: 'yes',
                          label: 'Yes',
                        },
                      ]"
                      :native="false"
                      label="Lift Gate reqd"
                      autocomplete="off"
                    />

                    <TextElement
                      name="buildings_entrance_door_dimension"
                      placeholder="Entrance Door Dimensions"
                      :columns="{
                        container: 12,
                        label: 12,
                        wrapper: 12,
                      }"
                      field-name="Entrance Door Dimensions"
                      label="Entrance Door Dimensions"
                      :rules="['required', 'max:255']"
                    />

                    <TextElement
                      name="buildings_smallest_door_dimensions"
                      placeholder="Smallest Door Dimensions"
                      :columns="{
                        container: 12,
                        label: 12,
                        wrapper: 12,
                      }"
                      field-name="Smallest Door Dimensions"
                      label="Smallest Door Dimensions"
                      :rules="['required', 'max:255']"
                    />

                    <TextElement
                      name="buildings_smallest_hallway_dimensions"
                      placeholder="Smallest Hallway Dimensions"
                      :columns="{
                        container: 12,
                        label: 12,
                        wrapper: 12,
                      }"
                      field-name="Smallest Hallway Dimensions"
                      label="Smallest Hallway Dimensions"
                      :rules="['required', 'max:255']"
                    />

                    <TextElement
                      name="buildings_ramp_count"
                      placeholder="Number of Ramps"
                      :columns="{
                        container: 12,
                        label: 12,
                        wrapper: 12,
                      }"
                      field-name="Number of Ramps"
                      label="Number of Ramps"
                      :rules="['required', 'max:255']"
                    />

                    <TextElement
                      name="buildings_step_count"
                      placeholder="Number of Steps"
                      :columns="{
                        container: 12,
                        label: 12,
                        wrapper: 12,
                      }"
                      field-name="Number of Steps"
                      label="Number of Steps"
                      :rules="['required', 'max:255']"
                    />

                    <TextElement
                      name="buildings_curb_count"
                      placeholder="Number of Curbs"
                      :columns="{
                        container: 12,
                        label: 12,
                        wrapper: 12,
                      }"
                      field-name="Number of Curbs"
                      label="Number of Curbs"
                      :rules="['required', 'max:255']"
                    />

                    <StaticElement name="divider_x" tag="hr" />

                    <SelectElement
                      name="buildings_has_freight_elevator"
                      :items="[
                        {
                          value: 'no',
                          label: 'No',
                        },
                        {
                          value: 'yes',
                          label: 'Yes',
                        },
                      ]"
                      :native="false"
                      label="Building has Freight Elevator"
                      autocomplete="off"
                    />

                    <TextElement
                      name="buildings_freight_elevator_total_distance"
                      placeholder="Total Distance to Freight Elevator"
                      :columns="{
                        container: 12,
                        label: 12,
                        wrapper: 12,
                      }"
                      field-name="Total Distance to Freight Elevator"
                      label="Total Distance to Freight Elevator"
                      :rules="['required', 'max:255']"
                    />

                    <TextElement
                      name="buildings_freight_elevator_max_weight"
                      placeholder="Freight Elevator Max Weight"
                      :columns="{
                        container: 12,
                        label: 12,
                        wrapper: 12,
                      }"
                      field-name="Freight Elevator Max Weight"
                      label="Freight Elevator Max Weight"
                      :rules="['required', 'max:255']"
                    />

                    <TextElement
                      name="buildings_freight_elevator_door_dimensions"
                      placeholder="Freight Elevator Door Dimensions"
                      :columns="{
                        container: 12,
                        label: 12,
                        wrapper: 12,
                      }"
                      field-name="Freight Elevator Door Dimensions"
                      label="Freight Elevator Door Dimensions"
                      :rules="['required', 'max:255']"
                    />

                    <TextElement
                      name="buildings_freight_elevator_cart_dimensions"
                      placeholder="Freight Elevator Cart Dimensions"
                      :columns="{
                        container: 12,
                        label: 12,
                        wrapper: 12,
                      }"
                      field-name="Freight Elevator Cart Dimensions"
                      label="Freight Elevator Cart Dimensions"
                      :rules="['required', 'max:255']"
                    />

                    <TextElement
                      name="buildings_freight_elevator_ceiling_dimensions"
                      placeholder="Freight Elevator Ceiling Dimensions"
                      :columns="{
                        container: 12,
                        label: 12,
                        wrapper: 12,
                      }"
                      field-name="Freight Elevator Ceiling Dimensions"
                      label="Freight Elevator Ceiling Dimensions"
                      :rules="['required', 'max:255']"
                    />

                    <TextElement
                      name="buildings_freight_elevator_hours"
                      placeholder="Freight Elevator Hours of Operation"
                      :columns="{
                        container: 12,
                        label: 12,
                        wrapper: 12,
                      }"
                      field-name="Freight Elevator Hours of Operation"
                      label="Freight Elevator Hours of Operation"
                      :rules="['required', 'max:255']"
                    />

                    <TextElement
                      name="buildings_freight_elevator_operator_details"
                      placeholder="Freight Elevator Operator Details"
                      :columns="{
                        container: 12,
                        label: 12,
                        wrapper: 12,
                      }"
                      field-name="Freight Elevator Operator Details"
                      label="Freight Elevator Operator Details"
                      :rules="['required', 'max:255']"
                    />

                    <TextElement
                      name="buildings_freight_number_of_masonite_sheets"
                      placeholder="Freight Elevator Required Number of 4x8 Masonite Sheets"
                      :columns="{
                        container: 12,
                        label: 12,
                        wrapper: 12,
                      }"
                      field-name="Freight Elevator Required Number of 4x8 Masonite Sheets"
                      label="Freight Elevator Required Number of 4x8 Masonite Sheets"
                      :rules="['required', 'max:255']"
                    />
                  </GroupElement>

                  <StaticElement name="divider_y" tag="hr" />
                </ObjectElement>
              </template>
            </ListElement>

            <StaticElement name="divider_5" tag="hr" />

            <ListElement name="building_contacts" add-text="+ Add Contact">
              <template #default="{ index }">
                <ObjectElement :name="index">
                  <TextElement
                    name="building_contacts_firstname"
                    placeholder="First Name"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="First Name"
                    label="Contact Info"
                    :rules="['required', 'max:255']"
                  />

                  <TextElement
                    name="building_contacts_lastname"
                    placeholder="Last Name"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Last Name"
                    label="&nbsp"
                    :rules="['required', 'max:255']"
                  />

                  <TextElement
                    name="building_contacts_phone1"
                    placeholder="Phone 1"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Phone 1"
                    :rules="['required', 'max:255']"
                  />

                  <TextElement
                    name="building_contacts_phone2"
                    placeholder="Phone 2"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Phone 2"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="building_contacts_email"
                    placeholder="Email"
                    :columns="{
                      container: 12,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Email"
                    :rules="['required', 'max:255']"
                  />

                  <StaticElement name="divider_x" tag="hr" />
                </ObjectElement>
              </template>
            </ListElement>

            <TextElement
              name="floor"
              placeholder="Floor"
              :columns="{
                container: 12,
                label: 12,
                wrapper: 12,
              }"
              field-name="Floor"
              :rules="['required', 'max:255']"
            />

            <ListElement name="rooms" add-text="+ Add Room Space">
              <template #default="{ index }">
                <ObjectElement :name="index">
                  <TextElement
                    name="rooms_name"
                    placeholder="Room Name"
                    field-name="Room Name"
                    label="Room Name"
                    :rules="['max:255']"
                  />

                  <SelectElement
                    name="rooms_is_freight_elevator"
                    :items="[
                      {
                        value: 'no',
                        label: 'No',
                      },
                      {
                        value: 'yes',
                        label: 'Yes',
                      },
                    ]"
                    :native="false"
                    label="Freight Elevator"
                    autocomplete="off"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                  />

                  <SelectElement
                    name="room_space_geometry"
                    :search="true"
                    :native="false"
                    label="Geometry"
                    input-type="search"
                    autocomplete="off"
                    :items="['Circular', 'Semi-Circular', 'todo']"
                    :rules="['required']"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    default="Circular"
                  />

                  <TextElement
                    name="rooms_gps1"
                    placeholder="GPS 1"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="GPS 1"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="rooms_gps2"
                    placeholder="GPS 2"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="GPS 2"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="rooms_length"
                    placeholder="Length"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Length"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="rooms_width"
                    placeholder="Width"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Width"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="rooms_height"
                    placeholder="Height"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Height"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="rooms_max_weight"
                    placeholder="Max Weight"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Max Weight"
                    :rules="['max:255']"
                  />
                </ObjectElement>
              </template>
            </ListElement>

            <ListElement
              name="room_floor_penetrations"
              add-text="+ Add Room Floor Penetration"
            >
              <template #default="{ index }">
                <ObjectElement :name="index">
                  <TextElement
                    name="rooms_penetrate_xyz_start"
                    placeholder="Penetrate Start XYZ"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Penetrate Start"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="rooms_penetrate_xyz_end"
                    placeholder="Penetrate End XYZ"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Penetrate End"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="rooms_penetrate_length"
                    placeholder="Penetrate Length"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Penetrate Length"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="rooms_penetrate_width"
                    placeholder="Penetrate Width"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Penetrate Width"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="rooms_penetrate_height"
                    placeholder="Penetrate Height"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Penetrate Height"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="rooms_penetrate_length"
                    placeholder="Penetrate Length"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Penetrate Length"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="rooms_penetrate_width"
                    placeholder="Penetrate Width"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Penetrate Width"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="rooms_penetrate_label"
                    placeholder="Penetrate Label"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Penetrate Label"
                    :rules="['max:255']"
                  />
                </ObjectElement>
              </template>
            </ListElement>

            <ListElement
              name="room_ceiling_penetrations"
              add-text="+ Add Room Ceiling Penetration"
            >
              <template #default="{ index }">
                <ObjectElement :name="index">
                  <TextElement
                    name="rooms_penetrate_xyz_start"
                    placeholder="Penetrate Start XYZ"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Penetrate Start"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="rooms_penetrate_xyz_end"
                    placeholder="Penetrate End XYZ"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Penetrate End"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="rooms_penetrate_length"
                    placeholder="Penetrate Length"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Penetrate Length"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="rooms_penetrate_width"
                    placeholder="Penetrate Width"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Penetrate Width"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="rooms_penetrate_height"
                    placeholder="Penetrate Height"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Penetrate Height"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="rooms_penetrate_length"
                    placeholder="Penetrate Length"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Penetrate Length"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="rooms_penetrate_width"
                    placeholder="Penetrate Width"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Penetrate Width"
                    :rules="['max:255']"
                  />

                  <TextElement
                    name="rooms_penetrate_label"
                    placeholder="Penetrate Label"
                    :columns="{
                      container: 6,
                      label: 12,
                      wrapper: 12,
                    }"
                    field-name="Penetrate Label"
                    :rules="['max:255']"
                  />
                </ObjectElement>
              </template>
            </ListElement>

            <TextElement
              name="customer_quote_number"
              placeholder="Quote Number"
              field-name="Quote Number"
              :rules="['max:255']"
            />

            <TextElement
              name="customer_service_number"
              placeholder="Customer Service Number"
              field-name="Customer Service Number"
              :rules="['max:255']"
            />

            <TextElement
              name="customer_sales_order"
              placeholder="Sales Order"
              field-name="Sales Order"
              :rules="['max:255']"
            />

            <TextElement
              name="customer_po_float_days"
              placeholder="How many float days before PO is released"
              field-name="How many float days before PO is released"
              :rules="['max:255']"
            />

            <TextElement
              name="customer_po_release_date"
              placeholder="PO Release Date"
              field-name="PO Release Date"
              :rules="['max:255']"
            />

            <TextElement
              name="customer_field_service_days"
              placeholder="How many field service days"
              field-name="How many field service days"
              :rules="['max:255']"
            />

            <DateElement
              name="customer_desired_ready_date"
              placeholder="Desired Ready Date"
              display-format="MMM DD"
              label="Desired Ready Date"
              field-name="Desired Ready Date"
            />

            <CheckboxgroupElement
              label="Required Services"
              name="customer_required_services"
              :items="[
                'Estimation',
                'Baseline Power/Space/HVAC Inventory',
                'Engineer',
                'Furnish',
                'Distribution of Materials',
                'Project Management',
                'Stage',
                'Inside Delivery',
                'Installation',
                'De-install',
                'Logistic Services',
                'Removal',
                'Inside Pick Up',
                'Packaging',
                'Consolidate',
                'Recycle',
                'Export',
                'Other',
              ]"
            />

            <CheckboxgroupElement
              label="Required Components"
              name="customer_required_components"
              :items="[
                'Battery',
                'Solar',
                'DC Charger',
                'UPS',
                'DC Power Plant',
                'DC Distribution',
                'DC Loads',
                'Generators',
                'Automatic Transfer Switch',
                'AC Switchgear',
                'AC Panelboards',
                'AC Loads',
                'HVAC',
                'Signal and Control',
                'Security',
                'Fire',
                'Grounding',
                'Common Systems',
                'Other',
              ]"
            />
          </FormElements>

          <FormStepsControls />
        </template>
      </Vueform>
    </form>
  </div>
</template>
