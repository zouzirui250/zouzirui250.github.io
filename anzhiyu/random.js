var posts=["2023/09/10/Hexo建站指南-1/","2023/07/13/Git的安装与使用/","2023/07/13/Nodejs，NVM的安装与使用/","2023/09/11/Hexo建站指南-2/","2023/06/10/api/","2024/06/08/hello-world/","2023/06/01/anzhiyu主题标签/","2023/07/07/从Java到Kotlin/","2023/08/23/代码记事本/","2022/06/12/跟随狂神学Java-1/","2022/07/05/跟随狂神学Java-10/","2022/07/06/跟随狂神学Java-11/","2022/08/20/跟随狂神学Java-12/","2022/08/22/跟随狂神学Java-13/","2022/08/23/跟随狂神学Java-14/","2022/08/28/跟随狂神学Java-15/","2022/08/29/跟随狂神学Java-16/","2022/08/30/跟随狂神学Java-17/","2022/08/31/跟随狂神学Java-18/","2022/08/31/跟随狂神学Java-19/","2022/06/14/跟随狂神学Java-2/","2022/09/01/跟随狂神学Java-20/","2022/09/04/跟随狂神学Java-21/","2023/02/23/跟随狂神学Java-22/","2023/02/27/跟随狂神学Java-23/","2023/03/09/跟随狂神学Java-24/","2023/04/06/跟随狂神学Java-25/","2023/04/25/跟随狂神学Java-26/","2023/05/08/跟随狂神学Java-27/","2022/06/14/跟随狂神学Java-3/","2023/07/05/跟随狂神学Java-29/","2023/07/03/跟随狂神学Java-28/","2023/07/23/跟随狂神学Java-32/","2023/07/28/跟随狂神学Java-33/","2023/07/19/跟随狂神学Java-31/","2023/08/02/跟随狂神学Java-35/","2023/08/01/跟随狂神学Java-34/","2023/08/06/跟随狂神学Java-37/","2023/07/05/跟随狂神学Java-30/","2023/08/04/跟随狂神学Java-36/","2023/08/14/跟随狂神学Java-39/","2022/06/15/跟随狂神学Java-4/","2023/08/12/跟随狂神学Java-38/","2023/08/22/跟随狂神学Java-40/","2022/06/25/跟随狂神学Java-5/","2023/08/27/跟随狂神学Java-43/","2023/08/24/跟随狂神学Java-41/","2022/06/29/跟随狂神学Java-6/","2023/08/26/跟随狂神学Java-42/","2022/07/01/跟随狂神学Java-7/","2022/07/03/跟随狂神学Java-8/","2022/07/04/跟随狂神学Java-9/","2023/06/07/颜色滑动选择弹窗/","2023/06/14/api/美女研究所/","2023/06/14/api/小爱聊天接口/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://zouzirui250.github.io","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"分享网络安全与科技生活，あ布鸢尾绽放,一瓣心香,折刃不弃,纸质柔情","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"小睿`Blog","link":"https://zouzirui250.github.io","avatar":"https://s2.loli.net/2024/06/10/Z1E9KOdT4exDpcI.jpg","descr":"分享网络安全与科技生活","siteshot":"https://img01.anheyu.com/useruploads/198/2023/11/16/6556346debdc5.jpeg","color":"vip","tag":"本站"},{"name":"安知鱼","link":"https://zouzirui250.github.io","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://zouzirui250.github.io","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://avatar.qjqq.cn/1/6503bb1b7fa1a.webp!avatar","descr":"分享网络安全与科技生活","siteshot":"https://avatar.qjqq.cn/1/647571edf20a9.webp!avatar"},{"name":"冰火的砺炼","link":"https://blog.marice.top/","avatar":"https://pic.imgdb.cn/item/63957624b1fccdcd363145ca.png","descr":"水穷暖春云起处"},{"name":"煮雪话河山`Blog","link":"https://blog.cent1pedee.top/","avatar":"https://img.cent1pedee.top/img/wechat.jpg","descr":"如月之恒，如日之升。","siteshot":"https://img.cent1pedee.top/img/siteshot.png"},{"name":"墨尘的生活小站","link":"https://mnchen.top/","avatar":"https://upload-bbs.miyoushe.com/upload/2023/05/20/202672061/e04b8ca642e6e6028c537040720ffa98_2321845104782619490.jpg","descr":"虽多尘色染，犹见墨痕浓"},{"name":"余墨白","link":"https://blog.yumobai.cn/","avatar":"https://img.yumobai.cn//yumobai/img头像5.ico","descr":"虽多尘色染，犹见墨痕浓"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };