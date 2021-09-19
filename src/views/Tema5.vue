<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Características según línea de producción

    p.mb-5 Para facilitar la fabricación de prendas de vestir se han agrupado los procesos en líneas de producción, esto implica que hay maquinaria, distribución de planta y operarios entrenados para producir determinado producto o productos similares. En confección se pueden distinguir líneas en ropa exterior, ropa interior y deportiva, también se puede hablar según el peso del tejido: liviano, semipesado o pesado.


    .row.d-none.d-lg-block.mb-5
      .col-lg-12.p-0
        figure
          img(src='@/assets/curso/tema5/img04.png')   

    .row.d-block.d-lg-none
      .col-lg-6.p-0
        figure
          img(src='@/assets/curso/tema5/img10.png').mb-5
      .col-lg-6.p-0         
        figure
          img(src='@/assets/curso/tema5/img12.png').mb-5    
    //- figure.mb-5
    //-   img(src='@/assets/curso/tema5/img04.png')  
    //- div(style='position:relative').mb-5
    //-   figure(style='position:relative; left:0px; top:0px; height:100%')
    //-     img(src='@/assets/curso/tema5/img01.svg')  
      
    //-   .row(style='position:absolute; left:0px; top:0px; height:100%')
    //-     .col-lg-5.p-5          
    //-       figure
    //-         img(src='@/assets/curso/tema5/img02.png')  
    //-       p.texto-blanco.mb-3 Se trabajan productos como camisas, pantalones, chaquetas; las máquinas utilizadas son principalmente planas, sobrehiladoras o fileteadoras, ojaladora y botonadora. 
    //-       p.texto-blanco Se encuentran empresas especializadas en únicos productos como camisas, pantalones, jeans. Dentro de este tipo de prendas se usa tejido plano con sus diferentes ligamentos fabricados con fibras naturales, fibras artificiales y sintéticas o en combinación de estas.

    //-     .col-lg-2
    //-     .col-lg-5.p-5
    //-       p.texto-blanco.mb-3 Esta línea es bastante amplia ya que podemos encontrar variedad de productos y diseños, con ello empresas especializadas en pantys, vestidos de baño, ropa deportiva femenina o masculina, ropa interior para caballero, camisetas, entre otras. 
    //-       p.texto-blanco Las máquinas utilizadas son planas, sobrehiladoras o fileteadoras, resortadora, recubridora, zigzag triple o sencillo entre otras. El tejido utilizado es el tejido de punto con sus diferentes ligamentos fabricados con   fibras naturales, fibras artificiales y sintéticas o en combinación de estos.
    //-       figure
    //-         img(src='@/assets/curso/tema5/img03.png') 
    
    
    p.mb-5 Reconocer la línea de producción permite aprovechar los recursos técnicos y humanos de la empresa, a la vez que puede ofrecer variedad en diseño y productos al cliente en condiciones óptimas, ya que no tiene los mismos recursos (maquinaria, hilos, agujas, telas) para fabricar un jean, una camisa o un panty.
</template>

<script>
export default {
  name: 'Tema5',
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
