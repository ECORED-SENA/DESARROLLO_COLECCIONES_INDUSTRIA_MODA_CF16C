<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Control de calidad en confección

    figure
      img(src='@/assets/curso/tema2/img01.png')  

    .row
      .col-lg-1
      .col-lg-5(style='position:static')
        div.p-4.px-5.t2_div1
          p.mb-0 El control de calidad en confección pretende garantizar el cumplimiento de los requisitos o requerimientos del producto desde el desarrollo del diseño, pasando por la selección de materias primas y hasta el ensamble del producto, evitando variaciones o modificaciones sin previo aviso, la implementación del control de calidad hace que las organizaciones sean más competitivas. 
      .col-lg-6

    .row.mb-0(style='position:relative; top:-40px')
      .col-lg-1
      .col-lg-6.d-flex.flex-column
        p Dentro de las empresas de confección la calidad se debe verificar de manera transversal en las siguientes áreas: 
        div.p-3.t2_div2
          ul.lista-ul
            li 
              i.fas.fa-angle-right
              | Diseño del producto.
            li 
              i.fas.fa-angle-right
              | Selección y compra de materiales e insumos.
            li 
              i.fas.fa-angle-right
              | Trazo, tendido y corte.
            li 
              i.fas.fa-angle-right
              | Costura/confección: fabricación de las prendas de vestir.
            li 
              i.fas.fa-angle-right
              | Estudio y registro de mejoras de los diferentes procedimientos del proceso.
            li 
              i.fas.fa-angle-right
              | Entrenamiento del personal.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/img02.svg')  
      .col-lg-1

    .div.py-2.mb-4.t1_div3
          h4.m-0.text-center(style='color:white') La calidad se puede ver afectada positiva o negativamente por los siguientes factores:

    .row.mb-4
      .col-lg-1
      .col-lg-3
        div.t2_div4.pb-3
          div.t2_div3
            p.p-2.text-center(style='color:white') <b>Factores tecnológicos</b>
          figure.mb-4
            img(src='@/assets/curso/tema2/img03.svg') 
          p.text-center Materias primas, maquinaria,<br>procesos.
      .col-lg-4
        div.t2_div4.pb-3
          div.t2_div3
            p.p-2.text-center(style='color:white') <b>Factores humanos</b>
          figure.mb-4
            img(src='@/assets/curso/tema2/img04.svg') 
          p.text-center Operarios, supervisión y<br>entrenamiento.
      .col-lg-3
        div.t2_div4.pb-3
          div.t2_div3
            p.p-2.text-center(style='color:white') <b>Factores ambientales</b>
          figure.mb-4
            img(src='@/assets/curso/tema2/img05.svg') 
          p.text-center La iluminación, calor, ventilación.<br><br>
      .col-lg-1
    
    p Para lograr un buen control de calidad en cualquiera de las áreas es importante contar con el compromiso de cada una de las partes de las empresas: administración, supervisores, operarios.
</template>

<script>
export default {
  name: 'Tema2',
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
