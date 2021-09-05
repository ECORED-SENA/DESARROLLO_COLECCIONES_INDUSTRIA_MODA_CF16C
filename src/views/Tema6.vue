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
          img(src='@/assets/curso/tema6/img02.png')  
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
                td(colspan=3) Textiles y confecciones para ropa interior femenina de tejido plano.
              tr
                td NTC 2389 1987
                td(colspan=3) Textiles y confecciones para ropa interior masculina de tejido plano.
              tr
                td NTC 1902 1983
                td(colspan=3) Factores humanos. Designación de tallas. Confecciones para mujeres y niñas. Ropa interior, ropa de noche, corsetería y blusas.
              tr
                td NTC 1905 1983
                td(colspan=3) Factores humanos. Designación de tallas. Confecciones para hombres adultos y jóvenes. Ropa interior, ropa de noche y camisas.
              tr
                td NTC 2309 1987
                td(colspan=3) Textiles y confecciones. Camisas informales y de traje para hombres y niños. Evaluación después del lavado casero.
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

        p Ahora, en la tabla 2 se muestra el listado de algunas normas utilizadas para ensayos aplicados a fibras, hilos, telas y prendas confeccionadas con el ánimo de garantizar la durabilidad del producto y bienestar del consumidor, algunas de las pruebas que se pueden realizar son de resistencia de hilos o telas, solidez del color al lavado, cambio dimensional donde se evalúa el encogimiento o alargamiento en textiles.

        .tabla-a.color-acento-contenido.mb-5 
          p.BorTit <b>Tabla 2</b>
          table.t6_tabla1  
            thead
              tr
                th Norma
                th(colspan=3) Ensayo 
            tbody
              tr
                td NTC 2399 2014
                td(colspan=3) Textiles y confecciones para ropa interior femenina de tejido de punto.    
              tr
                td  NTC 1213/AATCC 20
                td(colspan=3) Análisis cualitativo de fibras.
              tr
                td  NTC 481: 2012    
                td(colspan=3) Análisis cuantitativo de fibras.
              tr
                td  NTC 5121: 2002
                td(colspan=3) Cambio de oblicuidad en telas y deformación por torsión en prendas de vestir como resultado de lavado.
              tr
                td  NTC 2308 2017
                td(colspan=3) Cambios dimensionales en prendas después de lavado en máquina de uso doméstico. 
              tr
                td  NTC 2397 / AATCC 79
                td(colspan=3) Determinación de la absorción.
              tr
                td  ASTMD 5278
                td(colspan=3) Determinación de la elongación de tejidos elásticos angostos.
              tr
                td  NTC 1378 1978
                td(colspan=3) Determinación de la humedad.
              tr
                td  NTC 1199
                td(colspan=3) Determinación de la recuperación de las arrugas.
              tr
                td  NTC 2051-2: 2003
                td(colspan=3) Determinación de la resistencia a la formación de motas (Pilling) y otros cambios de superficie de las telas.
              tr
                td  EN 20811
                td(colspan=3) Determinación de la resistencia a la penetración del agua. Método presión hidrostática.
              tr
                td  NTC 1386-1: 2006
                td(colspan=3) Determinación de la resistencia al deslizamiento de los hilos de una costura en telas de tejido plano. Parte 1: método de abertura fija en una costura.
              tr
                td  NTC 2291/ASTMD3787
                td(colspan=3) Determinación de la resistencia al estallido de textiles.
              tr
                td  NTC 5634: 2008-
                td(colspan=3) Determinación de la resistencia de las telas al desgarre. 
              tr
                td  NTC 2293/ASTMD3999
                td(colspan=3) Determinación de la resistencia de las telas al enganche – método de la maza.
              tr
                td  NTC 2292-1 / ISO 105 E 03
                td(colspan=3) Determinación de la solidez del color al agua clorada. Parte 1: solidez al agua de las piscinas.
              tr
                td  NTC 850/AATCC 106
                td(colspan=3) Determinación de la solidez del color al agua de mar.
              tr
                td  NTC 766 / ISO 105-X 11
                td(colspan=3) Determinación de la solidez del color al planchado.
              tr
                td  NTC 2051-1: 2003
                td(colspan=3) Determinación de la tendencia a la formación de motas y de pelusa. 
              tr
                td  NTC 228: 2016
                td(colspan=3) Determinación del ancho de las telas.
              tr
                td  NTC 3401
                td(colspan=3) Determinación del arco y del sesgo en tela de tejido plano y de punto.
              tr
                td  NORMA ISO 14184-1:2011
                td(colspan=3) Determinación del contenido de formaldehído.
              tr
                td  NTC 5893 / ASTM D1908
                td(colspan=3) Determinación del daño relacionado con la aguja causado por la costura, en tejido plano y en tejido de punto.
              tr
                td  NTC 427: 2018-08-15               ASTM D3775: 2017
                td(colspan=3) Determinación del número de hilos de urdimbre y del número de hilos de trama, de tejidos planos.
              tr
                td  NTC 5772 / ASTM D 1059
                td(colspan=3) Determinación del título del hilo basado en especímenes de longitud corta.
              tr
                td  NTMD 0151- NTC 4873-2 Y 3
                td(colspan=3) Evaluación colorimétrica.
              tr
                td  NTC 6076/ISO15496 
                td(colspan=3) Medición de la permeabilidad de los textiles al vapor de agua con fines de control de la calidad.
              tr
                td  NORMA ISO 17072-1:2011
                td(colspan=3) Metales extraíbles (Plomo, Cobre, Cadmio, Níquel, Cromo, Cobalto, Hierro, Manganeso, zinc).
              tr
                td  NTC 772: 2017-03-22 AATCC 15:2002
                td(colspan=3) Método de ensayo para determinar la solidez del color a la transpiración.
              tr
                td  NTC 786: 2017-03-22 AATCC 8:2016
                td(colspan=3) Método de ensayo para determinar la solidez del color al frote.
              tr
                td  NORMA NTC 754-2 /ASTM D5034 
                td(colspan=3) Método para determinar la resistencia a la rotura y elongación de las telas. Método de la tira.
              tr
                td  NORMA ASTMD 3884
                td(colspan=3) Resistencia a la abrasión de textiles.
              tr
                td  NTC 363
                td(colspan=3) Resistencia a la tensión y elongación del papel y cartón.
              tr
                td  NTC 2291/ASTMD3787
                td(colspan=3) Resistencia a las costuras en telas de tejido de punto. Método de la resistencia al estallido de textiles.
              tr
                td  NTC 1386-2: 2006
                td(colspan=3) Textiles. Determinación de la resistencia al deslizamiento de los hilos de una costura en telas de tejido plano. 

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
