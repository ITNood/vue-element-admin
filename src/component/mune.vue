<template>
  <div v-if="item.children">
    <template v-if="item.children.length == 0">
      <el-menu-item :index="item.path">
        <i :class="item.meta.icon"></i>
        {{item.meta.title}}
      </el-menu-item>
    </template>
    <el-submenu
      v-else
      :index="item.path"
    >
      <template slot="title">
        <i :class="item.meta.icon"></i>
                {{item.meta.title}}

      </template>
      <template v-for="child in item.children">
        <sidebar-item
          v-if="child.children&&child.children.length>0"
          :item="child"
          :key="child.path"
        />
        <el-menu-item
          v-else
          :key="child.path"
          :index="child.path"
        >
          {{child.meta.title}}
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
</template>
<script>
export default {
  name: "SidebarItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  mounted() {
      console.log(this.item)
  }
};
</script>