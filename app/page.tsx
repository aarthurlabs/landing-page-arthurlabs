import { siteConfig } from "@/config/site"

const HomePage = () => {
  return (
    <main>
      <h1>{siteConfig.name}</h1>
      <p>{siteConfig.slogan}</p>
    </main>
  )
}

export default HomePage
