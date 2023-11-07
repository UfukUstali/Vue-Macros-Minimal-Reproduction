<script lang="ts" setup>
const { foo, bar } = $(
  reactive<{ foo: "bar"; bar: { biz: 3 } } | { foo: "baz"; bar: null }>({
    foo: "bar",
    bar: {
      biz: 3,
    },
  })
);

watch($$(bar), () => {
  if (foo === "bar") console.log(bar);
  //                              ^? const bar: { biz: 3; }
});
</script>

<template>
  <div v-if="foo === 'bar'">{{ bar.biz }}</div>
  <!--                          ^? '__VLS_ctx.bar' is possibly 'null' -->
</template>
