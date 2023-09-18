import Link from 'next/link'
const Links = [{
    label: 'Notas',
    route: '/'
  },{
    label: 'CreateNote',
    route: '/CreateNote'
  }
    
]

export default function NavBar() {
    
  return (
    <nav>
            <ul>
              {Links.map(({label, route}) => (
                <li key={route}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
    </nav>
  )
}
