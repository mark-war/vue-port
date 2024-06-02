<template>
  <div
    class="testimonials paralax-mf bg-image"
    :style="{
      'background-image': `url(${require('../../assets/img/overlay-bg.jpg')})`,
    }"
  >
    <div class="overlay-mf"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <!-- <swiper
            class="testimonials-slider swiper"
            :slides-per-view="1"
            :space-between="50"
            :loop="true"
            :autoplay="{ delay: 5000, disableOnInteraction: false }"
            :pagination="{ el: '.swiper-pagination', type: 'bullets', clickable: true }"
            > -->
          <swiper
            class="testimonials-slider swiper"
            :slides-per-view="1"
            :space-between="50"
            :navigation="{ type: 'bullets', clickable: true }"
            :pagination="{ type: 'bullets', clickable: true }"
            :loop="true"
            :autoplay="{ delay: 1000, disableOnInteraction: false }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide>
              <div class="testimonial-box">
                <div class="author-test">
                  <img
                    src="../../assets/img/testimonial-2.jpg"
                    alt=""
                    class="rounded-circle b-shadow-a"
                  />
                  <span class="author">Aileen Rabano</span>
                  <span class="designation">Agile Project Manager, CLSSYB</span>
                </div>
                <div class="content-test">
                  <p class="description lead">
                    Mark worked for me for several years in Virtify. He was one
                    of the senior middle tier engineers who demonstrated
                    positive attitude and perseverance towards work. He showed
                    willingness to share his knowledge to other developers even
                    not within his team. Mark always strives hard to learn more
                    and accepts additional work responsibilities as needed. He
                    had made significant contributions in every project he
                    worked on as he always gives his best to get the work done
                    on time. I really treasure Mark for being part of my team
                    and I would always choose to work with him again if given
                    the chance.
                  </p>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="testimonial-box">
                <div class="author-test">
                  <img
                    src="../../assets/img/testimonial-2.jpg"
                    alt=""
                    class="rounded-circle b-shadow-a"
                  />
                  <span class="author">Aldwin Enriquez</span>
                  <span class="designation"
                    >Director - Hybrid Cloud Solutions</span
                  >
                </div>
                <div class="content-test">
                  <p class="description lead">
                    I have known Mark since his first day at Virtify. He is very
                    passionate and dedicated to delivering high quality
                    solutions in a timely manner.
                  </p>
                  <p class="description lead">
                    He contributed a lot in the development of various software
                    products and was among the top developers during his tenure.
                    His strong dedication and commitment to the job made him to
                    be a senior developer in less than a year.
                  </p>
                  <p class="description lead">
                    Mark takes pride of his work and makes sure that he accounts
                    for even the smallest details of every product feature he
                    works on. He is very strong on both business and data layers
                    and he can also work on presentation part of the
                    application. He usually finds and resolves bugs that are
                    hard to reproduce errors. He is very independent and learns
                    new technologies by himself. He always comes up with great
                    ideas and the best part was that he constantly shares it
                    among his peers. I vividly remember him creating the
                    database pattern for unit testing which he shared to other
                    teams as well. Mr Guerra is also a team leader. I like how
                    he works hand in hand with junior developers and show them
                    useful design patterns as well as anti-patterns. The best
                    part about Mark is that he works pretty well with others. I
                    am sure Mark will make a good impression in any company he
                    works with.
                  </p>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="testimonial-box">
                <div class="author-test">
                  <img
                    src="../../assets/img/testimonial-2.jpg"
                    alt=""
                    class="rounded-circle b-shadow-a"
                  />
                  <span class="author">Waseem Sajjad</span>
                  <span class="designation"
                    >Senior Software Engineer at GAC Group</span
                  >
                </div>
                <div class="content-test">
                  <p class="description lead">
                    I had the pleasure of working closely with Mark during our
                    time together as software engineers, and I wholeheartedly
                    recommend him. Mark's technical prowess and problem-solving
                    skills were evident from day one, and he consistently
                    delivered high-quality work.
                  </p>
                  <p class="description lead">
                    As a senior software engineer, I was particularly impressed
                    by Mark's ability to grasp complex concepts swiftly and
                    contribute innovative solutions to our projects. His
                    dedication to continuous learning and staying abreast of
                    industry trends significantly enriched our team's
                    capabilities.
                  </p>
                  <p class="description lead">
                    Beyond his technical acumen, Mark is a fantastic team
                    player. His excellent communication skills and collaborative
                    approach fostered a positive working environment, making him
                    a valuable asset to any team. Mark's commitment to
                    excellence and his personable nature make him not only a
                    skilled professional but also a pleasure to work alongside.
                  </p>
                  <p class="description lead">
                    I have no doubt that Mark will excel in any future
                    endeavors, and I highly recommend him for any software
                    engineering role. Feel free to reach out if you have any
                    questions about Mark's exceptional abilities and
                    contributions.
                  </p>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="testimonial-box">
                <div class="author-test">
                  <img
                    src="../../assets/img/testimonial-2.jpg"
                    alt=""
                    class="rounded-circle b-shadow-a"
                  />
                  <span class="author">Varsha Kunnummal Kaitheri</span>
                  <span class="designation"
                    >Senior Full Stack Software Engineer</span
                  >
                </div>
                <div class="content-test">
                  <p class="description lead">
                    Mark is a very productive person and is a multi-skilled
                    person with vast knowledge. Mark is proactive, self
                    motivated and intelligent team player. It’s a pleasure
                    working with Mark. I highly recommend Mark for his strong
                    attention to detail. His meticulous approach to tasks and
                    projects ensured accuracy and high-quality results. It was a
                    wonderful experience working with Mark for the past two
                    years. I was consistently impressed by his ability to remain
                    calm and composed under pressure. His strong problem-solving
                    skills and ability to think strategically helped navigate
                    challenging situations effectively. Besides all he is a good
                    human too who is very helpful. Thank you Mark.
                  </p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>

  <section id="blog" class="blog-mf sect-pt4 route">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-box text-center">
            <h3 class="title-a">Blogs</h3>
            <p class="subtitle-a">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div class="line-mf"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="card card-blog">
            <div class="card-img">
              <a href="blog-single.html"
                ><img
                  src="../../assets/img/post-1.jpg"
                  alt=""
                  class="img-fluid"
              /></a>
            </div>
            <div class="card-body">
              <div class="card-category-box">
                <div class="card-category">
                  <h6 class="category">Travel</h6>
                </div>
              </div>
              <h3 class="card-title">
                <a href="blog-single.html">See more ideas about Travel</a>
              </h3>
              <p class="card-description">
                Proin eget tortor risus. Pellentesque in ipsum id orci porta
                dapibus. Praesent sapien massa, convallis a pellentesque nec,
                egestas non nisi.
              </p>
            </div>
            <div class="card-footer">
              <div class="post-author">
                <a href="#">
                  <img
                    src="../../assets/img/testimonial-2.jpg"
                    alt=""
                    class="avatar rounded-circle"
                  />
                  <span class="author">Mark Angelo Guerra</span>
                </a>
              </div>
              <div class="post-date">
                <span class="bi bi-clock"></span> 10 min
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-blog">
            <div class="card-img">
              <a href="blog-single.html"
                ><img
                  src="../../assets/img/post-2.jpg"
                  alt=""
                  class="img-fluid"
              /></a>
            </div>
            <div class="card-body">
              <div class="card-category-box">
                <div class="card-category">
                  <h6 class="category">Web Design</h6>
                </div>
              </div>
              <h3 class="card-title">
                <a href="blog-single.html">See more ideas about Travel</a>
              </h3>
              <p class="card-description">
                Proin eget tortor risus. Pellentesque in ipsum id orci porta
                dapibus. Praesent sapien massa, convallis a pellentesque nec,
                egestas non nisi.
              </p>
            </div>
            <div class="card-footer">
              <div class="post-author">
                <a href="#">
                  <img
                    src="../../assets/img/testimonial-2.jpg"
                    alt=""
                    class="avatar rounded-circle"
                  />
                  <span class="author">Mark Angelo Guerra</span>
                </a>
              </div>
              <div class="post-date">
                <span class="bi bi-clock"></span> 10 min
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-blog">
            <div class="card-img">
              <a href="blog-single.html"
                ><img
                  src="../../assets/img/post-3.jpg"
                  alt=""
                  class="img-fluid"
              /></a>
            </div>
            <div class="card-body">
              <div class="card-category-box">
                <div class="card-category">
                  <h6 class="category">Web Design</h6>
                </div>
              </div>
              <h3 class="card-title">
                <a href="blog-single.html">See more ideas about Travel</a>
              </h3>
              <p class="card-description">
                Proin eget tortor risus. Pellentesque in ipsum id orci porta
                dapibus. Praesent sapien massa, convallis a pellentesque nec,
                egestas non nisi.
              </p>
            </div>
            <div class="card-footer">
              <div class="post-author">
                <a href="#">
                  <img
                    src="../../assets/img/testimonial-2.jpg"
                    alt=""
                    class="avatar rounded-circle"
                  />
                  <span class="author">Morgan Freeman</span>
                </a>
              </div>
              <div class="post-date">
                <span class="bi bi-clock"></span> 10 min
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Autoplay],
    };
  },
};
</script>