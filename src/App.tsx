import './global.css'
import styles from './app.module.css'

import { Header } from '@/components/header'
import { Post } from '@/components/post'
import { Sidebar } from './components/sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/yale1995.png',
      name: 'Yale Henrique',
      role: 'Software Engineer @ Grupo Educacional RDP',
    },
    content: [
      {
        type: 'paragraph',
        text: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        text: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2025-05-10 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @ Rocketseat',
    },
    content: [
      {
        type: 'paragraph',
        text: 'E aí pessoal! 🔥',
      },
      {
        type: 'paragraph',
        text: 'Hoje terminei mais uma aula sobre React Hooks no canal da Rocketseat. Foi uma aula bem completa sobre useEffect e suas dependências.',
      },
      {
        type: 'paragraph',
        text: 'Quem assistiu, deixa nos comentários o que achou! 💜',
      },
      {
        type: 'link',
        text: 'youtube.com/rocketseat',
      },
    ],
    publishedAt: new Date('2025-05-15 14:30:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat',
    },
    content: [
      {
        type: 'paragraph',
        text: 'Bom dia, devs! ☀️',
      },
      {
        type: 'paragraph',
        text: 'Acabei de publicar um artigo sobre as melhores práticas para estruturar projetos React em 2025. Vale muito a pena dar uma conferida!',
      },
      {
        type: 'paragraph',
        text: 'Compartilhem com a galera que está começando agora. Vamos espalhar conhecimento! 🚀',
      },
      {
        type: 'link',
        text: 'blog.rocketseat.com.br/react-estrutura-projetos',
      },
    ],
    publishedAt: new Date('2025-05-18 09:15:00'),
  },
  {
    id: 4,
    author: {
      avatarUrl: 'https://github.com/rafaballerini.png',
      name: 'Rafaella Ballerini',
      role: 'Frontend Developer & Content Creator',
    },
    content: [
      {
        type: 'paragraph',
        text: 'Oi gente linda! 💖',
      },
      {
        type: 'paragraph',
        text: 'Hoje gravei um vídeo super especial sobre CSS Grid e Flexbox. Expliquei quando usar cada um e mostrei exemplos práticos.',
      },
      {
        type: 'paragraph',
        text: 'Para quem está com dúvidas sobre layout, esse vídeo vai ajudar muito! Já está no ar no meu canal 📺',
      },
      {
        type: 'link',
        text: 'youtube.com/rafaellaballerini',
      },
    ],
    publishedAt: new Date('2025-05-20 16:45:00'),
  },
  {
    id: 5,
    author: {
      avatarUrl: 'https://github.com/filipedeschamps.png',
      name: 'Filipe Deschamps',
      role: 'Software Engineer & YouTuber',
    },
    content: [
      {
        type: 'paragraph',
        text: 'Fala pessoal! 👨‍💻',
      },
      {
        type: 'paragraph',
        text: 'Acabei de lançar o curso completo de Node.js no meu canal. São mais de 8 horas de conteúdo gratuito, desde o básico até conceitos avançados.',
      },
      {
        type: 'paragraph',
        text: 'Quem quiser se aprofundar no backend, esse é o momento! 🎯',
      },
      {
        type: 'link',
        text: 'filipedeschamps.com.br',
      },
    ],
    publishedAt: new Date('2025-05-22 11:20:00'),
  },
  {
    id: 6,
    author: {
      avatarUrl: 'https://github.com/rocketseat.png',
      name: 'Rocketseat',
      role: 'Plataforma de Educação',
    },
    content: [
      {
        type: 'paragraph',
        text: '🚀 NOVIDADE NA ÁREA!',
      },
      {
        type: 'paragraph',
        text: 'Acabamos de abrir as inscrições para o NLW Expert! Dessa vez vamos construir uma aplicação completa com React Native e Node.js.',
      },
      {
        type: 'paragraph',
        text: 'Evento 100% gratuito e online. Não percam essa oportunidade de evoluir na programação! 💜',
      },
      {
        type: 'link',
        text: 'rocketseat.com.br/nlw',
      },
    ],
    publishedAt: new Date('2025-05-24 08:00:00'),
  },
]

export const App = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}
