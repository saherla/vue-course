<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Marzo</span>
      <span class="mx-2 fw-light">2022, martes</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et suscipit
      metus. Nullam quis leo nec nunc ullamcorper vehicula in ac libero. Fusce
      tincidunt nulla id lorem ullamcorper, non placerat tellus mollis. Aenean a
      quam congue, consequat mi non, maximus turpis. Class aptent taciti
      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      Maecenas vel blandit leo. Vivamus et feugiat odio, et condimentum ante.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>
