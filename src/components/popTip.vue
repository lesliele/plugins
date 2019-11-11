<!--
 * @Author: your name
 * @Date: 2019-11-11 21:34:30
 * @LastEditTime: 2019-11-11 21:36:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pop-tip\src\components\popTip.vue
 -->
<template>
    <div>
        <span v-if="showPop" class="succ">成功提醒</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showPop: false
        }
    }
}
</script>
<style lang="scss" scoped>
.succ{
    display: inline-block;
    padding: 10px 20px;
    background: rgba(0, 0, 0, .4);
    color: #fff;
    font-size: 14px;
}
</style>