<template>
    <!-- <h1>{{ route.meta }}</h1>
    <div v-show="isLogin && !$route.meta.isParentView" class="flex h-full w-full">
        <sidebar v-if="isShowMenu" id="sidebar" class="w-200" />
        <div class="flex-1">
            <div id="top">
                <navbar class="h-50" />
                <div :style="{ width: appMainWidth + 'px' }">
                    <tabs-view />
                </div>
            </div>
            <div :style="{ height: appMainHeight + 'px', width: appMainWidth + 'px' }">
                <app-main class="app-main p-10" />
            </div>
        </div>
    </div>
    <div v-if="!isLogin || (isLogin && $route.meta.isParentView)" class="h-full">
        <router-view />
    </div> -->
    <router-view />
</template>

<script setup>
// import sidebar from './components/sidebar.vue';
// import navbar from './components/navbar.vue';
// import appMain from './components/app-main.vue';
// import tabsView from './components/tabs-view.vue';
// const { proxy } = getCurrentInstance();
// let { isLogin } = toRefs(proxy.$store.user.useUserStore());
// let { isShowMenu } = toRefs(proxy.$store.setting.useSettingsStore());
// let appMainWidth = ref(0);
// let appMainHeight = ref(0);

// onMounted(() => {
//     // 窗口宽高变化时触发 -- tips：window.onresize只能在项目内触发1次
//     window.onresize = function windowResize() {
//         calWidthAndHeight();
//     };
// });

// // 注册一个回调函数，在组件因为响应式状态变更而更新其 DOM 树之后调用。
// onUpdated(() => {
//     calWidthAndHeight();
// });

// watch(
//     [isLogin, isShowMenu],
//     (newValue) => {
//         calWidthAndHeight();
//     },
//     { immediate: false, deep: true },
// );

// function calWidthAndHeight() {
//     let sidebarW = document.getElementById('sidebar').offsetWidth;
//     appMainWidth.value = window.innerWidth - sidebarW;

//     let topH = document.getElementById('top').offsetHeight;
//     appMainHeight.value = window.innerHeight - topH - 20; // 20 指 p-10
// }
</script>
<style lang="scss" scoped>
// .app-main {
//     height: calc(100vh - 50px); // 满屏 - navbar
// }</style>