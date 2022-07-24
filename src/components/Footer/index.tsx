export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='text-center py-5 text-gray-400 border-t border-gray-800'>
      <p>@{currentYear} Home Box Office, Inc. All rights reserved.</p>
      <p>the Game of Thrones logo are trademarks of Home Box, Inc. All other trademarks are the property of their respective owner.</p>
      <p>All images, characters and graphic assets are copyright of Home Box Office, Inc.</p>

      <p>Non commercial website project created by Eduardo Assunção @ {currentYear} Eduardo Assunção</p>
    </footer>
  )
}
