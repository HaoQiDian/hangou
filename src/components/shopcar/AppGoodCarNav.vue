<template>
  <div class="app-good-car-nav">
      <p>

        <input v-model="isAllSelected" type="checkbox">

        <span>
          总计：{{money}}
        </span>
      </p>
      <div class="settle" @click="nobuy">
                              确认信息
      </div>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name:'app-good-car-nav',
  computed:{
    ...mapGetters(['money','isAllSelected']),
    isAllSelected:{
      get(){
        return this.$store.state.car.every(item => {
            if(item.isSelected){
               return true
            }else{
                return false
            }           
        });
      },
      set(newValue){
        this.seleteGood(newValue)
        console.log('gaile')
      }
    }
  },
  methods:{
  	nobuy() {
    		alert("支付功能正在开发中。。。")
    },
    ...mapActions(['seleteGood'])
  }
}
</script>
<style scoped lang='scss'>

.app-good-car-nav{
	position: fixed;
	bottom: 0;
	background: #ccc;
	z-index: 999;
  display: flex;
  width: 100%;
  align-items: center;
  height: 50px;
  padding-left: 15px;
  border-top: 1px solid #f7f7f7;
  p{
    flex-grow: 1;flex-shrink: 1;
    margin: 0;
  }

  .settle{
    width: 1rem;
    height: 100%;
    background: #ED5564;
    color: #fff;
    float: right;
    text-align: center;line-height: 50px;
  }
}

</style>

