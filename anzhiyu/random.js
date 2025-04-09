var posts=["2025/03/27/后端开发之路 copy/","2025/03/27/后端开发之路/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };