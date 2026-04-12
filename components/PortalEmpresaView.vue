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
                                <div class="portal-empresa__field portal-empresa__field--wide">
                                    <span class="portal-empresa__label">Vigencia</span>
                                    <p class="portal-empresa__value">{{ vigenciaActual }}</p>
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
                            No hay asegurados para mostrar. Comprueba que en Firestore las pólizas tengan
                            <strong>nombreEmpresa</strong> o <strong>rfc</strong> (RFC de la empresa) alineados con tu cuenta,
                            y que exista <strong>dataAsegurados</strong> (o nombre/RFC del titular) con los integrantes.
                            Ajusta la búsqueda o recarga la página.
                        </div>

                        <div v-else class="portal-empresa__table-wrap">
                            <table class="portal-empresa__table">
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
                                        :key="'aseg-' + idx + '-' + row.rfc + '-' + row.tipo"
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

                    <div v-else class="portal-empresa__endosos-placeholder">
                        <i class="fas fa-file-contract portal-empresa__endosos-icon"></i>
                        <p>
                            La consulta de endosos estará disponible próximamente. Para trámites urgentes,
                            contacta a tu ejecutivo IBS.
                        </p>
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
                    </div>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
import { cargarPolizasPorRfc } from '~/lib/cargarPolizasPorRfc';
import { aplicarReglasImgEmpresa, fetchImgEmpresaPorNombre } from '~/lib/imgEmpresa';
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
            ramoModalActivo: 'gmm'
        };
    },
    computed: {
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
            if (p.gastosMedicos.length) t.push({ key: 'gmm', label: 'GMM' });
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
            const desde = pol.vDesde || this.formatDate(pol.polizaDesde) || '—';
            const hasta = pol.vHasta || this.formatDate(pol.polizaHasta) || '—';
            return `${desde} — ${hasta}`;
        },
        pdfUrlActual() {
            const pol = this.polizaActiva;
            if (!pol) return '';
            if (pol.file_url) return pol.file_url;
            if (pol.idDocto) {
                return `https://api-sicas-616002718679.us-central1.run.app/api/api/polizas/pdf/${pol.idDocto}`;
            }
            return '';
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
                return `https://api-sicas-616002718679.us-central1.run.app/api/api/polizas/pdf/${pol.idDocto}`;
            }
            return '';
        },
        aseguradosFiltrados() {
            const q = this.busquedaAsegurado.trim().toLowerCase();
            if (!q) return this.aseguradosLista;
            return this.aseguradosLista.filter((r) => {
                return (
                    r.nombre.toLowerCase().includes(q) ||
                    String(r.rfc).toLowerCase().includes(q)
                );
            });
        },
        totalPaginas() {
            return Math.max(1, Math.ceil(this.aseguradosFiltrados.length / PAGE_SIZE));
        },
        aseguradosPagina() {
            const start = (this.paginaActual - 1) * PAGE_SIZE;
            return this.aseguradosFiltrados.slice(start, start + PAGE_SIZE);
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
            }
        },
        busquedaAsegurado() {
            this.paginaActual = 1;
        },
        aseguradosFiltrados() {
            if (this.paginaActual > this.totalPaginas) {
                this.paginaActual = this.totalPaginas;
            }
        },
        modalDetalle(val) {
            if (process.client) {
                document.body.style.overflow = val ? 'hidden' : '';
            }
        }
    },
    mounted() {
        this.cargarPolizas();
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
        seleccionarRamo(key) {
            this.ramoActivo = key;
            this.indicePoliza = 0;
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
                this.polizas = polizas;
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
    max-width: 520px;
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
</style>
