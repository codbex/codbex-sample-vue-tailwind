<template>
  <div class="mb-4">
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700 mb-2">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
      :class="{ 'text-box-error': hasError }"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <small v-if="hasError" class="text-box-error-message">{{ errorMessage }}</small>
  </div>
</template>

<script>
export default {
  name: "StyledTextBox",
  props: {
    id: {
      type: String,
      required: false,
    },
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text", // Supports text, password, etc.
    },
    placeholder: {
      type: String,
      default: "",
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: "Invalid input",
    },
  },
};
</script>

