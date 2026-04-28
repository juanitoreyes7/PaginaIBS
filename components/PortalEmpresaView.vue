<template>
    <section class="portal-empresa">
        <div class="portal-empresa__inner">
            <div class="container">
                <header class="portal-empresa__intro">
                    <h1 class="portal-empresa__title">Portal empresarial</h1>
                    <p class="portal-empresa__lead">
                        Administración de pólizas para <strong>{{ empresa.nombre || 'tu empresa' }}</strong>.
                    </p>
                </header>

                <!-- Datos de la empresa -->
                <div class="portal-empresa__card">
                    <h2 class="portal-empresa__card-title">Datos de la empresa</h2>
                    <div class="portal-empresa__company-grid">
                        <div class="portal-empresa__field">
                            <span class="portal-empresa__label">Nombre de la empresa</span>
                            <p class="portal-empresa__value">{{ empresa.nombre || '—' }}</p>
                        </div>
                        <div class="portal-empresa__field">
                            <span class="portal-empresa__label">RFC</span>
                            <p class="portal-empresa__value">{{ empresa.rfc || '—' }}</p>
                        </div>
                        <div class="portal-empresa__field">
                            <span class="portal-empresa__label">Correo de contacto</span>
                            <p class="portal-empresa__value">{{ emailContactoMostrado }}</p>
                        </div>
                        <div class="portal-empresa__field">
                            <span class="portal-empresa__label">Teléfono</span>
                            <p class="portal-empresa__value">{{ telefonoContactoMostrado }}</p>
                        </div>
                    </div>
                    <div v-if="imgEmpresaLogoUrl" class="portal-empresa__company-logo">
                        <img :src="imgEmpresaLogoUrl" alt="Logotipo empresa" class="portal-empresa__company-logo-img">
                    </div>
                </div>

                <p v-if="imgEmpresaRegistro" class="portal-empresa__img-empresa-notice">
                    <i class="fas fa-info-circle"></i>
                    <template v-if="textoRamosImgEmpresa">
                        Ramos mostrados según <strong>ImgEmpresa</strong>: {{ textoRamosImgEmpresa }}.
                    </template>
                    <template v-else>
                        Datos de pólizas tomados del documento <strong>ImgEmpresa</strong>
                        (mapas <code>polizaGM</code>, <code>polizaVida</code>, <code>polizaFuneraria</code>,
                        <code>polizaAccidentes</code>, etc., cuando tienen información).
                    </template>
                </p>
                <p v-else-if="sinRegistroImgEmpresa && perfilImgEmpresaResuelto" class="portal-empresa__img-empresa-notice portal-empresa__img-empresa-notice--muted">
                    <i class="fas fa-info-circle"></i>
                    No hay documento en <strong>ImgEmpresa</strong> con
                    <code>nombreEmpresa</code> igual a «{{ empresa.nombre }}»; se muestran todas las pólizas asociadas al RFC.
                </p>

                <!-- Pólizas por ramo -->
                <div class="portal-empresa__card">
                    <h2 class="portal-empresa__card-title">Pólizas registradas</h2>

                    <div v-if="cargandoPolizas" class="portal-empresa__loading">
                        <i class="fas fa-spinner fa-spin"></i>
                        <span>Cargando pólizas…</span>
                    </div>

                    <div v-else-if="errorPolizas" class="portal-empresa__error">
                        {{ errorPolizas }}
                        <button type="button" class="portal-empresa__btn-retry" @click="cargarPolizas">
                            Reintentar
                        </button>
                    </div>

                    <template v-else>
                        <div v-if="tabsDisponibles.length" class="portal-empresa__tabs">
                            <button
                                v-for="tab in tabsDisponibles"
                                :key="tab.key"
                                type="button"
                                class="portal-empresa__tab"
                                :class="{ 'portal-empresa__tab--active': ramoActivo === tab.key }"
                                @click="seleccionarRamo(tab.key)"
                            >
                                {{ tab.label }}
                            </button>
                        </div>

                        <div v-if="polizaActiva" class="portal-empresa__poliza-detail">
                            <div v-if="listaPolizaActiva.length > 1" class="portal-empresa__poliza-picker">
                                <label class="portal-empresa__label">Seleccionar póliza</label>
                                <select
                                    v-model.number="indicePoliza"
                                    class="portal-empresa__select"
                                >
                                    <option
                                        v-for="(pol, idx) in listaPolizaActiva"
                                        :key="idx"
                                        :value="idx"
                                    >
                                        {{ etiquetaOpcionPoliza(pol) }}
                                    </option>
                                </select>
                            </div>
                            <div class="portal-empresa__poliza-grid">
                                <div class="portal-empresa__field">
                                    <span class="portal-empresa__label">{{ etiquetaNumeroPoliza }}</span>
                                    <p class="portal-empresa__value">{{ valorNumeroPoliza }}</p>
                                </div>
                                <div class="portal-empresa__field">
                                    <span class="portal-empresa__label">Compañía</span>
                                    <p class="portal-empresa__value">{{ companiaActual }}</p>
                                </div>
                                <div class="portal-empresa__field">
                                    <span class="portal-empresa__label">Vigencia desde (vDesde)</span>
                                    <p class="portal-empresa__value">{{ vigenciaDesdePoliza }}</p>
                                </div>
                                <div class="portal-empresa__field">
                                    <span class="portal-empresa__label">Vigencia hasta (vHasta)</span>
                                    <p class="portal-empresa__value">{{ vigenciaHastaPoliza }}</p>
                                </div>
                            </div>
                            <div v-if="pdfUrlActual" class="portal-empresa__pdf-row">
                                <a
                                    :href="pdfUrlActual"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="portal-empresa__btn-pdf"
                                >
                                    <i class="fas fa-file-pdf"></i>
                                    Descargar PDF
                                </a>
                            </div>
                        </div>

                        <p v-else-if="tabsDisponibles.length" class="portal-empresa__hint">
                            No hay pólizas en el ramo seleccionado.
                        </p>

                        <p v-else class="portal-empresa__hint">
                            Aún no hay pólizas asociadas a este RFC. Si necesitas ayuda, contacta a tu ejecutivo.
                        </p>

                        <div class="portal-empresa__link-wrap">
                            <nuxt-link to="/portafolio-polizas" class="portal-empresa__link-portfolio">
                                Ver portafolio completo de pólizas
                                <i class="fas fa-arrow-right"></i>
                            </nuxt-link>
                        </div>
                    </template>
                </div>

                <!-- Asegurados / Endosos -->
                <div class="portal-empresa__card">
                    <div class="portal-empresa__seg-toggle">
                        <button
                            type="button"
                            class="portal-empresa__seg-btn"
                            :class="{ 'portal-empresa__seg-btn--on': vistaInferior === 'asegurados' }"
                            @click="vistaInferior = 'asegurados'"
                        >
                            Asegurados
                        </button>
                        <button
                            type="button"
                            class="portal-empresa__seg-btn"
                            :class="{ 'portal-empresa__seg-btn--on': vistaInferior === 'endosos' }"
                            @click="vistaInferior = 'endosos'"
                        >
                            Endosos
                        </button>
                    </div>

                    <template v-if="vistaInferior === 'asegurados'">
                        <div class="portal-empresa__aseg-intro">
                            <p class="portal-empresa__aseg-intro-title">
                                Asegurados en pólizas vinculadas a <strong>{{ empresa.nombre || 'tu empresa' }}</strong>
                            </p>
                            <p class="portal-empresa__aseg-intro-meta">
                                Listado consolidado por <code>nombreEmpresa</code> e <code>ImgEmpresa</code> en Firestore (todas las pólizas encontradas para la empresa).
                                <span class="portal-empresa__aseg-intro-count">{{ aseguradosPorNombreEmpresaLista.length }} persona(s)</span>
                            </p>
                        </div>

                        <div class="portal-empresa__search">
                            <i class="fas fa-search"></i>
                            <input
                                v-model="busquedaAsegurado"
                                type="search"
                                class="portal-empresa__search-input"
                                placeholder="Buscar por nombre o RFC…"
                                autocomplete="off"
                            >
                        </div>

                        <div v-if="!aseguradosFiltrados.length" class="portal-empresa__empty-table">
                            No hay asegurados que coincidan con la búsqueda o no hay pólizas con
                            <strong>nombreEmpresa</strong> alineado a tu cuenta. Verifica en Firestore el campo
                            <strong>dataAsegurados</strong> (objeto, arreglo o mapa por RFC) en <code>PolizaGM</code> y colecciones relacionadas.
                        </div>

                        <div v-else class="portal-empresa__table-wrap portal-empresa__table-wrap--aseg">
                            <table class="portal-empresa__table portal-empresa__table--aseg">
                                <thead>
                                    <tr>
                                        <th>Asegurado</th>
                                        <th>RFC</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(row, idx) in aseguradosPagina"
                                        :key="claveFilaAsegurado(row, idx)"
                                    >
                                        <td>{{ row.nombre }}</td>
                                        <td>{{ row.rfc }}</td>
                                        <td>
                                            <button
                                                type="button"
                                                class="portal-empresa__btn-ver"
                                                @click="abrirModalAsegurado(row)"
                                            >
                                                <i class="fas fa-eye"></i>
                                                Ver detalle
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div v-if="totalPaginas > 1" class="portal-empresa__pager">
                            <button
                                type="button"
                                :disabled="paginaActual <= 1"
                                class="portal-empresa__page-btn"
                                @click="paginaActual--"
                            >
                                ‹
                            </button>
                            <span class="portal-empresa__page-info">{{ paginaActual }} / {{ totalPaginas }}</span>
                            <button
                                type="button"
                                :disabled="paginaActual >= totalPaginas"
                                class="portal-empresa__page-btn"
                                @click="paginaActual++"
                            >
                                ›
                            </button>
                        </div>
                    </template>

                    <div v-else class="portal-empresa__endosos-wrap">
                        <h3 class="portal-empresa__card-title portal-empresa__card-title--flush">Solicitud de endosos</h3>
                        <p class="portal-empresa__hint">
                            Captura altas, bajas o correcciones. Al enviar se notifica a emisión y recibes confirmación por correo con folio.
                            El Excel de seguimiento incluye todos los movimientos; si aplica ATLAS GMM, se agrega una hoja con formato de personas.
                        </p>

                        <div v-if="misEndososAgrupados.length" class="portal-empresa__pendientes">
                            <h4 class="portal-empresa__pendientes-title">Endosos pendientes registrados</h4>
                            <div class="portal-empresa__pendientes-list">
                                <div
                                    v-for="grupo in misEndososAgrupados"
                                    :key="grupo.loteId"
                                    class="portal-empresa__pendiente-card"
                                >
                                    <div class="portal-empresa__pendiente-card-head">
                                        <span class="portal-empresa__pendiente-folio">{{ grupo.loteId }}</span>
                                        <div class="portal-empresa__pendiente-actions">
                                            <span class="portal-empresa__pendiente-badge">{{ grupo.registros.length }} mov.</span>
                                            <button
                                                type="button"
                                                class="portal-empresa__btn-ver portal-empresa__btn-ver--sm"
                                                @click="toggleDetalleEndoso(grupo.loteId)"
                                            >
                                                <i class="fas fa-eye"></i>
                                                {{ loteDetalleAbierto === grupo.loteId ? 'Ocultar detalle' : 'Ver detalle' }}
                                            </button>
                                        </div>
                                    </div>
                                    <p class="portal-empresa__pendiente-meta">{{ grupo.fechaTexto }} · Estado: pendiente</p>
                                    <div v-if="loteDetalleAbierto === grupo.loteId" class="portal-empresa__pendiente-detalle">
                                        <div class="portal-empresa__table-wrap">
                                            <table class="portal-empresa__table portal-empresa__table--small">
                                                <thead>
                                                    <tr>
                                                        <th>Movimiento</th>
                                                        <th>Ramo</th>
                                                        <th>Póliza</th>
                                                        <th>Certificado</th>
                                                        <th>Nombre</th>
                                                        <th>Parentesco</th>
                                                        <th>F. Nac.</th>
                                                        <th>F. Alta</th>
                                                        <th>F. Antig.</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(reg, rIdx) in grupo.registros" :key="grupo.loteId + '-' + rIdx">
                                                        <td>{{ reg.tipoMovimiento || '—' }}</td>
                                                        <td>{{ reg.ramoEndoso || reg.tipo || '—' }}</td>
                                                        <td>{{ reg.poliza || '—' }}</td>
                                                        <td>{{ reg.certificado || '—' }}</td>
                                                        <td>{{ reg.nombreCompleto || '—' }}</td>
                                                        <td>{{ reg.parentescoLabel || parentescoLabel(reg.parentesco) }}</td>
                                                        <td>{{ reg.fechaNacimiento || '—' }}</td>
                                                        <td>{{ reg.fechaAlta || '—' }}</td>
                                                        <td>{{ reg.fechaAntiguedad || '—' }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="portal-empresa__empty-table" style="margin-bottom: 16px;">
                            No hay endosos pendientes registrados para esta empresa.
                        </div>

                        <div v-if="!polizasEndosoActivas.length" class="portal-empresa__empty-table">
                            No hay pólizas (GMM, vida, funerario o accidentes) disponibles para capturar endosos.
                        </div>

                        <form v-else @submit.prevent="guardarRegistroEndoso" class="portal-empresa__company-grid">
                            <div class="portal-empresa__field">
                                <span class="portal-empresa__label">Tipo de movimiento</span>
                                <select v-model="endosoForm.tipoMovimiento" class="portal-empresa__select">
                                    <option value="Alta">Alta</option>
                                    <option value="Baja">Baja</option>
                                    <option value="Correccion de datos">Corrección de datos</option>
                                </select>
                            </div>

                            <div class="portal-empresa__field">
                                <span class="portal-empresa__label">Póliza</span>
                                <select v-model="endosoForm.polizaKey" class="portal-empresa__select">
                                    <option disabled value="">Selecciona una póliza</option>
                                    <option v-for="p in polizasEndosoActivas" :key="p.key" :value="p.key">
                                        {{ p.label }}
                                    </option>
                                </select>
                            </div>

                            <div class="portal-empresa__field">
                                <span class="portal-empresa__label">Certificado</span>
                                <input v-model.trim="endosoForm.certificado" type="text" class="portal-empresa__search-input portal-empresa__endosos-input">
                            </div>

                            <div class="portal-empresa__field">
                                <span class="portal-empresa__label">Parentesco</span>
                                <select v-model.number="endosoForm.parentesco" class="portal-empresa__select">
                                    <option :value="1">Titular (1)</option>
                                    <option :value="2">Conyugue (2)</option>
                                    <option :value="3">Hijo(a) (3)</option>
                                </select>
                            </div>

                            <div class="portal-empresa__field">
                                <span class="portal-empresa__label">Nombres</span>
                                <input v-model.trim="endosoForm.nombres" type="text" class="portal-empresa__search-input portal-empresa__endosos-input">
                            </div>

                            <div class="portal-empresa__field">
                                <span class="portal-empresa__label">Apellido paterno</span>
                                <input v-model.trim="endosoForm.apellidoPaterno" type="text" class="portal-empresa__search-input portal-empresa__endosos-input">
                            </div>

                            <div class="portal-empresa__field">
                                <span class="portal-empresa__label">Apellido materno</span>
                                <input v-model.trim="endosoForm.apellidoMaterno" type="text" class="portal-empresa__search-input portal-empresa__endosos-input">
                            </div>

                            <div class="portal-empresa__field">
                                <span class="portal-empresa__label">Sexo</span>
                                <select v-model="endosoForm.sexo" class="portal-empresa__select">
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                </select>
                            </div>

                            <div class="portal-empresa__field">
                                <span class="portal-empresa__label">Fecha nacimiento</span>
                                <input v-model="endosoForm.fechaNacimiento" type="date" class="portal-empresa__search-input portal-empresa__endosos-input">
                            </div>

                            <div class="portal-empresa__field">
                                <span class="portal-empresa__label">Fecha alta</span>
                                <input v-model="endosoForm.fechaAlta" type="date" class="portal-empresa__search-input portal-empresa__endosos-input">
                            </div>

                            <div class="portal-empresa__field">
                                <span class="portal-empresa__label">Fecha antiguedad</span>
                                <input v-model="endosoForm.fechaAntiguedad" type="date" class="portal-empresa__search-input portal-empresa__endosos-input">
                            </div>

                            <div class="portal-empresa__field">
                                <button type="submit" class="portal-empresa__btn-ver">
                                    <i class="fas fa-plus"></i>
                                    Guardar registro
                                </button>
                            </div>
                        </form>

                        <div v-if="endososPendientes.length" class="portal-empresa__table-wrap" style="margin-top: 14px;">
                            <table class="portal-empresa__table">
                                <thead>
                                    <tr>
                                        <th>Movimiento</th>
                                        <th>Póliza</th>
                                        <th>Compañía</th>
                                        <th>Certificado</th>
                                        <th>Nombre</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(r, idx) in endososPendientes" :key="r.localId">
                                        <td>{{ r.tipoMovimiento }}</td>
                                        <td>{{ r.poliza }}</td>
                                        <td>{{ r.compania }}</td>
                                        <td>{{ r.certificado || '—' }}</td>
                                        <td>{{ r.nombreCompleto }}</td>
                                        <td>
                                            <button type="button" class="portal-empresa__btn-retry" @click="eliminarRegistroEndoso(idx)">
                                                Quitar
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div v-if="endososPendientes.length" class="portal-empresa__endosos-actions portal-empresa__endosos-actions--send">
                            <button type="button" class="portal-empresa__btn-pdf" :disabled="enviandoEndosos" @click="enviarEndosos">
                                <i v-if="enviandoEndosos" class="fas fa-spinner fa-spin"></i>
                                <i v-else class="fas fa-paper-plane"></i>
                                Enviar endoso
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal detalle asegurado (por RAMO) -->
        <transition name="portal-empresa-modal-fade">
            <div
                v-if="modalDetalle"
                class="portal-empresa-modal"
                role="dialog"
                aria-modal="true"
                @click.self="cerrarModalDetalle"
            >
                <div class="portal-empresa-modal__box">
                    <header class="portal-empresa-modal__head">
                        <div>
                            <h2 class="portal-empresa-modal__title">{{ modalNombre || 'Asegurado' }}</h2>
                            <p class="portal-empresa-modal__rfc">RFC: {{ modalRfc }}</p>
                        </div>
                        <button
                            type="button"
                            class="portal-empresa-modal__close"
                            aria-label="Cerrar"
                            @click="cerrarModalDetalle"
                        >
                            ×
                        </button>
                    </header>

                    <div class="portal-empresa-modal__body">
                        <p class="portal-empresa-modal__ramo-label">RAMO</p>
                        <div class="portal-empresa-modal__tabs">
                            <button
                                v-for="tab in modalTabsRamo"
                                :key="tab.key"
                                type="button"
                                class="portal-empresa-modal__tab"
                                :class="{ 'portal-empresa-modal__tab--on': ramoModalActivo === tab.key }"
                                @click="ramoModalActivo = tab.key"
                            >
                                {{ tab.label }}
                            </button>
                        </div>

                        <div v-if="polizaModalActiva" class="portal-empresa-modal__card">
                            <div class="portal-empresa-modal__fields">
                                <div class="portal-empresa-modal__field">
                                    <span class="portal-empresa-modal__flabel">Núm. póliza</span>
                                    <span class="portal-empresa-modal__fval">{{ numPolizaModal }}</span>
                                </div>
                                <div class="portal-empresa-modal__field">
                                    <span class="portal-empresa-modal__flabel">Compañía</span>
                                    <span class="portal-empresa-modal__fval">{{ companiaModal }}</span>
                                </div>
                                <div class="portal-empresa-modal__field">
                                    <span class="portal-empresa-modal__flabel">Vigencia desde</span>
                                    <span class="portal-empresa-modal__fval">{{ vigenciaDesdeModal }}</span>
                                </div>
                                <div class="portal-empresa-modal__field">
                                    <span class="portal-empresa-modal__flabel">Vigencia hasta</span>
                                    <span class="portal-empresa-modal__fval">{{ vigenciaHastaModal }}</span>
                                </div>
                            </div>
                            <div class="portal-empresa-modal__actions">
                                <a
                                    v-if="pdfUrlModal"
                                    :href="pdfUrlModal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="portal-empresa-modal__btn-dl"
                                >
                                    <i class="fas fa-download"></i>
                                    Descargar póliza
                                </a>
                            </div>
                        </div>
                        <p v-else class="portal-empresa-modal__empty">
                            No hay datos de póliza en este ramo para este RFC.
                        </p>

                        <div v-if="modalDetalleCampos.length" class="portal-empresa-modal__detalle-block">
                            <p class="portal-empresa-modal__ramo-label">Datos del integrante / registro</p>
                            <div class="portal-empresa-modal__detalle-dl">
                                <div
                                    v-for="(item, di) in modalDetalleCampos"
                                    :key="'det-' + di"
                                    class="portal-empresa-modal__detalle-row"
                                >
                                    <span class="portal-empresa-modal__detalle-dt">{{ item.label }}</span>
                                    <span class="portal-empresa-modal__detalle-dd">{{ item.valor }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
import { cargarPolizasPorRfc } from '~/lib/cargarPolizasPorRfc';
import { aplicarReglasImgEmpresa, fetchImgEmpresaPorNombre, normalizarTextoEmpresa } from '~/lib/imgEmpresa';
import { mergeDocumentosEmpresaEnPolizas } from '~/lib/mergePolizasEmpresa';
import {
    fetchTodosDocumentosEmpresa,
    extraerFilasAseguradosDesdeDocumentos,
    fusionarFilasAsegurados,
    extraerAseguradosDePolizaData,
    dedupeAseguradosPorPersona,
    pickRfcDesdeItem,
    normalizarListaAsegurados
} from '~/lib/aseguradosPorEmpresa';
import { fetchCatalogoCompaniasMap } from '~/lib/imgCompaniaCatalog';
import Swal from 'sweetalert2';

const PAGE_SIZE = 10;

export default {
    name: 'PortalEmpresaView',
    props: {
        empresa: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            polizas: {
                auto: [],
                gastosMedicos: [],
                vida: [],
                funerarias: [],
                accidentes: [],
                hogar: []
            },
            cargandoPolizas: true,
            errorPolizas: null,
            ramoActivo: 'gmm',
            indicePoliza: 0,
            vistaInferior: 'asegurados',
            busquedaAsegurado: '',
            paginaActual: 1,
            imgEmpresaRegistro: null,
            ramosImgEmpresa: null,
            sinRegistroImgEmpresa: false,
            perfilImgEmpresaResuelto: false,
            documentosPorEmpresa: [],
            /** Map id ImgCompania → nombreCompania */
            catalogoCompanias: null,
            modalDetalle: false,
            modalNombre: '',
            modalRfc: '',
            ramoModalActivo: 'gmm',
            endosoForm: {
                tipoMovimiento: 'Alta',
                polizaKey: '',
                certificado: '',
                parentesco: 1,
                nombres: '',
                apellidoPaterno: '',
                apellidoMaterno: '',
                sexo: 'Masculino',
                fechaNacimiento: '',
                fechaAlta: '',
                fechaAntiguedad: ''
            },
            endososPendientes: [],
            enviandoEndosos: false,
            /** Fila de asegurado abierta en el modal (incluye detalleIntegrante). */
            modalRow: null,
            misEndososFirestore: [],
            loteDetalleAbierto: ''
        };
    },
    computed: {
        apiBaseUrl() {
            const c = this.$config && this.$config.apiBaseUrl;
            const s = c ? String(c).replace(/\/$/, '') : '';
            return s || 'https://api-sicas-616002718679.us-central1.run.app/api';
        },
        imgEmpresaLogoUrl() {
            const d = this.imgEmpresaRegistro;
            if (!d) return '';
            return (
                d.urlImagen ||
                d.imagen ||
                d.url ||
                d.img ||
                d.logo ||
                d.logoUrl ||
                ''
            );
        },
        textoRamosImgEmpresa() {
            const labels = {
                gmm: 'GMM',
                vida: 'Vida',
                funeraria: 'Funeraria',
                accidentes: 'Accidentes',
                auto: 'Auto',
                hogar: 'Hogar'
            };
            if (!this.ramosImgEmpresa || !this.ramosImgEmpresa.size) return '';
            return [...this.ramosImgEmpresa].map((k) => labels[k] || k).join(', ');
        },
        emailContactoMostrado() {
            const d = this.imgEmpresaRegistro;
            if (d && d.emailContacto) return d.emailContacto;
            return this.empresa.email || '—';
        },
        telefonoContactoMostrado() {
            const d = this.imgEmpresaRegistro;
            if (d && d.numTelefono) return d.numTelefono;
            return this.empresa.telefono || '—';
        },
        tabsDisponibles() {
            const t = [];
            const p = this.polizas;
            if (p.gastosMedicos.length) t.push({ key: 'gmm', label: 'Gastos médicos' });
            if (p.vida.length) t.push({ key: 'vida', label: 'Vida' });
            if (p.funerarias.length) t.push({ key: 'funeraria', label: 'Funeraria' });
            if (p.accidentes.length) t.push({ key: 'accidentes', label: 'Accidentes' });
            if (p.auto.length) t.push({ key: 'auto', label: 'Auto' });
            if (p.hogar && p.hogar.length) t.push({ key: 'hogar', label: 'Hogar' });
            return t;
        },
        listaPolizaActiva() {
            const p = this.polizas;
            switch (this.ramoActivo) {
                case 'gmm': return p.gastosMedicos;
                case 'vida': return p.vida;
                case 'funeraria': return p.funerarias;
                case 'accidentes': return p.accidentes;
                case 'auto': return p.auto;
                case 'hogar': return p.hogar || [];
                default: return [];
            }
        },
        polizaActiva() {
            const list = this.listaPolizaActiva;
            if (!list.length) return null;
            const i = Math.min(this.indicePoliza, list.length - 1);
            return list[i];
        },
        etiquetaNumeroPoliza() {
            switch (this.ramoActivo) {
                case 'gmm': return 'Número de póliza';
                case 'vida': return 'Número de póliza';
                case 'funeraria': return 'Número de póliza';
                case 'accidentes': return 'Número de póliza';
                case 'auto': return 'Póliza';
                case 'hogar': return 'Número de póliza';
                default: return 'Número de póliza';
            }
        },
        valorNumeroPoliza() {
            const pol = this.polizaActiva;
            if (!pol) return '—';
            if (this.ramoActivo === 'gmm') {
                return pol.numPolizaGM || pol.documento || '—';
            }
            if (this.ramoActivo === 'vida') {
                return pol.numPolizaVida || pol.documento || '—';
            }
            if (this.ramoActivo === 'funeraria') {
                return pol.numPolizaFuneraria || pol.documento || '—';
            }
            if (this.ramoActivo === 'accidentes') {
                return pol.numPolizaAccidente || pol.documento || '—';
            }
            if (this.ramoActivo === 'auto') {
                return pol.numPoliza || pol.documento || '—';
            }
            if (this.ramoActivo === 'hogar') {
                return pol.numPolizaHogar || pol.documento || '—';
            }
            return '—';
        },
        companiaActual() {
            return this.nombreCompaniaDesdePoliza(this.polizaActiva);
        },
        vigenciaActual() {
            const pol = this.polizaActiva;
            if (!pol) return '—';
            const desde = pol.vDesde != null ? this.formatDate(pol.vDesde) : this.formatDate(pol.polizaDesde) || '—';
            const hasta = pol.vHasta != null ? this.formatDate(pol.vHasta) : this.formatDate(pol.polizaHasta) || '—';
            return `${desde} — ${hasta}`;
        },
        vigenciaDesdePoliza() {
            const pol = this.polizaActiva;
            if (!pol) return '—';
            return pol.vDesde != null ? this.formatDate(pol.vDesde) : this.formatDate(pol.polizaDesde) || '—';
        },
        vigenciaHastaPoliza() {
            const pol = this.polizaActiva;
            if (!pol) return '—';
            return pol.vHasta != null ? this.formatDate(pol.vHasta) : this.formatDate(pol.polizaHasta) || '—';
        },
        pdfUrlActual() {
            const pol = this.polizaActiva;
            if (!pol) return '';
            if (pol.file_url) return pol.file_url;
            if (pol.idDocto) {
                return `${this.apiBaseUrl}/api/polizas/pdf/${pol.idDocto}`;
            }
            return '';
        },
        /**
         * Todas las filas de asegurados en pólizas vinculadas a nombreEmpresa (campo en documento o ImgEmpresa),
         * más documentos devueltos por la consulta por empresa en Firestore.
         */
        aseguradosPorNombreEmpresaLista() {
            const ordenarPorNombre = (arr) =>
                [...arr].sort((a, b) =>
                    String(a.nombre || '').localeCompare(String(b.nombre || ''), 'es', {
                        sensitivity: 'base'
                    })
                );
            const nombreEmpresaNorm = normalizarTextoEmpresa(this.empresa.nombre || '');
            if (!nombreEmpresaNorm) {
                return ordenarPorNombre(this.filasSinRfcEmpresaMoral(this.aseguradosLista));
            }
            const polizaCoincideNombreEmpresa = (pol) => {
                if (!pol) return false;
                if (
                    pol._origen === 'empresaNombre'
                    || pol._origen === 'nombreEmpresa'
                    || pol._origen === 'empresaQuery'
                ) {
                    return true;
                }
                const candidatos = [
                    pol.nombreEmpresa,
                    pol.NombreEmpresa,
                    pol.ImgEmpresa && pol.ImgEmpresa.nombreEmpresa,
                    pol.imgEmpresa && pol.imgEmpresa.nombreEmpresa
                ];
                return candidatos.some(
                    (c) => c && normalizarTextoEmpresa(String(c)) === nombreEmpresaNorm
                );
            };

            const filas = [];
            const extraerSiCoincide = (pol, tipo) => {
                if (!polizaCoincideNombreEmpresa(pol)) return;
                const extra = extraerAseguradosDePolizaData(pol, tipo, pol);
                extra.forEach((r) => {
                    filas.push({
                        ...r,
                        origen: r.origen || 'nombreEmpresa'
                    });
                });
            };

            for (const p of this.polizas.gastosMedicos || []) extraerSiCoincide(p, 'GMM');
            for (const p of this.polizas.vida || []) extraerSiCoincide(p, 'Vida');
            for (const p of this.polizas.funerarias || []) extraerSiCoincide(p, 'Funeraria');
            for (const p of this.polizas.accidentes || []) extraerSiCoincide(p, 'Accidentes');
            for (const p of this.polizas.auto || []) extraerSiCoincide(p, 'Auto');
            for (const p of this.polizas.hogar || []) extraerSiCoincide(p, 'Hogar');

            filas.push(...extraerFilasAseguradosDesdeDocumentos(this.documentosPorEmpresa));

            const deduped = dedupeAseguradosPorPersona(filas);
            const out = this.filasSinRfcEmpresaMoral(deduped);
            if (out.length > 0) {
                return ordenarPorNombre(out);
            }
            return ordenarPorNombre(this.filasSinRfcEmpresaMoral(this.aseguradosLista));
        },
        aseguradosDesdePolizasRFC() {
            const rows = [];
            const pushExtraidas = (pol, tipo) => {
                const extra = extraerAseguradosDePolizaData(pol, tipo, pol);
                extra.forEach((r) => {
                    rows.push({ ...r, origen: 'rfc' });
                });
            };

            for (const p of this.polizas.gastosMedicos) {
                pushExtraidas(p, 'GMM');
            }
            for (const p of this.polizas.vida) {
                pushExtraidas(p, 'Vida');
            }
            for (const p of this.polizas.funerarias) {
                pushExtraidas(p, 'Funeraria');
            }
            for (const p of this.polizas.accidentes) {
                pushExtraidas(p, 'Accidentes');
            }
            for (const p of this.polizas.auto) {
                pushExtraidas(p, 'Auto');
            }
            for (const p of this.polizas.hogar || []) {
                pushExtraidas(p, 'Hogar');
            }

            return rows;
        },
        aseguradosLista() {
            const desdePolizasRfc = this.aseguradosDesdePolizasRFC;
            const desdeDocs = extraerFilasAseguradosDesdeDocumentos(this.documentosPorEmpresa);
            const merged = fusionarFilasAsegurados(desdePolizasRfc, desdeDocs);
            const deduped = dedupeAseguradosPorPersona(merged);
            const rfcEmp = String(this.empresa.rfc || '')
                .replace(/-/g, '')
                .toUpperCase();
            if (rfcEmp.length === 12) {
                return deduped.filter(
                    (r) => String(r.rfc).replace(/-/g, '').toUpperCase() !== rfcEmp
                );
            }
            return deduped;
        },
        indicePolizasPorRfc() {
            const idx = {};

            const add = (rfc, ramo, pol) => {
                if (rfc == null || String(rfc).trim() === '' || String(rfc) === '—') return;
                const key = String(rfc).replace(/\s/g, '').toUpperCase();
                if (!idx[key]) {
                    idx[key] = {
                        gmm: [],
                        vida: [],
                        funeraria: [],
                        accidentes: [],
                        auto: [],
                        hogar: []
                    };
                }
                idx[key][ramo].push(pol);
            };

            for (const p of this.polizas.gastosMedicos) {
                if (p.rfc) add(p.rfc, 'gmm', p);
                const listaGm = normalizarListaAsegurados(p.dataAsegurados);
                for (const a of listaGm) {
                    const r = pickRfcDesdeItem(a);
                    if (r) add(r, 'gmm', p);
                }
            }
            for (const p of this.polizas.vida) {
                if (p.rfc) add(p.rfc, 'vida', p);
            }
            for (const p of this.polizas.funerarias) {
                if (p.rfc) add(p.rfc, 'funeraria', p);
            }
            for (const p of this.polizas.accidentes) {
                if (p.rfc) add(p.rfc, 'accidentes', p);
            }
            for (const p of this.polizas.auto) {
                if (p.rfc) add(p.rfc, 'auto', p);
            }
            for (const p of this.polizas.hogar || []) {
                if (p.rfc) add(p.rfc, 'hogar', p);
            }

            for (const item of this.documentosPorEmpresa) {
                const d = item.data;
                const ramo = item.ramo;
                const pol = {
                    ...d,
                    _firestoreId: item.id,
                    _collection: item.collection,
                    _origen: 'nombreEmpresa'
                };
                const filasDoc = extraerAseguradosDePolizaData(d, item.tipo, pol);
                for (const f of filasDoc) {
                    if (f.rfc && f.rfc !== '—') add(f.rfc, ramo, pol);
                }
            }

            return idx;
        },
        /** Pestañas RAMO según pólizas encontradas para el RFC del asegurado (incl. PolizaVida, etc.). */
        modalTabsRamo() {
            const k = String(this.modalRfc).replace(/\s/g, '').toUpperCase();
            const bucket = this.indicePolizasPorRfc[k];
            if (!bucket) return [];

            const labels = {
                gmm: 'GMM',
                auto: 'Autos',
                vida: 'Vida',
                funeraria: 'Funeraria',
                accidentes: 'Accidentes',
                hogar: 'Hogar'
            };
            const orden = ['gmm', 'auto', 'vida', 'funeraria', 'accidentes', 'hogar'];
            return orden
                .filter((key) => bucket[key] && bucket[key].length)
                .map((key) => ({ key, label: labels[key] || key }));
        },
        polizaModalActiva() {
            const k = String(this.modalRfc).replace(/\s/g, '').toUpperCase();
            const bucket = this.indicePolizasPorRfc[k];
            if (!bucket || !this.ramoModalActivo) return null;
            const list = bucket[this.ramoModalActivo];
            return list && list.length ? list[0] : null;
        },
        numPolizaModal() {
            return this.numPolizaPorRamo(this.polizaModalActiva, this.ramoModalActivo);
        },
        companiaModal() {
            return this.nombreCompaniaDesdePoliza(this.polizaModalActiva);
        },
        vigenciaDesdeModal() {
            const pol = this.polizaModalActiva;
            if (!pol) return '—';
            return pol.vDesde != null ? this.formatDate(pol.vDesde) : this.formatDate(pol.polizaDesde) || '—';
        },
        vigenciaHastaModal() {
            const pol = this.polizaModalActiva;
            if (!pol) return '—';
            return pol.vHasta != null ? this.formatDate(pol.vHasta) : this.formatDate(pol.polizaHasta) || '—';
        },
        pdfUrlModal() {
            const pol = this.polizaModalActiva;
            if (!pol) return '';
            if (pol.file_url) return pol.file_url;
            if (pol.idDocto) {
                return `${this.apiBaseUrl}/api/polizas/pdf/${pol.idDocto}`;
            }
            return '';
        },
        aseguradosFiltrados() {
            const q = this.busquedaAsegurado.trim().toLowerCase();
            const base = this.aseguradosPorNombreEmpresaLista;
            if (!q) return base;
            return base.filter((r) => {
                return (
                    String(r.nombre || '').toLowerCase().includes(q) ||
                    String(r.rfc || '').toLowerCase().includes(q)
                );
            });
        },
        /** Longitud estable para vigilar paginación sin reaccionar al mismo array reconstruido. */
        cantidadAseguradosFiltrados() {
            return this.aseguradosFiltrados.length;
        },
        totalPaginas() {
            return Math.max(1, Math.ceil(this.cantidadAseguradosFiltrados / PAGE_SIZE));
        },
        aseguradosPagina() {
            const start = (this.paginaActual - 1) * PAGE_SIZE;
            return this.aseguradosFiltrados.slice(start, start + PAGE_SIZE);
        },
        polizasEndosoActivas() {
            const out = [];
            const pushLista = (arr, ramoKey, etiquetaRamo, getNumero) => {
                (arr || []).forEach((pol, idx) => {
                    const numero = getNumero(pol) || `${etiquetaRamo}-${idx + 1}`;
                    const compania = this.nombreCompaniaDesdePoliza(pol);
                    const key = `${ramoKey}|${numero}|${compania}|${idx}`;
                    out.push({
                        key,
                        ramoKey,
                        numero,
                        compania,
                        label: `[${etiquetaRamo}] ${numero} — ${compania}`,
                        poliza: pol
                    });
                });
            };
            pushLista(this.polizas.gastosMedicos, 'gmm', 'GMM', (p) => p.numPolizaGM || p.documento);
            pushLista(this.polizas.vida, 'vida', 'Vida', (p) => p.numPolizaVida || p.documento);
            pushLista(this.polizas.funerarias, 'funeraria', 'Funeraria', (p) => p.numPolizaFuneraria || p.documento);
            pushLista(this.polizas.accidentes, 'accidentes', 'Accidentes', (p) => p.numPolizaAccidente || p.documento);
            return out;
        },
        misEndososAgrupados() {
            const map = new Map();
            for (const row of this.misEndososFirestore) {
                const loteId = row.loteId || '—';
                if (!map.has(loteId)) {
                    map.set(loteId, {
                        loteId,
                        registros: [],
                        fechaTexto: '—',
                        ts: 0
                    });
                }
                const g = map.get(loteId);
                g.registros.push(row);
                const t = row.fechaRegistroEndoso;
                let sec = 0;
                if (t && typeof t.seconds === 'number') sec = t.seconds;
                else if (t instanceof Date) sec = Math.floor(t.getTime() / 1000);
                if (sec > g.ts) {
                    g.ts = sec;
                    g.fechaTexto = this.formatDate(t) || '—';
                }
            }
            return [...map.values()].sort((a, b) => b.ts - a.ts);
        },
        modalDetalleCampos() {
            const row = this.modalRow;
            if (!row || !row.detalleIntegrante) return [];
            return this.aplanarObjetoParaVista(row.detalleIntegrante);
        }
    },
    watch: {
        tabsDisponibles: {
            immediate: true,
            handler(list) {
                if (!list.length) return;
                const keys = list.map((t) => t.key);
                if (!keys.includes(this.ramoActivo)) {
                    this.ramoActivo = list[0].key;
                }
                this.indicePoliza = 0;
                /* No reiniciar paginaActual: el listado de asegurados es global y no depende del ramo. */
            }
        },
        busquedaAsegurado() {
            this.paginaActual = 1;
        },
        /**
         * Solo ajustar si la página actual queda fuera de rango (búsqueda o recarga de datos).
         * No usar watch profundo sobre el array: se dispara en cada render y reiniciaba la página.
         */
        cantidadAseguradosFiltrados() {
            const tp = this.totalPaginas;
            if (this.paginaActual > tp) {
                this.paginaActual = tp;
            }
        },
        modalDetalle(val) {
            if (process.client) {
                document.body.style.overflow = val ? 'hidden' : '';
            }
            if (!val) {
                this.modalRow = null;
            }
        }
    },
    mounted() {
        this.cargarPolizas();
        this.refrescarMisEndosos();
    },
    beforeDestroy() {
        if (process.client) {
            document.body.style.overflow = '';
        }
    },
    methods: {
        nombreCompaniaDesdePoliza(pol) {
            if (!pol) return '—';
            if (pol.compania && typeof pol.compania === 'object' && pol.compania.nombreCompania) {
                return pol.compania.nombreCompania;
            }
            const c = pol.compania;
            if (c != null && c !== '' && typeof c === 'string') {
                if (this.catalogoCompanias && this.catalogoCompanias.has(c)) {
                    return this.catalogoCompanias.get(c);
                }
                return c;
            }
            return pol.ciaNombre || '—';
        },
        formatDate(val) {
            if (!val) return '';
            if (typeof val.toDate === 'function') {
                const d = val.toDate();
                return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString('es-MX');
            }
            if (val && typeof val.seconds === 'number') {
                const d = new Date(val.seconds * 1000);
                return d.toLocaleDateString('es-MX');
            }
            if (val instanceof Date) return val.toLocaleDateString('es-MX');
            const str = String(val).trim();
            if (/^\d{4}-\d{2}-\d{2}/.test(str)) {
                const d = new Date(str);
                return Number.isNaN(d.getTime()) ? str : d.toLocaleDateString('es-MX');
            }
            return str;
        },
        claveFilaAsegurado(row, idx) {
            const docId = row.poliza && row.poliza._firestoreId ? row.poliza._firestoreId : 'x';
            const rfc = String(row.rfc || 'sin-rfc').replace(/\s/g, '');
            const tipo = row.tipo || '';
            return `aseg-${rfc}-${tipo}-${docId}-${idx}`;
        },
        filasSinRfcEmpresaMoral(rows) {
            const rfcEmp = String(this.empresa.rfc || '')
                .replace(/-/g, '')
                .toUpperCase();
            if (rfcEmp.length !== 12) return rows;
            return rows.filter(
                (r) => String(r.rfc).replace(/-/g, '').toUpperCase() !== rfcEmp
            );
        },
        normalizarShapePolizas(src) {
            const p = src && typeof src === 'object' ? src : {};
            return {
                auto: Array.isArray(p.auto) ? p.auto : [],
                gastosMedicos: Array.isArray(p.gastosMedicos) ? p.gastosMedicos : [],
                vida: Array.isArray(p.vida) ? p.vida : [],
                funerarias: Array.isArray(p.funerarias) ? p.funerarias : [],
                accidentes: Array.isArray(p.accidentes) ? p.accidentes : [],
                hogar: Array.isArray(p.hogar) ? p.hogar : []
            };
        },
        toggleDetalleEndoso(loteId) {
            this.loteDetalleAbierto = this.loteDetalleAbierto === loteId ? '' : loteId;
        },
        seleccionarRamo(key) {
            this.ramoActivo = key;
            this.indicePoliza = 0;
        },
        tipoDesdeRamo(ramo) {
            const m = {
                gmm: 'GMM',
                vida: 'Vida',
                funeraria: 'Funeraria',
                accidentes: 'Accidentes',
                auto: 'Auto',
                hogar: 'Hogar'
            };
            return m[ramo] || 'GMM';
        },
        aplanarObjetoParaVista(obj, prefijo = '') {
            if (obj == null || typeof obj !== 'object') return [];
            const filas = [];
            for (const [k, raw] of Object.entries(obj)) {
                const label = prefijo ? `${prefijo}.${k}` : k;
                if (raw != null && typeof raw === 'object' && !Array.isArray(raw) && !(raw instanceof Date)) {
                    if (typeof raw.toDate === 'function' || typeof raw.seconds === 'number') {
                        filas.push({ label, valor: this.formatDetalleValor(raw) });
                    } else {
                        filas.push(...this.aplanarObjetoParaVista(raw, label));
                    }
                } else {
                    filas.push({ label, valor: this.formatDetalleValor(raw) });
                }
            }
            return filas;
        },
        formatDetalleValor(v) {
            if (v == null || v === '') return '—';
            if (typeof v.toDate === 'function') return this.formatDate(v);
            if (v && typeof v.seconds === 'number') return this.formatDate(v);
            if (v instanceof Date) return this.formatDate(v);
            if (Array.isArray(v)) {
                const s = JSON.stringify(v);
                return s.length > 400 ? `${s.slice(0, 400)}…` : s;
            }
            if (typeof v === 'object') {
                const s = JSON.stringify(v);
                return s.length > 400 ? `${s.slice(0, 400)}…` : s;
            }
            const s = String(v);
            return s.length > 500 ? `${s.slice(0, 500)}…` : s;
        },
        async refrescarMisEndosos() {
            if (!process.client || !this.$db) {
                return;
            }

            const normalizar = (v) => String(v || '').trim().toUpperCase();
            const rfcEmpresa = normalizar(this.empresa && this.empresa.rfc);
            const nombreEmpresaRaw = String((this.empresa && this.empresa.nombre) || '').trim();
            const nombreEmpresa = normalizar(nombreEmpresaRaw);

            if (!rfcEmpresa && !nombreEmpresa) {
                this.misEndososFirestore = [];
                return;
            }

            try {
                const dedupe = new Map();
                const pushRows = (snap) => {
                    snap.docs.forEach((d) => {
                        dedupe.set(d.id, { id: d.id, ...d.data() });
                    });
                };

                if (rfcEmpresa) {
                    const snapRfc = await this.$db
                        .collection('endososgmm')
                        .where('empresaRfc', '==', rfcEmpresa)
                        .limit(150)
                        .get();
                    pushRows(snapRfc);
                }

                if (nombreEmpresaRaw) {
                    const snapNombre = await this.$db
                        .collection('endososgmm')
                        .where('empresaNombre', '==', nombreEmpresaRaw)
                        .limit(150)
                        .get();
                    pushRows(snapNombre);
                }

                const rows = [...dedupe.values()].filter((r) => {
                    const estado = normalizar(r.estado || 'PENDIENTE');
                    if (estado && estado !== 'PENDIENTE') return false;

                    const rfcRow = normalizar(r.empresaRfc);
                    const nombreRow = normalizar(r.empresaNombre);
                    const coincideRfc = rfcEmpresa && rfcRow && rfcRow === rfcEmpresa;
                    const coincideNombre = nombreEmpresa && nombreRow && nombreRow === nombreEmpresa;
                    return Boolean(coincideRfc || coincideNombre);
                });

                this.misEndososFirestore = rows;
            } catch (e) {
                console.warn('refrescarMisEndosos', e);
                this.misEndososFirestore = [];
            }
        },
        async cargarPolizas() {
            if (!this.$db || !this.empresa || !this.empresa.rfc) {
                this.errorPolizas = 'No se pudo obtener el RFC de la empresa.';
                this.cargandoPolizas = false;
                return;
            }
            this.errorPolizas = null;
            this.cargandoPolizas = true;
            try {
                const completas = await cargarPolizasPorRfc({
                    db: this.$db,
                    rfc: this.empresa.rfc
                });

                const { id: imgEmpresaIdPre } = await fetchImgEmpresaPorNombre(
                    this.$db,
                    this.empresa.nombre
                );

                const [docsEmpresa, catalogo] = await Promise.all([
                    fetchTodosDocumentosEmpresa(this.$db, {
                        nombre: this.empresa.nombre,
                        rfc: this.empresa.rfc,
                        imgEmpresaDocId: imgEmpresaIdPre
                    }),
                    fetchCatalogoCompaniasMap(this.$db)
                ]);

                const mergedCompletas = mergeDocumentosEmpresaEnPolizas(completas, docsEmpresa);

                const {
                    polizas,
                    ramosPermitidos,
                    imgEmpresa,
                    imgEmpresaId
                } = await aplicarReglasImgEmpresa(
                    this.$db,
                    this.empresa.nombre,
                    mergedCompletas
                );
                this.polizas = this.normalizarShapePolizas(polizas);
                this.ramosImgEmpresa = ramosPermitidos;
                this.imgEmpresaRegistro = imgEmpresa
                    ? { _docId: imgEmpresaId, ...imgEmpresa }
                    : null;
                this.sinRegistroImgEmpresa = !imgEmpresa;

                this.documentosPorEmpresa = docsEmpresa;
                this.catalogoCompanias = catalogo;
            } catch (e) {
                console.error(e);
                this.errorPolizas = 'No se pudieron cargar las pólizas.';
            } finally {
                this.cargandoPolizas = false;
                this.perfilImgEmpresaResuelto = true;
                this.refrescarMisEndosos();
            }
        },
        tipoARamoKey(tipo) {
            const m = {
                GMM: 'gmm',
                Vida: 'vida',
                Funeraria: 'funeraria',
                Accidentes: 'accidentes',
                Auto: 'auto',
                Hogar: 'hogar'
            };
            return m[tipo] || 'gmm';
        },
        abrirModalAsegurado(row) {
            this.modalRow = row;
            this.modalNombre = row.nombre;
            this.modalRfc = row.rfc;
            this.modalDetalle = true;
            this.$nextTick(() => {
                const tabs = this.modalTabsRamo;
                if (!tabs.length) return;
                const pref = this.tipoARamoKey(row.tipo);
                const ok = tabs.find((t) => t.key === pref);
                this.ramoModalActivo = ok ? pref : tabs[0].key;
            });
        },
        cerrarModalDetalle() {
            this.modalDetalle = false;
        },
        numPolizaPorRamo(pol, ramo) {
            if (!pol) return '—';
            switch (ramo) {
                case 'gmm':
                    return pol.numPolizaGM || pol.documento || '—';
                case 'vida':
                    return pol.numPolizaVida || pol.documento || '—';
                case 'funeraria':
                    return pol.numPolizaFuneraria || pol.documento || '—';
                case 'accidentes':
                    return pol.numPolizaAccidente || pol.documento || '—';
                case 'auto':
                    return pol.numPoliza || pol.documento || '—';
                case 'hogar':
                    return pol.numPolizaHogar || pol.documento || '—';
                default:
                    return '—';
            }
        },
        etiquetaOpcionPoliza(pol) {
            if (!pol) return '—';
            if (this.ramoActivo === 'gmm') {
                return pol.numPolizaGM || pol.documento || 'GMM';
            }
            if (this.ramoActivo === 'vida') {
                return pol.numPolizaVida || pol.documento || 'Vida';
            }
            if (this.ramoActivo === 'funeraria') {
                return pol.numPolizaFuneraria || pol.documento || 'Funeraria';
            }
            if (this.ramoActivo === 'accidentes') {
                return pol.numPolizaAccidente || pol.documento || 'Accidentes';
            }
            if (this.ramoActivo === 'auto') {
                return pol.descripcionAuto || pol.numPoliza || pol.documento || 'Auto';
            }
            if (this.ramoActivo === 'hogar') {
                return pol.numPolizaHogar || pol.documento || 'Hogar';
            }
            return 'Póliza';
        },
        parentescoLabel(v) {
            const n = Number(v);
            if (n === 1) return 'Titular';
            if (n === 2) return 'Conyugue';
            if (n === 3) return 'Hijo(a)';
            return '—';
        },
        mostrarAviso({ icon = 'info', title = '', text = '' } = {}) {
            return Swal.fire({
                icon,
                title,
                text,
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#002fa6'
            });
        },
        confirmarAccion({ title = '', text = '' } = {}) {
            return Swal.fire({
                icon: 'question',
                title,
                text,
                showCancelButton: true,
                confirmButtonText: 'Sí, enviar',
                cancelButtonText: 'Cancelar',
                confirmButtonColor: '#002fa6',
                cancelButtonColor: '#94a3b8'
            });
        },
        guardarRegistroEndoso() {
            if (!this.endosoForm.polizaKey) {
                this.mostrarAviso({
                    icon: 'warning',
                    title: 'Falta póliza',
                    text: 'Selecciona una póliza.'
                });
                return;
            }
            if (!this.endosoForm.nombres || !this.endosoForm.apellidoPaterno || !this.endosoForm.apellidoMaterno) {
                this.mostrarAviso({
                    icon: 'warning',
                    title: 'Datos incompletos',
                    text: 'Completa nombres y apellidos.'
                });
                return;
            }
            const polizaSel = this.polizasEndosoActivas.find((p) => p.key === this.endosoForm.polizaKey);
            if (!polizaSel) {
                this.mostrarAviso({
                    icon: 'error',
                    title: 'Póliza inválida',
                    text: 'Selecciona nuevamente una póliza válida.'
                });
                return;
            }

            const nombreCompleto = [
                this.endosoForm.nombres,
                this.endosoForm.apellidoPaterno,
                this.endosoForm.apellidoMaterno
            ].join(' ').replace(/\s+/g, ' ').trim();

            this.endososPendientes.push({
                localId: `${Date.now()}-${Math.random().toString(16).slice(2, 7)}`,
                tipoMovimiento: this.endosoForm.tipoMovimiento,
                poliza: polizaSel.numero,
                ramoEndoso: polizaSel.ramoKey,
                compania: polizaSel.compania,
                certificado: this.endosoForm.certificado || '',
                parentesco: Number(this.endosoForm.parentesco),
                parentescoLabel: this.parentescoLabel(this.endosoForm.parentesco),
                nombreCompleto,
                sexo: this.endosoForm.sexo,
                fechaNacimiento: this.endosoForm.fechaNacimiento,
                fechaAlta: this.endosoForm.fechaAlta,
                fechaAntiguedad: this.endosoForm.fechaAntiguedad,
                empresaNombre: this.empresa.nombre || '',
                empresaRfc: this.empresa.rfc || ''
            });

            this.endosoForm.certificado = '';
            this.endosoForm.nombres = '';
            this.endosoForm.apellidoPaterno = '';
            this.endosoForm.apellidoMaterno = '';
            this.endosoForm.sexo = 'Masculino';
            this.endosoForm.fechaNacimiento = '';
            this.endosoForm.fechaAlta = '';
            this.endosoForm.fechaAntiguedad = '';
        },
        eliminarRegistroEndoso(idx) {
            this.endososPendientes.splice(idx, 1);
        },
        async enviarEndosos() {
            if (!this.endososPendientes.length) {
                await this.mostrarAviso({
                    icon: 'warning',
                    title: 'Sin registros',
                    text: 'No hay registros para enviar.'
                });
                return;
            }
            const conf = await this.confirmarAccion({
                title: 'Confirmar envío',
                text: '¿Estas seguro de enviar endoso?'
            });
            if (!conf.isConfirmed) return;
            if (!this.$db) {
                await this.mostrarAviso({
                    icon: 'error',
                    title: 'Sin conexión',
                    text: 'No hay conexión a base de datos.'
                });
                return;
            }
            this.enviandoEndosos = true;
            try {
                const loteId = `END-${Date.now()}`;
                const authUser =
                    this.$auth && typeof this.$auth.getCurrentUser === 'function'
                        ? this.$auth.getCurrentUser()
                        : null;
                const capturadorEmail =
                    (authUser && authUser.email) || this.empresa.email || '';
                const payloads = this.endososPendientes.map((row) => ({
                    loteId,
                    tipoMovimiento: row.tipoMovimiento,
                    poliza: row.poliza,
                    ramoEndoso: row.ramoEndoso || '',
                    compania: row.compania,
                    certificado: row.certificado,
                    parentesco: row.parentesco,
                    parentescoLabel: row.parentescoLabel,
                    nombreCompleto: row.nombreCompleto,
                    sexo: row.sexo,
                    fechaNacimiento: row.fechaNacimiento,
                    fechaAlta: row.fechaAlta,
                    fechaAntiguedad: row.fechaAntiguedad,
                    empresaNombre: row.empresaNombre,
                    empresaRfc: row.empresaRfc,
                    capturadorEmail,
                    estado: 'pendiente',
                    fechaRegistroEndoso: new Date(),
                    origen: 'portalEmpresa'
                }));

                await Promise.all(payloads.map((doc) => this.$db.collection('endososgmm').add(doc)));

                const notifResp = await fetch(`${this.apiBaseUrl}/endosos/notificar`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        folio: loteId,
                        empresaNombre: this.empresa.nombre || '',
                        empresaRfc: this.empresa.rfc || '',
                        emailSolicitante: capturadorEmail,
                        registros: payloads
                    })
                });
                if (!notifResp.ok) {
                    const t = await notifResp.text();
                    throw new Error(t || `HTTP ${notifResp.status}`);
                }

                this.endososPendientes = [];
                await this.refrescarMisEndosos();
                await this.mostrarAviso({
                    icon: 'success',
                    title: 'Solicitud enviada',
                    text: `Solicitud enviada con folio ${loteId}.`
                });
            } catch (e) {
                console.error(e);
                await this.mostrarAviso({
                    icon: 'error',
                    title: 'No se pudo enviar',
                    text: `No se pudo enviar la solicitud de endosos. ${e.message || ''}`.trim()
                });
            } finally {
                this.enviandoEndosos = false;
            }
        },
    }
};
</script>

<style lang="scss" scoped>
.portal-empresa {
    background: #ffffff;
    color: #334155;
    min-height: 60vh;
}

.portal-empresa__inner {
    padding: 28px 0 72px;
}

.portal-empresa__intro {
    margin-bottom: 28px;
}

.portal-empresa__title {
    font-size: 28px;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 8px;
    letter-spacing: -0.02em;

    @media (min-width: 768px) {
        font-size: 34px;
    }
}

.portal-empresa__lead {
    font-size: 16px;
    color: #64748b;
    margin: 0;
    max-width: 640px;
    line-height: 1.5;

    strong {
        color: #0f172a;
    }
}

.portal-empresa__card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 24px 22px;
    margin-bottom: 22px;
    color: #0f172a;
    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);

    @media (min-width: 768px) {
        padding: 28px 32px;
    }
}

.portal-empresa__card-title {
    font-size: 18px;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid #cbd5e1;
}

.portal-empresa__company-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 18px;

    @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 992px) {
        grid-template-columns: repeat(4, 1fr);
    }
}

.portal-empresa__field {
    &--wide {
        grid-column: 1 / -1;
    }
}

.portal-empresa__label {
    display: block;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #64748b;
    margin-bottom: 6px;
}

.portal-empresa__value {
    font-size: 15px;
    font-weight: 600;
    color: #0f172a;
    margin: 0;
    word-break: break-word;
}

.portal-empresa__company-logo {
    margin-top: 20px;
    padding-top: 18px;
    border-top: 1px solid #e2e8f0;
    text-align: center;
}

.portal-empresa__company-logo-img {
    max-height: 80px;
    max-width: 240px;
    object-fit: contain;
}

.portal-empresa__img-empresa-notice {
    font-size: 14px;
    color: #0c4a6e;
    background: #f0f9ff;
    border: 1px solid #bae6fd;
    border-radius: 12px;
    padding: 12px 16px;
    margin: 0 0 18px;
    line-height: 1.55;

    i {
        margin-right: 8px;
        color: #0284c7;
        opacity: 1;
    }

    code {
        font-size: 12px;
        padding: 2px 6px;
        background: #e0f2fe;
        color: #075985;
        border-radius: 4px;
    }

    &--muted {
        color: #64748b;
        background: #f8fafc;
        border-color: #e2e8f0;
    }
}

.portal-empresa__loading,
.portal-empresa__error {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #475569;
    font-size: 15px;
}

.portal-empresa__error {
    flex-wrap: wrap;
}

.portal-empresa__btn-retry {
    border: none;
    background: #002fa6;
    color: #fff;
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background: #086ad8;
    }
}

.portal-empresa__tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 22px;
}

.portal-empresa__tab {
    border: 2px solid #cbd5e1;
    background: #ffffff;
    color: #475569;
    padding: 10px 18px;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, color 0.2s, border-color 0.2s;

    &:hover {
        border-color: #086ad8;
        color: #002fa6;
    }

    &--active {
        background: linear-gradient(135deg, #086ad8 0%, #002fa6 100%);
        border-color: transparent;
        color: #ffffff;
    }
}

.portal-empresa__poliza-picker {
    margin-bottom: 18px;
}

.portal-empresa__select {
    width: 100%;
    max-width: 420px;
    margin-top: 6px;
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #cbd5e1;
    font-size: 14px;
    color: #0f172a;
    background: #ffffff;
}

.portal-empresa__poliza-detail {
    background: #ffffff;
    border-radius: 12px;
    padding: 20px;
    border: 1px solid #e2e8f0;
}

.portal-empresa__poliza-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
}

.portal-empresa__pdf-row {
    margin-top: 20px;
    padding-top: 16px;
    border-top: 1px solid #e2e8f0;
}

.portal-empresa__btn-pdf {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 22px;
    border-radius: 10px;
    background: linear-gradient(135deg, #086ad8 0%, #002fa6 100%);
    color: #ffffff !important;
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
    transition: opacity 0.2s, transform 0.2s;

    &:hover {
        opacity: 0.95;
        transform: translateY(-1px);
    }
}

.portal-empresa__hint {
    font-size: 14px;
    color: #64748b;
    margin: 0 0 12px;
}

.portal-empresa__link-wrap {
    margin-top: 16px;
}

.portal-empresa__link-portfolio {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 600;
    color: #002fa6;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
}

.portal-empresa__seg-toggle {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
}

.portal-empresa__seg-btn {
    flex: 1;
    max-width: 200px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid #cbd5e1;
    background: #ffffff;
    color: #64748b;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s;

    &--on {
        background: linear-gradient(135deg, #086ad8 0%, #002fa6 100%);
        border-color: transparent;
        color: #ffffff;
    }

    &:not(.portal-empresa__seg-btn--on):hover {
        border-color: #086ad8;
        color: #002fa6;
    }
}

.portal-empresa__search {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #ffffff;
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    padding: 10px 14px;
    margin-bottom: 16px;

    i {
        color: #94a3b8;
    }
}

.portal-empresa__search-input {
    flex: 1;
    border: none;
    font-size: 15px;
    outline: none;
    background: transparent;
    color: #0f172a;

    &::placeholder {
        color: #94a3b8;
    }
}

.portal-empresa__table-wrap {
    overflow-x: auto;
    border-radius: 10px;
    border: 1px solid #e2e8f0;
    background: #ffffff;
}

.portal-empresa__table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;

    th,
    td {
        padding: 12px 14px;
        text-align: left;
        border-bottom: 1px solid #e2e8f0;
    }

    th {
        background: #f8fafc;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: #64748b;
        font-weight: 700;
    }

    tbody tr:last-child td {
        border-bottom: none;
    }

    tbody tr:hover td {
        background: #f8fafc;
    }
}

.portal-empresa__table-wrap--aseg {
    box-shadow: 0 2px 14px rgba(15, 23, 42, 0.06);
}

.portal-empresa__table--aseg tbody tr:nth-child(even) td {
    background: #f1f5f9;
}

.portal-empresa__table--aseg tbody tr:nth-child(odd) td {
    background: #ffffff;
}

.portal-empresa__table--aseg tbody tr:hover td {
    background: #e0f2fe !important;
}

.portal-empresa__btn-ver {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    background: #002fa6;
    color: #ffffff;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background: #086ad8;
    }
}

.portal-empresa__empty-table {
    padding: 24px;
    text-align: center;
    color: #64748b;
    font-size: 14px;
    background: #ffffff;
    border-radius: 10px;
    border: 1px dashed #cbd5e1;
}

.portal-empresa__pager {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 16px;
}

.portal-empresa__page-btn {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid #cbd5e1;
    background: #ffffff;
    cursor: pointer;
    font-size: 18px;
    color: #002fa6;

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: #f1f5f9;
    }
}

.portal-empresa__page-info {
    font-size: 14px;
    font-weight: 600;
    color: #475569;
}

.portal-empresa__endosos-placeholder {
    text-align: center;
    padding: 32px 20px;
    background: #ffffff;
    border-radius: 12px;
    border: 1px dashed #cbd5e1;
}

.portal-empresa__endosos-icon {
    font-size: 40px;
    color: #94a3b8;
    margin-bottom: 12px;
}

.portal-empresa__endosos-placeholder p {
    margin: 0;
    font-size: 15px;
    color: #64748b;
    line-height: 1.6;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
}

.portal-empresa__endosos-input {
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    padding: 10px 12px;
    background: #ffffff;
}

.portal-empresa__endosos-actions {
    margin-top: 14px;
    display: flex;
}

.portal-empresa__endosos-actions--send {
    justify-content: flex-end;
}

/* Modal asegurado */
.portal-empresa-modal-fade-enter-active,
.portal-empresa-modal-fade-leave-active {
    transition: opacity 0.2s ease;
}

.portal-empresa-modal-fade-enter,
.portal-empresa-modal-fade-leave-to {
    opacity: 0;
}

.portal-empresa-modal {
    position: fixed;
    inset: 0;
    z-index: 10050;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: rgba(15, 23, 42, 0.65);
    backdrop-filter: blur(4px);
}

.portal-empresa-modal__box {
    width: 100%;
    max-width: 640px;
    max-height: 90vh;
    overflow: auto;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
}

.portal-empresa-modal__head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    padding: 20px 22px;
    background: linear-gradient(135deg, #0c1a3a 0%, #0f2744 100%);
    color: #ffffff;
}

.portal-empresa-modal__title {
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.25;
    color: #ffffff;
}

/* Evita que estilos globales de `h2` anulen el blanco del encabezado */
.portal-empresa-modal__head .portal-empresa-modal__title {
    color: #ffffff !important;
}

.portal-empresa-modal__rfc {
    margin: 8px 0 0;
    font-size: 14px;
    opacity: 0.92;
}

.portal-empresa-modal__close {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.12);
    color: #ffffff;
    font-size: 26px;
    line-height: 1;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background: rgba(255, 255, 255, 0.22);
    }
}

.portal-empresa-modal__body {
    padding: 20px 22px 24px;
}

.portal-empresa-modal__ramo-label {
    margin: 0 0 10px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #64748b;
}

.portal-empresa-modal__tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 18px;
}

.portal-empresa-modal__tab {
    padding: 8px 14px;
    border-radius: 999px;
    border: 1px solid #e2e8f0;
    background: #f8fafc;
    color: #475569;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;

    &--on {
        background: linear-gradient(135deg, #086ad8 0%, #002fa6 100%);
        border-color: transparent;
        color: #ffffff;
    }

    &:not(.portal-empresa-modal__tab--on):hover {
        border-color: #086ad8;
        color: #002fa6;
    }
}

.portal-empresa-modal__card {
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 18px;
    background: #ffffff;
}

.portal-empresa-modal__fields {
    display: grid;
    gap: 12px;
}

.portal-empresa-modal__field {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.portal-empresa-modal__flabel {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #64748b;
}

.portal-empresa-modal__fval {
    font-size: 15px;
    font-weight: 600;
    color: #0f172a;
    word-break: break-word;
}

.portal-empresa-modal__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-end;
    margin-top: 18px;
    padding-top: 16px;
    border-top: 1px solid #e2e8f0;
}

.portal-empresa-modal__btn-dl {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    border-radius: 10px;
    background: linear-gradient(135deg, #086ad8 0%, #002fa6 100%);
    color: #ffffff !important;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.94;
    }
}

.portal-empresa-modal__empty {
    margin: 0;
    font-size: 14px;
    color: #64748b;
    text-align: center;
    padding: 16px;
}

.portal-empresa__aseg-intro {
    margin-bottom: 18px;
    padding: 16px 18px;
    background: #f8fafc;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
}

.portal-empresa__aseg-intro-title {
    margin: 0 0 8px;
    font-size: 16px;
    font-weight: 700;
    color: #0f172a;
    line-height: 1.35;

    strong {
        color: #002fa6;
    }
}

.portal-empresa__aseg-intro-meta {
    margin: 0;
    font-size: 13px;
    line-height: 1.55;
    color: #64748b;

    code {
        font-size: 12px;
        padding: 2px 6px;
        background: #e2e8f0;
        color: #0f172a;
        border-radius: 4px;
    }
}

.portal-empresa__aseg-intro-count {
    display: inline-block;
    margin-top: 8px;
    padding: 5px 12px;
    border-radius: 999px;
    background: linear-gradient(135deg, #086ad8 0%, #002fa6 100%);
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;
}

.portal-empresa__aseg-banner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px 16px;
    margin-bottom: 16px;
    padding: 14px 18px;
    background: linear-gradient(135deg, rgba(8, 106, 216, 0.08) 0%, rgba(0, 47, 166, 0.06) 100%);
    border: 1px solid #cbd5e1;
    border-radius: 12px;
}

.portal-empresa__aseg-banner-label {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #64748b;
}

.portal-empresa__aseg-banner-count {
    font-size: 16px;
    font-weight: 700;
    color: #002fa6;
}

.portal-empresa__aseg-banner-meta {
    font-size: 13px;
    color: #475569;
    flex: 1 1 100%;

    @media (min-width: 640px) {
        flex: 0 1 auto;
        margin-left: auto;
    }
}

.portal-empresa__endosos-wrap {
    text-align: left;
    padding: 8px 0 0;
}

.portal-empresa__card-title--flush {
    margin-top: 0;
    text-align: left;
}

.portal-empresa__pendientes {
    margin-bottom: 24px;
    padding: 18px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
}

.portal-empresa__pendientes-title {
    margin: 0 0 12px;
    font-size: 15px;
    font-weight: 700;
    color: #0f172a;
}

.portal-empresa__pendientes-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.portal-empresa__pendiente-card {
    padding: 12px 14px;
    background: #ffffff;
    border-radius: 10px;
    border: 1px solid #e2e8f0;
}

.portal-empresa__pendiente-card-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}

.portal-empresa__pendiente-actions {
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.portal-empresa__pendiente-folio {
    font-family: ui-monospace, monospace;
    font-size: 14px;
    font-weight: 700;
    color: #002fa6;
}

.portal-empresa__pendiente-badge {
    font-size: 12px;
    font-weight: 600;
    color: #64748b;
    background: #f1f5f9;
    padding: 4px 10px;
    border-radius: 999px;
}

.portal-empresa__pendiente-meta {
    margin: 8px 0 0;
    font-size: 13px;
    color: #64748b;
}

.portal-empresa__pendiente-detalle {
    margin-top: 10px;
}

.portal-empresa__table--small {
    font-size: 12px;

    th,
    td {
        padding: 8px 10px;
    }
}

.portal-empresa__btn-ver--sm {
    padding: 6px 10px;
    font-size: 12px;
}

.portal-empresa-modal__detalle-block {
    margin-top: 22px;
    padding-top: 18px;
    border-top: 1px solid #e2e8f0;
}

.portal-empresa-modal__detalle-dl {
    max-height: 280px;
    overflow-y: auto;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    background: #f8fafc;
}

.portal-empresa-modal__detalle-row {
    display: grid;
    grid-template-columns: minmax(0, 38%) minmax(0, 62%);
    gap: 8px 12px;
    padding: 10px 14px;
    border-bottom: 1px solid #e2e8f0;
    font-size: 13px;

    &:last-child {
        border-bottom: none;
    }
}

.portal-empresa-modal__detalle-dt {
    color: #64748b;
    font-weight: 600;
    word-break: break-word;
}

.portal-empresa-modal__detalle-dd {
    color: #0f172a;
    word-break: break-word;
    margin: 0;
}
</style>
