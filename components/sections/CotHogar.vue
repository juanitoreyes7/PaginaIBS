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
                                    <div class="contact-inner">
                                        ¿Cuál es tu domicilio? (Calle, Colonia, CP, Ciudad)
                                        <input name="nombreCli" type="text">
                                    </div>
                                    <br>
                                    <div class="contact-input">
                                        <div class="contact-inner">
                                            Niveles
                                            <select class="form-select" name="genero" aria-label="Default select example">
                                                <option selected>Selecciona una opción</option>
                                                <option value="femenino">Una Planta</option>
                                                <option value="masculino">Tiene Planta alta</option>
                                            </select>
                                        </div>
                                        <div class="contact-inner contact-message">
                                            Tipo de Construcción de los Techos:
                                            <select class="form-select" name="genero" aria-label="Default select example">
                                                <option selected>Selecciona una opción</option>
                                                <option value="femenino">Concreto armado</option>
                                                <option value="masculino">Lamina</option>
                                                <option value="femenino">Otro</option>
                                            </select>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="contact-input">
                                        <div class="contact-inner">
                                            Tipo de Construcción de los Muros:
                                            <select class="form-select" name="genero" aria-label="Default select example">
                                                <option selected>Selecciona una opción</option>
                                                <option value="femenino">Block</option>
                                                <option value="masculino">Ladrillos</option>
                                                <option value="femenino">Otro</option>
                                            </select>
                                        </div>
                                        <div class="contact-inner contact-message">
                                            Teléfono de contacto
                                            <input name="telefono">
                                        </div>
                                    </div>

                                    <div class="sub-heading">
                                        <h6 class="heading">
                                            A continuación elige tus sumas aseguradas para tu cotización
                                        </h6>
                                    </div>
                                    <div class="contact-input">
                                        <div class="contact-inner ">
                                            Incendio edificio (Todo riesgo de Incendio)
                                            <select class="form-select" name="genero" aria-label="Default select example">
                                                <option selected>Selecciona una opción</option>
                                                <option value="femenino">$ 1,000,000.00</option>
                                                <option value="masculino">$ 1,500,000.00</option>
                                                <option value="femenino">$ 2,000,000.00</option>
                                                <option value="masculino">$ 2,500,000.00</option>
                                                <option value="masculino">$ 3,000,000.00</option>
                                            </select>
                                        </div>
                                        <div class="contact-inner ">
                                            Incendio contenidos (Todo riesgo de Incendio)
                                            <select class="form-select" name="genero" aria-label="Default select example">
                                                <option selected>Selecciona una opción</option>
                                                <option value="femenino">$ 500,000.00</option>
                                                <option value="masculino">$ 1,000,000.00</option>
                                                <option value="femenino">$ 1,500,000.00</option>
                                                <option value="masculino">$ 2,000,000.00</option>
                                            </select>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="contact-input">
                                        <div class="contact-inner ">
                                            Resposabilidad civil
                                            <select class="form-select" name="genero" aria-label="Default select example">
                                                <option selected>Selecciona una opción</option>
                                                <option value="masculino">$ 1,500,000.00</option>
                                                <option value="femenino">$ 2,000,000.00</option>
                                                <option value="masculino">$ 2,500,000.00</option>
                                                <option value="masculino">$ 3,000,000.00</option>
                                                <option value="masculino">$ 3,500,000.00</option>

                                            </select>
                                        </div>
                                        <div class="contact-inner ">
                                            Cristales
                                            <select class="form-select" name="genero" aria-label="Default select example">
                                                <option selected>Selecciona una opción</option>
                                                <option value="femenino">$ 20,000.00</option>
                                                <option value="masculino">$ 50,000.00</option>
                                                <option value="femenino">$ 100,000.00</option>
                                                <option value="masculino">$ 150,000.00</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="contact-input">
                                        <div class="contact-inner ">
                                            Rebo de contenidos
                                            <select class="form-select" name="genero" aria-label="Default select example">
                                                <option selected>Selecciona una opción</option>
                                                <option value="masculino">$ 60,000.00</option>
                                                <option value="femenino">$ 120,000.00</option>
                                                <option value="masculino">$ 200,000.00</option>
                                                <option value="masculino">$ 250,000.00</option>
                                                <option value="masculino">$ 300,000.00</option>

                                            </select>
                                        </div>
                                        <div class="contact-inner ">
                                            Equipo electrónico
                                            <select class="form-select" name="genero" aria-label="Default select example">
                                                <option selected>Selecciona una opción</option>
                                                <option value="masculino">$ 60,000.00</option>
                                                <option value="femenino">$ 120,000.00</option>
                                                <option value="masculino">$ 200,000.00</option>
                                                <option value="masculino">$ 250,000.00</option>
                                                <option value="masculino">$ 300,000.00</option>
                                            </select>
                                        </div>
                                    </div>
                                    <br>
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