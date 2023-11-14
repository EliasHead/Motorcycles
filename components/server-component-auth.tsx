import { getCurrentUser } from '@/lib/session'

export default async function ServerComponentAuth() {
  const user = await getCurrentUser()

  return (
    <>
      {user !== undefined && (
        <div className="h-60 max-w-md gap-2 overflow-scroll border bg-slate-500 text-white">
          <h2>Server component</h2>
          {JSON.stringify(user)}
        </div>
      )}
    </>
  )
}
