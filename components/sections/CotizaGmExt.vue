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
                                        <div class="contact-inner contact-message">
                                            ¿Cual es tu edad?
                                            <select class="form-select" name="tienenE" aria-label="Default select example">
                                                <option selected>Selecciona una opcion</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                                <option value="17">17</option>
                                                <option value="18">18</option>
                                                <option value="19">19</option>
                                                <option value="20">20</option>
                                                <option value="21">21</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                                <option value="24">24</option>
                                                <option value="25">25</option>
                                                <option value="26">26</option>
                                                <option value="27">27</option>
                                                <option value="28">28</option>
                                                <option value="29">29</option>
                                                <option value="30">30</option>
                                                <option value="31">31</option>
                                                <option value="32">32</option>
                                                <option value="33">33</option>
                                                <option value="34">34</option>
                                                <option value="35">35</option>
                                                <option value="36">36</option>
                                                <option value="37">37</option>
                                                <option value="38">38</option>
                                                <option value="39">39</option>
                                                <option value="40">40</option>
                                                <option value="41">41</option>
                                                <option value="42">42</option>
                                                <option value="43">43</option>
                                                <option value="44">44</option>
                                                <option value="45">45</option>
                                                <option value="46">46</option>
                                                <option value="47">47</option>
                                                <option value="48">48</option>
                                                <option value="49">49</option>
                                                <option value="50">50</option>
                                                <option value="51">51</option>
                                                <option value="52">52</option>
                                                <option value="53">53</option>
                                                <option value="54">54</option>
                                                <option value="55">55</option>
                                                <option value="56">56</option>
                                                <option value="57">57</option>
                                                <option value="58">58</option>
                                                <option value="59">59</option>
                                                <option value="60">60</option>
                                                <option value="61">61</option>
                                                <option value="62">62</option>
                                                <option value="63">63</option>
                                                <option value="64">64</option>
                                            </select>
                                        </div>
                                    </div>
                                    <br>

                                    <div class="contact-input">
                                        <div class="contact-inner contact-message">
                                            ¿Tipo de conversión?
                                            <select class="form-select" name="tienenE" aria-label="Default select example">
                                                <option selected>Selecciona una opcion</option>
                                                <option value="2,000,000.00">2,000,000.00</option>
                                                <option value="5,000,000.00">5,000,000.00</option>
                                            </select>
                                        </div>
                                        <div class="contact-inner contact-message">
                                            <div class="submit-btn mt-20">
                                                <button type="button" class="btn btn-info bx bxs-edit" @click="
                                                    modalTabulacion = true; dataInfoSin = data;
                                                ">Tabla de tabulación</button>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div class="contact-input">
                                    <div class="contact-inner contact-message">
                                        <div class="submit-btn mt-20">
                                            <button class="ht-btn ht-btn-md" type="submit">Cotizar</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--FIN MODAL DATOS COMPLETOS-->
        <b-modal v-model="modalTabulacion" size="xl" title="Tabulación">
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label class="control-label">
                                <h5><b>Sumas aseguradas:</b> </h5>
                            </label>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-sm-12">
                                    <label class="control-label"><b>Suma:</b> $ 170,000,000.00 </label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <label class="control-label"><b>Deducible:</b> $ 18,000.00</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <label class="control-label"><b>Coaseguro:</b> 10%</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <label class="control-label"><b>Gama:</b> Esmeralda</label>
                                </div>
                                <div class="col-sm-12">
                                    <label class="control-label"><b>Periodo:</b> 100 Años</label>
                                </div>
                                <div class="col-sm-12">
                                    <label class="control-label"><b>Tabulador:</b> CAOBA</label>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="form-group">
                            <label class="control-label">
                                <h5><b>Coberturas adicionales: </b></h5>
                            </label>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-sm-6">
                                    <label class="control-label"><b>Medicamentos fuera de hospital</b>
                                    </label>
                                </div>
                                <div class="col-sm-6">
                                    <label class="control-label"><b>Cobertura en el extrajero ECE</b> </label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <label class="control-label"><b>Preexistencias</b> </label>
                                </div>
                                <div class="col-sm-6">
                                    <label class="control-label"><b>Complicaciones de GMM</b> </label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <label class="control-label"><b>Deducible cero</b> </label>
                                </div>
                                <div class="col-sm-6">
                                    <label class="control-label"><b>Conversion garantizada</b>
                                    </label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <label class="control-label"><b>Servicios de asistencia</b> </label>
                                </div>
                                <div class="col-sm-6">
                                    <label class="control-label"><b>Cliente distinguido</b>
                                    </label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <label class="control-label"><b>Cobertura nacional</b> </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <blockquote class="blockquote text-center">
                        <p class="mb-0">De acuerdo con tu edad que tienes 18 años puedes contratar tu poliza por $2,000.00
                        </p>
                        <footer class="blockquote-footer">Sa clic en solicitar <cite title="Source Title">y en breve un
                                acesor
                                estara contactandote.</cite>
                            <div class="contact-inner contact-message">
                                <div class="submit-btn mt-20">
                                    <button class="ht-btn ht-btn-md" type="submit">Cotizar</button>
                                </div>
                            </div>
                        </footer>
                    </blockquote>
                </div>
            </div>
            <br />
            <template v-slot:modal-footer>
                <b-button variant="secondary" @click="modalTabulacion = false">Cerrar</b-button>
            </template>
        </b-modal>
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
            modalTabulacion: false,
            dataFecha: {
                fechaN: "",
            },
            decision1: {
                edad1: "0",
                edad2: "2",

            },
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