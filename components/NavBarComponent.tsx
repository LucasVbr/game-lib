import {Button, Navbar} from 'react-daisyui';
import {useRouter} from 'next/router';
import Image from 'next/image';

export default function NavBarComponent() {
  const router = useRouter()

  const buttons = [
    {name: "Accueil", url: "/"},
    {name: "Liste", url: "/game"},
    {name: "Contact", url: "/contact"},
  ];

  const getColor = (url: string) => {
    return (router.pathname === url)
        ? "primary"
        : "ghost"
  }

  return (
      <div className={"container mx-auto fixed z-10 top-0"}>
        <Navbar className='bg-base-200 rounded-b-2xl'>
          <Navbar.Start>
            <Button href={"/"} className="text-2xl normal-case mx-3" color={'ghost'}>GameLib</Button>
          </Navbar.Start>
          <Navbar.End>
            {buttons.map(button => (
                <Button key={button.name}
                        href={button.url}
                        className="text-xl normal-case mx-3"
                        color={getColor(button.url)}>
                  {button.name}
                </Button>
            ))}
          </Navbar.End>
        </Navbar>
      </div>
  );
}