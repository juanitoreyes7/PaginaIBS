<template>
    <ul>
        <li>
            <n-link to="/">
                <span>Inicio</span>
            </n-link>
        </li>
        <li class="has-children has-children--multilevel-submenu">
            <n-link to="/">
                <span>Cotización</span>
            </n-link>
            <ul class="submenu">
                <li>
                    <a href="https://ibs_w.segupoliza.com/#/pages/blank" target="_blank">
                        <span>Autos</span>
                    </a>
                </li>
                <li>
                    <n-link to="/cotgmm" target="_blank">
                        <span>Gastos Médicos Mayores</span>
                    </n-link>
                </li>
                <li>
                    <n-link to="/leadership" target="_blank">
                        <span>Vida</span>
                    </n-link>
                </li>
                <li>
                    <a href="https://portalagentes.segurossura.com.mx/cotizador/redirect?usuario=MXGARZAGAL01&solucion=PlanVive&pto-venta=107686&subgrupo=0444600002&perfil-tarifa=9010000001&mail=KARINA@IBSCONSULTORES.COM"
                        target="_blank">
                        <span>Hogar</span>
                    </a>
                </li>
            </ul>
        </li>
        <!--<li class="has-children has-children--multilevel-submenu">
            <n-link to="/descargables">
                <span>Services</span>
            </n-link>
            <ul class="submenu">
                <li>
                    <n-link to="/descargables">
                        <span>IT Services</span>
                    </n-link>
                </li>
                <li>
                    <n-link to="/it-solutions">
                        <span>IT Solutions</span>
                    </n-link>
                </li>
            </ul>
        </li>
        <li class="has-children has-children--multilevel-submenu">
            <n-link to="/">
                <span>Elements</span>
            </n-link>
            <ul class="submenu">
                <li>
                    <n-link to="/element/accordion">
                        <span>Accordion</span>
                    </n-link>
                </li>
                <li>
                    <n-link to="/element/box-icon">
                        <span>Box Icon</span>
                    </n-link>
                </li>
                <li>
                    <n-link to="/element/box-image">
                        <span>Box Image</span>
                    </n-link>
                </li>
                <li>
                    <n-link to="/element/box-large-image">
                        <span>Box Large Image</span>
                    </n-link>
                </li>
                <li>
                    <n-link to="/element/call-to-action">
                        <span>Call To Action</span>
                    </n-link>
                </li>
                <li>
                    <n-link to="/element/counters">
                        <span>Counters</span>
                    </n-link>
                </li>
                <li>
                    <n-link to="/element/gradation">
                        <span>Gradation</span>
                    </n-link>
                </li>
                <li>
                    <n-link to="/element/teams">
                        <span>Teams</span>
                    </n-link>
                </li>
            </ul>
        </li>-->
        <li>
            <n-link to="/about">
                <span>Nosotros</span>
            </n-link>
        </li>
        <li>
            <n-link to="/case-studies">
                <span>Seguros</span>
            </n-link>
        </li>
        <li>
            <n-link to="/contact">
                <span>Contacto</span>
            </n-link>
        </li>
        <li>
            <n-link to="/descargables">
                <span>Descargables</span>
            </n-link>
        </li>
    </ul>
</template>