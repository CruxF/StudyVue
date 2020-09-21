<template>
  <div class="footer">
    <h4>请填写调查表</h4>
    <div class="info-li">
      <ul>
        <li v-for="(item,index) in focontent" :key="item.qId">
          <p>{{index+1}}、{{item.qContent}}</p>
          <label :for="item.qId"><input type="radio" :id="item.qId" :name="same+item.qId" />是</label>
          <label :for="item.qId+1"><input type="radio" :id="item.qId+1" :name="same+item.qId" />否</label>
        </li>
      </ul>
    </div>
    <router-link to="/Submit">
      <button>提交</button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    props: ["focontent"]
  }
</script>

<style lang="stylus" scoped="scoped">
  .footer {
    margin-top: 28px;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
  }
  h4 {
    font-family: "PingFangSC-Medium";
    font-size: 15px;
    color: #8A9299;
    margin-bottom: 10px;
  }
  li {
    margin-bottom: 16px;
  }
  p {
    font-family: "PingFangSC-Regular";
    font-size: 16px;
    color: #2A343D;
    padding: 12px 0;
  }
  label {
    font-family: "PingFangSC-Regular";
    font-size: 16px;
    color: #8A9299;
    margin-left: 20px;
    padding: 7px 0;
  }
  input[type=radio] {
    position: relative;
    width: 25px;
    height: 1px;
  }
  input[type=radio]::before, input[type=radio]::after {
    position: absolute;
    display: block;
    content: '';
    border-radius: 50%;
    transition: .3s all esae;
  }
  input[type=radio]::before {
    top: -10px;
    left: 0;
    width: 15px;
    height: 15px;
    border: 2px solid #ccc;
  }
  input[type=radio]::after {
    top: -6px;
    left: 4px;
    width: 11px;
    height: 11px;
    background-color: #fff;
  }
  input[type=radio]:checked::before {
    border-color: #27AE60;
  }
  input[type=radio]:checked::after {
    background-color: #27AE60;
  }
  button {
    width: 92vw;
    height: 6vh;
    line-height: 6vh;
    background-color: #52BA34;
    margin-top: 42px;
    margin-bottom: 60px;
    border-radius: 3vh;
    font-family: "PingFangSC-Medium";
    font-size: 16px;
    color: #fff;
  }
</style>