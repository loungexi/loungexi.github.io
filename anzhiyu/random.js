var posts=["2025/03/27/后端开发之路/","2025/04/10/Java线程简介/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };