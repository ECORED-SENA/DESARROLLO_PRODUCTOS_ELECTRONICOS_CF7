<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Normatividad técnica
    
    .row.mb-5
      .col-12.col-md-4.mb-3.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/t1-1.svg', alt='Texto que describa la imagen')
      .col-12.col-md-8(data-aos="fade-left")
        p Existe una regulación en el montaje de circuitos y tarjetas electrónicas, las cuales van desde la estética en el diseño y la funcionalidad, hasta las condiciones de operación y afectación al medio ambiente y salud de las personas en contacto con el producto electrónico final.
        .cajon.bgr.p-4.mb-3
          p.mb-0 Es obligatorio seguir estas regulaciones, sobre todo si el producto a desarrollar pretende ser comercializado, porque debe pasar por una serie de pruebas técnicas que tienen como propósito validar el cumplimiento de los parámetros establecidos en las normas .
        p Las normas aplicadas a la fabricación de circuitos impresos son conocidas como las normas IPC (<em>Institute of Printed Circuit</em> por sus siglas en inglés, creadas por la <em>Association Connecting Electronics Industries</em>). Algunas de ellas son de carácter privado y normalmente se requiere de licenciamiento para su consulta y aplicación, aunque hay procesos que son de seguimiento estándar y aplican para toda la fase de fabricación.
    
    .row.bgr_1.justify-content-center.py-5
      .col-12.col-md-10
        p La figura 1 permite visualizar las diferentes normas y su aplicación. 
        .bgr_2.p-4
          .titulo-sexto.color-acento-contenido(data-aos="fade-down-right")
            h5 Figura 1
            span Normas IPC y aplicación según componente en la tarjeta
          figure(data-aos="zoom-in")
            img.mb-3(src='@/assets/curso/tema1/t1-2.svg', alt='Texto que describa la imagen')
            figcaption Nota. Adaptado de Adeltatec (2018).
    
    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Alcance y aplicabilidad en montaje de tarjetas de circuito impreso
    
    .row.mb-5
      .col-12.col-md-8.mb-3.mb-md-0(data-aos="fade-left")
        p Las tarjetas de circuito impreso son utilizadas prácticamente en todos los productos electrónicos, es así como hasta el producto electrónico más diminuto hace uso de ellas. A continuación se presenta una comparación de sus diseños conforme avanzó el tiempo.
        TabsC.color-acento-contenido.bgr_4
          .py-3.p-md-5(titulo="Placa antigua")
            .row
              .col-md-6.mb-3.mb-md-0
                .bgr_3.p-3
                  p.text-bold.mb-0.text-white Antigua placa de circuito impreso
                figure
                  img(src='@/assets/curso/tema1/t1-4.png', alt='Texto que describa la imagen')
                  figcaption Nota. Tomada de CIFPN1 (s.f.).
              .col-md-6.mb-4.mb-md-0.p-3.p-md-0
                p.text-bold.clr Placa antigua
                p Antes del circuito impreso era normal encontrar diseños electrónicos que demandaban muchos cables, lo que redunda en mal funcionamiento del equipo debido al ruido electromagnético generado y absorbido; esto además hacía que la labor de mantenimiento fuera muy compleja y frecuente.
          .py-3.p-md-5(titulo="Placa moderna")
            .row
              .col-md-6.mb-3.mb-md-0
                .bgr_3.p-3
                  p.text-bold.mb-0.text-white Circuito impreso moderno 
                figure
                  img(src='@/assets/curso/tema1/t1-5.png', alt='Texto que describa la imagen')
                  figcaption Nota. Tomada de CIFPN1 (s.f.).
              .col-md-6.mb-4.mb-md-0.p-3.p-md-0
                p.text-bold.clr Placa moderna
                p Las tarjetas electrónicas modernas utilizan un sustrato no conductor de la electricidad, normalmente baquelita; sobre este sustrato se embalsa una capa de un material conductor, generalmente cobre. Luego sobre este, se dibujan las pistas que harán de conductores para posteriormente eliminar el cobre sobrante. 
                p Lógicamente este proceso ha venido evolucionando, manteniéndose el principio del sustrato y el conductor, cambiando los procesos de eliminación del cobre sobrante
      .col-12.col-md-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/t1-3.svg', alt='Texto que describa la imagen')   

    .bg_grad-02
      .row.mb-5
        .col-12.col-md-4
          p.pst La aplicación de estas tarjetas de circuito impreso permitió minimizar los diseños, haciendo productos más pequeños y eficientes en términos energéticos, lo que conllevó al uso de baterías y contribuyó con su portabilidad, como característica principal. De igual forma, a medida que los componentes se hicieron más reducidos, también se surge la necesidad de crear placas más pequeñas con pistas más delgadas, evolucionando también su proceso de fabricación, tal como se presentan en las siguientes imágenes de equipos de comunicación. 
        .col-12.col-md-4.pe-md-0.mb-3.mb-md-0(data-aos="flip-up")
          .bgr_3.p-3
            p.text-bold.mb-0.text-white Equipo de comunicaciones antiguo
          figure
            img(src='@/assets/curso/tema1/t1-6.png', alt='Texto que describa la imagen')
            figcaption Nota. Tomado de Mlstatic (s.f.). 
        .col-12.col-md-4.ps-md-0(data-aos="flip-down")
          .bgr_3.p-3
            p.text-bold.mb-0.text-white Equipo de comunicaciones compacto
          figure
            img(src='@/assets/curso/tema1/t1-7.png', alt='Texto que describa la imagen')
    
    .bg_grad-03
      separador

      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Procedimientos y criterios de inspección de calidad en ensamble electrónico
      
      .row.mb-5
        .col-12.col-md-6
          p La norma más comúnmente usada en la inspección de circuitos electrónicos es la norma IPC610 (www.ipc.org), la cual establece el estándar de calidad para circuitos electrónicos que sirven como guía para el diseño, montaje, ensamble, inspección, cables, insumos de soldadura, pruebas y otros elementos. El cumplimiento de estas normas permite hablar el mismo lenguaje en productores y consumidores; también, contribuyen a que estos encajen perfectamente en cualquier lugar del mundo sin problemas de compatibilidad.
          .bgr_5.p-4.mb-3(data-aos="flip-right")
            p.mb-0 Una inspección visual a un producto electrónico permite verificar el cumplimiento de algunos parámetros establecidos, es así como puntos de soldadura mal puestos, elementos mal colocados, pistas que no cumplen reglas de diseño, son indicadores de que no se cumplieron los procedimientos de ensamble del      producto .
          p Es necesario consultar las normas para tener claro cuáles son estos criterios de aceptabilidad de un producto electrónico, la siguiente figura 2 expone la función de cada una.
        .col-12.col-md-6(data-aos="flip-left")
          figure
            img(src='@/assets/curso/tema1/t1-8.png', alt='Texto que describa la imagen')
      
      .row.justify-content-center
        .col-12.col-md-10
          .titulo-sexto.color-acento-contenido(data-aos="fade-down-right")
            h5 Figura 2
            span Tipos de normas
          .row.bg_grad-04(data-aos="zoom-out")
            .col-12.col-md-7
              SlyderF.pst(columnas="col-lg-12 col-xl-6")
                .tarjeta.bgr_6.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema1/t1-10.svg' alt='AvatarTop')
                  p.text-bold.text-center Norma IPC 600 
                  p.text-center Para la Inspección de PCB sin ensamblar. Esta es usada por todos los fabricantes de circuito impreso o PCB.
                .tarjeta.bgr_6.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema1/t1-10.svg' alt='AvatarTop')
                  p.text-bold.text-center Norma JSTD-001
                  p.text-center Para requerimientos de soldaduras, fluxes, limpiadores. Esta la usan los soldadores y ensambladores.
                .tarjeta.bgr_6.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema1/t1-10.svg' alt='AvatarTop')
                  p.text-bold.text-center Norma IPC 620 
                  p.text-center Para aceptación de cables y arneses, de industrias como maquinaria, automotriz y espacial.
                .tarjeta.bgr_6.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema1/t1-10.svg' alt='AvatarTop')
                  p.text-bold.text-center Norma IPC 7711/21 
                  p.text-center Para reparación, retrabajo o modificación de placas de circuito impreso.
                .tarjeta.bgr_6.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema1/t1-10.svg' alt='AvatarTop')
                  p.text-bold.text-center Norma IPC 2221 
                  p.text-center Diseño de placas de circuito impreso.
            .col-12.col-md-5
              figure
                img(src='@/assets/curso/tema1/t1-9.svg', alt='Texto que describa la imagen')
    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Requisitos de aceptabilidad de ensambles eléctricos y electrónicos soldados
    
    .row.mb-5
      .col-12.col-md-1.mb-3.mb-md-0
        figure.d-flex.justify-content-center
          img.img90(src='@/assets/curso/tema1/t1-11.svg', alt='Texto que describa la imagen')
      .col-12.col-md-11
        p Una simple inspección visual puede arrojar resultados de un producto no conforme. Soldaduras mal puestas, chasis mal fijado, tornillería fuera de parámetros, pueden arrojar la no satisfacción de un producto electrónico. 
    
    .row
      .col-12.col-md-3.mb-3.mb-md-0(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.img300(src='@/assets/curso/tema1/t1-12.svg', alt='Texto que describa la imagen')
      .col-12.col-md-9(data-aos="fade-left")
        AcordionA.bgr_8(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Pistas conductoras").p-4
            .col-md-7.mb-4.mb-md-0.d-flex.align-items-center
              p Es común cometer el error de las pistas conductoras en la placa, ya que  no debe haber pista con ángulos de 90°. 
            .col-md-5
              .bgr_7.p-3
                p.mb-0.text-bold Error en pistas de circuito impreso
              figure
                img(src='@/assets/curso/tema1/t1-6.png', alt='Texto que describa la imagen')
          .row(titulo="Distribución de componentes").p-4
            .col-md-7.mb-4.mb-md-0.d-flex.align-items-center
              p Otro parámetro para tener en cuenta es la distribución de los componentes electrónicos en la placa, muchos <em>software</em> de modelado de tarjetas lo hacen automáticamente y algunos parámetros ya están establecidos, sin embargo muchas veces se hace necesario reordenar algunos componentes, sobre todo el de separar la parte análoga de la parte digital, en las tarjetas que contienen estos dos tipos de componentes.
            .col-md-5
              figure
                img(src='@/assets/curso/tema1/t1-13.png', alt='Texto que describa la imagen')
          .row(titulo="Planos de tierra").p-4
            .col-md-7.mb-4.mb-md-0.d-flex.align-items-center
              div
                p Los planos de tierra deben estar bien definidos. Esta parte es muy importante, ya que estos ayudan al mejoramiento de la compatibilidad electromagnética como también en el acople de la red, el cual a su vez es fundamental para eliminar los ruidos producidos en la fuente de poder.
                p La pista de tierra en paralelo con la pista de alimentación de la fuente, proporcionan un capacitor que ayuda al acople de la red. Este sistema funciona mejor en placas multicapa.
            .col-md-5
              figure
                img(src='@/assets/curso/tema1/t1-14.png', alt='Texto que describa la imagen')
          .row(titulo="Apantallamiento").p-4
            p En tarjetas dedicadas a la transmisión y recepción de señales, es importante contar con un apantallamiento, ya que esta pantalla, es la que no permite la emisión ni la recepción de ruido electromagnético.
            .row.mb-3
              .col-md-6
                .bgr_7.p-3
                  p.mb-0.text-bold.text-center La pista gruesa en relieve denota un apantallamiento
                figure
                  img(src='@/assets/curso/tema1/t1-15.png', alt='Texto que describa la imagen')
              .col-md-6
                .bgr_7.p-3
                  p.mb-0.text-bold Otro tipo de apantallamiento
                figure
                  img(src='@/assets/curso/tema1/t1-16.png', alt='Texto que describa la imagen')
            p.mb-0 Una pantalla no es más que una protección metálica conectada al polo a tierra por lo que envía el ruido eléctrico hacia tierra, disminuyendo la emisión de electromagnetismo e impidiendo que el externo llegue a los circuitos. Una tarjeta dedicada a comunicaciones normalmente debe venir con este sistema, el no tenerlo es causal de no conformidad.

    p En equipos biomédicos, las normas son extremas, estas deben regirse a normatividad especial, lo mismo que para la aeronáutica. Normalmente el desarrollo de estos productos requiere de un estudio especializado, con los permisos debidos .

               
      

            

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass"></style>
