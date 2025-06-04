var posts=["2025/04/17/关于Synchronized的学习/","2025/04/20/关于Volatile一些知识的学习/","2025/04/10/Java线程简介/","2025/03/27/后端开发之路/","2025/04/22/线程安全的类的延迟初始化/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };