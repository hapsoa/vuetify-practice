<template>
  <svg ref="svgZone" class="svg-filler blue-like">
    <line
      v-for="(lineData, i) in horizonLineDataList"
      :key="`${i}-horizon-line`"
      v-bind="lineData"
      style="stroke:rgba(255,255,255,0.5);stroke-width:1; stroke-dasharray:2;"
    ></line>
    <line
      v-for="(lineData, i) in verticalLineDataList"
      :key="`${i}-vertical-line`"
      v-bind="lineData"
      style="stroke:rgba(255,255,255,0.5);stroke-width:1; stroke-dasharray:2;"
    ></line>
  </svg>
</template>

<script lang='ts' src='./LineGraph.ts' />

<style scoped lang='scss'>
.svg-filler {
  width: 100%;
  height: 200px;
  position: absolute;
  top: -15px;
  border-radius: 5px;

  margin-top: 20px; // 제거해야 함
}
</style>