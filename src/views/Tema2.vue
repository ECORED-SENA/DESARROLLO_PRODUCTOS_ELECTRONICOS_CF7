<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Seguridad y salud en el trabajo
    
    .row.mb-5
      .col-12.col-md-3.mb-3.mb-md-0(data-aos="fade-right")
        p En Colombia el sistema de seguridad y salud en el trabajo (SST), está definido por la ley 1552 de 2012 y regulado por la resolución 0312 de 2019. En el área de electrónica se aplica más que todo el séptimo estándar de esta resolución, el cual tiene que ver con la aplicación de medidas de prevención y control frente a todos los peligros y riesgos identificados. Los riesgos al trabajar con equipos electrónicos son inherentes y se debe tener especial cuidado cuando es necesario trabajar con ellos energizados.
      .col-12.col-md-4.mb-3.mb-md-0(data-aos="flip-up")
        figure
          img(src='@/assets/curso/tema2/t2-1.png', alt='Texto que describa la imagen')
      .col-12.col-md-5(data-aos="fade-left")
        p Este sistema está definido como aquella disciplina que busca los riesgos presentados al ejecutar una labor y evitar que se presenten problemas. Este ha venido evolucionando, inicialmente se le conocía como salud ocupacional, pero a medida que se modernizan las leyes, le han cambiado el nombre hasta que la última definición quedó como SG-SST (Sistema de Gestión de la Seguridad y Salud en el Trabajo).
        .cajon.bgr.p-4.mb-3
          p.mb-0 La ley 1562 del 2012 lo define como: “Es el conjunto de entidades públicas y privadas, normas y procedimientos, destinados a prevenir, proteger y atender a los trabajadores de los efectos de las enfermedades y los accidentes que puedan ocurrirles con ocasión o como consecuencia del trabajo que desarrollan”.
    
    .row
      .col-12.col-md-4
        figure
          img(src='@/assets/curso/tema2/t2-2.svg', alt='Texto que describa la imagen')
      .col-12.col-md-8.position-relative
        div.mb-3.bg_grad-05.p-4(data-aos="fade-right")
          p.mb-0 En términos generales toda empresa dedicada a la producción sin importar si es pública o privada, debe implementar un sistema de seguridad y salud en el trabajo. Consiste en el desarrollo de un proceso organizado y bien planificado para anticipar, reconocer, evaluar y controlar los riesgos que se puedan presentar y que afectan la seguridad y la salud del personal que labora. 
          p.text-end.clr.text-bold.me-5 (Ministerio del trabajo, s.f.)
        img.pst_1.img30(src='@/assets/curso/tema2/Icon awesome-quote-right.svg', alt='Texto que describa la imagen')
        img.pst_2.img30(src='@/assets/curso/tema2/Icon awesome-quote-right.svg', alt='Texto que describa la imagen')
        p(data-aos="fade-left") La aplicación de este sistema mejora el ambiente laboral, el bienestar de los trabajadores, evitando ausentismo por enfermedad, pero el mayor impacto se da, al reducir la tasa de accidentalidad y una amplia mejora de la productividad, además que al implementar el sistema ayuda con el cumplimiento de las normas, por parte de las empresas y empleadores .
        p(data-aos="fade-right").text-bold.clr_1 Existen referencias de empresas que mejoraron considerablemente su producción y posteriormente las ventas, solo con implementar un buen sistema de seguridad y salud en el trabajo.
  
    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Seguridad física y elementos de protección personal
    
    .row.mb-5
      .col-12.col-md-6(data-aos="fade-right")
        p El sistema de implementación de seguridad física debe involucrar tanto a la persona como a los equipos, ya que un equipo o herramienta en mal estado, también influye en la salud de las personas, es más, se extiende al plan de protección de datos de la empresa: todo aquello que involucre un riesgo físico para un equipo, también lo es para las personas aunque sea de manera indirecta. De ahí la importancia del uso adecuado de los elementos de protección personal - EPP.
        p Todos los requerimientos para la implementación de EPP en los lugares de trabajo para un ambiente saludable se encuentran contemplados en la Ley 9 de enero 24 de 1979 (Título III, artículos 122 a 124) y en la Resolución 2400 de mayo 22 de 1979 (Título IV, Capitulo II, artículos 176 a 201).
      .col-12.col-md-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/t2-3.png', alt='Texto que describa la imagen')

    p.mb-5 Es importante saber seleccionar los elementos de protección, porque un mal uso de ellos puede incurrir en accidentes. Dentro de los elementos más comunes se encuentran, ver figura 3:

    .bg_grad-06(data-aos="zoom-in")
      .row.justify-content-center.mb-5
        .col-12.col-md-10
          .titulo-sexto.color-acento-contenido.text-white(data-aos="fade-down-right")
            h5 Figura 3
            span Elementos de protección personal
        SlyderF.pst(columnas="col-lg-6 col-xl-6")
          .tarjeta.bgr_9.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                figura.mb-3.d-flex.justify-content-center
                  img.img160(src='@/assets/curso/tema2/t2-4.svg' alt='AvatarTop')
              p.text-bold.text-center Protección para el oído 
            p.text-center Protectores auditivos de inserción, tipo tapón desechable, reutilizable o pre-moldeable. Supraaurales, tipo disco plano. Supraaurales, tipo banda ajustable. Circumaurales, tipo orejera universal, tipo orejeras con arnés, fijo de cabeza, fijo de barbilla, fijo de nuca. Tipo cascos antirruido, tipo orejeras acopladas a casco. Circuitos electrónicos incorporados, del tipo dependientes del nivel y con aparatos de intercomunicación.
          .tarjeta.bgr_9.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                figura.mb-3.d-flex.justify-content-center
                  img.img160(src='@/assets/curso/tema2/t2-5.svg' alt='AvatarTop')
              p.text-bold.text-center Protección para la cabeza 
            p.text-center Cascos de seguridad, los cuales están clasificados en categoría A, B, C y D. Prendas de protección para la cabeza, tales como, gorros, gorras, sombreros, de tejido recubierto. Cascos para usos especiales en fuego, cascos reflectantes.
          .tarjeta.bgr_9.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                figura.mb-3.d-flex.justify-content-center
                  img.img160(src='@/assets/curso/tema2/t2-5.svg' alt='AvatarTop')
              p.text-bold.text-center Protección para los ojos y la cara 
            p.text-center Lentes de seguridad tipo montura universal, montura integral, montura cazoletas. Pantallas faciales. Pantallas para soldadores de mano, de cabeza, acoplables a casco de protección. Lentes para usos especiales para trabajos con Rayos X, Rayos Ultravioleta, agentes biológicos y químicos.
          .tarjeta.bgr_9.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                figura.mb-3.d-flex.justify-content-center
                  img.img160(src='@/assets/curso/tema2/t2-7.svg' alt='AvatarTop')
              p.text-bold.text-center Protección para las vías respiratorias 
            p.text-center Equipos filtrantes de partículas molestas, nocivas, tóxicas o radiactivas; filtrantes combinados frente a gases y vapores; suministradores de aire, con casco o pantalla para soldadura, con máscara amovible para soldadura, para trabajos bajo el agua.
          .tarjeta.bgr_9.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                figura.mb-3.d-flex.justify-content-center
                  img.img160(src='@/assets/curso/tema2/t2-9.svg' alt='AvatarTop')
              p.text-bold.text-center Protección de manos y brazos 
            p.text-center Guantes contra vibración, guantes contra riesgo mecánico, riesgo químico, riesgo biológico, riesgo eléctrico, riesgo de origen térmico y radiaciones, manoplas.
          .tarjeta.bgr_9.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                figura.mb-3.d-flex.justify-content-center
                  img.img160(src='@/assets/curso/tema2/t2-8.svg' alt='AvatarTop')
              p.text-bold.text-center Protección de piernas 
            p.text-center Calzado de seguridad, calzado ocupacional  para riesgo eléctrico y químico; botas de goma o caucho,  protección contra el calor o el frío, rodilleras.
          .tarjeta.bgr_9.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                figura.mb-3.d-flex.justify-content-center
                  img.img160(src='@/assets/curso/tema2/t2-6.svg' alt='AvatarTop') 
            p.text-center Adicionalmente existen protectores de la piel como cremas de protección contra radiaciones por trabajo al aire libre; protectores del tronco y el abdomen como, chalecos, chaquetas y cotonas de protección contra el riesgo mecánico, químico, resistentes a la temperatura, chalecos salvavidas, delantales de protección contra los rayos x , cinturones de sujeción del tronco, equipos de protección contra las caídas distinto nivel tipo arnés, cinturones de posicionamiento, dispositivos de caídas de tipo deslizante, dispositivos con amortiguador, ropa de protección contra proyecciones de metales en fusión y radiaciones infrarrojas.


    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Recomendaciones de trabajo con computadores
    
    .row.mb-5  
      .col-12.col-md-3.mb-3.mb-md-0(data-aos="flip-left")
        p El trabajo con computadores requiere de medidas especiales, si el trabajo no involucra la fuente de poder, el mayor riesgo es para el equipo, normalmente los módulos del computador trabajan con bajas tensiones. El principal cuidado que se debe tener es al trabajar con discos duros, debido a que estos funcionan con magnetismo y exponerlos a campos magnéticos intensos, puede borrar los datos grabados en este, así que es necesario utilizar destornilladores no imantados.
      .col-12.col-md-4.mb-3.mb-md-0
        figure
          img(src='@/assets/curso/tema2/t2-10.png', alt='Texto que describa la imagen')
      .col-12.col-md-5(data-aos="flip-right")
        span No se debe abrir un disco duro (HDD) si no se cuenta con un cuarto limpio. 
        span.clr.text-bold Una partícula de polvo, por minúscula que parezca, puede ocasionar un mal funcionamiento de este, 
        | normalmente rayones en la superficie del disco duro, daño que es irreversible y que incurre en pérdida irrecuperable de datos.
        .cajon.bgr_10.p-4.mt-3
          p.mb-0 Los módulos electrónicos de los equipos de cómputo, por su parte, son sensibles a las descargas electrostáticas; es así como se debe usar una protección especial para trabajar con estos, la cual puede ser una manilla o una manta antiestática; de no contar con estos elementos, se debe descargar el cuerpo agarrando periódicamente una superficie metálica conectada a tierra.
      
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/t2-11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 No se debe usar manilla antiestática cuando se trabaja con la fuente de poder, la razón es que la manilla representa una conexión a tierra y el positivo de la fuente de poder queda referenciado a tierra con una diferencia de potencial de 340 voltios, con una corriente relativamente alta, lo que puede representar un daño considerable al cuerpo, además de que si la descarga es de mano a mano, involucra al corazón. 


      

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

<style lang="sass"></style>
