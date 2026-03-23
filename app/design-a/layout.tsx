import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '시안 A - 모던 미니멀 | 정안경제연구원',
  description: '밝고 깔끔한 현대적 디자인 시안',
}

export default function DesignALayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
