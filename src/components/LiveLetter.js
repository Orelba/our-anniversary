import { Typewriter } from 'react-simple-typewriter'

export function LiveLetter() {
  const letterText = `
  Hola kofifa ktana sheli.
  Hoy cumplimos un año juntos,
  agradezco mucho al mundo, a tu mamá y a tinder (jaja) por poder tener la oportunidad de conocerte.
  Me encanta tu espíritu, cuando me haces bailar aunque yo no sepa hacerlo,
  me encanta escucharte, ver películas contigo, ir a comer juntos (Quieres ir a Juana Juana?), visitar lugares nuevos,
  hacer lo que nos de las ganas, desactivar bombas, quemar el horno, todo! Quiero seguir haciendo muchas cosas contigo para siempre.
  Eres muy importante para mí, siempre eres la primera persona en escuchar todo lo que quiero contar y me encanta escuchar tu opinion.
  Siento que cada día me enamoro de ti de nuevo, y más fuerte. eres la persona más wow que existe, más bonita que existe, de afuera y por dentro igualmente.
  Te agradezco por estar aquí para mí todos los días, siempre me apoyas y me ayudas,
  siempre me haces reír cuando estoy triste, eres la mejor novia que podría pedir.
  Aquí te dejo unos momentos bonitos contigo que nunca voy a olvidar, empezando con el día que nos conocimos.
  Nos deseo muchos años más de momentos así. 
  Te amo con todo mi corazón!
  `

  return (
    <div className='live-letter-container'>
      <Typewriter 
        words={[letterText]}
        cursor={true}
        cursorStyle='<3'
      />
    </div>
  )
}