import { requireAuth } from "@/lib/auth-utils"

const page =async () => {
  await requireAuth();
  return (
    <div>
     protected server component 
    </div>
  )
}

export default page
