<template>
    <section id="contact" class="paralax-mf footer-paralax bg-image sect-mt4 route" 
    :style="{
      'background-image': `url(${require('../../assets/img/overlay-bg.jpg')})`
    }">
      <div class="overlay-mf"></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="contact-mf">
              <div id="contact" class="box-shadow-full">
                <div class="row">
                  <div class="col-md-6">
                    <div class="title-box-2">
                      <h5 class="title-left">
                        Send us a message!
                      </h5>
                    </div>
                    <div>
                      <!-- <form action="forms/contact.php" method="post" role="form" class="php-email-form"> -->
                      <form id="contact-form" action="/forms/send-email" role="form" method="post" class="php-email-form">
                        <div class="row">
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                            </div>
                          </div>
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                            </div>
                          </div>
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                            </div>
                          </div>
                          <div class="col-md-12 text-center my-3">
                            <div class="loading">Loading</div>
                            <div class="error-message"></div>
                            <div class="sent-message">Your message has been sent. Thank you!</div>
                          </div>
                          <div class="col-md-12 text-center">
                            <button type="submit" class="button button-a button-big button-rouded">Send Message</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="title-box-2 pt-4 pt-md-0">
                      <h5 class="title-left">
                        Get in Touch
                      </h5>
                    </div>
                    <div class="more-info">
                      <p class="lead">
                        Ready to take the next step? Let's connect and bring your vision to life. Whether you have questions, ideas, or simply want to discuss how we can work together, I'm here to help. Reach out today and let's start the conversation.
                      </p>
                      <ul class="list-ico">
                        <li><span class="bi bi-geo-alt"></span> Dubai, United Arab Emirates</li>
                        <li><span class="bi bi-phone"></span> (971) 529664344</li>
                        <li><span class="bi bi-envelope"></span> markangeloguerra@gmail.com</li>
                      </ul>
                    </div>
                    <div class="socials">
                      <ul>
                        <li><a href="https://facebook.com/maxeneaaliyah/" target="_blank"><span class="ico-circle"><i class="bi bi-facebook"></i></span></a></li>
                        <li><a href="https://instagram.com/coachchek/" target="_blank"><span class="ico-circle"><i class="bi bi-instagram"></i></span></a></li>
                        <li><a href="https://twitter.com/coachchek" target="_blank"><span class="ico-circle"><i class="bi bi-twitter"></i></span></a></li>
                        <li><a href="https://linkedin.com/in/guerra-mark/" target="_blank"><span class="ico-circle"><i class="bi bi-linkedin"></i></span></a></li>
                        <li><a href="https://github.com/mark-war" target="_blank"><span class="ico-circle"><i class="bi bi-github"></i></span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>