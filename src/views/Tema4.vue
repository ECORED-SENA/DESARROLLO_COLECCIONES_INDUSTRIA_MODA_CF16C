<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
        .titulo-principal__numero
          span 4
        h1 Especificaciones de calidad para elaboración de prendas
    
    figure.mb-4
      img(src='@/assets/curso/tema4/img01.png')  

    p.text-center Para la evaluación de los requisitos o especificaciones se deben tener presentes los siguientes aspectos: 
    
    TabsA.color-secundario.mb-5(style='position: relative')
      .tarjeta.t4-div1.p-4(titulo="Requisitos en materiales e insumos")
        
        .row
          .col-lg-9
            h3 Requisitos en materiales e insumos
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | La tela utilizada seleccionada debe estar libre de defectos, cumplir con las condiciones exigidas en el ancho de la tela, porcentaje de encogimiento, elongación, solidez al color según especificaciones de las normas, entre otros.
              li 
                i.fas.fa-angle-right
                | Los botones no deben tener rebabas, encajar sin dificultad, en el caso de broches o botones de golpe metálicos, deben ser anti oxidables.
              li 
                i.fas.fa-angle-right
                | Los encajes no deben presentar hebras sueltas o presentar malas terminaciones.
              li 
                i.fas.fa-angle-right
                | El elástico debe ser suave y con elongación uniforme, si el elástico tiene contacto con la piel, este debe ser afelpado.
              li 
                i.fas.fa-angle-right
                | El hilo debe ser resistente y suave al tacto. 
          .col-lg-3
            figure.mb-4
              img(src='@/assets/curso/tema4/img02.svg')          
                
      .tarjeta.t4-div1.p-4(titulo="Requisitos para el proceso de confección")
        h3 Requisitos para el proceso de confección       
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | Las costuras deben ser uniformes, con tensiones adecuadas según el material, sin saltos de costura (basta).
          li 
            i.fas.fa-angle-right
            | Puntadas por pulgada (PPP) o por centímetro (P cm) según las necesidades del material.
          li 
            i.fas.fa-angle-right
            | Las costuras se deben apreciar sin fruncidos e hilos sueltos.
          li 
            i.fas.fa-angle-right
            | Los remates deben ser los adecuados.
          li 
            i.fas.fa-angle-right
            | Las costuras con elásticos no deben romperse al estirar simulando condiciones normales.
          li 
            i.fas.fa-angle-right
            | La prenda no debe presentar manchas de aceite o suciedad.
          li 
            i.fas.fa-angle-right
            | El margen de costura de acuerdo a lo solicitado en la ficha técnica: (1/16”, 1/8, ¼, 1 cm, 1.5 cm).
          li 
            i.fas.fa-angle-right
            | Conservar simetrías en cuellos, perillas, pretina, dobladillos de botas de pantalón, mangas, piernas de panty o copas de brasier, entre otros.
          li 
            i.fas.fa-angle-right
            | Seleccionar y utilizar la máquina adecuada según el tipo de prenda y operación a realizar.
          li 
            i.fas.fa-angle-right
            | Usar guías y aditamentos que favorezcan la productividad del trabajador y los costos de la empresa.
          li 
            i.fas.fa-angle-right
            | Medidas y tolerancias deben estar dentro de los parámetros asignados en la ficha técnica signados por equipo de diseño y patronaje, según tabla de medidas y diseño desarrollado.
          li 
            i.fas.fa-angle-right
            | Toda prenda debe presentar buena apariencia. 

        
      .tarjeta.t4-div1.p-4(titulo="Requisitos para terminación")   
        h3 Requisitos para terminación
        .row
          .col-lg-9
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Los botones deben estar bien pegados.
              li 
                i.fas.fa-angle-right
                | El producto debe estar libre de hilos sobrantes, se sugiere que sea a ras.
              li 
                i.fas.fa-angle-right
                | El planchado debe ser uniforme y no presentar chafados, quemados, según el material se debe elegir el mejor sistema de planchado. 
              li 
                i.fas.fa-angle-right
                | Empaque rotulado: ganchos sin rebabas y bolsas en buen estado.
              
          .col-lg-3
            figure.mb-4
              img(src='@/assets/curso/tema4/img03.svg')  

        a.anexo.mb-4.mb-lg-0(href="http://biblioteca.sena.edu.co/paginas/bases.html" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Consulta la GTC 230 2012 guía para las buenas prácticas en la confección de prendas de vestir.</b> Podrás acceder a la base de datos del Icontec y consultar diferentes normas que tienen relación con el área de estudio.

        

      .tarjeta.t4-div1.p-4(titulo="Defectos en telas")
        h3 Defectos en telas
        p.mb-4 Son todas aquellas anomalías que se presentan durante el proceso de tejeduría y pueden ser causadas por problemas que tenga el material en el transcurso del proceso antes de llegar al telar, o por deficiencias tanto de la máquina como de los operarios; se mencionan en el siguiente documento:
        .row
          .col-lg-6
            a.anexo.mb-4(:href="obtenerLink('/downloads/CF16_C_4_Defectos.docx')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-doc.svg")
              .anexo__texto
                p Defectos en telas.
          .col-lg-6
            a.anexo.mb-4(:href="obtenerLink('/downloads/CF16_C_4_Niveles de defectos.docx')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-doc.svg")
              .anexo__texto
                p Niveles de defectos.
      .tarjeta.t4-div1.p-4(titulo="Herramientas y materiales de trabajo")
        
        .row
          .col-lg-7
            h3 Herramientas y materiales de trabajo
            p.mb-5 Para realizar una inspección de calidad o reconocer aspectos básicos, se han de usar las siguientes herramientas y conocer vocabulario técnico manejado en el área de confección.
            a.anexo.mb-4(:href="obtenerLink('/downloads/CF16_C_4_Materiales.docx')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-doc.svg")
              .anexo__texto
                p Herramientas y materiales de trabajo.
          .col-lg-5
            figure.mb-4
              img(src='@/assets/curso/tema4/img04.svg')  

      
</template>

<script>
export default {
  name: 'Tema4',
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
