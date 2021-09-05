<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 ¿Qué es calidad?
    
    div.t1_div1.border
      figure.mb-5
        img(src='@/assets/curso/tema1/img01.png')  
      
      .row.mb-5
        .col-lg-7.d-flex.align-items-center
          div.py-3.t1_div2 
            .row
              .col-lg-2
              .col-lg-10
                p.m-0 El concepto de calidad tiene tantas definiciones como autores que han trabajado el tema, sin embargo, es posible la elaboración de elementos claves como: satisfacer necesidades del cliente según sus requerimientos, permanencia en el mercado de la empresa, un producto bien hecho, los cuales se encuentran involucrados en el concepto de calidad.
        .col-lg-3
          figure.mb-5
            img(src='@/assets/curso/tema1/img02.svg')  
        .col-lg-2

        .div.py-2.mb-4.t1_div3
          h4.m-0.text-center(style='color:white') Algunas de las definiciones relacionadas con el concepto de calidad son las siguientes: 

      .row
        .col-lg-4.d-flex.flex-column(style='position:relative').mb-5
          figure.t1-figura1
            img(src='@/assets/curso/tema1/img03.svg')             
          div.p-3.px-4.t1_div4
            p <b>Valls (2007),</b> resalta que la calidad es cumplir los requisitos del cliente para obtener el desarrollo de la empresa.
          
        .col-lg-4.d-flex.flex-column(style='position:relative').mb-5
          figure.t1-figura1
            img(src='@/assets/curso/tema1/img04.svg')             
          div.p-3.px-4.t1_div5
            p <b>W. Edwards Deming (1988), </b>menciona el significado de calidad, como producir un producto a bajo costo con características medibles que satisfagan al cliente.

        .col-lg-4.d-flex.flex-column(style='position:relative').mb-5
          figure.t1-figura1
            img(src='@/assets/curso/tema1/img05.svg')             
          div.p-3.px-4.t1_div4 
            p <b>Kaoru Ishikawa (1988),</b> resalta el control en todos los procesos y las personas de la empresa involucradas para obtener el producto más útil, más económico y satisfactorio al consumidor final.

      .row
        .col-lg-4.d-flex.flex-column(style='position:relative').mb-5
          figure.t1-figura1
            img(src='@/assets/curso/tema1/img06.svg')             
          div.p-3.px-4.t1_div5 
            p <b>Armand V. Feigenbaum</b><br><b>(1991), </b>comprendió que el inicio de la calidad es en el diseño del producto y finaliza cuando el consumidor lo utiliza.

          
        .col-lg-4.d-flex.flex-column(style='position:relative').mb-5
          figure.t1-figura1
            img(src='@/assets/curso/tema1/img07.svg')             
          div.p-3.px-4.t1_div4
            p <b>M. Juran (1993), </b>definió calidad como un conjunto de características que satisfacen al cliente sin tener errores.

        .col-lg-4.d-flex.flex-column(style='position:relative').mb-5
          figure.t1-figura1
            img(src='@/assets/curso/tema1/img08.svg')             
          div.p-3.px-4.t1_div5 
            p <b>Philip B. Crosby (1996),</b> resaltó en el concepto el cumplimiento de requisitos y de normas.

    
</template>

<script>
export default {
  name: 'Tema1',
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
