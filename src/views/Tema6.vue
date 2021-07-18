<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Normas de calidad para materiales e insumos

    figure.mb-5
      img(src='@/assets/curso/tema6/img01.png')  

    .row.mb-5
      .col-lg-8
        .bloque-texto-b.color-acento-contenido.p-4
          .bloque-texto-b__texto            
            p.mb-4 El Instituto Colombiano de Normas Técnicas (Icontec) es el encargado de la normalización a nivel nacional en busca de mejorar la productividad y competitividad de las empresas. Las personas involucradas en la industria de la moda no pueden desconocer la importancia de las diferentes pruebas, ensayos y análisis realizados a los productos textiles, los cuales permiten uniformidad y calidad en los productos diseñados y confeccionados.
            p Las normas también son basadas y adaptadas de normas internacionales, si bien hay normas para cada línea de producto y aplicaciones específicas, cada empresa decide el ensayo o las pruebas a realizar con el fin de garantizar la calidad de sus productos o servicios. Para realizar o verificar la calidad de un material o insumo según una norma se puede trabajar junto con laboratorios certificados, exigir al proveedor la garantía de que su producto cumpla con los requisitos mínimos o realizar las pruebas al interior de la empresa. 
      .col-lg-3
        figure
          img(src='@/assets/curso/tema6/img02.svg')  
      .col-lg-1

    p.text-center A continuación en la tabla 1 se presentan las normas relacionadas al proceso de confección.
    
    .row.mb-5
      .col-lg-2
      .col-lg-8
        .tabla-a.color-acento-contenido.mb-5 
          p.BorTit <b>Tabla 1</b>
          table.t6_tabla1  
            thead
              tr
                th Norma
                th(colspan=3) Título de la norma                
            tbody
              tr
                td NTC 2399 2014
                td(colspan=3) Textiles y confecciones para ropa interior femenina de tejido de punto.    
              tr
                td NTC 2398 1988
                td(colspan=3) Textiles y confecciones para ropa interior femenina de tejido de plano.
              tr
                td NTC 2389 1987
                td(colspan=3) Textiles y confecciones para ropa interior masculina de tejido de plano.
              tr
                td NTC 1902 1983
                td(colspan=3) Factores humanos designados de tallas, confecciones para mujeres y niñas, ropa interior, ropa noche corsetería y blusas.
              tr
                td NTC 1905 1983
                td(colspan=3) Factores humanos designados de tallas, confecciones para hombres adultos y jóvenes, ropa interior, ropa noche y camisas.
              tr
                td NTC 2309 1987
                td(colspan=3) Textiles y confecciones camisa informales y de traje para hombres y niños evaluación después del lavado casero.
              tr
                td NTC 2260 2017
                td(colspan=3) Pantalones informales.
              tr
                td NTC 3418 1992
                td(colspan=3) Textiles y confecciones telas de paño.
              tr
                td NTC 2449 1989
                td(colspan=3) Textiles y confecciones vestidos de baño.

        figure.mb-5
          img(src='@/assets/curso/tema6/img03.png')  

        p Ahora, en la tabla 2 se muestra el listado de algunas normas utilizadas para ensayos aplicados a fibras, hilos, telas y prendas confeccionadas con el ánimo de garantizar la durabilidad del producto y bienestar del consumidor, algunas de las pruebas que se pueden realizar resistencia de hilos o telas, solidez del color al lavado, cambio dimensional donde se evalúa el encogimiento o alargamiento en textiles.

        .tabla-a.color-acento-contenido.mb-5 
          p.BorTit <b>Tabla 2</b>
          table.t6_tabla1  
            thead
              tr
                th Norma
                th(colspan=3) Título de la norma                
            tbody
              tr
                td NTC 2399 2014
                td(colspan=3) Textiles y confecciones para ropa interior femenina de tejido de punto.    
              tr
                td NTC 2398 1988
                td(colspan=3) Textiles y confecciones para ropa interior femenina de tejido de plano.
              tr
                td NTC 2389 1987
                td(colspan=3) Textiles y confecciones para ropa interior masculina de tejido de plano.
              tr
                td NTC 1902 1983
                td(colspan=3) Factores humanos designados de tallas, confecciones para mujeres y niñas, ropa interior, ropa noche corsetería y blusas.
              tr
                td NTC 1905 1983
                td(colspan=3) Factores humanos designados de tallas, confecciones para hombres adultos y jóvenes, ropa interior, ropa noche y camisas.
              tr
                td NTC 2309 1987
                td(colspan=3) Textiles y confecciones camisa informales y de traje para hombres y niños evaluación después del lavado casero.
              tr
                td NTC 2260 2017
                td(colspan=3) Pantalones informales.
              tr
                td NTC 3418 1992
                td(colspan=3) Textiles y confecciones telas de paño.
              tr
                td NTC 2449 1989
                td(colspan=3) Textiles y confecciones vestidos de baño.
      .col-lg-2
    
</template>

<script>
export default {
  name: 'Tema6',
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
