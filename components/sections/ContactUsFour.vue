<template>
    <div>
        <div class="contact-us-section-wrappaer section-space--pt_100 section-space--pb_70">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-lg-6">
                        <div class="conact-us-wrap-one mb-30">
                            <h3 class="heading">
                                ¡Puedes pedir asesoría con <span class="text-color-primary"> nuestros expertos! </span>
                            </h3>
                            <div class="sub-heading">
                                 <br> ¡En breve nos pondremos en contacto contigo!
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-lg-6">
                        <div class="contact-form-wrap">
                            <form id="contact-form" ref="form" @submit.prevent="sendEmail">
                                <div class="contact-form">
                                    <div class="contact-input">
                                        <div class="contact-inner">
                                            <input name="con_name" type="text" placeholder="Nombre *">
                                        </div>
                                        <div class="contact-inner">
                                            <input name="con_email" type="email" placeholder="Email *">
                                        </div>
                                    </div>
                                    <div class="contact-inner">
                                        <input name="con_telefono" type="number" placeholder="Teléfono *">
                                    </div>
                                    <div class="contact-inner contact-message">
                                        <textarea name="con_message" placeholder="Escribe tu mensaje o tu duda."></textarea>
                                    </div>
                                    <div class="submit-btn mt-20">
                                        <button class="ht-btn ht-btn-md" type="submit">Enviar mensaje</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import emailjs from '@emailjs/browser';
    import Swal from "sweetalert2";
    
    export default {
      methods: {
        sendEmail() {
          emailjs.sendForm('service_o10ni4h', 'template_g8ir5ck', this.$refs.form, '9dXIW13fiQT0eCgk5')
          .then(() => {
                location.href = "/contact/";
              })
              .catch((error) => {
                alert(error);
              });
          Swal.fire({
            icon: "success",
            title: "En un momento un asesor se comunicara contigo.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
    </script>