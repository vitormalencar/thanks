import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'


export default function Header() {
  return (
    <header className="bg-white shadow-md py-8">
      <div className="container mx-auto px-4 flex items-center gap-8">
        <img
          src="https://github.com/vitormalencar.png"
          alt="Your Name"
          className="rounded-full w-32 h-32 object-cover border-4 border-primary"
        />
        <div>
          <h1 className="text-4xl font-bold mb-2">Thank You!</h1>
          <p className="text-xl text-gray-600 mb-4">
            It's been an amazing journey. Thank you all for your support and friendship.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-primary">
              <GitHubLogoIcon />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              <TwitterLogoIcon />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              <LinkedInLogoIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
