type UserType = 'employee' | 'employer';
type LoginType = 'kakao' | 'naver' | 'facebook' | 'apple';

interface User {
  id: number;
  email: string;
  loginType: LoginType;
  userType: UserType;
  name: string;
  company?: string; // 기관명
  phone?: string; // (2|3)-(3-4)-4
  address?: string;
}
