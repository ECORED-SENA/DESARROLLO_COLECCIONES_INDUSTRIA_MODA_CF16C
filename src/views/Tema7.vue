<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 7
      h1 Documentos para control de calidad

    p.mb-5 Para llevar un registro de las actividades de control de calidad, los elementos indispensables son los siguientes: 

    .row
      .col-lg-5
        figure.mb-5
          img(src='@/assets/curso/tema7/img01.png')  
      .col-lg-7
        #t_7_1.titulo-segundo.mb-3
          h2 7.1 Ficha técnica

        .row
          .col-lg-3
            figure.mb-5
              div.mb-2.BorTit
                p.mb-0 <b>Figura 1</b>
                p.mb-0 Ficha técnica      
              img(src='@/assets/curso/tema7/img02.png') 
            
          .col-lg-7.d-flex.align-items-center
            p Este documento como se observa en la figura 1, debe ser interpretado en forma correcta según el área que lo esté implementando: diseño, patronaje, corte o confección. 
    
    Separador

    #t_7_2.titulo-segundo
      h2 7.2 Tabla militar

    .row
      .col-lg-5
        p.mb-5 Esta tabla como se muestra en la figura 2 es una herramienta la cual le permite al auditor evaluar muestras de lotes, y definir porcentajes de aceptación y rechazo.
        figure
          img(src='@/assets/curso/tema7/img03.svg')  
      .col-lg-7
        figure
              div.mb-2.BorTit
                p.mb-0 <b>Figura 2</b>
                p.mb-0 Tabla militar   
              img(src='@/assets/curso/tema7/img04.png') 

    Separador

    #t_7_3.titulo-segundo
      h2 7.3 Formatos de reporte

    p.mb-4 La empresa debe llevar control de las mejoras o cambios realizados durante el proceso, la forma más fácil para hacer este control consiste en utilizar formatos, los cuales son adaptados según las necesidades y áreas donde se aplican.
    p.mb-5 Por ejemplo: el siguiente formato observable en la figura 3 fue creado para realizar inspección de producto en procesos. 

    figure.mb-5
              div.mb-2.BorTit
                p.mb-0 <b>Figura 3</b>
                p.mb-0 Formato de auditoría en proceso  
              img(src='@/assets/curso/tema7/img05.svg')

    p.mb-5 Para finalizar este tema será importante conocer las bases para la construcción de las tablas y los recursos que se convertirán en herramientas e indicadores de calidad, así mismo es fundamental conocer la forma en que se realiza el análisis de los datos y la utilización de las tablas en aras a determinar la cantidad de prendas a auditar y los parámetros para definir dichas cantidades, a continuación podrá acceder a dos documentos que le servirán de herramientas en la aplicación de estos conocimientos y la construcción de las fichas técnicas y la definición de parámetros de calidad a aplicar en la ejecución de su proyecto.

    .row.justify-content-center
      .col-lg-5
        a.anexo.mb-4(:href="obtenerLink('/downloads/CF_16_C_7_CASOS_DE_USO_TABLAS_MILITARES.docx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-doc.svg")
          .anexo__texto
            p <b>Aplicación de tablas y casos de uso.</b>
      .col-lg-5
        a.anexo.mb-4(:href="obtenerLink('/downloads/CF16_C_7_TABLAS.xlsx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-xls.svg")
          .anexo__texto
            p <b>Construcción de fichas técnicas e indicadores.</b>
      
</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
