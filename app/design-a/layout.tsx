import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '시안 A - 원본 디자인 | 정안경제연구원',
  description: '원본 디자인 시안',
}

export default function DesignALayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
