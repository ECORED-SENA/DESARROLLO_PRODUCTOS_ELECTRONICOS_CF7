<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Riesgos en ensamble electrónico
    
    .row
      .col-12.col-md-3.mb-3.mb-md-0(data-aos="fade-right")
        p Cuando se trabaja con ensambles eléctricos se pueden enfrentar riesgos de diferentes tipos, siendo el eléctrico el más común. Aunque también existen riesgos de tipo mecánico, sobre todo cuando se está fabricando la placa de circuito impreso y dependiendo del tipo de fabricación que se esté utilizando, se pueden enfrentar riesgos de cortes en la piel, riesgos de esquirlas de material en los ojos, incluso riesgo químico si el trabajo de soldadura es manual, ya que los vapores emanados al soldar pueden ser inhalados ocasionando problemas respiratorios.
      .col-12.col-md-4.mb-3.mb-md-0
        figure
          img(src='@/assets/curso/tema3/t3-1.png', alt='Texto que describa la imagen')
      .col-12.col-md-5(data-aos="fade-left")
        p Otro riesgo ocurre cuando se trata de trabajos con módulos que se encuentran instalados en las alturas, tal es el caso de módulos de telecomunicaciones, que normalmente se encuentran en antenas a alturas considerables; en este caso, es necesario considerar el trabajo seguro en altura, tema también regulado en Colombia por la Resolución 1409 de 2012.
        .cajon.bgr.p-4(data-aos="flip-up")
          p.mb-0 Por otra parte, algunos componentes electrónicos pueden explotar, tal es el caso de los capacitores mal polarizados, dependiendo de la capacitancia, lo que puede ocasionar daños en los ojos y el rostro. Los elementos de potencia, como SCR y demás tiristores, también pueden explotar y expulsar esquirlas en forma de proyectil, si son sometidos a cortocircuito de altas corrientes.

    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Concepto y afectaciones de descargas electroestáticas y sobrecargas eléctricas
    
    .row.mb-5
      .col-12.col-md-6.mb-3.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/t3-2.png', alt='Texto que describa la imagen')
      .col-12.col-md-6(data-aos="fade-left")
        p Se produce una descarga eléctrica cuando se hace circular una corriente de electrones a través de un cuerpo. Se considera una sobrecarga, cuando esta corriente supera el límite soportado por este cuerpo conductor de la electricidad. El concepto de descargas eléctricas tiene dos puntos de enfoque: desde la afectación al cuerpo humano y la afectación al equipo electrónico.
        .cajon.bgr_10.p-4
          p.mb-0 En el cuerpo humano una corriente de más de 25 mA se considera sobrecarga y puede ocasionar daños severos e irreversibles, si esta corriente circula por órganos importantes, puede ocasionar la muerte.
    
    .row
      .col-12.col-md-6(data-aos="fade-left")
        p El Reglamento técnico de instalaciones eléctricas (RETIE), es un documento técnico válido para Colombia emitido por el Ministerio de Minas y Energía. Este reglamento tiene como anexo la norma NTC 2050 que indica el Código Eléctrico Colombiano vigente desde noviembre de 1998. En este reglamento se definen algunos parámetros para el trabajo con equipos electrónicos.
        .bgr_11.p-4
          span.text-bold.clr Las descargas en los equipos electrónicos se pueden evitar. 
          | En términos generales para los trabajos de mantenimiento, es suficiente con usar manillas o mantas electrostáticas para evitar sobrecargas a los elementos sensibles. Estos accesorios ayudan a proteger los elementos electrónicos, pero aumentan el riesgo a la persona ya que lo conectan directamente a tierra, exponiéndola a sobrecargas, por eso es importante identificar los elementos con los que se pueden trabajar; por ejemplo, y como norma general, no se deben usar accesorios para electricidad estática con los equipos energizados.
      .col-12.col-md-6(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/t3-3.png', alt='Texto que describa la imagen') 
    
    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Formas de uso y mantenimiento de accesorios
    
    .row.mb-5
      .col-12.col-md-1.mb-3.mb-md-0
        figure.d-flex.justify-content-center
          img.img90(src='@/assets/curso/tema3/t3-4.svg', alt='Texto que describa la imagen')
      .col-12.col-md-11
        p Los accesorios para eliminación de cargas electrostáticas incluyen desde las manillas o brazaletes, hasta las mantas electrostáticas, y también se incluyen las bolsas y esponjas para almacenar elementos electrónicos sensibles a estas descargas. Las manillas se colocan en una mano y debe haber contacto físico galvánico, con la piel, el conductor de la manilla envía las descargas electrostáticas a la conexión a tierra. 
    
    p.text-center A continuación se presentan algunos de estos accesorios.
    
    .row.mb-5
      .col-12.col-md-4.mb-3.mb-md-0(data-aos="flip-up")
        .bgr_3.p-3
          p.mb-0.text-white.text-center.text-bold Contactos eléctricos de la manilla antiestática
        figure
          img(src='@/assets/curso/tema3/t3-5.png', alt='Texto que describa la imagen')
          figcaption Nota. Tomado de KMS (2007)
      .col-12.col-md-4.mb-3.mb-md-0(data-aos="flip-down")
        .bgr_3.p-3
          p.mb-0.text-white.text-center.text-bold Bolsa antiestática
        figure
          img(src='@/assets/curso/tema3/t3-6.png', alt='Texto que describa la imagen')
          figcaption Nota. Zidane2k1(2007)
      .col-12.col-md-4(data-aos="flip-up")
        .bgr_3.p-3
          p.mb-0.text-white.text-center.text-bold Espuma antiestática
        figure
          img(src='@/assets/curso/tema3/t3-7.png', alt='Texto que describa la imagen')
          figcaption Nota. Cyril Mechkov (2008)
    
    p El mantenimiento más común de estos accesorios consiste en conservar con buena conductividad los contactos eléctricos. Es común que con el sudor de la piel, estos tienden a oxidarse, lo que evita la buena conducción eléctrica y las hace ineficientes. Las mantas deben permanecer limpias y despejadas de objetos, sobre todo de bolsas plásticas que evitan una buena conductividad eléctrica con las manos que entran en contacto.
  
    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Características e impacto de la compatibilidad electromagnética
    
    .row.mb-5
      .col-12.col-md-4.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/t3-8.png', alt='Texto que describa la imagen')
      .col-12.col-md-8.mb-3.mb-md-0(data-aos="fade-left")
        p.mb-0  Todo equipo electrónico, necesita de un fluido eléctrico para su funcionamiento. Por regla este fenómeno físico lleva asociado un campo magnético; es decir, todo electrón fluyendo a través de un conductor lleva asociado un campo magnético, el cual se manifiesta como líneas de flujo magnético alrededor del conductor. 
        p Fue Michael Faraday en 1821 quien realizó los estudios que llevaron a entender mejor este fenómeno y a darle una utilidad práctica, revolucionando por completo el mundo que conocíamos hasta el momento.
        .row
          .col-12.col-md-7.mb-3.mb-md-0
            .cajon.bgr_10.p-4
              p.mb-0 Ahora bien, lo contrario también es cierto, un campo magnético en movimiento cruzando a un conductor, ocasionará que los electrones se muevan. Este fenómeno tiene mucha aplicación y fue lo que permitió la construcción de los generadores eléctricos así como también la trasmisión de señales a través del espacio vacío; esto dio origen a las telecomunicaciones.
          .col-12.col-md-5
            figure
              img(src='@/assets/curso/tema3/t3-9.svg', alt='Texto que describa la imagen')
      .col-12.col-md-9.pst_3(data-aos="fade-right")
        p Resulta que las emisiones de señales pueden ser perjudiciales para otros equipos, si no son controladas; son múltiples la señales electromagnéticas emitidas día a día, solo imagina, cada emisora de radio, cada canal de televisión, cada aparato de celular, funcionan por señales que viajan en el espacio, es natural pensar que la señal que emite mi celular puede afectar al de mi compañero, o a otro equipo como el televisor o radio, es así en realidad, pero el desarrollador de estos equipos debe tener en cuenta estos parámetros e incluirlos en el diseño. A continuación en la figura 4 se presenta un ejercicio que se puede realizar como comprobación de lo que se ha expuesto.
    
    .bg_grad-07
      .row.justify-content-center.mb-3
        .col-12.col-md-10
          .titulo-sexto.color-acento-contenido(data-aos="fade-down-right")
            h5 Figura 4
            span Ejercicio
          .row.p-3.p-lg-3.p-xl-5.bg_grad-08(data-aos="zoom-out")
            .col-12.col-md-7.d-flex.align-items-center
              div
                h3.clr_2 Ejercicio 
                p.text-white Encender el radio de la casa y sintonizar una frecuencia que no esté emitiendo nada, es decir, desplazarse a una frecuencia que no esté siendo utilizada; este experimento funciona mejor en banda A.M.
                p.text-white.mb-0 Ahora se acerca el control remoto de un televisor y se presiona cualquier tecla. Se notará que, aunque el control no entra en contacto con el radio, se puede escuchar un sonido cada vez que se presiona una tecla, haciendo evidente que el control remoto del televisor interfiere con el radio. Si está lloviendo, también se puede observar que cada vez que hay un relámpago, este interfiere en el radio.
            .col-12.col-md-5
              figure
                img(src='@/assets/curso/tema3/t3-10.svg', alt='Texto que describa la imagen')
      
      p.text-center.text-bold Todo diseñador de equipos electrónicos debe tener en cuenta estos aspectos:

      .row.mb-5.justify-content-center
        .col-12.col-md-3.mb-3.mb-md-0
          .bgr_9.p-4.h-100
            figure.d-flex.justify-content-center.mb-3
              img.img90(src='@/assets/curso/tema3/t3-11.svg', alt='Texto que describa la imagen')
            p.text-center Asegurar que las señales electromagnéticas en su trayectoria no sean afectadas por perturbaciones electromagnéticas.
        .col-12.col-md-3.mb-3.mb-md-0
          .bgr_9.p-4.h-100
            figure.d-flex.justify-content-center.mb-3
              img.img90(src='@/assets/curso/tema3/t3-12.svg', alt='Texto que describa la imagen')
            p.text-center Evitar que se generen perturbaciones electromagnéticas.
        .col-12.col-md-3
          .bgr_9.p-4.h-100
            figure.d-flex.justify-content-center.mb-3
              img.img90(src='@/assets/curso/tema3/t3-13.svg', alt='Texto que describa la imagen')
            p.text-center Minimizar la sensibilidad a las perturbaciones electromagnéticas.
    
    .row
      .col-12.col-md-4.mb-3.mb-md-0(data-aos="fade-left")
        .cajon.bgr.p-4
          p.mb-0 Es aquí donde surge el estudio de la compatibilidad electromagnética, que busca minimizar los problemas ocasionados por las emisiones electromagnéticas en el diseño de tarjetas de circuito impreso. 
      .col-12.col-md-4.mb-3.mb-md-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema3/t3-14.png', alt='Texto que describa la imagen')
      .col-12.col-md-4(data-aos="fade-right")
        p Adicional a estos aspectos, es importante considerar la distribución óptima de los componentes con rutas de conexión y sistemas de tierra adecuada. Esto debe optimizarse en los diseños donde se trabajan con altas frecuencias, y en el que los problemas de acoplamientos electromagnéticos son más comunes, por lo que siempre hay que reforzar con sistemas de apantallamiento. Es necesario entonces recordar y considerar tanto la radiación emitida, como la absorbida.
      



          

      
      






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

<style lang="sass"></style>
