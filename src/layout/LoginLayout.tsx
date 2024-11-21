import FooterComponent from "../components/footer/FooterComponent"
import HeaderComponent from "../components/header/HeaderComponent"

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent />
    </div>
  )
}

