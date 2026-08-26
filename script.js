// 1. 指揮 / 獨奏 / 樂團 資料庫
const profiles = {
  conductor: {
    image: "image/02.jpg",
    name: "姜慕承",
    title: "樂團指揮",
    desc: "桃園人,國中時期進入桃園市立大成國中管樂團,由楊承和老師、何君毅老師啟蒙小號演奏之技巧。高中時加入桃園高中管樂團,擔任桃園高中管樂團第四屆社長與學生指揮,小號演奏受林燕翎老師、林昀佋老師之指導。\n2013年進入淡江大學管樂團,多次參與校內外樂團之演出,亦隨團參加全國學生音樂比賽。參與樂團期間,擔任學生指揮。於2015年3月參加103學年度全國音樂比賽小號獨奏大專組獲優等。\n大學期間也開始積極參與各種教學與藝術行政等學習機會,曾指導過中壢家商、北市中正高中及金山高中管樂社。2018年,與音樂同好成立藝粹節慶管樂團,並擔任行政執行一職,任職期間共策劃 4 場音樂會;現任桃園高中、武陵高中、內壢高中與壽山高中管樂社樂團指導老師,南崁高中音樂班管弦樂團管樂分部老師及興國國小小號分部老師。\n目前就讀於臺灣師範大學音樂學系研究所主修管弦樂指揮,師事許瀞心教授。"
  },
  soloist: {
    name: "陳俊霖",
    image: "image/05.jpg",
    title: "薩克斯風獨奏者",
    desc: "1997年生於桃園。2013年就讀國立桃園高中時加入管樂社並開始學習薩克斯風,師事陳柏元老師,現持續受教於陳逸倫老師與許墨筑老師。\n2016 至 2022 年間,於國立中興大學應用數學系及碩士研究所就讀,並加入國立中興大學管樂團,曾任社長、薩克斯風聲部長兼首席,社長任內與指揮符秦佼老師舉辦樂團首場售票音樂會,並帶領樂團於全國賽締造中區特優第一名四連霸的佳績;亦曾帶領聲部參與臺中花博演出,並主辦《P薩》薩克斯風重奏音樂會。\n2025 年與中興管樂好友們共同創立 Saxing 薩克斯風重奏團。\n現任職於軟體工程領域,仍在工作之餘持續練習與演出。今日將帶來 PhilipSparke 的作品《Carnival》,邀請聽眾一同體驗音樂中的熱情與活力。"
  },
  orchestra: {
    name: "桃園高中校友管樂團",
    image: "image/03.jpg",
    title: "管樂團",
    desc: "桃園高中校友管樂團成立於 2012年,由一群熱愛管樂的桃高校友們創辦。桃高校友管樂團致力於回饋在校生,並秉持傳承精神,讓桃高管樂社的優良傳統與熱情可以延續。校友管樂團藉由一年一度的暑期年度音樂會,不僅為校友們提供敘舊與交流的機會,也促進校友及在校生之間的連結;音樂會準備過程,也可成為桃高管樂社新任幹部們的暑期訓練!\n桃高管樂社與桃高校友管樂團都希望能將「管樂」塑造成我們心中的第二個家,讓每一位校友與在校生都能在這感受到家的溫暖與歸屬感。\n從 2012 年至2025年間,桃高校友管樂團已舉辦多場不同主題的音樂會。如 2012年「七夕」,到接下來「百老匯不會」、「伴隨我們成長の宮崎駿」、「洋」、「Jazz do it.」、「影。樂」、「海洋柒緣」、「歌舞仲夏」、「九夏」、「Cavalleria Rusticana」、「Tonmalerei」以及2025年的「Musical」;我們希望能藉著不同類型的主題,來傳遞多元的音樂和演奏各類精彩、美妙的樂曲。"
  }
};

// 10 首曲目資料庫
    const tracks = [
      { id: 1, title: "Children Of The Shrine – Concert March ", composer: "/ James Swearingen ", desc: "扒拉扒拉" },
      { id: 2, title: "Carnival", composer: "Philip Sparke", desc: "扒拉扒拉" },
      { id: 3, title: "貝殻のうた The Seashell Song", composer: "伊藤康英 ", desc: "扒拉扒拉" },
      { id: 4, title: "甲斐の虎~武田信玄, 天下取りへの道~", composer: "清水大輔 ", desc: "扒拉扒拉" },
      { id: 5, title: "Lyrical Suite EUROPA for Saxophone Quintet", composer: "光田健一 ", desc: "扒拉扒拉" },
      { id: 6, title: "季(とき)のまど Perspective on Time", composer: "長生淳", desc: "扒拉扒拉" },
      { id: 7, title: "Japanese Folk Song Suite", composer: "兼田 敏", desc: "扒拉扒拉" },
      { id: 8, title: "ケロッ!とマーチ", composer: "沢田完 (arr.山下國俊)", desc: "扒拉扒拉" },
      { id: 9, title: "ひだまりの詩 Le Couple", composer: "日向敏文 (arr.小島里美)", desc: "扒拉扒拉" },
      { id: 10, title: "檄!帝国華撃団", composer: "田中公平 (arr.宮川成治)", desc: "扒拉扒拉" }
    ];

// 動態生成 10 首曲目按鈕（含第 4 首後的中場休息）
const container = document.getElementById('track-list-container');

tracks.forEach((track, index) => {
  const btn = document.createElement('button');
  btn.className = 'track-btn'; // 統一使用一般卡片樣式
  btn.onclick = () => openTrackDetail(index);
  btn.innerHTML = `
    <div class="track-info">
      <div class="track-num">TRACK ${String(track.id).padStart(2, '0')}</div>
      <div class="track-title">${track.title}</div>
    </div>
    <div class="arrow">›</div>
  `;
  container.appendChild(btn);

  if (index === 3) {
    const intermission = document.createElement('div');
    intermission.className = 'intermission-divider';
    intermission.innerHTML = `<div class="intermission-badge">❖ 中場休息 INTERMISSION ❖</div>`;
    container.appendChild(intermission);
  }
});

// 頁面切換核心邏輯
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  window.scrollTo(0, 0);
}

// 載入人物/樂團介紹
function openProfile(type) {
  const data = profiles[type];
  document.getElementById('profile-tag').innerText = data.tag;
  document.getElementById('profile-title').innerText = data.name;
  document.getElementById('profile-sub').innerText = data.title;
  document.getElementById('profile-desc').innerText = data.desc;

  // 處理照片顯示
  const photoEl = document.getElementById('profile-photo');
  if (data.image && data.image.trim() !== "") {
    photoEl.src = data.image;
    photoEl.style.display = "block";
  } else {
    photoEl.style.display = "none";
  }

  showPage('page-profile-detail');
}

// 載入曲目詳情
function openTrackDetail(index) {
  const track = tracks[index];
  document.getElementById('track-num').innerText = `TRACK ${String(track.id).padStart(2, '0')}`;
  document.getElementById('track-title').innerText = track.title;
  document.getElementById('track-composer').innerText = track.composer;
  document.getElementById('track-desc').innerText = track.desc;
  showPage('page-track-detail');
}