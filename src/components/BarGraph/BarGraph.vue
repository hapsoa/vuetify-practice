<template>
  <svg ref="svgZone" class="bar-graph">
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
      <text
        v-for="(text, i) in verticalTextDataList"
        :key="`${i}-vertical-text`"
        fill="rgba(255,255,255,0.7)"
        :x="text.x + bars[0].width/2"
        :y="text.y"
        text-anchor="middle"
      >{{text.text}}</text>
    </g>
    <g>
      <!-- <circle
        v-for="(node, i) in nodes"
        :key="`${i}-node`"
        :cx="standardPoint.x + (node.x * verticalDistanceUnit)"
        :cy="standardPoint.y - (node.y * horizonDistanceUnit)"
        r="5"
        fill="white"
      ></circle>-->
      <!-- <rect width="20" height="40" fill="white"></rect> -->
      <rect v-for="(bar, i) in bars" :key="`${i}-bar`" v-bind="bar" fill="rgba(255, 255, 255, 0.8)"></rect>
      <!-- <line
        v-for="(nodeLine, i) in nodeLines"
        :key="`${i}-nodeLine`"
        v-bind="nodeLine"
        style="stroke:rgba(255,255,255,0.5);stroke-width:5;"
      ></line>-->
    </g>
  </svg>
</template>

<script lang='ts' src='./BarGraph.ts' />

<style scoped lang='scss'>
.bar-graph {
  width: 100%;
  height: 200px;
}
</style>