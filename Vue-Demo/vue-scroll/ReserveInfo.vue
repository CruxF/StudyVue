<!-- 选择就诊人/选择就诊人提示/添加就诊人前后/选中就诊人/预约提交成功 -->
<template>
  <div class="reserve-info">
    <div class="reserve-header">
      <div class="doctor-img">
        <img
          class="img"
          src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3219020459,2897232831&fm=26&gp=0.jpg"
        >
      </div>
      <div class="doctor-msg">
        <h1 class="doctor-name">王老师</h1>
        <p class="doctor-desc">主任医师·医科大教授</p>
        <div class="doctor-team">
          <p class="info-hospital">
            <span class="icon icon-hospital"></span>哈佛学院
          </p>
          <p class="info-team">
            <span class="icon icon-team"></span>老年痴呆团队
          </p>
        </div>
      </div>
    </div>
    <div class="reserve-date">
      <p>就诊日期：2018年12月15日 星期天 上午</p>
    </div>
    <div class="select-person">
      <h1 class="select-h1">选择就诊人</h1>
      <div class="person-wrap" ref="personWrap">
        <ul class="person-list" ref="personTab">
          <li class="person-item">1</li>
          <li class="person-item">2</li>
          <li class="person-item">3</li>
          <li class="person-item">4</li>
          <li class="person-item">5</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "ReserveInfo",
  data() {
    return {};
  },
  created() {
    this.$nextTick(() => {
      this.personScroll();
    });
  },
  components: {},

  methods: {
    // 选择就诊人横向滚动
    personScroll() {
      // 默认有六个就诊人
      let width = 6 * 120;
      this.$refs.personTab.style.width = width + "px";
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.personWrap, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.reserve-info {
  background-color: rgb(250, 250, 250);
  min-height: 100vh;
  .reserve-header {
    display: flex;
    flex-direction: row;
    padding: 10px 20px;
    .doctor-img {
      flex: 1;
      margin-right: 5px;
      .img {
        height: 20vw;
        width: 20vw;
        border-radius: 50%;
      }
    }
    .doctor-msg {
      flex: 3;
      padding-left: 5px;
      .doctor-name {
        font-size: 16px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        line-height: 21px;
      }
      .doctor-desc {
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(155, 155, 155, 1);
        line-height: 16px;
      }
      .doctor-team {
        margin-top: 8px;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 16px;
        .icon {
          display: inline-block;
          height: 7px;
          width: 7px;
          border-radius: 50%;
          margin-right: 2px;
          margin-bottom: 3px;
        }
        .icon-hospital {
          background-color: rgb(159, 231, 80);
        }

        .icon-team {
          background-color: rgba(123, 201, 219, 0.356);
        }
      }
    }
  }
  .reserve-date {
    padding: 14px 0;
    text-align: center;
    font-size: 16px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    background-color: #fff;
    color: rgba(102, 193, 140, 1);
    line-height: 23px;
  }
  .select-person {
    padding: 10px 20px;
    .select-h1 {
      font-size: 18px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(74, 74, 74, 1);
      margin: 10px 0;
    }
    .person-wrap {
      .person-list {
        .person-item {
          display: inline-block;
          height: 50px;
          width: 120px;
          margin-right: 10px;
          border: 1px solid #ccc;
        }
      }
    }
  }
}
</style>