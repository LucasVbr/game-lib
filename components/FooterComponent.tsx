import { Footer } from "react-daisyui";
import Image from 'next/image';

export default function FooterComponent() {
  return (
      <Footer className="mt-36 p-10 bg-neutral text-neutral-content">
        <div>
          <Image className={"hidden dark:block"} width={250} height={"100%"} src={"/gamelib-dark.svg"}/>
          <Image className={"block dark:hidden"} width={250} height={"100%"} src={"/gamelib-light.svg"}/>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>

        <div>
          <Footer.Title>Services</Footer.Title>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <Footer.Title>Company</Footer.Title>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <Footer.Title>Legal</Footer.Title>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </Footer>
  );
}