export default function AuthLayout({ children }) {
  return (
<div className="bg-white dark:bg-gray-900">
  <div className="flex justify-center h-screen">
    <div className="hidden bg-cover lg:block lg:w-2/3" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)'}}>
      <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
        <div>
          <h2 className="text-4xl font-bold text-red-400">ONL <span className="text-white">Tools</span></h2>
          <p className="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
        </div>
      </div>
    </div>
    {children}
  </div>
</div>

  )
}