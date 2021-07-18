<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 La ficha técnica

    figure.mb-4
      img(src='@/assets/curso/tema3/img01.png')  
    
    p.text-center A continuación se define la ficha técnica, sus partes, las clases, se explica cómo se pueden interpretar y desde luego cómo se elaboran:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Definición" :icono="require('@/assets/curso/tema3/img02.svg')")
        .row
          .col-lg-1
          .col-lg-2
            figure
              img(src='@/assets/curso/tema3/img07.svg')  
          .col-lg-1
          .col-lg-8
            h3 Definición
            p.mb-4 La ficha Técnica es un documento que contiene las especificaciones y requisitos necesarios para la elaboración de un producto, se convierte en una herramienta indispensable para garantizar la uniformidad de los procesos ayudando a la comunicación entre departamentos.
            p La ficha técnica debe de elaborarse de forma clara y precisa  de tal manera que contenga información pertinente a los requerimientos del producto a confeccionar con el fin de evitar y disminuir errores,  así como presentar tolerancias; esta puede ser consultada por todo el personal que interviene en los procesos como supervisores, auditores o personal operativo.

      .py-4.py-md-5(titulo="Partes de la ficha técnica" :icono="require('@/assets/curso/tema3/img03.svg')")
        h3 Partes de la ficha técnica
        p.mb-4 Para la facilitar el manejo de la ficha técnica las empresas crean sus propios formatos y se ajustan a la identidad y filosofía de la empresa, este formato debe contener mínimo las siguientes partes: 
        .row
          .col-lg-1
          .col-lg-3.pe-0
            figure
              img(src='@/assets/curso/tema3/img08.svg')            
          .col-lg-8.d-flex.ps-0
            table(border='' style='height:100%; border:0px solid white')
              tr  
                td <b>Encabezado o rótulo de la ficha técnica:</b> describe los nombres de la empresa, logos, fechas, referencias, tallas, descripción general del diseño, responsables.              
              tr(style='height:56%')  
                td <b>Cuerpo de la ficha:</b> contiene la mayor información, especificando según el proceso las características de la prenda contiene dibujo plano frontal, posterior y lateral, con el fin de ser un apoyo visual.
              tr  
                td <b>Tablas de requerimientos:</b> se anexan tolerancias, medidas, orden operacional, hojas de ruta, insumos observaciones, procesos operacionales y vocabularios.            

      .py-4.py-md-5(titulo="Clases de fichas técnicas" :icono="require('@/assets/curso/tema3/img04.svg')")
        h3 Clases de fichas técnicas
        p.mb-4 Para cada producto estandarizado se puede encontrar una ficha técnica, algunas de las más usadas en el área de confección son:
        .tarjeta.tarjeta--azul.p-4.mb-5
          SlyderA
            .row
              .col-lg-1
              .col-lg-3
                figure
                  img(src='@/assets/curso/tema3/img09.png')   
              .col-lg-8.d-flex.align-items-center
                div 
                  h4 Ficha técnica materiales e insumos
                  p Aquí se relacionan con fotografía o muestra física los insumos a utilizar la cantidad y consumo por unidad a producir, proveedor y precios.
            .row
              .col-lg-1
              .col-lg-3
                figure
                  img(src='@/assets/curso/tema3/img10.png')   
              .col-lg-8.d-flex.align-items-center
                div 
                  h4 Ficha técnica de diseño
                  p Es importante anexar dibujo plano, frontal, posterior y lateral con lupas para enfocar detalles del diseño, define, materiales e insumos a realizar, definir accesorios y requerimientos a cumplir, además observaciones importantes a tener en cuenta en los siguientes procesos.
            .row
              .col-lg-1
              .col-lg-3
                figure
                  img(src='@/assets/curso/tema3/img11.png')   
              .col-lg-8.d-flex.align-items-center
                div 
                  h4 Ficha técnica patronaje
                  p Para este documento se puede agregar esquema en miniatura de cada una de las piezas que conforman la prenda, tolerancias y medidas durante el proceso de costura, después del lavado y terminada el proceso de confección.
            .row
              .col-lg-1
              .col-lg-3
                figure
                  img(src='@/assets/curso/tema3/img12.png')   
              .col-lg-8.d-flex.align-items-center
                div 
                  h4 Ficha técnica trazo y corte
                  p Contiene número de orden de corte, relación de materiales, colores y tallas a cortar, despiece de la prenda, número de capas y observaciones pertinentes al proceso.
            .row
              .col-lg-1
              .col-lg-3
                figure
                  img(src='@/assets/curso/tema3/img13.png')   
              .col-lg-8.d-flex.align-items-center
                div 
                  h4 Ficha técnica de calidad
                  p Recoge información pertinente a los requisitos a cumplir en la prenda de vestir, puede incluir procedimientos importantes con el paso a paso, explicar método utilizado para revisión.


      
      .py-4.py-md-5(titulo="Interpretación" :icono="require('@/assets/curso/tema3/img05.svg')")
        .row          
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img14.png')       
          .col-lg-8
            h3 Interpretación
            p.mb-4 La correcta interpretación de la cada una de las fichas técnicas que intervienen en la producción de una prenda de vestir ayuda a garantizar la uniformidad de los procesos y tener presentes aspectos cuantitativos como son las medidas y cualitativos que se refiere a la presentación de producto, de tal manera que llegue al cliente final el producto diseñado sin involucrar variaciones o modificaciones no autorizadas.
            p Por tanto, en la interpretación y control de calidad se debe procurar el cumplimiento en los requisitos de calidad por cada área. 
            
      .py-4.py-md-5(titulo="Elaboración" :icono="require('@/assets/curso/tema3/img06.svg')")
        .row          
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img15.png')       
          .col-lg-8
            h3 Elaboración
            p.mb-4 Para la elaboración de la ficha técnica se puede diseñar o utilizar un formato existente, lo importante será que tenga presente:
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | La información del diseño.
              li 
                i.fas.fa-angle-right
                | El dibujo plano del diseño.
              li 
                i.fas.fa-angle-right
                | Las indicaciones sobre materiales.
              li 
                i.fas.fa-angle-right
                | Instrucciones sobre: proceso operacional y requisitos de calidad.
              li 
                i.fas.fa-angle-right
                | La tabla de medidas y tolerancia.
              li 
                i.fas.fa-angle-right
                | La maquinaria a utilizar.
              li 
                i.fas.fa-angle-right
                | Las observaciones que sean necesarias para la confección de la prenda, por ejemplo: si se deben separar piezas para estampar (cuáles y cuantas), si es necesario realizar lavado después de la confección o si requiere bordados, entre otros. 
              li 
                i.fas.fa-angle-right
                | Definir el empaque y sus características.
              li 
                i.fas.fa-angle-right
                | Especificaciones sobre accesorios a incluir.

</template>

<script>
export default {
  name: 'Tema3',
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
