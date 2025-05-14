

const Navbar = () => {
  return (
    <>
        <div className="sticky  p-3 top-0 bg-black">
            <div className="mr-4">
                <div className="flex justify-end gap-10 space-x-1 rounded">
                    <button className="bg-black text-white">About</button>
                    <button className="bg-black text-white">Projects</button>
                    <button className="bg-black text-white">Contacts</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
