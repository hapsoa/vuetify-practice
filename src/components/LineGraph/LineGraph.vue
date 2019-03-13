<template>
  <svg ref="svgZone" class="svg-filler blue-like">
    <g>
      <line
        v-for="(lineData, i) in horizonLineDataList"
        :key="`${i}-horizon-line`"
        v-bind="lineData"
        style="stroke:rgba(255,255,255,0.5);stroke-width:1; stroke-dasharray:2;"
      ></line>
      <text
        v-for="(text, i) in horizonTextDataList"
        :key="`${i}-horizon-text`"
        fill="rgba(255,255,255,0.7)"
        :x="text.x"
        :y="text.y"
      >{{text.text}}</text>
      <line
        v-for="(lineData, i) in verticalLineDataList"
        :key="`${i}-vertical-line`"
        v-bind="lineData"
        style="stroke:rgba(255,255,255,0.5);stroke-width:1; stroke-dasharray:2;"
      ></line>
      <text
        v-for="(text, i) in verticalTextDataList"
        :key="`${i}-vertical-text`"
        fill="rgba(255,255,255,0.7)"
        :x="text.x"
        :y="text.y"
      >{{text.text}}</text>
    </g>
    <g>
      <circle
        v-for="(node, i) in nodes"
        :key="`${i}-node`"
        :cx="standardPoint.x + (node.x * verticalDistanceUnit)"
        :cy="standardPoint.y - (node.y * horizonDistanceUnit)"
        r="5"
        fill="white"
      ></circle>
      <line
        v-for="(nodeLine, i) in nodeLines"
        :key="`${i}-nodeLine`"
        v-bind="nodeLine"
        style="stroke:rgba(255,255,255,0.5);stroke-width:5;"
      ></line>
    </g>
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