<template>
<div id="app">
  <div id="main">
    <div class="navbar">

    </div>
    <div class="sidebar-left">
      <Menu :theme="theme2" :active-name="$route.name" width="250px" :accordion="true" @on-select="nav">
        <span v-for="(item, index) in menu" :key="index">
          <MenuItem v-if="!item.submenu || !item.submenu.length" :name="item.name">
            <Icon :type="item.icon" v-if="item.icon"></Icon> {{ item.text }}
          </MenuItem>
          <Submenu :name="item.name" v-if="item.submenu && item.submenu.length">
              <template slot="title">
                  <Icon v-if="item.icon" :type="item.icon"></Icon>
                  {{ item.text }}
              </template>
              <span v-for="(sub, index) in item.submenu" :key="index" >
                  <MenuItem 
                    v-if="!sub.submenu || !sub.submenu.length"
                    :name="sub.name"
                    v-text="sub.text"
                  ></MenuItem>
                  <Submenu :name="sub.name" v-if="sub.submenu && sub.submenu.length">
                    <template slot="title">
                        <Icon v-if="sub.icon" :type="sub.icon"></Icon>
                        {{ sub.text }}
                    </template>
                    <MenuItem 
                      v-for="(sub2, index2) in sub.submenu" 
                      :key="index2" 
                      :name="sub2.name"
                      v-text="sub2.text"
                    ></MenuItem>                           
                  </Submenu>                                
              </span>
          </Submenu>          
        </span>
      </Menu>
    </div>
    <div class="main-content-wrapper">
      <transition 
        enter-active-class="animated fadeIn" 
        leave-active-class="animated fadeOut"
      >  
      <router-view></router-view>
      </transition>
    </div>
  </div>
</div>
</template>

<script>
import {
  Menu,
  MenuGroup,
  MenuItem,
  Submenu,
  Icon
} from "iview";
import "../style/reset.scss";
import menu from '@/constants/navs';

export default {
  name: "Layout",
  components: {
    Menu,
    MenuGroup,
    MenuItem,
    Submenu,
    Icon
  },
  data() {
    return {
      theme2: "dark",
      transitionName: 'slide-left',
      menu,
    };
  },
  methods: {
    nav(name) {
      this.$router.push({
        name
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  #main {
    position: absolute;
    width: 100%;
    height: 100%;
    >.sidebar-left {
      width: 250px;
      position: fixed;
      left: 0;
      top: 100px;
      height: 100%;
      border: 1px solid #f5f5f5;
      text-align: left;
      >ul {
        height: 100%;
      }
    }
    >.navbar {
      width: 100%;
      height: 100px;
      position: fixed;
      top: 0;
      left: 0;
      border: 1px solid #f5f5f5;
    }
    >.main-content-wrapper {
      position: fixed;
      left: 250px;
      top: 100px;
      right: 0;
      bottom: 0;
      padding: 5px;
      overflow: hidden;
      > div:first-of-type {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        // background: #dedede;
        overflow: auto;
        // transition: all .5s cubic-bezier(.55,0,.1,1);
      }
    }
  }

}
</style>
