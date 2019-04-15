<div id="{{id}}" class="article">
{{each data as item index}}
<a href="{{item.url}}" class="article-item">
  <h3 class="title">{{item.title}}</h3>
  <div class="desc">
    <div class="desc-text">{{item.desc}}</div><span class="read-more">阅读全文→</span>
  </div>
</a>
{{/each}}
</div>