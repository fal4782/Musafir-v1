<template>

<div class="footer">
  <div class="left-footer">
    <h3>Don't Hesitate to <br> Contact us</h3>
    <p>Whether you have questions, feedback, or just want to say hello, we'd love to hear from you! <br>Connect with us through:</p>
    <div class="social-links">
      <a href="https://wa.me/919521166370" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
      <a href="mailto:falguni@argusoft.com" target="_blank"><i class="fa fa-envelope"></i></a>
      <a href="tel:+919521166370"><i class="fa fa-phone"></i></a>
    </div>
  </div>
  <div class="right-footer">
    <img src="https://i.ibb.co/0hh036q/travel1.png" alt="Footer Image">
  </div>
</div>
<div class="copyright">
  &copy; 2023 Musafir. All rights reserved.
</div>



</template>


<script>

</script>


<style scoped>

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 70px 80px;
  background-color: #161616;
  color: white;
}

.left-footer {
  flex: 3;
  max-width: 50%;
  margin-left: 20px;
}

.left-footer h3 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 35px;
    letter-spacing:  0.1cm;
    margin-bottom: 10px;
}

.left-footer p{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 20px;
    letter-spacing: 0.05cm;
    line-height: 1.3em;
    padding-right: 20px;
}

.social-links {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 120px;
  margin-top: 10px;
}

.social-links a {
  color: #555353;
  font-size: 20px;
  text-decoration: none;
}

.social-links a:hover{
    color: white;
}

.right-footer {
  flex: 2;
  max-width: 80%;
  text-align: center;
}

.right-footer img {
  max-width: 100%;
  height: auto;
  margin-left: 40px;
}

/* Styling for the copyright text */
.copyright {
    font-family: Arial, Helvetica, sans-serif;
  padding: 10px 15px;
  background-color: black;
  color: #fff;
}


</style>