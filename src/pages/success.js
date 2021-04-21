import { useRouter } from 'next/router';

export default function Success() {
  const router = useRouter();

  return `Check Your Email!: ${router.query.license}`;
}
