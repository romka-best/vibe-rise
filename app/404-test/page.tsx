import { notFound } from "next/navigation"

export default function Page() {
  // Force-trigger the 404 for easy verification
  notFound()
}
