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
                                        <input name="domicilio" type="text">
                                    </div>
                                    <br>
                                    <div class="contact-input">
                                        <div class="contact-inner">
                                            Niveles
                                            <select class="form-select" name="niveles" aria-label="Default select example">
                                                <option selected>Selecciona una opción</option>
                                                <option value="1N">1 Nivel</option>
                                                <option value="2N">2 Niveles</option>
                                            </select>
                                        </div>
                                        <div class="contact-inner contact-message">
                                            Tipo de Construcción de los Techos:
                                            <select class="form-select" name="techos" aria-label="Default select example">
                                                <option selected>Selecciona una opción</option>
                                                <option value="concreto">Concreto armado</option>
                                                <option value="lamina">Lamina</option>
                                                <option value="otroC">Otro</option>
                                            </select>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="contact-input">
                                        <div class="contact-inner">
                                            Tipo de Construcción de los Muros:
                                            <select class="form-select" name="construccio"
                                                aria-label="Default select example">
                                                <option selected>Selecciona una opción</option>
                                                <option value="block">Block</option>
                                                <option value="ladrillos">Ladrillos</option>
                                                <option value="OtroM">Otro</option>
                                            </select>
                                        </div>
                                        <div class="contact-inner contact-message">
                                            Teléfono de contacto
                                            <input name="telefono">
                                        </div>
                                    </div>




                                    <div class="sub-heading">
                                        <h6 class="heading">
                                            A continuación elige tus sumas aseguradas para tu cotización.
                                        </h6>
                                    </div>
                                    <div class="contact-input">
                                        <div class="contact-inner ">
                                            Incendio edificio (Todo riesgo de Incendio)
                                            <select class="form-select" name="I" aria-label="Default select example">
                                                <option selected>Selecciona una opción</option>
                                                <option value="I1">$ 1,000,000.00</option>
                                                <option value="I15">$ 1,500,000.00</option>
                                                <option value="I2">$ 2,000,000.00</option>
                                                <option value="I25">$ 2,500,000.00</option>
                                                <option value="OtroI">Otra cantidad</option>
                                            </select>
                                        </div>
                                        <div class="contact-inner ">
                                            Incendio contenidos (Todo riesgo de Incendio)
                                            <select class="form-select" name="IC" aria-label="Default select example">
                                                <option selected>Selecciona una opción</option>
                                                <option value="IC5">$ 500,000.00</option>
                                                <option value="IC1">$ 1,000,000.00</option>
                                                <option value="IC15">$ 1,500,000.00</option>
                                                <option value="OtroIC">Otra cantidad</option>
                                            </select>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="contact-input">
                                        <div class="contact-inner ">
                                            Resposabilidad civil
                                            <select class="form-select" name="RC" aria-label="Default select example">
                                                <option selected>Selecciona una opción</option>
                                                <option value="RC15">$ 1,500,000.00</option>
                                                <option value="RC2">$ 2,000,000.00</option>
                                                <option value="RC25">$ 2,500,000.00</option>
                                                <option value="RC3">$ 3,000,000.00</option>
                                                <option value="OtroRC">Otra cantidad</option>

                                            </select>
                                        </div>
                                        <div class="contact-inner ">
                                            Cristales
                                            <select class="form-select" name="C" aria-label="Default select example">
                                                <option selected>Selecciona una opción</option>
                                                <option value="C2">$ 20,000.00</option>
                                                <option value="C5">$ 50,000.00</option>
                                                <option value="C1">$ 100,000.00</option>
                                                <option value="OtroC">Otra cantidad</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="contact-input">
                                        <div class="contact-inner ">
                                            Robo de contenidos
                                            <select class="form-select" name="RO" aria-label="Default select example">
                                                <option selected>Selecciona una opción</option>
                                                <option value="RO6">$ 60,000.00</option>
                                                <option value="RO120">$ 120,000.00</option>
                                                <option value="RO200">$ 200,000.00</option>
                                                <option value="RO250">$ 250,000.00</option>
                                                <option value="OtroRO">Otra cantidad</option>

                                            </select>
                                        </div>
                                        <div class="contact-inner ">
                                            Equipo electrónico
                                            <select class="form-select" name="EE" aria-label="Default select example">
                                                <option selected>Selecciona una opción</option>
                                                <option value="EE6">$ 60,000.00</option>
                                                <option value="EE120">$ 120,000.00</option>
                                                <option value="EE200">$ 200,000.00</option>
                                                <option value="EE250">$ 250,000.00</option>
                                                <option value="OtroEE">Otra cantidad</option>
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
            EE: [
                "EE6",
                "EE120",
                "EE200",
                "EE250",
                "OtroEE"
            ],
            RO: [
                "RO6",
                "RO120",
                "RO200",
                "RO250",
                "OtroRO"
            ],
            C: [
                "C2",
                "C5",
                "C1",
                "Otroc"
            ],
            RC: [
                "RC15",
                "RC2",
                "RC25",
                "RC3",
                "OtroRC"
            ],
            IC: [
                "IC5",
                "IC1",
                "IC15",
                "OtroIC"
            ],
            I: [
                "I1",
                "I15",
                "I2",
                "I25",
                "OtroI"
            ],
            I: [
                "I1",
                "I15",
                "I2",
                "I25",
                "OtroI"
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