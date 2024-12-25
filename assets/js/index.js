!function (n) {
  function t(n, t, e) {
    let i = new Date(Date.now() + 864e5 * e).toUTCString();
    document.cookie = `${n}=${t}; expires=${i}; path=/`;
  }
  function e(n) {
    let t = document.cookie.split("; ").reduce((n, t) => {
      let [e, i] = t.split("=");
      return n[e] = i, n;
    }, {});
    return t[n];
  }
  function i(n) {
    let e = $(".ri-sun-line"), i = $(".ri-moon-clear-line");
    "light" === n ? ($("html").removeClass("dark").addClass("light"), i.slideUp(300, function () {
      e.slideDown(300);
    }), t("theme", "light", 365)) : ($("html").removeClass("light").addClass("dark"), e.slideUp(300, function () {
      i.slideDown(300);
    }), t("theme", "dark", 365));
  }
  let h = e("theme");
  function c() {
    let n = Math.floor(100 * Math.random()), t = Math.floor(100 * Math.random()), e = ["+", "-", "*", "/"], i = e[Math.floor(Math.random() * e.length)], h;
    switch (i) {
      case "+":
        h = n + t;
        break;
      case "-":
        h = n - t;
        break;
      case "*":
        h = n * t;
        break;
      case "/":
        h = 0 !== t ? (n / t).toFixed(2) : n;
    }
    let c = h < 10 ? "0" + h : h;
    return `${n < 10 ? "0" + n : n}.${t < 10 ? "0" + t : t}.${c}`;
  }
  "light" === h ? i("light") : i("dark"), $("body").on("click", ".change-theme", function () {
    let n = $("html").hasClass("dark");
    i(n ? "light" : "dark");
  }), "close" === e("toast") && $("#toast-prompt").hide(), $("body").on("click", ".close-btn", function () {
    $("#toast-prompt").slideUp("fast", function () {
      let n = new Date(Date.now() + 6e5).toUTCString();
      document.cookie = `toast=close; expires=${n}; path=/`;
    }), FuiToast.success("Không hiển thị lại trong 10 phút.");
  }), $("body").on("click", ".confirm-btn", function () {
    let musicUrls = [
      { url: "https://files.catbox.moe/1yery6.mp3", title: "Mở Lối Cho Em" },
      // Thêm các URL và tiêu đề khác vào đây
    ];
  
    // Chọn ngẫu nhiên một bài hát từ danh sách
    let randomMusic = musicUrls[Math.floor(Math.random() * musicUrls.length)];
  
    function playMusic() {
      let audio = new Audio(randomMusic.url);
  
      let musicPromise = new Promise((resolve, reject) => {
        // Phát nhạc
        audio.play().then(() => {
          resolve({ titleTracks: `Đang phát: ${randomMusic.title}` });
        }).catch(() => {
          reject("Không thể phát nhạc ngay lúc này.");
        });
  
        // Sự kiện khi nhạc kết thúc
        audio.addEventListener("ended", function () {
          resolve(`Đã phát xong: ${randomMusic.title}`);
          playMusic(); // Gọi lại hàm để phát bài tiếp theo
        });
      });
  
      // Hiển thị thông báo với FuiToast
      FuiToast.promise(
        musicPromise,
        {
          loading: "Đang chờ phát nhạc...",
          success: result => result.titleTracks,
          error: "Có lỗi khi phát nhạc!"
        },
        { isClose: true }
      );
  
      // Đóng thông báo slide prompt
      $("#toast-prompt").slideUp("fast");
    }
  
    playMusic(); // Gọi hàm phát nhạc
  });
  let o = 0;
  $("body").append(`<div id="fui-toast"></div><div class="td-lock-screen"><section class="td-welcome"><div class="medias"><video class="pc item_video" autoplay loop muted playsinline><source src="./assets/video/pc.mp4?v=${c()}" type="video/mp4"></video><video class="mobile item_video" autoplay loop muted playsinline><source src="./assets/video/mb.mp4?v=${c()}" type="video/mp4"></video><div class="date"></div></div><div class="infos"><div class="logo-web-title"><img class="logo-ws" src="./assets/img/logo.png" alt="Quang Huy"><span class="web-title">${$("html").attr("data-title-loader") || "Màn Hình Khoá"}</span></div><span class="web_desc"></span><div><i class="ri-arrow-down-line close-lockscreen"></i></div></div></section></div>`);
  let a = (n, t) => Math.floor(Math.random() * (t - n + 1)) + n, s = n => {
    n.style.setProperty("--star-left", `${a(-10, 100)}%`), n.style.setProperty("--star-top", `${a(-40, 80)}%`), n.style.animation = "none", n.offsetHeight, n.style.animation = "";
  };
  for (let r of document.getElementsByClassName("magic-star")) setTimeout(() => {
    s(r), setInterval(() => s(r), 1e3);
  }, o++ * 333.3333333333333);
  let l = document.getElementById("croll-to-top"), g = l.querySelector(".text"), m = l.querySelector("i");
  0 === window.scrollY && (l.style.display = "none"), window.addEventListener("scroll", function () {
    let n = window.scrollY, t = document.documentElement.scrollHeight, e = window.innerHeight, i = 0;
    t > e && (i = n / (t - e) * 100), g.textContent = Math.round(i), n > 0 ? l.style.display = "block" : l.style.display = "none";
  }), l.addEventListener("mouseenter", function () {
    g.style.display = "none", m.style.display = "inline-block";
  }), l.addEventListener("mouseleave", function () {
    g.style.display = "inline-block", m.style.display = "none";
  }), l.addEventListener("click", function () {
    $("html, body").animate({scrollTop: 0}, "fast");
  }), $(document).on({contextmenu: function (n) {
    console.log("ctx menu button:", n.which), n.preventDefault();
  }});
  var d = 0, u = ["#ff6651", "#42a5f5", "#66bb6a", "#ab47bc", "#ffa726", "#ec407a", "#26c6da", "#78909c", "#ffca28", "#5c6bc0", "#8d6e63", "#26a69a"];
  jQuery(document).ready(function (n) {
    n("body").click(function (t) {
      var e = ["♥️ Năm mới vui vẻ", "❤️ Cung hỉ phát tài", "💛 Tiền vô như nước", "💚 Vợ đẹp con ngoan", "💙 Tài lộc vào nhà", "💜 Phúc thọ vô biên", "🖤 Sống khoẻ đón xuân", "💖 Phú quý cát tường", "💝 Đắc lộc toàn gia", "💙 Hạnh phúc mênh mang", "❤️ Vạn sự thành công", "💚 Mã đáo thành công", "💙 Tiền vô tỷ tỷ", "💜 Tài vạn công danh", "💛 Hạnh phúc gia an", "💖 Sức khoẻ như voi", "💛 Thông minh vượt trội", "💖 Phúc lộc trong tay", "💚 Gia chủ phát tài", "💚 Vạn sự như ý", "💚 Túi tiền nặng ký ", "🖤 Làm ăn phát đạt", "💛 Vàng bạc cao sang", "💙 Sức khỏe an nhàn", "💜 Công danh hết ý", "🖤 Cung hỷ cung hỷ", "💝 Hạnh phúc triền miên", "🖤 Sung sướng như tiên"], i = n("<span style='font-family:sans-serif;'>").text(e[d]), h = u[Math.floor(Math.random() * u.length)];
      d = (d + 1) % e.length;
      var c = t.pageX, o = t.pageY;
      i.css({"z-index": Math.floor(9990001 * Math.random()) + 9999, top: o - 20, left: c, position: "absolute", "font-weight": "bold", color: h}), n("body").append(i), i.animate({top: o - 180, opacity: 0}, 1500, function () {
        i.remove();
      });
    });
  });
  class p {
    constructor(n) {
      this.element = $(n), this.TimeNows(), setInterval(() => this.TimeNows(), 1e3);
    }
    TimeNows() {
      let n = new Date, t = n.getHours().toString().padStart(2, "0"), e = n.getMinutes().toString().padStart(2, "0"), i = n.getSeconds().toString().padStart(2, "0");
      this.element.text(`${t}:${e}:${i}`);
    }
  }
  function y() {
    $.ajax({url: "https://api.thanhdieu.com/cham-ngon", type: "get", dataType: "json", success: function (n) {
      $("#cham-ngon").fadeOut(300, function () {
        $(this).text(n.msg).fadeIn(300);
      });
    }, error: function (n, t, e) {
      console.error("Error: " + e);
    }});
  }
  new p("#real-time"), $("[data-fancybox]").length && Fancybox.bind("[data-fancybox]", {}), y();
  let f = new class n {
    constructor(n) {
      this.element = n;
    }
    MessageRmd() {
      let n = (new Date).getHours(), t;
      return (t = n >= 3 && n <= 10 ? ["Chúc các bạn có một buổi sáng vui vẻ, và may mắn 😇", "Sáng nay thật đẹp, hãy bắt đầu một ngày mới tràn đầy năng lượng nhé! ☀️", "Chào buổi sáng, đừng quên ăn sáng để có năng lượng cho cả ngày!", "Khi ông Mặt trời thức dậy, mẹ lên rẫy, em đến trường rồi mà sao mày vẫn còn ngủ hả, dậy mà đón lấy ánh nắng tích cực, khởi đầu ngày mới tràn đầy năng lượng đi."] : n >= 11 && n <= 15 ? ["Buổi trưa này, đừng quên ăn uống đầy đủ đấy nhé 🤤", "Trưa nay hơi nóng, nếu có cần mua gì thì nhắn anh mua giúp cho nhé 🌤️", "Chúc bạn có một buổi nghỉ trưa tràn đầy sức khoẻ!"] : n >= 16 && n <= 18 ? ["Chúc bạn có một buổi chiều thư giãn sau những giờ làm việc căng thẳng.", "Chúc buổi chiều tràn đầy năng lượng tích cực, để tối nay có thể cày phim thả ga!", "Cả ngày hôm nay tôi không thể ngừng nghĩ về bạn chúc bạn một buổi chiều vui vẻ! 🌅"] : n >= 19 && n <= 21 ? ["Chúc các bạn có một buổi tối tràn đầy hạnh phúc!", "Buổi tối là lúc để thư giãn và tận hưởng cuộc sống 🌙", "Chào buổi tối, đừng quên dành thời gian cho gia đình nhé ❤️"] : ["Onichan~ sao giờ này chưa ngủ nữa ୧(๑•̀⌄•́๑)૭", "Khuya rồi, hãy đi ngủ để mơ những giấc mơ thật đẹp nhé 🌌", "Đêm muộn thế này, đừng quên chăm sóc sức khỏe nha 🌙"])[Math.floor(Math.random() * t.length)];
    }
  }($("#waiting-loader"));
  setTimeout(() => {
    let n = f.MessageRmd();
    $("#waiting-loader").text(n);
  }, 111), setInterval(y, 5321);
  let b = new class n {
    constructor(n) {
      this.descriptions = n, this.element = $(".web_desc"), this.Description();
    }
    Description() {
      let n = this.descriptions[Math.floor(Math.random() * this.descriptions.length)];
      this.element.fadeOut(500, () => {
        this.element.html(n).fadeIn(500);
      });
    }
  }(["Gọi em là công chúa vì hoàng tử đang đứng chờ em nè!", "Chưa được sự cho phép mà đã tự ý thích em, anh xin lỗi nhé công chúa!", "Em nhìn rất giống người họ hàng của anh, đó chính là con dâu của mẹ anh!", "Trái Đất quay quanh Mặt Trời, còn em thì quay mãi trong tâm trí anh!", "Vector chỉ có một chiều, anh dân chuyên toán chỉ yêu một người.", "Anh béo thế này là bởi vì trong lòng anh có em nữa.", "Nghe đây! Em đã bị bắt vì tội quá xinh đẹp.", "Anh chỉ muốn bên cạnh em hai lần đó là bây giờ và mãi mãi.", "Bao nhiêu cân thính cho vừa, bao nhiêu cân bả mới lừa được em?", "Vũ trụ của người ta là màu đen huyền bí, còn vũ trụ của anh bé tí, thu nhỏ lại là em.", "Anh rất yêu thành phố này, không phải vì nó có gì, mà vì nó có em.", "Anh bận với tất cả mọi điều, nhưng vẫn luôn rảnh để nhớ đến em.", "Cành cây còn có lá. Chú cá vẫn đang bơi, sao em cứ mải chơi. Chẳng chịu yêu anh thế!", "Em nhà ở đâu thế? Cứ tới lui trong tim anh không biết đường về nhà à?", "Cuộc đời anh vốn là một đường thẳng, chỉ vì gặp em mà rẽ ngang.", "Với thế giới em chỉ là một người, nhưng với anh, em là cả thế giới.", "Em có thể đừng cười nữa được không, da anh đen hết rồi.", "Anh đây chẳng thích nhiều lời, nhìn em là biết cả đời của anh.", "Cảm lạnh có thể do gió, nhưng, cảm nắng thì chắc chắn do em.", "Trứng rán cần mỡ, bắp cần bơ, yêu không cần cớ, cần em cơ!", "Cafe đắng thêm đường sẽ ngọt, còn cuộc đời anh thêm em sẽ hạnh phúc.", "Giữa cuộc đời hàng ngàn cám dỗ, nhưng, anh vẫn chỉ cần bến đỗ là em.", "Có người rủ anh đi ăn tối, nhưng anh từ chối vì thực đơn không có em.", "Em có biết vì sao đầu tuần lại bắt đầu bằng thứ hai không, bởi vì em là thứ nhất!", "Oxy là nguồn sống của nhân loại, còn em chính là nguồn sống của anh.", "Em bị cận thị à? Nếu không tại sao không nhìn thấy anh thích em chứ?", "Hôm qua anh gặp ác mộng vì trong giấc mộng đó không có em.", "Uống nhầm một ánh mắt, cơn say theo cả đời, thương nhầm một nụ cười, cả một đời phiêu lãng.", "Dạo này em có thấy mỏi chân không, sao cứ đi mãi trong đầu anh thế?", "Hình như em thích trà sữa lắm phải không, anh cũng thích em như thế đấy.", "Nếu em là nước mắt thì anh sẽ không bao giờ khóc để lạc mất em đâu.", "Đôi mắt em còn xanh hơn cả Đại Tây Dương và anh thì bị lạc trên biển cả mất rồi.", "Nếu nụ hôn là những bông tuyết thì anh sẽ gửi đến em một cơn bão tuyết", "Phải chăng em là một ảo thuật gia, bởi mỗi khi anh nhìn em là mọi thứ xung quanh đều biến mất.", "Anh có thể chụp ảnh em được không, để chứng minh với lũ bạn rằng thiên thần là có thật.", "Anh có thể đi theo em được không, bởi anh được bố mẹ dạy rằng phải theo đuổi giấc mơ của mình.", "Nếu khi anh nghĩ đến em mà có một ngôi sao biến mất, vậy chắc cả bầu trời này không còn sao."]);
  setInterval(() => b.Description(), 7e3), $(".td-lock-screen").click(function () {
    $(".td-welcome").slideUp("slow"), $(".td-lock-screen").animate({opacity: 0}, "slow").css("pointer-events", "none");
  }), $(document).on("swiperight", function () {
    $(".td-welcome").slideDown("slow"), $(".td-lock-screen").animate({opacity: 1}, "fast").css("pointer-events", "auto");
  }), $(document).on("swipeleft", function () {
    $(".td-welcome").slideUp("slow"), $(".td-lock-screen").animate({opacity: 0}, "slow").css("pointer-events", "none");
  }), $(document).on("visibilitychange", function () {
    document.hidden || setTimeout(function () {
      var n = $(window).scrollTop(), t = $(window).height(), e = $(document).height();
      0 === n && ($(".td-welcome").slideDown("slow"), $(".td-lock-screen").animate({opacity: 1}, "fast").css("pointer-events", "auto")), 100 == n / (e - t) * 100 && ($(".td-welcome").slideUp("slow"), $(".td-lock-screen").animate({opacity: 0}, "slow").css("pointer-events", "none"));
    }, 200);
  }), new p(".date");
  let v = $("#loading-percentage"), w;
  w = setInterval(function () {
    var n = $(".pace-progress");
    if (n.length) {
      var t = n.attr("data-progress-text");
      if (t !== v.text()) {
        v.text(t);
        var e = parseInt(t);
        n.css("transform", "translate3d(" + e + "%, 0px, 0px)"), "100%" === t && ($(".pace-active").animate({top: "-100px"}, "slow", function () {
          $(this).hide();
        }), $("#loading-box").is(":visible") ? (x(), WsLoaded = true, $(".td-loading-v2").fadeOut("slow"), $("#loading-box").fadeOut("slow")) : $(".td-loading-v2").fadeOut("slow"), clearInterval(w));
      }
    }
  }, 100);
  let k = {endLoading() {
    x(), $(".td-loading-v2").fadeOut("slow"), $("#loading-box").fadeOut("slow"), WsLoaded = true;
  }, initLoading() {
    document.body.style.overflow = "", $("#loading-box").removeClass("loaded");
  }};
  function x() {
    $("body").removeClass("loading");
  }
  $(window).on("load", () => {
    k.endLoading();
  }), $(document).on("pjax:send", () => {
    k.initLoading();
  }), $(document).on("pjax:complete", () => {
    k.endLoading();
  }), console.log("%c My Github %c https://github.com/NoraTaiSen", "color:#fff;background:linear-gradient(90deg,#448bff,#44e9ff);padding:5px 0;", "color:#000;background:linear-gradient(90deg,#44e9ff,#ffffff);padding:5px 10px 5px 0px;");
  var _, C, T = new Image;
  function E(n, t, e, i, h) {
    this.x = n, this.y = t, this.s = e, this.r = i, this.fn = h;
  }
  function q(n) {
    var t, e;
    switch (n) {
      case "x":
        t = Math.random() * window.innerWidth;
        break;
      case "y":
        t = Math.random() * window.innerHeight;
        break;
      case "s":
        t = Math.random();
        break;
      case "r":
        t = 6 * Math.random();
        break;
      case "fnx":
        e = -0.5 + 1 * Math.random(), t = function (n, t) {
          return n + 0.5 * e - 1.7;
        };
        break;
      case "fny":
        e = 1.5 + 0.7 * Math.random(), t = function (n, t) {
          return t + e;
        };
        break;
      case "fnr":
        e = 0.03 * Math.random(), t = function (n) {
          return n + e;
        };
    }
    return t;
  }
  function S() {
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    var n, t, e, i, h, c, o, a, s = document.createElement("canvas");
    C = true, s.height = window.innerHeight, s.width = window.innerWidth, s.setAttribute("style", "position: fixed;left: 0;top: 0;pointer-events: none;z-index: 8888;"), s.setAttribute("id", "canvas_sakura"), document.getElementsByTagName("body")[0].appendChild(s), a = s.getContext("2d");
    for (var r = new SakuraList, l = 0; l < 10; l++) t = q("x"), e = q("y"), h = q("r"), i = q("s"), c = q("fnx"), o = q("fny"), randomFnR = q("fnr"), (n = new E(t, e, i, h, {x: c, y: o, r: randomFnR})).draw(a), r.push(n);
    _ = requestAnimationFrame(function () {
      a.clearRect(0, 0, s.width, s.height), r.update(), r.draw(a), _ = requestAnimationFrame(arguments.callee);
    });
  }
  function A() {
    if (C) {
      var n = document.getElementById("canvas_sakura");
      n.parentNode.removeChild(n), window.cancelAnimationFrame(_), C = false;
    } else S();
  }
  sakura = "//i.ibb.co/mN296Wb/thanhdieu.png", leaf = "//i.ibb.co/mN296Wb/thanhdieu.png", maple = "//i.ibb.co/mN296Wb/thanhdieu.png", user = "", T.src = maple, E.prototype.draw = function (n) {
    n.save(), this.s, n.translate(this.x, this.y), n.rotate(this.r), n.drawImage(T, 0, 0, 30 * this.s, 30 * this.s), n.restore();
  }, E.prototype.update = function () {
    this.x = this.fn.x(this.x, this.y), this.y = this.fn.y(this.y, this.y), this.r = this.fn.r(this.r), (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) && (this.r = q("fnr"), Math.random() > 0.4 ? (this.x = q("x"), this.y = 0, this.s = q("s"), this.r = q("r")) : (this.x = window.innerWidth, this.y = q("y"), this.s = q("s"), this.r = q("r")));
  }, (SakuraList = function () {
    this.list = [];
  }).prototype.push = function (n) {
    this.list.push(n);
  }, SakuraList.prototype.update = function () {
    for (var n = 0, t = this.list.length; n < t; n++) this.list[n].update();
  }, SakuraList.prototype.draw = function (n) {
    for (var t = 0, e = this.list.length; t < e; t++) this.list[t].draw(n);
  }, SakuraList.prototype.get = function (n) {
    return this.list[n];
  }, SakuraList.prototype.size = function () {
    return this.list.length;
  }, window.onresize = function () {
    document.getElementById("canvas_snow");
  }, T.onload = function () {
    S();
  }, $("body").on("click", "[data-ws-copy]", function (n) {
    n.preventDefault();
    var t = $(this).data("ws-copy");
    if (navigator.clipboard) navigator.clipboard.writeText(t).then(function () {
      FuiToast.success("Đã sao chép vào bộ nhớ tạm!");
    }, function (n) {
      FuiToast.error("Sao chép thất bại: " + n);
    }); else {
      var e = $("<textarea>").val(t).appendTo("body").select();
      try {
        document.execCommand("copy"), FuiToast.success("Đã sao chép vào bộ nhớ tạm!");
      } catch (i) {
        FuiToast.error("Sao chép thất bại: " + i);
      }
      e.remove();
    }
  });
}();
