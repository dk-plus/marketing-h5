<div class="swiper-container carousel" id="{{id}}">
  <div class="swiper-wrapper">
  {{each data as item index}}
    <a class="swiper-slide carousel-item" href="{{item.url}}">
      <div class="title">{{item.title}}</div>
      <img src="{{item.image}}" alt="{{item.title}}"/>
    </a>
  {{/each}}
  </div>
</div>