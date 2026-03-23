import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '시안 B - 클래식 권위 | 정안경제연구원',
  description: '고급스럽고 권위있는 전통적 디자인 시안',
}

export default function DesignBLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
