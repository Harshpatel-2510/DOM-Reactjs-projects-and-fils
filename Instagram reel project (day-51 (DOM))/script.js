const reels = [
  {
    isMuted: true,
    username: "harsh_codes",
    likeCount: 12450,
    isLiked: true,
    commentCount: 342,
    caption: "Late night coding sessions 🚀",
    video: "./reels-video/miyan_nishar-20260512-0001.mp4",
    userProfile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    shareCount: 210,
    isFollowed: true
  },  
  {
    isMuted: true,
    username: "travelwithriya",
    likeCount: 9870,
    isLiked: false,
    commentCount: 187,
    caption: "Sunsets hit different in Goa 🌅",
    video: "./reels-video/whatshot_goa-20260512-0001.mp4",
    userProfile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    shareCount: 98,
    isFollowed: false
  },
  {
    isMuted: true,
    username: "fitness_aman",
    likeCount: 22340,
    isLiked: true,
    commentCount: 521,
    caption: "No excuses. Just results 💪",
    video: "./reels-video/alexschwartz2-20260512-0001.mp4",
    userProfile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    shareCount: 430,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "foodiequeen",
    likeCount: 15670,
    isLiked: false,
    commentCount: 290,
    caption: "Cheese overloaded pizza 🍕",
    video: "./reels-video/food.finista-20260512-0001.mp4",
    userProfile: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    shareCount: 175,
    isFollowed: false
  },
  {
    isMuted: true,
    username: "techworld",
    likeCount: 31200,
    isLiked: true,
    commentCount: 840,
    caption: "Top 5 VS Code extensions for developers 🔥",
    video: "./reels-video/tech_saheli-20260512-0001.mp4",
    userProfile: "https://images.unsplash.com/photo-1504257432389-52343af06ae3",
    shareCount: 620,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "musicvibes",
    likeCount: 8450,
    isLiked: false,
    commentCount: 111,
    caption: "Feeling every beat 🎧",
    video: "./reels-video/danalapointedrums-20260512-0001.mp4",
    userProfile: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
    shareCount: 77,
    isFollowed: false
  },
  {
    isMuted: true,
    username: "nature_clicks",
    likeCount: 27650,
    isLiked: true,
    commentCount: 640,
    caption: "Lost in the mountains 🏔️",
    video: "./reels-video/bydastann-20260512-0001.mp4",
    userProfile: "https://images.unsplash.com/photo-1504593811423-6dd665756598",
    shareCount: 510,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "daily_memes",
    likeCount: 44210,
    isLiked: false,
    commentCount: 1200,
    caption: "When the code works on first try 😂",
    video: "./reels-video/mjrahul_2.0-20260512-0001.mp4",
    userProfile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    shareCount: 980,
    isFollowed: false
  },
  {
    isMuted: true,
    username: "gaming_zone",
    likeCount: 19880,
    isLiked: true,
    commentCount: 430,
    caption: "Clutched the final round 🎮",
    video: "./reels-video/joystick_junction_hubli-20260512-0001.mp4",
    userProfile: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    shareCount: 350,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "fashion_hub",
    likeCount: 13400,
    isLiked: false,
    commentCount: 205,
    caption: "Streetwear collection 2026 ✨",
    video: "./reels-video/official_prerna_roy555-20260512-0001.mp4",
    userProfile: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
    shareCount: 160,
    isFollowed: false
  }
];

var allreels = document.querySelector('.all-reels')

function addData(){
      var sum = ''
    reels.forEach(function(elem,id ){
        sum = sum + `<div class="reel">
                        <video autoplay loop ${elem.isMuted?'muted':''} src="${elem.video}"></video>
                        <div class="mute" id=${id}>
                        ${elem.isMuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-down-line"></i>'}
                          
                        </div>
                          <div class="bottom">
                              <div class="user">
                                <img src="${elem.userProfile}" alt="">
                                <h4>${elem.username}</h4>
                                <button id="${id}" class="follow">${elem.isFollowed?'Unfollow':'Follow'}</button>
                              </div>
                                <h3>${elem.caption}</h3>
                          </div>
                        <div class="right">
                            <div id="${id}" class="like">
                                <h4 class="like-icon icon">${elem.isLiked?'<i class="love ri-heart-2-fill"></i>':'<i class="ri-heart-2-line"></i>'}</h4>
                                <h6>${elem.likeCount}</h6>
                            </div>
                            <div class="comment">
                                <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                                <h6>${elem.commentCount}</h6>
                            </div>
                            <div class="share">
                                <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                                <h6>${elem.shareCount}</h6>
                            </div>
                            <div class="menu">
                                <h4 class="menu-icon icon"><i class="ri-more-2-line"></i></h4>
                            </div>
                        </div>
                    </div>`
    })

  allreels.innerHTML = sum  
}
addData()

allreels.addEventListener('click', function(dets){

  if(dets.target.className == 'like'){
    if(!reels[dets.target.id].isLiked){
      reels[dets.target.id].likeCount++
      reels[dets.target.id].isLiked = true
    }else{
      reels[dets.target.id].likeCount--
      reels[dets.target.id].isLiked = false
    }

    addData()
  }

  if (dets.target.className == 'follow') {
    if(!reels[dets.target.id].isFollowed){
      reels[dets.target.id].isFollowed = true
    }else{
      reels[dets.target.id].isFollowed = false
    }
  
    addData()
  }

  if (dets.target.className == 'mute') {
    if(!reels[dets.target.id].isMuted){
      reels[dets.target.id].isMuted = true
    }else{
      reels[dets.target.id].isMuted = false
    }
  
    addData()
  }
})

function autoPlayCurrentVideo(){

    let videos = document.querySelectorAll('video')

    window.addEventListener('scroll', function(){

        videos.forEach(function(video){

            let rect = video.getBoundingClientRect()

            if(rect.top >= 0 && rect.top <= window.innerHeight/2){

                videos.forEach(function(v){
                    v.muted = true
                })

                video.muted = false

            }
 
        })

    })

}