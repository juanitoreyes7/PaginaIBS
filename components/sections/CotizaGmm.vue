<template>
    <div>
        <div class="contact-us-section-wrappaer section-space--pt_100 section-space--pb_70">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 col-lg-12">
                        <div class="conact-us-wrap-one mb-30">
                            <h3 class="heading">
                                ¡Pide tu cotización <span class="text-color-primary"> ahora mismo! </span>
                            </h3>
                            <div class="sub-heading">
                                <br>Para darte una mejor asesoría de acuerdo a tus necesidades, favor de contestar las
                                siguientes preguntas.
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12 col-lg-12">
                        <div class="contact-form-wrap">
                            <form id="contact-form" ref="form" @submit.prevent="sendEmail">
                                <div class="contact-form">
                                    <div class="contact-inner">
                                        ¿Cuál es tu nombre completo?
                                        <input name="nombreCli" type="text">
                                    </div>
                                    <br>
                                    <div class="contact-input">
                                        <div class="contact-inner">
                                            ¿Cuál es tu correo electrónico?
                                            <input name="email" type="email">
                                        </div>
                                        <div class="contact-inner contact-message">
                                            Teléfono de contacto
                                            <input name="telefono">
                                        </div>
                                    </div>
                                    <br>
                                    <div class="contact-input">
                                        <div class="contact-inner ">
                                            ¿Cuál es tu género?
                                            <select class="form-select" name="genero" aria-label="Default select example">
                                                <option selected>Selecciona una opción</option>
                                                <option value="femenino">Femenino</option>
                                                <option value="masculino">Masculino</option>
                                            </select>
                                        </div>
                                        <div class="contact-inner">
                                            ¿Cuál es tu fecha de nacimiento?<br>
                                            <date-picker v-model="dataFecha.fechaN" format="YYYY-MM-DD" type="date"
                                                placeholder="Fecha de Nacimiento"></date-picker>
                                        </div>
                                    </div>
                                    <br>
                                    <br>
                                    <div class="contact-inner contact-message">
                                        ¿Cuentas con póliza de gastos médicos mayores?
                                        <select class="form-select" name="tieneP" aria-label="Default select example">
                                            <option selected>Selecciona una opcion</option>
                                            <option value="si">Si</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                                    <br>

                                    <div class="contact-input">
                                        <div class="contact-inner contact-message">
                                            ¿Tú o algún dependiente tuyo tienen alguna enfermedad?
                                            <select class="form-select" name="tienenE" aria-label="Default select example">
                                                <option selected>Selecciona una opcion</option>
                                                <option value="si">Si</option>
                                                <option value="no">No</option>
                                            </select>
                                        </div>
                                        <div class="contact-inner contact-message">
                                            ¿Cual es tu Código Postal?
                                            <input name="cp">
                                        </div>
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
import Multiselect from "vue-multiselect";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
    components: { DatePicker, Multiselect },
    data() {
        return {
            dataFecha: {
                fechaN: "",
            },
            decision1: [
                "Si",
                "No"
            ],
            decision2: [
                "Si",
                "No"
            ],
            genero: [
                "Femenino",
                "Masculino"
            ],
        };
    },
    methods: {
        sendEmail() {
            emailjs.sendForm('service_o10ni4h', 'template_lo78jmh', this.$refs.form, '9dXIW13fiQT0eCgk5')
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