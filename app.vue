<script lang="ts" setup>
const { foo, bar } = $(
  reactive<{ foo: "bar"; bar: "biz" } | { foo: "baz"; bar: null }>({
    foo: "bar",
    bar: "biz",
  })
);

watch($$(bar), () => {
  if (foo === "bar") console.log(bar);
  //                              ^? const bar: "biz"
});
</script>

<template>
  <div v-if="foo === 'bar'">{{ bar }}</div>
  <!--                          ^? bar: "biz" | null -->
</template>
