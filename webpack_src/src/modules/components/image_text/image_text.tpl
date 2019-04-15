<div id="{{id}}" class="image-text">
{{each data as item index}}
<a href="{{item.url}}" class="image-text-item">
  <div class="text-area">
    <h3 class="title">{{item.title}}</h3>
    <div class="desc">
      <div class="desc-text">{{item.desc}}</div><span class="read-more">阅读全文→</span>
    </div>
  </div>
  <div class="image-area">
    <img src="{{item.image}}" alt="{{item.title}}" />
  </div>
</a>
{{/each}}
</div>